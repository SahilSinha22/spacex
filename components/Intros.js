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

const Intros = () => {
 
  
  
  
  return (
    <div className=" text-white   h-full w-full  ">
      <div className="intros w-full xl:h-[680px] h-full  ">
       
        <div className=" ">
          <div className="pt-40 md:pt-60 lg:pt-48 xl:pt-20 ">
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
            <div className=" relative   h-24 md:h-48 -top-10 2xl:px-20  sm:h-32 lg:h-56 xl:h-52 2xl:h-56 ">
              <div className="absolute bottom-0   xl:mx-20  2xl:mx-28 2xl:left-40  2xl:right-40  md:mx-4    lg:mx-20 xl:left-36  xl:right-36 lg:top-1 xl:-top-4 top-1 left-7 right-7 mt-12  grid grid-cols-5  lg:grid-cols-5 gap-1 md:gap-2  xl:gap-3 2xl:gap-5 ">
                <div className="relative ">
                  <Image
                    src={Mobi1}
                    alt="App Image 1"
                    className="rounded-xl md:rounded-2xl h-28 top-4 absolute sm:h-40 introx sm:top-0 sm:w-44 lg:h-60 md:h-52 md:w-52 lg:top-5 lg:w-44 xl:h-60 xl:w-72 xl:top-3 2xl:w-96 2xl:h-72 2xl:-top-16  transform hover:scale-105 transition duration-300"
                    width={100}
                    height={5}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={Mobi11}
                    alt="App Image 2"
                    className="rounded-xl md:rounded-2xl absolute h-24 top-8 sm:h-36 sm:top-4 sm:w-44 md:h-44 md:top-8 md:w-52 lg:h-48 lg:top-16 lg:w-44 xl:h-52 xl:w-44 xl:top-11 2xl:w-72 2xl:h-68 2xl:top-4  transform hover:scale-105 transition duration-300"
                    width={100}
                    height={5}
                  />
                </div>

                <div className="relative mx-0.5 xl:mx-1 2xl:mx-0 ">
                  <Image
                    src={Mobi111}
                    alt="App Image 2"
                    className="rounded-xl md:rounded-2xl absolute h-20 top-12 sm:top-12 sm:h-28 sm:w-44 md:h-36 md:top-16 md:w-52 lg:h-40 lg:top-24 lg:w-[165px]  xl:h-44 xl:w-40 xl:top-20 2xl:w-72 2xl:h-68 2xl:top-10  transform hover:scale-105 transition duration-300"
                    width={100}
                    height={5}
                  />
                </div>
                <div className="relative  ">
                  <Image
                    src={Mobi2}
                    alt="App Image 3"
                    className="rounded-xl md:rounded-2xl absolute h-24 top-8 sm:h-36 sm:top-4 sm:w-44 md:top-8 md:h-44 md:w-52 lg:h-48 lg:w-44 lg:top-16 xl:h-52 xl:w-52 xl:top-11 2xl:w-96 2xl:h-68 2xl:top-2    transform hover:scale-105 transition duration-300"
                    width={100}
                    height={5}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={Mobi22}
                    alt="App Image 4"
                    className="rounded-xl md:rounded-2xl  absolute h-32 sm:h-52 sm:-top-10 sm:w-44 md:w-52 md:-top-7 md:h-60  lg:h-72 lg:-top-7 lg:w-44 xl:h-72  xl:w-72 xl:-top-8 2xl:w-72 2xl:h-80 2xl:-top-24    transform hover:scale-105 transition duration-300"
                    width={100}
                    height={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logoss 2xl:px-10">
        <div className="marquee">
          <div className="grid marquee-content logos1 gap-3 mx-6 md:mx-14 lg:mx-32 grid-cols-4  xl:mx-60 2xl:mx-40 2xl:px-0    md:flex  justify-center md:justify-around  md:space-x-4  ">
            <div className="logo imagex  ">
              <Image
                src={Mobi3}
                alt="Logo 1"
                layout="responsive"
                width={200}
                height={100}
              />
            </div>
            <div className="logo imagex  ">
              <Image
                src={Mobi4}
                alt="Logo 2"
                layout="responsive"
                width={200}
                height={100}
              />
            </div>
            <div className="logo3 imagex  ">
              <Image
                src={Mobi5}
                alt="Logo 1"
                layout="responsive"
                width={200}
                height={100}
              />
            </div>
            <div className="logo4 imagex  ">
              <Image
                src={Mobi6}
                alt="Logo 2"
                layout="responsive"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intros;
