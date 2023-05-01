import React from 'react';
import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {
    const { error, status, statusText } = useRouteError()
    return (
      <section className='flex items-center h-screen p-16 error-bg'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <FaceFrownIcon className='w-40 h-40 text-[#FFAC4B]' />
          <div className='max-w-md text-center'>
            <h2 className='mb-5 font-extrabold text-9xl text-[#FFAC4B]'>
              {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl text-[#FFAC4B] mb-5'>
              {statusText}
            </p>
            <p className='text-2xl font-semibold md:text-3xl text-[#FFAC4B] mb-8'>
              {error?.message}
            </p>
            <Link to='/' className='btnz bg-blue-400 '>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;