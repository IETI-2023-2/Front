import { Login } from "../pages/Login";
import { Homeuser } from "../pages/HomeUser";
import { ROUTES } from "./constants";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import React from "react";
import {Homeadmin} from "../pages/HomeAdmin";
import AdminRouter from "./AdminRouter";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <PublicRouter />,
        children: [
            { index: true, element: "/" },
            { path: `${ROUTES.LOGIN}`, element: <Login /> },
            { path: `${ROUTES.HOME_USER}`, element: <Homeuser /> },
        ],
    },

    {
        path: ROUTES.HOME,
        element: <AdminRouter />,
        children: [
            { index: true, element: "/" },
            { path: `${ROUTES.LOGIN}`, element: <Login /> },
            { path: `${ROUTES.HOME_ADMIN}`, element: <Homeadmin /> },
        ],
    }
]

export const router = createBrowserRouter(routes);