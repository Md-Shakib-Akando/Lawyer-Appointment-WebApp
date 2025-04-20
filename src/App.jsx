import React from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
     <Navbar></Navbar>
     <div className='min-h-[calc(100vh-290px)]'>
      <div className=' mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
      <Outlet></Outlet>
      </div>
     </div>
     <Footer></Footer>
    </>
  )
}

export default App
