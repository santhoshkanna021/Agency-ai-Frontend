import React from 'react'
import assets from '../assets/assets'
import Contact from './Contact'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 font-medium">
      <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-5">

        {/* Logo */}
        <img src={assets.logo} alt="logo" className="w-35 sm:w-40" />

        {/* Navlinks */}
        <div className="flex gap-5 text-[#475569] text-[14px]">
          <a href="#home" className="hover:border-b">Home</a>
          <a href="#Services" className="hover:border-b">Services</a>
          <a href="#Ourwork" className="hover:border-b">Our Work</a>
          <a href="#contact" className="hover:border-b">Contact Us</a>
        </div>

        {/* Contact Button */}
        <div  className="w-[125px] h-[35px] bg-[#5044E5] text-white text-[14px] rounded-4xl flex items-center justify-center gap-2">
          <button>Connect</button>
          <img src={assets.arrow_icon} alt="arrow icon" className="w-3 h-3" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
