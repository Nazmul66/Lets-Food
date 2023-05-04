import React from 'react';
import './Banner_section.css'
import bannerImg from '../../../assets/banner-img.png'

const Banner_section = () => {
    return (
        <section className='bg-[#FFF9EA] lg:py-5 p-7'>
            <div className='main-container flex flex-col lg:flex-row justify-between items-center lg:gap-8 max-w-[1140px] mx-auto'>
                <div className='banner-content lg:w-1/2 w-full'>
                    <h2>The  best tasty italian <span style={{ color: "#FFCB45" }}>Food </span>you ever taste.</h2>
                    <p>Easily add-in a short description about your recipe! This can be of any length. Remember, you are trying to sell your recipe!</p>
                    <button className='btn-start'>Get Started</button>
                </div>

                <div className='lg:w-1/2 w-full'>
                    <img src={bannerImg} alt="" className='w-[90%] lg:w-full block mx-auto ' />
                </div>
            </div>
        </section>
    );
};

export default Banner_section;