import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import {IconButton} from "@mui/material";
import {deleteReading} from "../../services/readings/deleteReading";
import {ThreeCircles} from "react-loader-spinner";


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

type ReadingsProps = {
    data: ReadingInfo[];
    lastButtonAction: string;
};

const Readings: React.FC<ReadingsProps> = ({ data, lastButtonAction  }) => {

    const [fullInfo, setFullInfo] = useState<ReadingInfo | null>(null);
    const [localData, setLocalData] = useState<ReadingInfo[]>(data);
    const [isLoading, setIsLoading] = useState(false);


    const handleFullInfoClick = (info: ReadingInfo) => {
        setFullInfo(info);
    };

    const handleBackToTable = () => {
        setFullInfo(null);
    };

    const handleDeleteAction = async (id: string) => {
        setIsLoading(true);
        await deleteReading(id);
        setLocalData(prevData => prevData.filter(item => item.id !== id));
        setIsLoading(false);
    };

    const handleUpdateAction = (id: string) => {

    };

    return (
        <div>
            {isLoading ? (
                <ThreeCircles
                    height="100"
                    width="100"
                    color="#4fa94d"
                    visible={true}
                />
            ) : (
                fullInfo ? (
                    <div>
                        <IconButton onClick={handleBackToTable} style={{color: '#1d2c59', width: '5%'}} >
                            <ArrowBackIcon fontSize="large"/>
                        </IconButton>
                        <h2 style={{ color: '#1d2c59' }}>Información Completa de la Lectura</h2>
                        <div
                            style={{
                                borderRadius: '10px',
                                padding: '20px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                                width: '50%',
                                display: 'inline-block',
                            }}
                        >
                            <table
                                style={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    textAlign: 'center',
                                }}
                            >
                                <tbody>
                                {Object.entries(fullInfo).map(([key, value], index) => (
                                    <tr
                                        key={key}
                                        style={{
                                            backgroundColor: index % 2 === 0 ? '#c5e0f3' : 'white',
                                        }}
                                    >
                                        <td style={{ fontWeight: 'bold', paddingRight: '10px' }}>{key}:</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div>
                        {data.length > 0 && (
                            <Paper style={{ overflowX: 'auto' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell colSpan={4} style={{ background: '#1d2c59', textAlign: 'center', fontSize: '27px', color: 'white' }}>
                                                Planillas
                                            </TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold'}}>ID</TableCell>
                                            <TableCell style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold'}}>Funcionario</TableCell>
                                            <TableCell style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold'}}>Dirección</TableCell>
                                            <TableCell style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold'}}>Acciones</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {localData.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell style={{textAlign: 'center'}}>{item.id}</TableCell>
                                                <TableCell style={{textAlign: 'center'}}>{item.username}</TableCell>
                                                <TableCell style={{textAlign: 'center'}}>{item.techAddress}</TableCell>
                                                <TableCell style={{textAlign: 'center'}}>
                                                    {lastButtonAction === 'consultar' ? (
                                                        <IconButton onClick={() => handleFullInfoClick(item)} style={{ color: '#1d2c59', width: '40%' }}>
                                                            <SearchIcon fontSize="large" />
                                                        </IconButton>
                                                    ) : lastButtonAction === 'eliminar' ? (
                                                        <IconButton onClick={() => handleDeleteAction(item.id)} style={{ color: '#1d2c59', width: '40%' }}>
                                                            <DeleteIcon fontSize="large" />
                                                        </IconButton>
                                                    ) : lastButtonAction === 'actualizar' ? (
                                                        <IconButton onClick={() => handleUpdateAction(item.id)} style={{ color: '#1d2c59', width: '40%' }}>
                                                            <UpdateIcon fontSize="large" />
                                                        </IconButton>
                                                    ) : null}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        )}
                    </div>
                )
            )}
        </div>
    );
};

export default Readings;
