import React, { useState } from 'react';
import './Recipe_card.css'
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe_card = ({ data, recipe }) => {
    const [toaster, setToaster] = useState(false);
    const { name, cooking_method, ingredients, img} = recipe;
    const { Ratings } = data;

    if(toaster === true){
        console.log("here")
        toast('add your favorite button!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
    <div className='px-5 lg:mx-0 mx-5 py-8 card'>
        <div className='w-full h-[200px] overflow-hidden mb-6'>
           <img src={img} alt="" className='chef_img rounded-lg scale-[1] w-full hover:scale-[1.3] ease-in-out duration-300' />
        </div>
        <div className='flex justify-between items-center mb-8'>
             <div className='flex justify-between items-center'>
                <Rating
                    placeholderRating={Ratings}
                    emptySymbol={<AiOutlineStar className='text-[#FFCB45] text-xl' />}
                    placeholderSymbol={<AiFillStar className='text-[#FFCB45] text-xl' />}
                    readonly
                    fullSymbol={<AiFillStar />}
                />
                <p className='font-bold text-[#495c0e] ml-2 text-xl mt-[-8px]'>{Ratings} Star</p>
             </div>

           {
              toaster ? <><FaRegHeart className="text-2xl block text-blue-500 cursor-pointer" onClick={() => setToaster(!true)}></FaRegHeart></> :
              <><FaRegHeart className='text-2xl block text-red-500 cursor-pointer' onClick={() => setToaster(!false)}></FaRegHeart></>
           } 
  
          </div>
        <h2 className='font-bold text-[#495c0e] text-2xl mb-3'>{name}</h2>
        <span className='text-[22px] text-[#919699] font-semibold mb-4 block underline underline-offset-4'>Ingredients :</span>
        <ul className='mb-8'>
            {
                ingredients.slice(0, 6).map((item, index) => <li className='text-[16px] text-[#919699] font-semibold mb-4 block' key={index}>{item}</li>)
            }
        </ul>
        <span className='text-[22px] text-[#919699] font-semibold mb-3 block'>Cooking Method :</span>
        <h6 className='text-[16px] text-[#919699] font-semibold mb-4'>{cooking_method.slice(0, 200) + "........."} <span className='text-[#495c0e] font-semibold cursor-pointer'>Read More</span></h6>
        <ToastContainer />
    </div>

    
    );
};

export default Recipe_card;