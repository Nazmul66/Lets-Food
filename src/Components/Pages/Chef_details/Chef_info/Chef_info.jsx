import React from 'react';
import './Chef_info.css'
import { useLoaderData } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import Recipe_card from '../Recipe_card/Recipe_card';

const Chef_info = () => {
    const data = useLoaderData();
    const { chefPictureUrl, chefName, description, likes, Numbers_of_recipes, Years_of_experience, recipes} = data;
    
    return (
        <div className='lg:pt-40 lg:pb-20 pb-20'>
            <h2 className='text-center lg:text-[40px] text-[32px] text-[#495c0e] font-bold mb-20 underline underline-[4px]'>Chef's Information Details</h2>
            <div className='chef-container lg:px-0 px-5'>
                <div className='w-full border-[1px] border-[#919699] lg:px-8 px-5 py-10 rounded-lg'>
                    <div className='w-full lg:h-[480px] h-[250px]'>
                        <img src={chefPictureUrl} alt="" className='img_size' />
                    </div>
                    <h1>{chefName}</h1>
                    <h3>Years of experience: {Years_of_experience}</h3>
                    <span className='text-[28px] text-[#919699] mb-3 block underline underline-offset-4'>Description :</span>
                    <p>{description}</p>
                    <div className='flex items-center justify-between mt-16'>
                        <div className='flex items-center justify-center'>
                            <h5 className='font-semibold lg:text-2xl text-lg text-[#919699]'>Numbers of recipes: {Numbers_of_recipes}</h5>
                        </div>
                        <div className='flex items-center justify-center'>
                            <AiOutlineLike className="lg:text-3xl text-lg text-[#919699] mr-3" />
                            <span className='font-semibold lg:text-2xl text-lg text-[#919699]'>{likes}</span>
                        </div>
                    </div>
                </div>
            </div>

             <div className='max-w-[1140px] mx-auto pt-20'>
                <h2 className='text-center lg:text-left lg:text-[36px] text-[32px] text-[#495c0e] font-bold mb-10'>Chef's Recipe are given below :</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 justify-between gap-5 '>
                        {
                        recipes.map(recipe => <Recipe_card
                            key={recipe.name}
                            recipe={recipe}
                            data={data}
                            ></Recipe_card>)
                        }
                </div>
             </div>
      </div>
    );
};

export default Chef_info;