import React from 'react';
import "./Chef_card.css"
import { AiOutlineLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Chef_card = ({ chef }) => {
    const { id, chefPictureUrl, chefName, Years_of_experience , Numbers_of_recipes, likes } = chef;
    return (
        <div className='px-5 py-8 card'>
                <div className='w-full h-[200px] overflow-hidden mb-5'>
                   <img src={chefPictureUrl} alt="" className='chef_img rounded-lg scale-[1] w-full hover:scale-[1.5] ease-in-out duration-300' />
                </div>
                <h2 className='font-bold text-[#495c0e] text-2xl mb-3'>{chefName}</h2>
                <h4 className='font-semibold text-[#0d0d0d] text-md mb-5'>Years of experience: {Years_of_experience} </h4>
                  <div className='flex justify-between items-center'>
                     <p className='font-semibold text-[#0d0d0d]'>Number of Recipes: {Numbers_of_recipes}</p>
                     <div className='flex justify-between items-center'>
                        <AiOutlineLike className='mr-2 text-xl ' /> 
                          <p className='font-medium'>{likes}</p> 
                     </div>
                  </div>
                  <div className='text-center mt-8'>
                      <Link to={`/chef/${id}`}><button className='bg-[#D54215] ease-in-out duration-300 hover:bg-[#e29f28] text-white font-semibold rounded-3xl px-10 py-2'>View Recipes</button></Link>  
                  </div>
        </div>
    );
};

export default Chef_card;<h2>hello</h2>