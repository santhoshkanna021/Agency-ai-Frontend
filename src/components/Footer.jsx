import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className="w-full bg-[#F9FBFF] flex flex-col">

      {/* Main Footer Content */}
      <div className="flex flex-col sm:flex-row justify-between items-start px-6 sm:px-20 lg:px-40 py-10 gap-10 sm:gap-0">

        {/* Left Side */}
        <div className="flex flex-col items-start text-start gap-4 max-w-md">
          {/* Logo */}
          <img src={assets.logo} alt="logo" className="w-32 sm:w-40" />

          {/* Paragraph */}
          <p className="text-[#8A8E9B] text-sm">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          {/* Navlinks */}
          <div className="flex flex-wrap gap-5 text-[#475569] text-sm">
            <a href="#home" className="hover:border-b border-transparent hover:border-gray-400">Home</a>
            <a href="#Services" className="hover:border-b border-transparent hover:border-gray-400">Services</a>
            <a href="#Ourwork" className="hover:border-b border-transparent hover:border-gray-400">Our Work</a>
            <a href="#contact" className="hover:border-b border-transparent hover:border-gray-400">Contact Us</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start max-w-md w-full sm:w-auto">
          {/* Title */}
          <h2 className="text-[#3B3B3B] font-bold mb-2">
            Subscribe to our newsletter
          </h2>

          {/* Description */}
          <p className="text-[#8A8E9B] text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          {/* Email Input and Button */}
          <div className="flex flex-col sm:flex-row w-full gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button className="px-4 py-2 bg-[#5044E5] text-white rounded-lg">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="w-full text-center py-4 border-t border-gray-200 text-sm text-[#8A8E9B]">
        Copyright 2025 © GreatStack - All Right Reserved.
      </div>

    </div>
  )
}

export default Footer
