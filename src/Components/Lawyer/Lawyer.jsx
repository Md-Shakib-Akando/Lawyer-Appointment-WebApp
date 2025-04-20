import React, { useEffect, useState } from 'react';
import LawyerData from '../LawyerData/LawyerData';

const Lawyer = ({ lawyerData }) => {

    const [displayData, setDisplayData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        if(showAll){
            setDisplayData(lawyerData);
        }
        else{
            setDisplayData(lawyerData.slice(0,6))
        }
    },[showAll,lawyerData])

    return (
        <>
            <div className="px-4 py-12 bg-white text-center">
                <h1 className=' text-3xl md:text-5xl font-bold mb-4'>Our Best Lawyers</h1>
                <p className='text-sm md:text-xl'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                {
                    displayData.map((Data) => <LawyerData key={Data.id} Data={Data}></LawyerData>)
                }
            </div>
            <div className='flex justify-center my-7'>
                <button
                onClick={()=>{
                    setShowAll(!showAll)
                    if(showAll) window.scrollTo(0,1000)
                }}
                 className="flex items-center cursor-pointer justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#0EA106] border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-[#0EA106] hover:border-[#0EA106] focus:outline-none">
                {showAll? 'Show Less Lawyer': 'Show All Lawyer'}
                </button>
            </div>
        </>
    );
};

export default Lawyer;