"use client"; 

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const logos = {
  '/': 'logo.png',
  '/Portfolio': 'logo1.png',
  '/LiquiClear': 'logo1.png',
  '/Services':'logo1.png',
  
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('black');
  
  const pathname = usePathname();
  const [logo, setLogo] = useState(logos[pathname]);
 
  useEffect(() => {
   
const handleRouteChange = (pathname) => {

      console.log(pathname)

      if (pathname === '/') {
        setBgColor('black'); 
        setTextColor('gray');
        setLogo(logos[pathname]);
        
      } else {
        setBgColor('white');
        setTextColor('rgb(161 161 170)');
        setLogo(logos[pathname]);
      }
    };

    
    handleRouteChange(pathname);

    
  
    
const handleTextHover = (event) => {
      event.target.style.color = textColor === 'rgb(161 161 170)' ? 'black' : 'white'; 
      
    };

    
    const handleTextReset = (event) => {
      event.target.style.color = textColor === 'rgb(161 161 170)' ? 'gray' : 'gray'; // Reset to gray
      
    };

    
    const links = document.querySelectorAll('.nav-link');

    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleTextHover);
      link.addEventListener('mouseleave', handleTextReset);
    });

    
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleTextHover);
        link.removeEventListener('mouseleave', handleTextReset);
      });
    };
  }, [textColor,pathname]);
  return (
    <nav className="items-center p-4 " style={{ backgroundColor: bgColor }}>
      <div className="md:px-10 xl:px-40 flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-5 ml-8 xl:ml-8 2xl:ml-8 xl:mr-20 2xl:mr-40 lg:mr-20">
          <span>
            <Image src={`/${logo}`} id="navbar-logo" className="sm:w-60 lg:w-44 lg:h-5 sm:h-10" alt="Logo" width={200} height={10} />
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center pr-3 py-2 font-extrabold rounded text-zinc-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 sm:h-10 sm:w-10 w-5 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="text-sm lg:mr-8 xl:ml-10 xl:mr-0 justify-left lg:flex-grow">
            <Link href="/" className="nav-link  block text-zinc-400 mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ">
              Home
            </Link>
            <Link href="/" className="nav-link  block text-zinc-400  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
              Services
            </Link>
            <Link href="/" className="block text-zinc-400 nav-link  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
              Technologies
            </Link>
            <Link href="/Portfolio" className={`block text-zinc-400 nav-link  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ${pathname === '/Portfolio'?'text-black':'text-red-500'}`}>
              Portfolio
            </Link>
            <Link href="/" className="block nav-link text-zinc-400  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8  ">
              Blog
            </Link>
          </div>
          <div>
            <button className="juggle-button mt-4 lg:mt-0 bg-gradient-to-r from-red-400 to-purple-600 rounded-full  inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white lg:mr-10 xl:mr-0">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
