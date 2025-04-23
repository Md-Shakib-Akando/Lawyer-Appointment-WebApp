import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link, useParams } from 'react-router';


const Error = () => {

    const {id}=useParams();


    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-screen-2xl  mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                <div className='flex flex-col justify-center items-center min-h-[calc(100vh-104px)] '>
                    <h1 className='text-2xl md:text-3xl font-bold text-center'>No Lawyer Found!!!</h1>
                    <p className='text-center mt-7 text-lg md:text-xl text-gray-500'>No Lawyer Found with this Id No- <span>{id}</span></p>
                    
                    
                    

                    <div className='mt-10'>
                    <Link to='/'
                       
                       className="flex items-center cursor-pointer justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#0EA106] border-2 border-transparent rounded shadow-sm hover:bg-transparent hover:text-[#0EA106] hover:border-[#0EA106] focus:outline-none">
                       View All Lawyer
                   </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;