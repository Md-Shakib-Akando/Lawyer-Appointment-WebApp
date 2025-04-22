import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {

    const BlogData = useLoaderData();


    return (

        <>

            <div className='flex flex-col justify-center items-center my-6 md:my-10 '>
                <h1 className='text-3xl text-center md:text-5xl font-bold'>Blogs</h1>
                <p className='text-sm md:text-lg text-center mt-5 md:mt-10 text-gray-500'>Let's explore some basic concept that will make you a good developer</p>
            </div>
           {
            BlogData.map((data)=> <Blog key={data.id} data={data}></Blog> )
           }
            
        </>
    );
};

export default Blogs;