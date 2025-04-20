import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Lawyer from '../../Components/Lawyer/Lawyer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const lawyerData = useLoaderData();
    return (
        <>
           
           <Banner></Banner>
          <Lawyer lawyerData={lawyerData}></Lawyer>
        </>
    );
};

export default Home;