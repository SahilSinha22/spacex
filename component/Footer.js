import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png"

const Footer = () => {
  return (
    <footer classNameName=" w-auto  md:mb-10 border-2 items-center justify-center flex flex-col  w-full flex    text-white  text-xs">
      <div className=" bg-black  flex-col sm:flex-row 2xl:justify-around   xl:justify-between    2xl: xl:text-xl 2xl:text-2xl   grid grid-cols-3  sm:gap-6  sm:justify-between sm:gap-y-10 lg:grid-cols-4  md:flex md:justify-between   py-5  text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
        <ul
          className="w-auto  flex-col 2xl:justify-around xl:justify-between  xl:text-xl 2xl:text-2xl   mb-4 sm:flex sm:flex-col space-y-5 md:mb-0 md:block"
          aria-labelledby="mega-menu-full-image-button"
        >
          <span className=" space-y-4  "><Image src={Logo} className="" alt="Logo" width={400} height={40}/>
</span>
         
          
          <li className="xl:text-xl 2xl:text-2xl  flex flex-row text-xl space-x-4">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline  hover:text-white dark:hover:text-blue-500"
            >
            <Image src="instagram.svg" alt="logo" className="h-6 w-6 2xl:w-16 2xl:h-16 sm:h-12 sm:w-12" width={30} height={1} />

            </a>
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
            <Image src="twitter.svg" alt="logo" className="h-6 w-6 2xl:w-16 2xl:h-16 sm:h-12 sm:w-12" width={30} height={1}/>
            
            </a>
            <a
              href="#"
              className="hover:underline hover:text-white dark:hover:text-blue-500"
            >
            <Image src="facebook.svg" alt="logo" className="h-6 w-6 2xl:w-16 2xl:h-16 sm:h-12 sm:w-12" width={30} height={1}/>
            
            </a>
          </li>
          
          
        </ul>
       
        <ul className="xl:text-xl 2xl:text-2xl  mb-4 justify-around space-y-4 md:mb-0">
            <h1 className="xl:text-3xl 2xl:text-4xl  text-blue-500 py-2 sm:py-4 font-bold  text-lg sm:text-xl"> Services</h1>
          <li className="xl:text-xl 2xl:text-2xl  text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              Expertise
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-2xl  text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              Web development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              Mobile App development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              UI/UX design
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              Hire Developer
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              Become a Partner
            </a>
          </li>
        </ul>
        <ul className="mb-4 space-y-4  md:mb-0">
            <h1 className="xl:text-3xl 2xl:text-4xl text-blue-500 px-4 py-4 font-bold text-xl sm:text-2xl">Expertise</h1>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              Blockchain App Developmen
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              AI App Development
            </a>
          </li >
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              IoT App development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-2xl  hover:underline hover:text-white dark:hover:text-blue-500"
            >
              Blockchain App Development
            </a>
          </li>
          </ul>
      </div>

    
    <ul className=' bg-zinc-400  xl:text-xl 2xl:text-2xl  flex flex-row  px-4  space-x-11  text-gray-800 border-2xl justify-center   text-center  text-xl '>
      <li className="xl:text-xl  my-4 2xl:text-2xl mb-3 hover:text-white text-lg">
        2023 Techlerate
      </li>
      <li className="xl:text-xl  my-4 2xl:text-2xl hover:text-white  text-lg">
        Privacy Policy
      </li>
      <li className="xl:text-xl  my-4 2xl:text-2xl hover:text-white text-lg">
        Term & Condition
      </li>
      </ul>
   
</footer>
  );
};

export default Footer;
