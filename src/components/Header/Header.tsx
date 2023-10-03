import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import {Link, useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material";

const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "White",
                color: "Black",
                paddingLeft: "20px",
                paddingRight: "20px",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between", fontWeight: "bold" }}>
                <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                    <Link to="/">
                        <Typography
                            variant="h5"
                            fontFamily="Roboto"
                            component={Link}
                            to="/"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Proyecto IETI
                        </Typography>
                    </Link>
                </div>
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
                            sx={{ textTransform: "none" }}
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Boton 3
                        </Button>
                        <Button
                            color="inherit"
                            sx={{ textTransform: "none" }}
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Boton 4
                        </Button>
                    </>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
