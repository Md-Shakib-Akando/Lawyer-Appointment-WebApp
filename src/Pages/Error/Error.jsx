import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                <h2>404 Error</h2>
            </div>
        </>
    );
};

export default Error;