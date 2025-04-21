import React from 'react';


const Book = ({ data, handleDelete }) => {
    const handleRemoveBookMark = (id) => {
        handleDelete(id);
    }
    return (
        <>

            
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl text-center md:text-4xl font-bold mb-3'>My Today Appointments</h1>
                    <p className='md:text-lg text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                </div>
            
            <div className=' my-5 md:mb-10 md:mt-10 py-5 px-5 md:px-10 border border-[#0F0F0F20] rounded-xl '>


                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl md:text-2xl font-bold'>{data.name}</h1>
                        <p className='md:text-lg mt-3'>{data.speciality}</p>
                    </div>
                    <p className='md:text-lg md:mt-2 mt-1'>Appointment Fee :  {data.fee} Taka</p>
                </div>
                <div className=' border  my-3 border-[#0F0F0F15]'></div>


                <button onClick={() => handleRemoveBookMark(data.id)} className="relative w-full mb-4 cursor-pointer items-center justify-center inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-[#FF0000] group">
                    <span className="absolute inset-0 border-1 group-hover:border-0 ease-linear duration-100 transition-all border-[#FF0000] rounded-full"></span>
                    <span className="relative w-full text-left text-[#FF0000] transition-colors duration-200 ease-in-out group-hover:text-white ">Cancel Appointment</span>
                </button>
            </div>
        </>
    );
};

export default Book;