import React from 'react';
import BgImg from '../../assets/banner-img-1.png';
const Banner = () => {
    return (
        <div  style={{ backgroundImage: `url(${BgImg})` }}  className="bg-cover rounded-3xl bg-center  min-h-[75vh] sm:min-h-[85vh] md:min-h-[calc(100vh-65px)] w-full   flex justify-center items-center">
            <div className='text-white'>
                <h2 className='text-center text-2xl md:text-6xl'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h2>
                <p className='text-center text-sm md:text-xl mt-7  '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
        </div>
    );
};

export default Banner;