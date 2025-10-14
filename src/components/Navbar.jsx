import React, { useState, useEffect } from "react";
import assets from "../assets/assets";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-[999] backdrop-blur-xl bg-white/30 font-medium">
      <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-5">

        {/* Logo */}
        <img src={assets.logo} alt="logo" className="w-32 sm:w-40" />

        {/* Desktop Navlinks */}
        <div className="hidden md:flex gap-5 text-[#475569] text-[14px]">
          <a href="#home" className="hover:border-b border-[#5044E5] transition">Home</a>
          <a href="#Services" className="hover:border-b border-[#5044E5] transition">Services</a>
          <a href="#Ourwork" className="hover:border-b border-[#5044E5] transition">Our Work</a>
          <a href="#contact" className="hover:border-b border-[#5044E5] transition">Contact Us</a>
        </div>

        {/* Contact Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:flex w-[125px] h-[35px] bg-[#5044E5] text-white text-[14px] rounded-full items-center justify-center gap-2 transition hover:opacity-90"
        >
          Connect
          <img src={assets.arrow_icon} alt="arrow icon" className="w-3 h-3" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5044E5] z-[1000]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl z-[998] flex flex-col justify-center items-center gap-8 text-[#475569] text-[18px] font-medium animate-fade-in">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#5044E5] transition">
            Home
          </a>
          <a href="#Services" onClick={() => setMenuOpen(false)} className="hover:text-[#5044E5] transition">
            Services
          </a>
          <a href="#Ourwork" onClick={() => setMenuOpen(false)} className="hover:text-[#5044E5] transition">
            Our Work
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#5044E5] transition">
            Contact Us
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="w-[140px] h-[40px] bg-[#5044E5] text-white rounded-full flex items-center justify-center gap-2 transition hover:opacity-90"
          >
            Connect
            <img src={assets.arrow_icon} alt="arrow icon" className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
