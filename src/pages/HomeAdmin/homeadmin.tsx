import React from 'react';
import Sidebar from "../../components/SideBar/SideBar";

function Homeadmin() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    return (
        <>
           <Sidebar buttonsCount={3} />
        </>
    );
}

export default Homeadmin;