import React, { useEffect, useState } from 'react';
import "./Service_section.css"
import Service from './service/service';

const Service_section = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:4000/service")
        .then(res => res.json())
        .then(del => setData(del))
    }, [])
    // console.log(data)
    return (
        <section className='lg:py-10 lg:px-0 px-7 py-10'>
           <div className='max-w-[1040px] mx-auto'>
              <div className='service-content'>
                    <h5>How it works</h5>
                    <h3>What We Serve</h3>
                    <p>Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands.</p>
              </div>

              <div className='flex lg:flex-row flex-col justify-between gap-4'>
                 {
                    data.map(services => <Service 
                     key={services.id}
                     services={services} 
                     ></Service>)
                 }
              </div>
           </div>
     </section>
    );
};

export default Service_section;