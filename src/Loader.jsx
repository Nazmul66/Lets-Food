import React from 'react';
import { Audio } from  'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center items-center fixed top-0 left-0 right-0 w-full h-[100vh]'>
                     <Audio
                        height = "200"
                        width = "200"
                        radius = "9"
                        color = 'green'
                        ariaLabel = 'three-dots-loading'     
                        wrapperStyle
                        wrapperClass
                    />
            </div>
    );
};

export default Loader;