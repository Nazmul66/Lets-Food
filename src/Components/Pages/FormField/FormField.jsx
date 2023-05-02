import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header2 from '../Header2/Header2';

const FormField = () => {
    return (
        <div>
            <Header2></Header2>
                <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default FormField;