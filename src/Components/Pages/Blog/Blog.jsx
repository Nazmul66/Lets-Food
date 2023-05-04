import React from 'react';
import './Blog.css'
import { FiDownload } from 'react-icons/fi';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className='blog'>
            <div className='flex lg:flex-row flex-col justify-between items-center mb-10 max-w-[650px] mx-auto'>
                  <h1 className='text-5xl font-semibold text-[#786fa6] lg:mb-0 mb-9 underline-offset-2 underline italic' >Blog Page</h1>
                  <div className='flex justify-center items-center btn-download lg:mt-3 mt-0'>
                     <FiDownload />
                     <Pdf targetRef={ref} filename="Blog Page Content.pdf">
                        {({ toPdf }) => <button className='ml-2 font-bold' onClick={toPdf}> Download</button>}
                        </Pdf>
                  </div>
               </div>

           <div ref={ref} className="containers">
               <div className="head-title">
                  <h1>1) Tell us the differences between uncontrolled and controlled components. ?</h1> 
                  <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely are on props passed data down to the parent component. Uncontrolled components refer to contain their own state component.</p>
               </div>

               <div className="head-title">
                  <h1>2) How to validate React props using PropTypes ? </h1> 
                  <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use react props, to send one component to other component.Since parent components can pass down any data as props to child components, we need to validate the data type to ensure the child gets what it expects.</p>
               </div>

               <div className="head-title">
                  <h1>3) Tell us the difference between nodejs and express js. ? </h1> 
                  <p>Node js is the package, which provides you run time environment, where is express js is the framework of node js that can help us to handle reach request and response modules.</p>
               </div>

               <div className="head-title">
                  <h1>4) What is a custom hook, and why will you create a custom hook ? </h1> 
                  <p>We can use custom hook because it can easily reduce our time and reduce our coding type. Custom Hook can provide use to reused the hook to used another component, and code can not retype it.</p>
               </div>

           </div>
        </div>
    );
};

export default Blog;