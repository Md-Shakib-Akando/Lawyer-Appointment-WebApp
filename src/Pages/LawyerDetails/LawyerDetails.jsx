import React, { useEffect } from 'react';
import {  useLoaderData, useNavigate, useParams } from 'react-router';
import { AiOutlineTrademark } from "react-icons/ai";
import { FiAlertOctagon } from "react-icons/fi";
import { BookMark } from '../../utilites';



const LawyerDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();

    const singleData = id && (id == id * 1)
    ? data.find((data) => data.id == id) 
    : null;

    useEffect(() => {
        if (!singleData) {
           
            navigate(`/Error/${id}`, { replace: true });
        }
    }, [singleData, navigate,id]);
    
    if(!singleData) return null;

    const { name, image, licenseNumber, speciality, experience, fee, available } = singleData;
    
    const handleBookMark=()=>{
        const booked =BookMark(singleData);
        if(booked){
            navigate('/Bookings')
        }
       
    }

    return (
        <>

            <div className='bg-[#0F0F0F05] my-5 md:my-10 p-10 md:p-20 border border-[#0F0F0F20] rounded-xl flex flex-col justify-center items-center'>
                <h1 className='text-2xl md:text-4xl font-bold text-center'>Lawyer’s Profile Details</h1>
                <p className='text-sm md:text-lg text-[#0F0F0F90]  mt-3 text-center'>Our lawyers bring years of expertise and dedication to every case. With a commitment to integrity, professionalism, and client success, each profile highlights their <br className='hidden md:flex' /> unique strengths, qualifications. Whether you're seeking legal guidance or representation.</p>
            </div>



            <div className="card lg:card-side bg-base-100 p-6 border border-[#0F0F0F20]">
                <figure className='h-fit w-full md:w-[35%] mx-auto md:mx-0 '>
                    <img className='rounded-xl'
                        src={image}
                        alt="Album" />
                </figure>
                <div className="flex flex-col  justify-center gap-0 md:ml-12 mt-4 md:mt-0 md:w-[60%]">


                    <p className=' bg-[#176AE510] text-[#176AE5] md:text-xl py-1 mb-3 px-3 w-fit rounded-3xl'>{experience}</p>


                    <h2 className="text-2xl md:text-4xl font-bold mb-3 md:my-6">{name}</h2>
                    <div className='flex  gap-10 md:mb-3'>
                        <p className='text-[#0F0F0F70] mb-1  md:text-xl '>{speciality}</p>
                        <p className='flex gap-2 md:text-lg  items-center text-[#0F0F0F70] mb-4'><AiOutlineTrademark /> <span>License No: </span>
                            {licenseNumber}</p>
                    </div>

                    <div className='flex flex-wrap gap-2 md:text-xl  mb-2 md:mb-4'>
                        <p>Availability
                            {singleData.availability.map((slot, index) => (
                                <span
                                    key={index}
                                    className="bg-[#FFA00020] ml-3 text-[#FFA000] py-1 px-3 rounded-3xl text-sm"
                                >
                                    {slot}
                                </span>
                            ))}
                        </p>
                    </div>


                    <p className='md:text-xl md:mt-2 mt-1'>Consultation Fee : <span className='text-[#09982F] font-bold'>Taka : {fee}</span> </p>





                </div>

            </div>

            <div className=' my-5 md:mb-40 md:mt-10 py-5 px-10 border border-[#0F0F0F20] rounded-xl '>
                <h1 className='text-center text-2xl font-bold'>Book an Appointment</h1>
                <div className=' border border-dashed my-3 border-[#0F0F0F15]'></div>
                <div className='flex justify-between '>
                    <p className='font-bold'>Availability</p>
                    <p className=' bg-[#09982F10] text-[#09982F] py-1 px-3 rounded-3xl'>Lawyer  <span>{available}</span> Today</p>
                </div>
                <div className=' border  my-3 border-[#0F0F0F15]'></div>
                <div className='mt-2 mb-8'>
                    <h1 className='flex  gap-1 text-sm md:text-lg  bg-[#FFA00015] p-3 rounded-2xl text-[#FFA000]'> <span className='mt-[2px] md:mt-[5px]'><FiAlertOctagon /></span> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</h1>
                </div>

                <button onClick={handleBookMark} className="relative w-full mb-4 cursor-pointer items-center justify-center inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#0EA106] rounded-full hover:bg-white group">
                    <span className="absolute inset-0 border-0 group-hover:border-2 ease-linear duration-100 transition-all border-green-600 rounded-full"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-green-600 ">Book Appointment Now</span>
                </button>
            </div>
        </>
    );
};

export default LawyerDetails;