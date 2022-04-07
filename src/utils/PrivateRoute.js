import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import useStore from '../services/store';

export const AuthRoute = () => {
    const username = useStore(({username})=>username);

    return username ? <Outlet/> : <Navigate to='username'/>
};

export const RoleRoute = () => {
    const roles = useStore(({roles})=>roles);

    return roles.length>1 ? <Outlet/> : <Navigate to='roles'/>
};