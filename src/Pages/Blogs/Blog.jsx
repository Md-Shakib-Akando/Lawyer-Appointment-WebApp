import React from 'react';
import { LuCalendarHeart } from "react-icons/lu";

const Blog = ({ data }) => {
    const { question, answer, date } = data
    return (
        <>
            

            <div className="collapse collapse-plus bg-base-100 mb-5 md:mb-10 border border-base-300">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">
                    <h1 className='text-xl'>{question}</h1>
                    <div className='border border-gray-300 border-dashed mt-3'></div>
                </div>
                
                <div className="collapse-content text-sm">
                    
                        <p className='text-lg text-blue-500 font-bold'>Answer:</p>
                        <p className='text-sm md:text-lg '>{answer}</p>
                        <div className='border border-gray-300 border-dashed my-4'></div>
                    <p className='text-lg font-medium text-gray-500 flex items-center gap-1'><LuCalendarHeart />
                    <span>Added at {date}</span></p>
                </div>
            </div>

        </>
    );
};

export default Blog;