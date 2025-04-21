import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Lawyer from '../../Components/Lawyer/Lawyer';
import { useLoaderData } from 'react-router';
import Success from '../../Components/Success/Success';


const Home = () => {
    const lawyerData = useLoaderData();
    
    
    return (
       
            <>
                <Banner />
                <Lawyer lawyerData={lawyerData} />
                <Success />
            </>
        
    );
};

export default Home;