import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import useStore from '../services/store';

export const AuthRoute = () => {
    const username = useStore(({username})=>username);
    const roles = useStore(({roles})=>roles);

    return username && roles.length>1 ? <Outlet/> : <Navigate to='login'/>
};