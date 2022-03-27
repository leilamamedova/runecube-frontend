import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
    const username = localStorage.getItem('username')

    return username.length>0 ? <Outlet/> : <Navigate to='username'/>
};