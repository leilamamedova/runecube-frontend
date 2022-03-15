import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <Outlet/> 
        </div>              
    )
}

export default MainLayout;