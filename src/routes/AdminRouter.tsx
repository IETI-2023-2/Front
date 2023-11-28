
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from "../components/Header";

const AdminRouter = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AdminRouter;
