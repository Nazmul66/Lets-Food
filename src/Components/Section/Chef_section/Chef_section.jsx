import React, { useEffect, useState } from 'react';
import './Chef_section.css'
import Chef_card from './Chef_card/Chef_card';

const Chef_section = () => {
    const [dataLoad, setDataLoad] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:4000/cheff")
        .then(res => res.json())
        .then(data => setDataLoad(data))
    },[])
    return (
            <section className='lg:py-10 lg:px-0 px-7 py-10'>
               <div className='max-w-[1040px] mx-auto'>
                 <div className='service-content'>
                    <h5>Our Cheff</h5>
                    <h3>Our Popular Cheff</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                 </div>

             <div className='grid lg:grid-cols-3 grid-cols-1 justify-between gap-5'>
                 {
                    dataLoad.map(chef => <Chef_card
                        key={chef.id}
                        chef={chef}
                        ></Chef_card>)
                 }
              </div>
           </div>
        </section>
    );
};

export default Chef_section;