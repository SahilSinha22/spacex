"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "@/public/logo.png"
function App() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className=" md:px-10 flex bg-black items-center  justify-between flex-wrap p-6">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
     <span><Image src={Logo} className="" alt="Logo" width={200} height={10}/>
     </span> 
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center pr-3 py-2 font-extrabold rounded text-zinc-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
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
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm xl:text-xl lg:flex-grow">
         <a href="#" className="block text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Home
         </a>
         <a href="#" className="block text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Services
         </a>
         <a href="#" className="block  text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Technologies
         </a>
         <a href="#" className="block text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Portfolio
         </a>
         <a href="#" className="block text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
          Blog
         </a>
       </div>
       <div>
         <button className=" mt-4 lg:mt-0 bg-gradient-to-r from-red-400 to-purple-600 rounded-full text-whiteinline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
           Contact Us
         </button>
       </div>
     </div>
   </nav>
 );
}
export default App;