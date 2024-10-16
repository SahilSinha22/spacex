"use client"
import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Mobi from "@/public/instagram.svg"
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="     items-center justify-center   w-full    text-white  text-xs">
      <div className=" bg-black pt-12 flex-col sm:flex-row       2xl: xl:text-xl 2xl:text-2xl   grid grid-cols-3  sm:gap-6   sm:gap-y-10 lg:grid-cols-4  md:flex    py-5  text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
        <ul
          className="w-auto sm:ml-10  ml-2 xl:ml-40 2xl:ml-36 md:ml-10 lg:ml-20 flex-col 2xl:justify-around xl:justify-between  xl:text-xl 2xl:text-2xl   mb-4 sm:flex sm:flex-col space-y-5 md:mb-0 "
          aria-labelledby="mega-menu-full-image-button"
        >
          <li>
          <span className=" space-y-4   ">
            <Link href="/" >
            <Image src={Logo} className="xl:w-80 xl:h-12 h-4 w-28 imgx  sm:w-72 sm:h-10" alt="Logo" width={600} height={10} />
            </Link>
          </span>
          </li>
          <li className="xl:text-xl  pb-28 2xl:text-2xl  flex flex-row text-xl space-x-2">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl    hover:text-white dark:hover:text-blue-500"
            >
              <Image
                src={Mobi}
                alt="logo"
                className="h-4 w-4 2xl:w-12 2xl:h-12 sm:h-10 sm:w-12"
                width={30}
                height={1}
              />
            </Link>
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              <Image
                src="/linkdin.svg"
                alt="logo"
                className="h-4 w-4 2xl:w-12 2xl:h-12 sm:h-10 sm:w-12"
                width={30}
                height={1}
              />
            </Link>
            <Link href="#" onClick={(e) => e.preventDefault()} className=" hover:text-white dark:hover:text-blue-500">
              <Image
                src="/twitter.svg"
                alt="logo"
                className="h-4 w-4 2xl:w-12 2xl:h-12 sm:h-10 sm:w-12"
                width={30}
                height={1}
              />
            </Link>
            <Link href="#" onClick={(e) => e.preventDefault()} className=" hover:text-white dark:hover:text-blue-500">
              <Image
                src="/youtube.svg"
                alt="logo"
                className="h-4 w-4 2xl:w-12 2xl:h-12 sm:h-10 sm:w-12"
                width={30}
                height={1}
              />
            </Link>
          </li>
        </ul>

        <ul className="xl:text-xl 2xl:text-2xl lg:mx-4 xl:ml-32 xl:mr-10 2xl:mx-24 mb-4 justify-around  md:mb-0">
          <h1 className="xl:text-2xl 2xl:text-3xl pb-4 text-white sm:pb-4 font-bold  text-xl sm:text-2xl">
            
            Services
          </h1>
          <li className="xl:text-lg 2xl:text-xl  text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              Expertise
            </Link>
          </li>
          <li className="xl:text-xl 2xl:text-2xl  text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              Web development
            </Link>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              Mobile App development
            </Link>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              UI/UX design
            </Link>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              Hire Developer
            </Link>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              Become a Partner
            </Link>
          </li>
        </ul>
        <ul className="mb-4  md:mb-0">
          <h1 className="xl:text-2xl 2xl:text-3xl pb-4 text-white sm:pb-4 font-bold  text-xl sm:text-2xl">
            Expertise
          </h1>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              Blockchain App Developmen
            </Link>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              AI App Development
            </Link>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              IoT App development
            </Link>
          </li>
          <li className="xl:text-xl 2xl:text-2xl   text-sm sm:text-lg">
            <Link
              href="#" onClick={(e) => e.preventDefault()}
              className="xl:text-xl 2xl:text-2xl   hover:text-white dark:hover:text-blue-500"
            >
              Blockchain App Development
            </Link>
          </li>
        </ul>
      </div>

      <ul className=" bg-zinc-700  xl:text-lg 2xl:text-xl  flex flex-row  px-4  space-x-11  text-zinc-500 border-2xl justify-center   text-center  text-xl ">
        <li className="xl:text-lg  my-4 2xl:text-xl mb-3 hover:text-white  text-xs sm:text-lg">
          Space to Tech 2019-2024.All Right Reserved
        </li>
        <li className="xl:text-lg  my-4 2xl:text-xl hover:text-white  text-xs sm:text-lg">
          Privacy Policy
        </li>
        <li className="xl:text-lg  my-4 2xl:text-xl hover:text-white text-xs sm:text-lg">
          Term & Condition
        </li>
      </ul>
    </footer>
  );
};

export default Footer;


