import React from 'react';
import Banner_section from '../../Section/Banner_section/Banner_section';
import Service_section from '../../Section/Service_section/Service_section';
import Discount from '../../Section/Discount/Discount';
import Chef_section from '../../Section/Chef_section/Chef_section';

const Home = () => {

    return (
        <div>
            <Banner_section></Banner_section>
            <Service_section></Service_section>
            <Chef_section></Chef_section>
            <Discount></Discount>
        </div>
    );
};

export default Home;