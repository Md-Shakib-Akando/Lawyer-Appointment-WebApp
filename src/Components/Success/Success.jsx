import React, { useState, useEffect } from 'react';
import CardImg1 from '../../assets/success-doctor.png';
import CardImg2 from '../../assets/success-patients.png';
import CardImg3 from '../../assets/success-review.png';
import CardImg4 from '../../assets/success-staffs.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Success = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartCount(true);
        } else {
            setStartCount(false);
        }
    }, [inView]);

    return (
        <>
            <div className='text-center mt-20'>
                <h1 className='text-4xl font-bold'>We Provide Best Law Services</h1>
                <p className='mt-4'>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                </p>
            </div>

            <div className='mt-10 pb-20' ref={ref}>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-6'>

                   
                    <div className=' bg-[#0F0F0F05] border border-[#0F0F0F20] w-9/12 ml-14 md:ml-0  rounded-2xl'>
                        <div className='flex flex-col justify-center items-center p-8 '>
                            <img src={CardImg1} alt="" />
                            <h1 className='text-4xl font-bold mt-5 mb-3'>
                                {startCount && <CountUp start={0} end={199} duration={2} />}+
                            </h1>
                            <p className='text-[#0F0F0F70]'>Total Lawyer</p>
                        </div>
                    </div>

                    
                    <div className='bg-[#0F0F0F05] border border-[#0F0F0F20] w-9/12 ml-14 md:ml-0  rounded-2xl'>
                        <div className='flex flex-col justify-center items-center p-8 '>
                            <img src={CardImg3} alt="" />
                            <h1 className='text-4xl font-bold mt-5 mb-3'>
                                {startCount && <CountUp start={0} end={467} duration={2} />}+
                            </h1>
                            <p className='text-[#0F0F0F70]'>Total Reviews</p>
                        </div>
                    </div>

                   
                    <div className='bg-[#0F0F0F05] border border-[#0F0F0F20] w-9/12 ml-14 md:ml-0   rounded-2xl'>
                        <div className='flex flex-col justify-center items-center p-8 '>
                            <img src={CardImg2} alt="" />
                            <h1 className='text-4xl font-bold mt-5 mb-3'>
                                {startCount && <CountUp start={0} end={1900} duration={2} />}+
                            </h1>
                            <p className='text-[#0F0F0F70]'>Total Cases Initiated</p>
                        </div>
                    </div>

                    
                    <div className='bg-[#0F0F0F05] border border-[#0F0F0F20] w-9/12 ml-14 md:ml-0  rounded-2xl'>
                        <div className='flex flex-col justify-center items-center p-8 '>
                            <img src={CardImg4} alt="" />
                            <h1 className='text-4xl font-bold mt-5 mb-3'>
                                {startCount && <CountUp start={0} end={300} duration={2} />}+
                            </h1>
                            <p className='text-[#0F0F0F70]'>Total Staffs</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Success;
