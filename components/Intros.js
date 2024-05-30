import React from "react";
import Image from "next/image";
import Mobi from "@/public/liqui.png";
import Mobi1 from "@/public/im1.jpg";
import Mobi2 from "@/public/okomo.png";
import Mobi3 from "@/public/im3.jpg";

const Intros = () => {
  return (
    <div
      className=" text-white pt-12 h-auto  "
      style={{
        backgroundImage: `url("bg.jpg")`,
      }}
    >
      <div className=" mt-10 mb-2 mx-5 xl:mt-32 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
        <h1 className="text-2xl xl:mx-0 lg:text-5xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
          Transforming Business with <br />
          Digital Innovation & Data-driven Apps
        </h1>
        <p className=" text-sm open_sans_display  px-8 sm:px-24 md:px-32 lg:px-1 xl:px-64 xl:text-xl 2xl:text-2xl lg:text-xl md:text-lg mb-8 ">
          Spacetotech is turning ideas into reality for a decade now. Partner
          with us &<br /> drive digitization to your business with innovation
          and technology
        </p>
        <button className="border-2  border-solid rounded-full text-white  py-2 px-4  hover:bg-blue-700  transition duration-300">
          Let's Talk!
        </button>
      </div>
      <div className=" relative   h-24 md:h-10 -top-10   sm:h-32 lg:h-52 xl:h-52 2xl:h-56 ">
        <div className="absolute bottom-0   xl:mx-32  2xl:mx-10 md:mx-8    lg:mx-16 xl:left-36  xl:right-36 lg:top-1 xl:top-4 top-1 left-7 right-7 mt-12  grid grid-cols-5  lg:grid-cols-5  gap-2 xl:gap-3 ">
          <div className="relative ">
          <Image
            src={Mobi1}
            alt="App Image 1"
            className="rounded-2xl h-28 top-4 absolute sm:h-40 sm:top-0 sm:w-44 lg:h-60 md:h-52 md:w-52 lg:top-5 lg:w-44 xl:h-60 xl:w-72 xl:top-2 2xl:w-68 2xl:h-72 2xl:-top-2 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5} 
          />
          </div>
          <div className="relative">
          <Image
            src={Mobi1}
            alt="App Image 2"
            className="rounded-2xl absolute h-24 top-8 sm:h-36 sm:top-4 sm:w-44 md:h-44 md:top-8 md:w-52 lg:h-48 lg:top-16 lg:w-44 xl:h-52 xl:w-44 xl:top-11 2xl:w-72 2xl:h-68 2xl:top-16 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          </div>
          
          <div className="relative ">
          <Image
            src={Mobi1}
            alt="App Image 2"
            className="rounded-2xl absolute h-20 top-12 sm:top-12 sm:h-28 sm:w-44 md:h-36 md:top-16 md:w-52 lg:h-40 lg:top-24 lg:w-40  xl:h-48 xl:w-44 xl:top-16 2xl:w-72 2xl:h-68 2xl:top-24 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5} 
          />
          </div>
          <div className="relative  ">
          <Image
            src={Mobi3}
            alt="App Image 3"
            className="rounded-2xl  absolute h-24 top-8 sm:h-36 sm:top-4 sm:w-44 md:top-8 md:h-44 md:w-52 lg:h-48 lg:w-44 lg:top-16 xl:h-52 xl:w-52 xl:top-12 2xl:w-72 2xl:h-68 2xl:top-14   shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          </div>
          <div className="relative">
          <Image
            src={Mobi3}
            alt="App Image 4"
            className="rounded-2xl  absolute h-32 sm:h-52 sm:-top-10 sm:w-44 md:w-52 md:-top-7 md:h-60  lg:h-72 lg:-top-7 lg:w-44 xl:h-72  xl:w-60 xl:-top-8 2xl:w-72 2xl:h-80 2xl:-top-12   shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
         
          </div>
        </div>
      </div>
      <div className="bg-violet-500 2xl:px-10">
      <div className="grid md:mx-16 mx-12 lg:px-12 grid-cols-4 h-20 xl:mx-56 2xl:mx-40 2xl:px-0 sm:h-32  sm:grid-cols-4  md:flex mt-5 justify-center md:justify-around  md:space-x-4 md:mt-40 lg:mt-8 lg:h-40 md:h-32 xl:h-48">
        <Image
          src={Mobi2}
          alt="Company Logo 1"
          className="grow  md:h-40 lg:w-40 sm:w-28 lg:mt-4 xl:w-44 xl:h-60 md:w-36 md:mx-2 mt-3 sm:mt-1 xl:mt-0  md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300  hover:scale-110"
          width={80}
          height={5}
        />
        <Image
          src={Mobi2}
          alt="Company Logo 2"
          className="grow md:h-40 lg:w-40 xl:w-44 lg:mt-4 sm:w-28 xl:h-60 md:w-36 md:mx-2 mt-3 sm:mt-1 xl:mt-0 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300 hover:scale-105"
          width={80}
          height={5}
        />
        <Image
          src={Mobi}
          alt="Company Logo 3"
          className="grow md:h-40 lg:w-40 xl:w-44  lg:mt-4 sm:w-32 xl:h-60 md:w-36 md:mx-2 mt-3 sm:mt-0 xl:mt-0 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300 hover:scale-105"
          width={80}
          height={5}
        />
        <Image
          src={Mobi}
          alt="Company Logo 4"
          className="grow md:h-40 lg:w-40 xl:w-44 lg:mt-4 sm:w-32 xl:h-60 md:w-36 md:mx-2 mt-3 sm:mt-0 xl:mt-0 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300 hover:scale-105"
          width={80}
          height={5}
        />
      </div>
      </div>
    </div>
  );
};

export default Intros;





