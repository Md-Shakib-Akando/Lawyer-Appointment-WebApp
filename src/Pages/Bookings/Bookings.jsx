import React, { useEffect, useState } from 'react';
import { getBookMark } from '../../utilites';
import Book from './Book';


const Bookings = () => {
   const [displayData,setDisplayData]=useState([])
    useEffect(()=>{
        const saveData=getBookMark();
        setDisplayData(saveData)
    },[])

    return (
        <>
          
        {
            displayData.map(data=> <Book key={data.id} data={data}></Book>)
        }
            
        </>
    );
};

export default Bookings;
