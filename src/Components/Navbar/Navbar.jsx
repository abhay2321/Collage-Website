/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {

   const[sticky, setSticky] = useState(false);

   useEffect(() => {
       window.addEventListener('scroll', () => {
          window.scrollY > 610 ? setSticky(true) : setSticky(false);
       })
   }, []);

   const[mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}> 
       <img src={logo} alt="logo" height="75px" />
       <ul className={mobileMenu? '': 'hide-mobile-menu' }>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <Link to='contact' smooth={true} offset={-260} duration={500} className='btn-nav'>
          <li>Contact us</li>
          </Link>
       </ul>
       <TbMenuDeep className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
