import React, { useContext, useRef, useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const navigate = useNavigate();
     const {userInfo, createUsers} = useContext(AuthContext)
     const [error, setError] = useState("");
    //  console.log(createUsers)

     const handleRegister = (event) =>{
        event.preventDefault();
         const name = event.target.name.value;
         const email = event.target.email.value;
         const pass = event.target.password.value;
         const photoUrl = event.target.photo_url.value;
         console.log(name, email, pass, photoUrl)
         setError('');

         if(email === "" || pass === "" || name === "" || photoUrl === ""){
            return setError("!!! Please fill up empty form box !!!");
         }
         else if(pass.length < 6){
            return setError("!!! AtLeast use 6 character password !!!");
         }
         else if(!/(?=.*?[A-Z])/.test(pass)){
             return setError("!!! AtLeast use one UpperCase !!!");
         }
         else if(!/(?=.*[0-9])/.test(pass)){
            return setError("!!! AtLeast use one number !!!");
        }
         else if(!/(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-])/.test(pass)){
            return setError("!!! AtLeast use one special character !!!");
        }

         createUsers(email, pass)
         .then(result =>{
            const users = result.user
            event.target.reset();
            console.log(users)
            updateProfiles(result.user, name, photoUrl)
            navigate("/login");
         })
         .catch(error =>{
            setError(error.message);
         })
     }

     const updateProfiles = (info, name, photoUrl) =>{
        updateProfile(info, {
            displayName: name,
            photoURL: photoUrl
        })
        .then(() =>{
            console.log("success")
         })
         .catch(error =>{
            setError(error.message);
         })
     }

    return (
        <div className='lg:py-20 py-10 lg:px-0 px-6 bg-[#fff9ea]'>
            <div className="main-container max-w-[500px] mx-auto">
              <div className="lg:p-11 p-5 border-[2px] rounded-lg border-[#0794c9] bg-white">
                    <form action="" onSubmit={handleRegister}>
                            <UserCircleIcon className='w-[160px] h-[160px] mx-auto text-[#0794c9] ' />
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Name</label>
                                <input type="text" name="name" placeholder='Enter Your FullName'  className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-semibold bg-[#f2f2f2] text-[#0794c9]' />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Email</label>
                                <input type="email" name="email" placeholder='Enter Your Email Adress'  className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-semibold bg-[#f2f2f2] text-[#0794c9]'  />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Password</label>
                                <input type="password" name="password" placeholder='Enter Your Password' className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-semibold bg-[#f2f2f2] text-[#0794c9]'   />
                            </div>
                            <div className='mb-10'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-2 block text-[#0794c9]'>Photo Url</label>
                                <input type="text" name="photo_url" placeholder='Enter Your Photo Url' className='block w-full outline-none border-[2px] border-[#0794c9] py-2 rounded-lg px-4 text-[16px] font-semibold bg-[#f2f2f2] text-[#0794c9]'   />
                            </div>
                            <div className='text-center mb-8'>
                                    <button className="rounded-md text-white font-semibold py-[12px] px-[40px] bg-[#2193b0]">Register</button>
                            </div>

                            <div className='mb-5'>
                                <p className='font-semibold text-[#0794c9] text-[16px] text-center'>If you have an account? please <Link to="/login" className='underline text-[#F99B7D]'>Login</Link></p>
                            </div>

                            <p className='text-[16px] text-red-500 font-bold text-center'>{error}</p>
                  </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;