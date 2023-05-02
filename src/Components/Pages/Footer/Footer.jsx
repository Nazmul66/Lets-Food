import React from 'react';
import './Footer.css'
import logo from "../../../assets/logo.png"
import { BsTwitter , BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='py-[100px] bg-[#FFF9EA] mt-20'>
            <div className='max-w-[1140px] mx-auto title'>
                <div className='flex lg:flex-row flex-col justify-between gap-5 '>
                    <div className='lg:w-1/4 w-full desc '>
                            <div className='flex items-center logo mb-6 justify-center lg:justify-normal'>
                                <h2 >Let’sFood</h2>
                                <img src={logo} alt="" className='mt-[-12px]' />
                            </div>
                            <p >Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi</p>
                            <ul className='flex justify-center lg:justify-normal mb-7 lg:mb-0'>
                                <li>
                                    <a href="#"><BsInstagram className='icon' /></a>
                                </li>
                                <li>
                                    <a href="#"><FaFacebookF className='icon' /></a>
                                </li>
                                <li>
                                    <a href="#"><BsTwitter className='icon' /></a>
                                </li>
                            </ul>
                    </div>

                    <div className='content-link lg:w-1/4 w-full text-center lg:text-left'>
                        <h4>Company</h4>
                        <ul className='flex'>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Career</a>
                                </li>
                                <li>
                                    <a href="#">How It Work</a>
                                </li>
                            </ul>
                    </div>

                    <div className='content-link lg:w-1/4 w-full text-center lg:text-left'>
                        <h4>Policy</h4>
                        <ul className='flex'>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Privacy</a>
                                </li>
                                <li>
                                    <a href="#">Shipping</a>
                                </li>
                            </ul>
                    </div>

                    <div className='content-link lg:w-1/4 w-full text-center lg:text-left'>
                        <h4>Get In Touch</h4>
                        <ul className='flex'>
                                <li>
                                    <a href="#">+62 896 7311 2766</a>
                                </li>
                                <li>
                                    <a href="#">food@example.com</a>
                                </li>
                            </ul>
                    </div>
               </div>
               <hr />
               <p className='credit'>© 2022 Let’sFood. ALL RIGHT RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;