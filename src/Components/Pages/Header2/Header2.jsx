import React from 'react';
import './Header2.css'
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
        <header className='py-6 bg-[#FFF9EA]'>
        <div className='flex items-center justify-between max-w-[1140px] mx-auto'>
            <div className='flex items-center logo'>
               <h2>Let’sFood</h2>
               <img src={logo} alt="" className='mt-[-12px]' />
            </div>

            <nav>
               <ul className='flex items-center'>
                 <li>
                     <Link to="/">Home</Link>
                 </li>
                 <li>
                    <Link to="/login">Login</Link>
                 </li>
                 <li>
                    <Link to="/register">Register</Link>
                 </li>
               </ul>
            </nav>

        </div>
     </header>
    );
};

export default Header2;