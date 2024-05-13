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
      <div className="  mx-auto flex flex-col items-center text-center">
        <h1 className="text-2xl lg:text-5xl md:text-4xl font-bold mb-4 font-sedan">
          Transforming Business with <br />
          Digital Innovation & Data-driven Apps
        </h1>
        <p className=" text-lg lg:text-2xl md:text-xl mb-8 ">
          Spacetotech is turning ideas into reality for a decade now. Partner
          with us &<br /> drive digitization to your business with innovation
          and technology
        </p>
        <button className="border-2  border-solid rounded-full text-white font-bold py-2 px-4  hover:bg-blue-700  transition duration-300">
          Let's Talk!
        </button>
      </div>
      <div className=" relative   h-20 md:h-5  sm:h-40 lg:h-60 xl:h-80 ">
        <div className="absolute sm:px-10 xl:px-40 md:px-20 xl:left-36  xl:right-36 lg:top-1 xl:top-4 top-1 left-7 right-7 mt-12  grid grid-cols-5  lg:grid-cols-5  gap-2 xl:gap-4">
          <Image
            src={Mobi1}
            alt="App Image 1"
            className="rounded-xl lg:h-64 lg:w-52  xl:h-80  shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          <Image
            src={Mobi1}
            alt="App Image 2"
            className="rounded-lg lg:h-64 lg:w-52  xl:h-80 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          <Image
            src={Mobi1}
            alt="App Image 2"
            className="rounded-lg lg:h-64 lg:w-52 xl:h-80 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          <Image
            src={Mobi3}
            alt="App Image 3"
            className="rounded-lg lg:h-64 lg:w-52 xl:h-80 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
          <Image
            src={Mobi3}
            alt="App Image 4"
            className="rounded-lg lg:h-64 lg:w-52 xl:h-80 shadow-lg transform hover:scale-105 transition duration-300"
            width={100}
            height={5}
          />
        </div>
      </div>
      <div className="grid md:px-20  grid-cols-4 h-24 xl:px-60 2xl:px-40 sm:px-10 sm:grid-cols-4 px-5 md:flex mt-5 justify-center md:justify-around  md:space-x-4 md:mt-40 lg:mt-8 bg-purple-500 md:h-32 xl:h-60">
        <Image
          src={Mobi2}
          alt="Company Logo 1"
          className=" md:h-40 lg:w-28 xl:w-40 xl:h-60 md:w-20 md:mx-5 mt-10 sm:mt-3 xl:mt-8  md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300"
          width={50}
          height={5}
        />
        <Image
          src={Mobi2}
          alt="Company Logo 2"
          className="md:h-40 lg:w-28 xl:w-40 xl:h-60 md:w-20 md:mx-5 mt-10 sm:mt-3 xl:mt-8 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300"
          width={50}
          height={5}
        />
        <Image
          src={Mobi}
          alt="Company Logo 3"
          className="md:h-40 lg:w-28 xl:w-40 xl:h-60 md:w-20 md:mx-5 mt-10 sm:mt-3 xl:mt-8 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300"
          width={50}
          height={5}
        />
        <Image
          src={Mobi}
          alt="Company Logo 4"
          className="md:h-40 lg:w-28 xl:w-40 xl:h-60 md:w-20 md:mx-5 mt-10 sm:mt-3 xl:mt-8 md:mt-0  md:pt-0 sm:pt-5 opacity-75 hover:opacity-100 transition duration-300"
          width={50}
          height={5}
        />
      </div>
    </div>
  );
};

export default Intros;
