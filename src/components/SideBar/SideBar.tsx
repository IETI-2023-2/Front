import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./SideBar.css"
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Readings} from "../Readings";
import {getReadings} from "../../services/readings/getReadings";
import DataForm from "../DataForm/DataForm";
import {ThreeCircles} from "react-loader-spinner";


interface SidebarProps {
    buttonsCount: number;
}

type ReadingInfo = {
    id: string;
    username: string;
    techAddress: string;
    previousReading: number;
    currentReading: number;
    internalCode: number;
    consumption: number;
    counterNumber: string;
    month: string;
    year: number;
};

const Sidebar: React.FC<SidebarProps> = ({ buttonsCount  }) => {

    const [data, setData] = useState<ReadingInfo[]>([]);
    const [loading, setLoading] = useState(false);
    const handleConsultClick = async () => {
        setLoading(true);
        try {
            const response = await getReadings();
            setData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const username = localStorage.getItem('username');
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    let buttons = null;
    let content = null;

    if (buttonsCount === 2) {
        buttons = (
            <>
                <Button
                    variant={selectedOption === 'registrar' ? 'contained' : 'outlined'}
                    onClick={() => handleOptionClick('registrar')}
                    sx={{
                        backgroundColor: selectedOption === 'registrar' ? '#1d2c59' : 'transparent',
                        color: selectedOption === 'registrar' ? '#fff' : '#000',
                        marginTop:"15px", fontSize: "20px", width: "70%",
                        '&:hover': {
                            backgroundColor: '#1d2c59',
                            color: '#fff',
                        },
                    }}
                >
                    Registrar
                </Button>
                <Button
                    variant={selectedOption === 'consultar' ? 'contained' : 'outlined'}
                    onClick={() => {
                        handleOptionClick('consultar');
                        handleConsultClick();
                    }}
                    sx={{
                        backgroundColor: selectedOption === 'consultar' ? '#1d2c59' : 'transparent',
                        color: selectedOption === 'consultar' ? '#fff' : '#000',
                        marginTop:"15px", fontSize: "20px", width: "70%",
                        '&:hover': {
                            backgroundColor: '#1d2c59',
                            color: '#fff',
                        },
                    }}
                >
                    Consultar
                </Button>
            </>
        );

        content = (
            <div className="content-right" style={{ flex: 1, backgroundColor: '#f5f5f5', padding: '69px', position: 'relative' }}>
                {loading ? (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <ThreeCircles
                            height="100"
                            width="100"
                            color="#1d2c59"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                        />
                    </div>

                ) : (
                    <>
                        {selectedOption === 'registrar' && <DataForm/>}
                        {selectedOption === 'consultar' && <Readings data={data} lastButtonAction='consultar' />}
                    </>
                )}
            </div>
        );
    } else if (buttonsCount === 3) {
        buttons = (
            <>
                <Button
                    variant={selectedOption === 'consultar' ? 'contained' : 'outlined'}
                    onClick={() => {
                        handleOptionClick('consultar');
                        handleConsultClick();
                    }}
                    sx={{
                        backgroundColor: selectedOption === 'consultar' ? '#1d2c59' : 'transparent',
                        color: selectedOption === 'consultar' ? '#fff' : '#000',
                        marginTop:"15px", fontSize: "20px", width: "70%",
                        '&:hover': {
                            backgroundColor: '#1d2c59',
                            color: '#fff',
                        },
                    }}
                >
                    Consultar
                </Button>
                <Button
                    variant='outlined'
                    onClick={() => handleOptionClick('modificar')}
                    sx={{
                        backgroundColor: selectedOption === 'modificar' ? '#1d2c59' : 'transparent',
                        color: selectedOption === 'modificar' ? '#fff' : '#000',
                        marginTop:"15px", fontSize: "20px", width: "70%",
                        '&:hover': {
                            backgroundColor: '#1d2c59',
                            color: '#fff',
                        },
                    }}
                >
                    Modificar
                </Button>
                <Button
                    variant={selectedOption === 'eliminar' ? 'contained' : 'outlined'}
                    onClick={() => handleOptionClick('eliminar')}
                    sx={{
                        backgroundColor: selectedOption === 'eliminar' ? '#1d2c59' : 'transparent',
                        color: selectedOption === 'eliminar' ? '#fff' : '#000',
                        marginTop:"15px", fontSize: "20px", width: "70%",
                        '&:hover': {
                            backgroundColor: '#1d2c59',
                            color: '#fff',
                        },
                    }}
                >
                    Eliminar
                </Button>
            </>
        );

        content = (
            <div className="content-right" style={{ flex: 1, backgroundColor: '#f5f5f5', padding: '70px', position: 'relative' }}>
                {loading ? (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <ThreeCircles
                            height="100"
                            width="100"
                            color="#1d2c59"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                        />
                    </div>

                ) : (
                    <>
                        {selectedOption === 'consultar' && <Readings data={data} lastButtonAction='consultar' />}
                        {selectedOption === 'modificar' && <Readings data={data} lastButtonAction='actualizar' />}
                        {selectedOption === 'eliminar' && <Readings data={data} lastButtonAction='eliminar' />}
                    </>
                )}
            </div>
        );
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div className="sidebar-container">
                    <div className="sidebar">
                        <img src="/Assets/Icono.png" alt="Logo" style={{maxWidth: "80%", maxHeight: "15%", marginBottom: '60px', marginTop: '-45px' }}/>
                        <h3>Bienvenido, {username}</h3>
                        <Button variant="text" style={{ marginBottom: '60px', fontSize:"20px", width: '70%', color: 'Black' }} startIcon={<AccountCircleIcon style={{ fontSize: "25px" }} />}>Perfil</Button>
                        {buttons}
                    </div>
                </div>
                {content}
            </div>
        </>
    );
};

Sidebar.propTypes = {
    buttonsCount: PropTypes.number.isRequired,
};

export default Sidebar;
