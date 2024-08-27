"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../assets/W_Logo.svg';
import Link from 'next/link';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id:any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`navbar md:px-20 px-5 fixed w-full top-0 py-2 z-[999] transition-all duration-300 ${
        isScrolled ? 'bg-[#c2c2c2] shadow-lg bg-opacity-[10%] backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="navbar-start h-full">
        <Link href="/" className="">
          <div className="bg-transparent hover:bg-[#1a1a1a] border-0 border-[#4e4e4e] px-2 rounded-full flex gap-2">
            <Image src={Logo} width={160} height={60} alt="Logo" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="bg-[#c2c2c2] bg-opacity-25 border-[1px] border-[#d5d4d4] py-3 px-10 rounded-full flex gap-2">
          <button onClick={() => scrollToSection('product')} className="btn btn-sm text-xl hover:bg-black hover:border-black bg-opacity-25 bg-[#ffffff] border-[#d5d4d4] text-white rounded-tl-full rounded-bl-full rounded-tr-full rounded-[3000px]">
            Our Product
          </button>
          <button onClick={() => scrollToSection('team')} className="btn btn-sm text-xl hover:bg-black hover:border-black bg-opacity-25 bg-[#ffffff] border-[#d5d4d4] text-white rounded-bl-3xl rounded-tr-3xl">
            Our Team
          </button>
          <button onClick={() => scrollToSection('roadmap')} className="btn btn-sm text-xl hover:bg-black hover:border-black bg-opacity-25 bg-[#ffffff] border-[#d5d4d4] text-white rounded-br-3xl rounded-tl-3xl">
            Road Map
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn btn-sm text-xl hover:bg-black hover:border-black bg-opacity-25 bg-[#ffffff] border-[#d5d4d4] text-white rounded-tr-full rounded-br-full rounded-tl-full rounded-[3000px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
