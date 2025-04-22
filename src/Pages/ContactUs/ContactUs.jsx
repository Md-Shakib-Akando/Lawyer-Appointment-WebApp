import React from 'react';
import Img from '../../assets/404.jpg'
import { Link } from 'react-router';
const ContactUs = () => {
    return (
        <>
            
            <div className=' flex justify-center items-center  '>
                <img className='shadow-xl mt-20 rounded-xl ' src={Img} alt="Page not found" />
            </div>

            <div className='flex flex-col justify-center items-center mt-16'>
                <h1 className='text-2xl md:text-4xl font-bold text-red-400 text-center'>404-Page Not Found</h1>
                <p className='text-lg md:text-xl text-center mt-5'>Oops! The page you're looking for doesn't exist.</p>
                <div className='mt-10'>
                    <Link to='/'
                       
                       className="flex items-center cursor-pointer justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#0EA106] border-2 border-transparent rounded shadow-sm hover:bg-transparent hover:text-[#0EA106] hover:border-[#0EA106] focus:outline-none">
                       View All Lawyer
                   </Link>
                    </div>
            </div>
            
        </>
    );
};

export default ContactUs;