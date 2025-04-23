import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet, useLocation} from 'react-router'
import Footer from './Components/Footer/Footer'
import { ScaleLoader } from "react-spinners";

function App() {
  const location = useLocation();
  const hideFooter = ['/contact'];
  const HideFooter = hideFooter.includes(location.pathname.toLowerCase());
  

  const [loading,setLoading]=useState(false);
  useEffect(()=>{

    setLoading(true);
    const timeOut=setTimeout(()=>{
      setLoading(false);

    },100);
    return ()=>clearTimeout(timeOut);
  },[location.pathname])

  return (
    
    <>
     <Navbar></Navbar>
     <div className='min-h-[calc(100vh-290px)]'>
      <div className=' mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
      {loading ?(
        <div className='flex justify-center items-center pt-16'> <ScaleLoader /> </div>
      ):(
        <Outlet />
      )}
      </div>
     </div>
     <ToastContainer />
     {!HideFooter && <Footer />}
    </>
  )
}

export default App;
