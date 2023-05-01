import React from 'react';
import './Banner_section.css'
import bannerImg from '../../../assets/banner-img.png'

const Banner_section = () => {
    return (
        <section className='bg-[#FFF9EA] lg:py-5 p-7'>
            <div className='main-container flex flex-col lg:flex-row justify-between items-center lg:gap-8 max-w-[1140px] mx-auto'>
                <div className='banner-content lg:w-1/2 w-full'>
                    <h2>Be The Fastest In Delivery Your <span style={{ color: "#FFCB45" }}>Food</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet</p>
                    <button className='btn-start'>Get Started</button>
                </div>

                <div className='lg:w-1/2 w-full'>
                    <img src={bannerImg} alt="" className='w-3/4 block mx-auto' />
                </div>
            </div>
        </section>
    );
};

export default Banner_section;