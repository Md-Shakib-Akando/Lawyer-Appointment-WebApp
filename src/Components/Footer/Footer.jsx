import React from 'react';
import { Link, NavLink } from 'react-router';
import FooterLogo from '../../assets/logo-footer.png'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

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
                <div className="grid grid-flow-col gap-4 mb-3 -mt-4">
               <Link to='https://www.facebook.com/profile.php?id=100080793565430'> <TiSocialFacebook size={40}/></Link>
               <Link to='https://www.linkedin.com/in/md-shakib-akando-b1a84533b/'> <TiSocialLinkedin size={40}/></Link>
               <Link to='https://github.com/Md-Shakib-Akando'> <TiSocialGithub size={40}/></Link>
               <Link to='/'>  <TiSocialYoutube size={40}/>
               </Link>
                
                
               

                </div>
            </nav>


        </footer>
    );
};

export default Footer;