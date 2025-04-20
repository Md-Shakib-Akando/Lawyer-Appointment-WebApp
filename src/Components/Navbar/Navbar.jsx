import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100  mx-auto px-6 py-6 md:px-12 lg:px-16 xl:px-24">
            <div className="navbar-start">
                
                <div className='flex'>
                    <img src={Logo} alt="" />
                    <h1 className='text-4xl font-bold'>Law.BD</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-xl  text-[#353333]'> <NavLink className={({ isActive }) => isActive ? 'text-black underline' : ''} to='/'>Home</NavLink></li>

                    <li className='text-xl text-[#353333]'> <NavLink className={({ isActive }) => isActive ? 'text-black underline' : ''} to='/Bookings'>My-Bookings</NavLink></li>

                    <li className='text-xl text-[#353333]'> <NavLink className={({ isActive }) => isActive ? 'text-black underline' : ''} to='/Blogs'>Blogs</NavLink></li>

                    <li className='text-xl text-[#353333]'> <NavLink className={({ isActive }) => isActive ? 'text-black underline' : ''} to='/Error'>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
               <div className='hidden md:flex'>
               <button className="relative   items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-full hover:bg-white group">
                    <span className="absolute inset-0 border-0 group-hover:border-2 ease-linear duration-100 transition-all border-green-600 rounded-full"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-green-600 ">Button Text</span>
                </button>
               </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" cursor-pointer mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mr-3  p-2 w-36 -right-9 top-10 shadow">
                        <li> <NavLink className={({ isActive }) => isActive ? 'text-black underline' : ''} to='/'>Home</NavLink></li>

                        <li> <NavLink className={({ isActive }) => isActive ? 'text-black underline' : ''} to='/Bookings'>My-Bookings</NavLink></li>

                        <li> <NavLink className={({ isActive }) => isActive ? 'text-black underline' : ''} to='/Blogs'>Blogs</NavLink></li>

                        <li> <NavLink className={({ isActive }) => isActive ? 'text-black underline' : ''} to='/Error'>Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;