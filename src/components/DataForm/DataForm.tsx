import React, { useState } from 'react';
import './DataForm.css';

const username = localStorage.getItem('username') || '';

type FormData = {
    username: string;
    techAddress: string;
    counterNumber: string;
    internalCode?: number;
    currentReading?: number;
    previousReading?: number;
    consumption: number;
    month: string;
    year: string;
}

function DataForm() {
    const initialState: FormData = {
        username: username,
        techAddress: '',
        counterNumber: '',
        consumption: 0,
        month: '',
        year: ''
    };

    const [formData, setFormData] = useState<FormData>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'internalCode' || name === 'currentReading' || name === 'previousReading') {
            setFormData(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const consumptionValue = (formData.currentReading ?? 0) - (formData.previousReading ?? 0);
        const finalData = {
            ...formData,
            consumption: consumptionValue
        };

        console.log(JSON.stringify(finalData, null, 2));

        try {
            const response = await fetch('http://localhost:8080/api/readings/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Error al enviar los datos:', response.statusText);
            }
        } catch (error) {
            console.error('Hubo un error al enviar los datos:', error);
        }

        setFormData(initialState);
    }

    return (
        <div className="data-form-container">
            <form onSubmit={handleSubmit} className="data-form">
                <h2>Ingrese la información</h2>
                <input type="text" name="techAddress" value={formData.techAddress} onChange={handleChange} placeholder="Tech Address" required />
                <input type="text" name="counterNumber" value={formData.counterNumber} onChange={handleChange} placeholder="Counter Number" required />
                <input type="number" name="internalCode" value={formData.internalCode || ''} onChange={handleChange} placeholder="Internal Code" required />
                <input type="number" name="previousReading" value={formData.previousReading || ''} onChange={handleChange} placeholder="Previous Reading" required />
                <input type="number" name="currentReading" value={formData.currentReading || ''} onChange={handleChange} placeholder="Current Reading" required />
                <select name="month" value={formData.month} onChange={handleChange} required>
                    <option value="">Select a month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <select name="year" value={formData.year} onChange={handleChange} required>
                    <option value="">Select a year</option>
                    {Array.from(Array(11)).map((_, index) => {
                        const yearValue = 2023 + index;
                        return <option key={yearValue} value={yearValue}>{yearValue}</option>
                    })}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default DataForm;
