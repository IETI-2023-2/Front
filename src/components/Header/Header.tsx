import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#1d2c59',
        color: 'white',
        padding: '10px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', fontWeight: 'bold' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/Assets/Icono-notxt.png"
            style={{ height: '60px', paddingTop: '0px', maxWidth: '150px' }}
            alt="logo"
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              marginLeft: '10px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            AquaTrack
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <>
            <Button
              color="inherit"
              variant="outlined"
              sx={{
                textTransform: 'none',
                marginRight: '10px',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '16px',
                color: 'white',
                borderColor: 'white',
              }}
              onClick={() => {
                navigate('/');
              }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              sx={{
                textTransform: 'none',
                marginRight: '10px',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '16px',
                color: 'white',
                borderColor: 'white',
              }}
              onClick={() => {
                navigate('/');
              }}
            >
              Testimonios
            </Button>
            <Button
              color="inherit"
              startIcon={<AccountCircleIcon />}
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                borderRadius: '20px',
                backgroundColor: '#5bc0de',
                '&:hover': {
                  backgroundColor: '#31b0d5',
                },
              }}
              onClick={() => {
                navigate('/login');
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
