import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from "../components/Header";

const PublicRouter = () => {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    );
};

export default PublicRouter;