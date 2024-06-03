"use client";

import React, { useState } from "react";
import Image from "next/image";

import Mobi1 from "@/public/1intro.jpg";
import Mobi11 from "@/public/2intro.jpg";
import Mobi111 from "@/public/3intro.jpg";
import Mobi3 from "@/public/6intro.png";
import Mobi4 from "@/public/7intro.png";
import Mobi5 from "@/public/8intro.png";
import Mobi6 from "@/public/9intro.png";
import Mobi2 from "@/public/4intro.jpg";
import Mobi22 from "@/public/5intro.jpg";
import Logo from "@/public/logo.png";
const Intros = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" text-white  h-full w-full  ">
      <div className="intros w-full h-full ">
        <nav className="   items-center p-4 ">
          <div className="md:px-10 xl:px-40 flex  items-center  justify-between flex-wrap ">
            <div className="  flex items-center flex-shrink-0 text-white mr-5 ml-8 xl:ml-8 2xl:ml-8 xl:mr-20 2xl:mr-40 lg:mr-20">
              <span>
                <Image
                  src={Logo}
                  className="sm:w-60 lg:w-44 lg:h-7 sm:h-10"
                  alt="Logo"
                  width={200}
                  height={10}
                />
              </span>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center pr-3 py-2 font-extrabold rounded text-zinc-500 hover:text-black-400"
              >
                <svg
                  className={`fill-current h-5 sm:h-10 sm:w-10 w-5 ${
                    isOpen ? "hidden" : "block"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                  className={`fill-current h-5 w-5 ${
                    isOpen ? "block" : "hidden"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
            <div
              className={`w-full block flex-grow lg:flex lg:items-center  lg:w-auto ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="text-sm lg:mr-8 xl:ml-10 xl:mr-0  justify-left lg:flex-grow">
                <a
                  href="#"
                  className="block text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block  text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Technologies
                </a>
                <a
                  href="#"
                  className="block text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="block text-zinc-400 hover:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Blog
                </a>
              </div>
              <div>
                <button className=" mt-4 lg:mt-0 bg-gradient-to-r from-red-400 to-purple-600 rounded-full text-whiteinline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white lg:mr-10 xl:mr-0">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-12 ">
          <div className=" mt-10 mb-2 mx-5 xl:mt-32 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
            <h1 className="text-2xl xl:mx-0 lg:text-5xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
              Transforming Business with <br />
              Digital Innovation & Data-driven Apps
            </h1>
            <p className=" text-sm open_sans_display  px-8 sm:px-24 md:px-32 lg:px-1 xl:px-64 xl:text-xl 2xl:text-2xl lg:text-xl md:text-lg mb-8 ">
              Spacetotech is turning ideas into reality for a decade now.
              Partner with us &<br /> drive digitization to your business with
              innovation and technology
            </p>
            <button className="border-2  border-solid rounded-full text-white  py-2 px-4  hover:bg-blue-700  transition duration-300">
              Let's Talk!
            </button>
          </div>
          <div className=" relative   h-24 md:h-48 -top-10   sm:h-32 lg:h-56 xl:h-52 2xl:h-56 ">
            <div className="absolute bottom-0   xl:mx-20  2xl:mx-10 md:mx-4    lg:mx-20 xl:left-36  xl:right-36 lg:top-1 xl:top-4 top-1 left-7 right-7 mt-12  grid grid-cols-5  lg:grid-cols-5 gap-1 md:gap-2  xl:gap-3 2xl:gap-5 ">
              <div className="relative ">
                <Image
                  src={Mobi1}
                  alt="App Image 1"
                  className="rounded-xl md:rounded-2xl h-28 top-4 absolute sm:h-40 sm:top-0 sm:w-44 lg:h-60 md:h-52 md:w-52 lg:top-5 lg:w-44 xl:h-60 xl:w-72 xl:top-3 2xl:w-68 2xl:h-72 2xl:top-0 shadow-lg transform hover:scale-105 transition duration-300"
                  width={100}
                  height={5}
                />
              </div>
              <div className="relative">
                <Image
                  src={Mobi11}
                  alt="App Image 2"
                  className="rounded-xl md:rounded-2xl absolute h-24 top-8 sm:h-36 sm:top-4 sm:w-44 md:h-44 md:top-8 md:w-52 lg:h-48 lg:top-16 lg:w-44 xl:h-52 xl:w-44 xl:top-11 2xl:w-72 2xl:h-68 2xl:top-20 shadow-lg transform hover:scale-105 transition duration-300"
                  width={100}
                  height={5}
                />
              </div>

              <div className="relative mx-0.5 xl:mx-1 ">
                <Image
                  src={Mobi111}
                  alt="App Image 2"
                  className="rounded-xl md:rounded-2xl absolute h-20 top-12 sm:top-12 sm:h-28 sm:w-44 md:h-36 md:top-16 md:w-52 lg:h-40 lg:top-24 lg:w-[165px]  xl:h-44 xl:w-40 xl:top-20 2xl:w-72 2xl:h-68 2xl:top-24 shadow-lg transform hover:scale-105 transition duration-300"
                  width={100}
                  height={5}
                />
              </div>
              <div className="relative  ">
                <Image
                  src={Mobi2}
                  alt="App Image 3"
                  className="rounded-xl md:rounded-2xl absolute h-24 top-8 sm:h-36 sm:top-4 sm:w-44 md:top-8 md:h-44 md:w-52 lg:h-48 lg:w-44 lg:top-16 xl:h-52 xl:w-52 xl:top-11 2xl:w-72 2xl:h-68 2xl:top-20   shadow-lg transform hover:scale-105 transition duration-300"
                  width={100}
                  height={5}
                />
              </div>
              <div className="relative">
                <Image
                  src={Mobi22}
                  alt="App Image 4"
                  className="rounded-xl md:rounded-2xl  absolute h-32 sm:h-52 sm:-top-10 sm:w-44 md:w-52 md:-top-7 md:h-60  lg:h-72 lg:-top-7 lg:w-44 xl:h-72  xl:w-72 xl:-top-8 2xl:w-72 2xl:h-80 2xl:-top-8   shadow-lg transform hover:scale-105 transition duration-300"
                  width={100}
                  height={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logoss 2xl:px-10">
        <div className="grid logos1 gap-3 mx-6 md:mx-14 lg:mx-32 grid-cols-4  xl:mx-60 2xl:mx-40 2xl:px-0    md:flex  justify-center md:justify-around  md:space-x-4  ">
        <div className="logo">
        <Image src={Mobi3} alt="Logo 1" layout="responsive" width={200} height={100} />
      </div>
      <div className="logo">
        <Image src={Mobi4} alt="Logo 2" layout="responsive" width={200} height={100} />
      </div>
      <div className="logo3">
        <Image src={Mobi5} alt="Logo 1" layout="responsive" width={200} height={100} />
      </div>
      <div className="logo4">
        <Image src={Mobi6} alt="Logo 2" layout="responsive" width={200} height={100} />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Intros;
