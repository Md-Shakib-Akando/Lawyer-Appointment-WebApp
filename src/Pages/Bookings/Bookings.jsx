import React, { useEffect, useState } from 'react';
import { getBookMark, removeBookMark } from '../../utilites';
import Book from './Book';
import { Link } from 'react-router';


const Bookings = () => {
    const [displayData, setDisplayData] = useState([])
    useEffect(() => {
        const saveData = getBookMark();
        setDisplayData(saveData)
    }, [])
    const handleDelete = (id) => {
        removeBookMark(id);
        setDisplayData(getBookMark());

    }
    return (
        <>
            {
                displayData.length === 0 ? (
                    <div className='flex flex-col justify-center items-center gap-4 py-20 md:gap-8 md:p-40'>
                        <h1 className='text-xl md:text-4xl font-bold text-center'>You Have Not Book any appointment yet</h1>
                        <p className='text-sm md:text-lg text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>

                        <Link to='/' class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                           Book An Appointment
                        </Link>
                    </div>
                ) : (
                    displayData.map(data => (
                        <Book key={data.id} data={data} handleDelete={handleDelete} />
                    ))
                )
            }
        </>
    );
};

export default Bookings;
