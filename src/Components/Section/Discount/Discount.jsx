import React from 'react';
import "./Discount.css"
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div className='discount-section'>
            <h1>Join our member and get discount up to 50%</h1>
            <Link to="/register"><button className='btn-register'>Sign Up</button></Link>
        </div>
    );
};

export default Discount;