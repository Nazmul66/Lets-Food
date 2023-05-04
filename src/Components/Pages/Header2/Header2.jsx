import React, { useState } from 'react';
import './Header2.css'
import logo from "../../../assets/logo.png"
import { NavLink } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Header2 = () => {
   const [toggle , setToggle] = useState(false);

    return (
        <header className='py-6 bg-[#FFF9EA] px-5 lg:px-0'>
        <div className='flex items-center justify-between max-w-[1140px] mx-auto'>
            <div className='flex items-center logo'>
               <h2>Let’sFood</h2>
               <img src={logo} alt="" className='mt-[-12px]' />
            </div>

            <div className={ toggle ? "MenuBars" : "MenuBars active" }>
               <nav>
                  <ul className='flex lg:flex-row flex-col items-center'>
                  <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'lg:text-cyan-500 text-white' :  "text-[#1e1e1ec4]"}>Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/login" className={({ isActive }) => isActive ? "lg:text-cyan-500 text-white" :  "text-[#1e1e1ec4]"}>Login</NavLink>
                  </li>
                  <li>
                     <NavLink to="/register" className={({ isActive }) => isActive ? "lg:text-cyan-500 text-white" :  "text-[#1e1e1ec4]"}>Register</NavLink>
                  </li>
                  </ul>
               </nav>
            </div>

            <div className='toggleIcon' onClick={() => setToggle(!toggle)}>
                  {
                     toggle ? <RxCross1 className='' /> : <RiMenu3Line />
                  } 
               </div>

        </div>
     </header>
    );
};

export default Header2;