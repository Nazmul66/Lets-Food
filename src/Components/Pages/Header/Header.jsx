import React, { useContext, useState } from 'react';
import './Header.css'
import logo from '../../../assets/logo.png'
import user from '../../../assets/index 1.png'
import { Link, NavLink } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
   const { userInfo , userOut } = useContext(AuthContext);
   const [toggle , setToggle] = useState(false);

   const handleLogOut = () =>{
      userOut()
      .then(() =>{
         console.log("sign out perfectly");
      })
      .catch(error =>{
         console.log(error.message);
      })
   }
    return (
        <header className='py-6 bg-[#FFF9EA] px-5 lg:px-0'>
           <div className='flex items-center justify-between max-w-[1140px] mx-auto'>
               <div className='flex items-center logo w-[20%]'>
                  <h2>Let’sFood</h2>
                  <img src={logo} alt="" className='mt-[-12px]' />
               </div>

               <div className={ toggle ? "MenuBar" : "MenuBar active" }>
                  <nav>
                     <ul className='lg:flex block items-center'>
                        <li>
                           <NavLink to="/" className={({ isActive }) => isActive ? "lg:text-cyan-500 text-white" :  "text-[#1e1e1ec4]"} >Home</NavLink>
                        </li>
                        <li>
                           <NavLink to="/blog" className={({ isActive }) => isActive ? "lg:text-cyan-500 text-white" :"text-[#1e1e1ec4]"}>Blog</NavLink>
                        </li>
                     </ul>
                  </nav>

                     <div className='flex lg:flex-row flex-col items-center'>
                        {
                           userInfo  ?  <><img title={userInfo.displayName} src={userInfo.photoURL} alt="" className='img_nav mr-4 block w-16 rounded-full cursor-pointer' /></> :  <><img src={user} alt="" className='img_nav mr-4 block' /></>
                        }
                        {
                           userInfo ?  <button className='btn-login flex items-center' onClick={ handleLogOut }><BiLogIn className='w-[20px] h-[20px] mr-3' /> LogOut</button>  :  <><Link to="/login" ><button className='btn-login flex items-center'><BiLogIn className='w-[20px] h-[20px] mr-3' />Login</button> </Link></>
                        } 
                     </div>
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

export default Header;