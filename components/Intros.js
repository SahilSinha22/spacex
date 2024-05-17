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
        <h1 className="text-2xl xl:mx-0 lg:text-5xl md:text-4xl font-bold mb-4 playfair">
          Transforming Business with <br />
          Digital Innovation & Data-driven Apps
        </h1>
        <p className=" text-sm  px-8 sm:px-24 md:px-32 lg:px-1 xl:px-64 xl:text-xl lg:text-xl md:text-lg mb-8 ">
          Spacetotech is turning ideas into reality for a decade now. Partner
          with us &<br /> drive digitization to your business with innovation
          and technology
        </p>
        <button className="border-2  border-solid rounded-full text-white font-bold py-2 px-4  hover:bg-blue-700  transition duration-300">
          Let's Talk!
        </button>
      </div>
      <div className=" relative   h-28 md:h-10 -top-10  sm:h-32 lg:h-52 xl:h-56 2xl:h-64 ">
        <div className="absolute bottom-0 xl:px-16 2xl:px-40  md:px-20 xl:left-36  xl:right-36 lg:top-1 xl:top-4 top-1 left-7 right-7 mt-12  grid grid-cols-5  lg:grid-cols-5  gap-2 xl:gap-4">
          <div className="relative">
          <Image
            src={Mobi1}
            alt="App Image 1"
            className="rounded-xl h-32 top-4 absolute sm:h-40 sm:top-0 sm:w-44 lg:h-60 md:h-52 md:w-52 lg:top-5 lg:w-52 xl:h-72 xl:-top-4 2xl:h-72 2xl:top-5  shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5} 
          />
          </div>
          <div className="relative">
          <Image
            src={Mobi1}
            alt="App Image 2"
            className="rounded-lg absolute h-28 top-8 sm:h-36 sm:top-4 sm:w-44 md:h-44 md:top-8 md:w-52 lg:h-56 lg:top-10 lg:w-52 xl:h-60 xl:top-8  2xl:h-60 2xl:top-16 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          </div>
          <div className="relative ">
          <Image
            src={Mobi1}
            alt="App Image 2"
            className="rounded-lg absolute h-24 top-12 sm:top-8 sm:h-32 sm:w-44 md:h-40 md:top-12 md:w-52 lg:h-52 lg:top-14 lg:w-52 xl:h-56 xl:top-12 2xl:h-56 2xl:top-20 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5} 
          />
          </div>
          <div className="relative ">
          <Image
            src={Mobi3}
            alt="App Image 3"
            className="rounded-lg absolute h-28 top-8 sm:h-36 sm:top-4 sm:w-44 md:top-8 md:h-44 md:w-52 lg:h-56 lg:top-10 xl:h-60 xl:top-8 2xl:h-60 2xl:top-16 lg:w-52 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          </div>
          <div className="relative">
          <Image
            src={Mobi3}
            alt="App Image 4"
            className="rounded-lg  absolute h-36 sm:h-52 sm:-top-10 sm:w-44 md:w-52 md:-top-7 md:h-60 2xl:-top-5 xl:-top-10 lg:h-72 lg:-top-5 lg:w-52 xl:h-80 2xl:h-80 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          </div>
        </div>
      </div>
      <div className="grid md:px-20 lg:px-12 2xl:px-56 grid-cols-4 h-20 xl:px-40 sm:h-24  sm:px-10 sm:grid-cols-4 px-8 md:flex mt-5 justify-center md:justify-around  md:space-x-4 md:mt-40 lg:mt-8 bg-purple-500 md:h-32 xl:h-56">
        <Image
          src={Mobi2}
          alt="Company Logo 1"
          className=" md:h-40 lg:w-28 sm:w-20 xl:w-40 xl:h-60 md:w-20 md:mx-5 mt-8 sm:mt-0 xl:mt-8  md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300"
          width={50}
          height={5}
        />
        <Image
          src={Mobi2}
          alt="Company Logo 2"
          className="md:h-40 lg:w-28 xl:w-40 sm:w-20 xl:h-60 md:w-20 md:mx-5 mt-8 sm:mt-0 xl:mt-8 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300"
          width={50}
          height={5}
        />
        <Image
          src={Mobi}
          alt="Company Logo 3"
          className="md:h-40 lg:w-28 xl:w-40 sm:w-20 xl:h-60 md:w-20 md:mx-5 mt-8 sm:mt-0 xl:mt-8 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300"
          width={50}
          height={5}
        />
        <Image
          src={Mobi}
          alt="Company Logo 4"
          className="md:h-40 lg:w-28 xl:w-40 sm:w-20 xl:h-60 md:w-20 md:mx-5 mt-8 sm:mt-0 xl:mt-8 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300"
          width={50}
          height={5}
        />
      </div>
    </div>
  );
};

export default Intros;
