import React from 'react';
import Header from '../Pages/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Main;