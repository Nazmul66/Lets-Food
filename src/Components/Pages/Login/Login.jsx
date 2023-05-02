import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='lg:py-20 py-10 lg:px-0 px-6'>
            <div className="main-container max-w-[500px] mx-auto">
                <form action="">
                    <div className="lg:p-11 p-5 border-[2px] rounded-lg border-[#0794c9] formBox">
                            <UserCircleIcon className='w-[160px] h-[160px] mx-auto text-[#0794c9] ' />
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Email</label>
                                <input type="email" name="email" placeholder='Enter Your Email Adress' required className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-medium bg-[#f2f2f2] text-[#0794c9]'  />
                            </div>

                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Password</label>
                                <input type="password" name="password" placeholder='Enter Your Password' className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-medium bg-[#f2f2f2] text-[#0794c9]'  required />
                            </div>

                            <div className='mb-8 flex flex-col lg:flex-row lg:items-center items-start justify-between'>
                                <div className='flex items-center'>
                                    <input type="checkbox" name="password" placeholder='Enter Your Password' className='mr-2' required />
                                    <span className='font-semibold text-[#0794c9] text-[14px]'>Accept the terms and condition</span>
                                </div>
                                <Link to="" className='text-[14px] font-semibold text-[#0794c9] underline'>Forget Password</Link>
                            </div>

                            <div className='text-center mb-5'>
                               <Link to="">
                                  <button className="rounded-md text-white font-semibold py-[10px] px-[40px] bg-[#2193b0]">Login</button>
                               </Link>
                          </div>

                          <hr className='border-[1px] rounded-2xl border-[#241f1f54] my-11' />
                        <div className='text-center'>
                            <Link to=""><button className='flex items-center justify-center bg-[#f44335] text-white w-full py-[8px] rounded-sm mb-5'><FaGoogle className='mr-3 text-[20px]' />Login With Google</button></Link>
                            <Link to="" className='flex items-center justify-center bg-[#080505] text-white w-full py-[8px] rounded-sm'><FaGithub className='mr-3 text-[20px]' /> <button>Login With Github</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;