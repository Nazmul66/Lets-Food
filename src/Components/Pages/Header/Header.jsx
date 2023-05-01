import React from 'react';
import './Header.css'
import logo from '../../../assets/logo.png'
import user from '../../../assets/index 1.png'
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";

const Header = () => {
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
                       <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
               </nav>

               <div className='flex items-center'>
                  <img src={user} alt="" className='mr-4 block' />
                  <Link to="/login" >
                    <button className='btn-login flex items-center'><BiLogIn className='w-[20px] h-[20px] mr-3' /> Login</button>
                  </Link>
               </div>

           </div>
        </header>
    );
};

export default Header;