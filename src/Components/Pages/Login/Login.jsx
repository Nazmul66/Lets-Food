import React, { useContext, useRef, useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const {userInfo , signInUser, googleSignIn, githubSignIn, passwordReset} = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();
    const [error, setError] = useState("");

    const handleLogin = (event) =>{
         event.preventDefault();
         const email = event.target.email.value;
         const pass = event.target.password.value;
         console.log(email, pass)

         signInUser(email, pass)
         .then((result) =>{
            const AllUser = result.user;
            console.log(AllUser);
            event.target.reset();
            navigate("/")
         })
         .catch(error =>{
            setError(error.message)
            setError("Invalid wrong Email or Password");
         })
     }

     const handleReset = (event) =>{
        const email = emailRef.current.value;

        if(!email){
           return alert("Provide your email address");
        }

        passwordReset(email)
        .then(() =>{
            console.log("reset success");
            alert("message has been send into your gmail account");
        })
        .catch(error =>{
            console.log(error.message)
        })
     }

     const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const google = result.user;
            console.log(google)
            navigate("/")
        })
        .catch(error =>{
            setError(error.message)
        })
     }

     const handleGithub = () =>{
        githubSignIn()
        .then(result =>{
            const github = result.user;
            console.log(github);
            navigate("/")
        })
        .catch(error =>{
            setError(error.message)
        })
     }

    return (
        <div className='lg:py-20 py-10 lg:px-0 px-6 login_form bg-[#fff9ea]'>
            <div className="main-container max-w-[500px] mx-auto">
               <div className="lg:p-11 p-5 border-[2px] rounded-lg border-[#0794c9] bg-white">
                    <form action="" onSubmit={ handleLogin }>
                            <UserCircleIcon className='w-[160px] h-[160px] mx-auto text-[#0794c9] ' />
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Email</label>
                                <input type="email" ref={emailRef} name="email" placeholder='Enter Your Email Adress' required className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-medium bg-[#f2f2f2] text-[#0794c9]'  />
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
                                <span className='text-[14px] font-semibold text-[#0794c9] underline cursor-pointer' onClick={ handleReset }>Forget Password</span>
                            </div>

                            <div className='text-center mb-5'>
                                  <button className="rounded-md text-white font-semibold py-[10px] px-[40px] bg-[#2193b0]">Login</button>
                          </div>
                    </form>
                          <div className='mb-5'>
                                <p className='font-semibold text-[#0794c9] text-[14px] text-center'>If you don't have any account? please <Link to="/register" className='underline text-[#F99B7D]'>Register</Link></p>
                            </div>

                          <hr className='border-[1px] rounded-2xl border-[#241f1f54] my-11' />
                        <div className='text-center'>
                            <button className='flex items-center justify-center bg-[#f44335] text-white w-full py-[8px] rounded-sm mb-5' onClick={ handleGoogle }><FaGoogle className='mr-3 text-[20px]' />Login With Google</button>

                            <button className='flex items-center justify-center bg-[#080505] text-white w-full py-[8px] rounded-sm' onClick={ handleGithub }><FaGithub className='mr-3 text-[20px]' /> Login With Github</button>
                        </div>

                        <p className='text-[16px] text-red-500 font-bold text-center mt-8'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;