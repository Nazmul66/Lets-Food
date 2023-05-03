import React from 'react';
import './Chef_details.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Chef_details = () => {
    return (
        <div>
            <Header></Header>
               <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Chef_details;