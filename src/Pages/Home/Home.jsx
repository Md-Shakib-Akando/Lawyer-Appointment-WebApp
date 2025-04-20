import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Lawyer from '../../Components/Lawyer/Lawyer';
import { useLoaderData } from 'react-router';
import Success from '../../Components/Success/Success';
import { ScaleLoader } from 'react-spinners';

const Home = () => {
    const lawyerData = useLoaderData();
    const [loading, setLoading] = useState(true);

   useEffect(() => {
           
           const timer = setTimeout(() => {
               setLoading(false);
           }, 200);
   
           return () => clearTimeout(timer);
       }, []);
    
    return (
        <>
      
        {loading ? (
            <div className='flex justify-center items-center '>
                <ScaleLoader
                    barCount={4}
                    height={40}
                    width={6}
                    color="black"
                />
            </div>
        ) : (
            <>
                <Banner />
                <Lawyer lawyerData={lawyerData} />
                <Success />
            </>
        )}
    </>
    );
};

export default Home;