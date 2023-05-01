import React, { useEffect, useState } from 'react';
import "./Service_section.css"

const Service_section = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:4000/service")
        .then(res => res.json())
        .then(del => setData(del))
    }, [])
    console.log(data)
    return (
        <section className='lg:py-10'>
           <div className='max-w-[1140px] mx-auto'>
              <div className='service-content'>
                    <h5>How it works</h5>
                    <h3>What We Serve</h3>
                    <p>Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands.</p>
              </div>

              <div className='flex justify-between gap-4'>
                 {
                    data.map(services => <p key={services.id}>{services.img}</p>)
                 }
              </div>
           </div>
    </section>
    );
};

export default Service_section;