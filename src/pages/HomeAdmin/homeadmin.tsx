import React from 'react';

function Homeadmin() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    return (
        <div className="welcome-container">
            <h1>Bienvenido {role}, {username}!</h1>
        </div>
    );
}

export default Homeadmin;