import React from 'react';
import './Service.css'

const Service = ({ services }) => {
    const {img, title_name, desc} = services;
    return (
        <div className='service-info lg:w-1/3 w-full'>
            <img src={img} alt="" className='mb-6 block mx-auto' />
            <h4>{title_name}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default Service;