import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#1d2c59",
                color: "White",
                padding: "10px",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between", fontWeight: "bold" }}>
                <Link to="/">
                    <img
                        src="/Assets/Icono-notxt.png"
                        style={{height: "60px", paddingTop: "0px"}}
                        alt="logo"/>
                </Link>
                <div style={{display: "flex", alignItems: "center" }}>
                    <>
                        <Button
                            color="inherit"
                            sx={{ textTransform: "none" }}
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Boton 1
                        </Button>
                        <Button
                            color="inherit"
                            sx={{ textTransform: "none" }}
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Boton 2
                        </Button>
                        <Button
                            color="inherit"
                            startIcon={<AccountCircleIcon/>}
                            sx={{ textTransform: "none" }}
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Ingresar
                        </Button>
                    </>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
