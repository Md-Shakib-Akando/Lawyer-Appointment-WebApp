import React from 'react';
import { AiOutlineTrademark } from "react-icons/ai";
import { Link } from 'react-router';

const LawyerData = ({ Data }) => {
    const { name, image, licenseNumber, speciality, experience, available } = Data
    return (
        <div className="card lg:card-side bg-base-100 p-6 shadow-sm">
            <figure className='h-64 w-[40%S] mx-auto md:mx-0 '>
                <img className='rounded-xl'
                    src={image}
                    alt="Album" />
            </figure>
            <div className="flex flex-col  justify-center gap-0 md:ml-12 mt-4 md:mt-0 md:w-[60%]">
                <div className='flex gap-6 items-center mb-5'>
                    <p className=' bg-[#09982F10] text-[#09982F] py-1 px-3 rounded-3xl'>{available}</p>
                    <p className=' bg-[#176AE510] text-[#176AE5] py-1 px-3 rounded-3xl'>{experience}</p>

                </div>
                <h2 className="text-2xl font-bold mb-3">{name}</h2>
                <p className='text-[#0F0F0F70] mb-1'>{speciality}</p>
                <p className='flex gap-2 items-center text-[#0F0F0F70] mb-4'><AiOutlineTrademark /> <span>License No: </span>
                    {licenseNumber}</p>


                <Link to='/LawyerDetails' className="relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#176AE5] transition duration-300 ease-out border-2 border-[#176AE530] rounded-full  group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#176AE5] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#176AE5] transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
                    <span className="relative invisible">Button Text</span>
                </Link>



            </div>

        </div>
    );
};

export default LawyerData;