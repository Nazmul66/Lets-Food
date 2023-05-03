import React from 'react';
import './Recipe_card.css'
import { FcLike } from 'react-icons/fc';

const Recipe_card = ({ data, recipe }) => {
    const { name, cooking_method, ingredients, img} = recipe;
    const { Ratings } = data;
    return (
    <div className='px-5 lg:mx-0 mx-5 py-8 card'>
        <div className='w-full h-[200px] overflow-hidden mb-5'>
           <img src={img} alt="" className='chef_img rounded-lg scale-[1] w-full hover:scale-[1.3] ease-in-out duration-300' />
        </div>
        <div className='flex justify-between items-center mb-8'>
             <div className='flex justify-between items-center'>
                <p className='font-semibold text-[#0d0d0d]'>{Ratings}</p>
             </div>
              <FcLike className='text-2xl block text-red-500' />
          </div>
        <h2 className='font-bold text-[#495c0e] text-2xl mb-3'>{name}</h2>
        <span className='text-[22px] text-[#919699] font-semibold mb-4 block underline underline-offset-4'>Ingredients :</span>
        <ul className='mb-8'>
            {
                ingredients.slice(0, 6).map(item => <li className='text-[16px] text-[#919699] font-semibold mb-4 block'>{item}</li>)
            }
        </ul>
        <span className='text-[22px] text-[#919699] font-semibold mb-3 block'>Cooking Method :</span>
        <h6 className='text-[16px] text-[#919699] font-semibold mb-4'>{cooking_method.slice(0, 200) + "........."} <span className='text-[#495c0e] font-semibold cursor-pointer'>Read More</span></h6>
    </div>
    );
};

export default Recipe_card;