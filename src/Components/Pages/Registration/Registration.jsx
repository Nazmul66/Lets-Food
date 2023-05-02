import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='lg:py-20 py-10 lg:px-0 px-6'>
            <div className="main-container max-w-[500px] mx-auto">
                <form action="">
                    <div className="lg:p-11 p-5 border-[2px] rounded-lg border-[#0794c9] formBox">
                            <UserCircleIcon className='w-[160px] h-[160px] mx-auto text-[#0794c9] ' />
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Name</label>
                                <input type="text" name="name" placeholder='Enter Your FullName' required className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-semibold bg-[#f2f2f2] text-[#0794c9]' />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Email</label>
                                <input type="email" name="email" placeholder='Enter Your Email Adress' required className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-semibold bg-[#f2f2f2] text-[#0794c9]'  />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Password</label>
                                <input type="password" name="password" placeholder='Enter Your Password' className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-semibold bg-[#f2f2f2] text-[#0794c9]'  required />
                            </div>
                            <div className='mb-10'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Photo Url</label>
                                <input type="text" name="photo_url" placeholder='Enter Your Photo Url' className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-semibold bg-[#f2f2f2] text-[#0794c9]'  required />
                            </div>
                            <div className='text-center'>
                               <Link to="/login">
                                  <button className="rounded-md text-white font-semibold py-[12px] px-[40px] bg-[#2193b0]">Register</button>
                               </Link>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;