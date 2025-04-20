import React from 'react';
import { NavLink } from 'react-router';
import FooterLogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#0F0F0F] text-white   rounded pt-10">
            <div className='flex -mb-9'>
                <img src={FooterLogo} alt="" />
                <h1 className='font-bold text-2xl md:text-4xl'>Law.BD</h1>
            </div>
            <nav className="grid grid-flow-col gap-4 -mb-8">
            <ul className="menu menu-horizontal px-1">
                    <li> <NavLink className={({ isActive }) => isActive ? ' underline' : ''} to='/'>Home</NavLink></li>

                    <li> <NavLink className={({ isActive }) => isActive ? ' underline' : ''} to='/Bookings'>My-Bookings</NavLink></li>

                    <li> <NavLink className={({ isActive }) => isActive ? ' underline' : ''} to='/Blogs'>Blogs</NavLink></li>

                    <li> <NavLink className={({ isActive }) => isActive ? ' underline' : ''} to='/Error'>Contact Us</NavLink></li>
                </ul>
            </nav>
            <div className='border-1 border-[#2a2a2a] w-full border-dashed'></div>
            <nav>
                <div className="grid grid-flow-col gap-4 -mt-4 p-3">
                   <img src={FooterLogo} alt="" />
                </div>
            </nav>
            
        </footer>
    );
};

export default Footer;