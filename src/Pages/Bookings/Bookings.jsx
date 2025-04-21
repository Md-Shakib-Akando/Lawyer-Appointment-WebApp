import React, { useEffect, useState } from 'react';
import { getBookMark, removeBookMark } from '../../utilites';
import Book from './Book';


const Bookings = () => {
   const [displayData,setDisplayData]=useState([])
    useEffect(()=>{
        const saveData=getBookMark();
        setDisplayData(saveData)
    },[])
    const handleDelete=(id)=>{
        removeBookMark(id);
        setDisplayData(getBookMark());

    }
    return (
        <>
          
        {
            displayData.map(data=> <Book key={data.id} data={data} handleDelete={handleDelete}></Book>)
        }
            
        </>
    );
};

export default Bookings;
