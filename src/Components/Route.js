import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const RoutePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default RoutePage;