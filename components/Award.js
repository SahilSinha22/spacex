
import React from "react";
import Image from "next/image";
const Award = () => {
  return (
    <div className="bg-white text-zinc-800 p-8 sm:mx-4 xl:mx-28 mt-10 lg:mt-20 ">
      <div className="text-between flex flex-col md:flex-row justify-between">
        <div className="">
          <h1 className="text-2xl  font-extrabold mb-2 md:mb-4 sm:text-4xl md:text-5xl playfair_display">
            Awards & Recognition
          </h1>
          <p className="text-lg outfit_dispaly font-light md:text-xl mb-10">
            We have been featured and certified by recognised authorities
            Worldwide.
          </p>
        </div>
        <div className="flex flex-col">
         
          <div className="flex flex-row justify-center ">
            <div className="relative -top-2 -left-10  flex-row flex text-6xl md:text-7xl font-extrabold">
              C
              <div className="absolute  -top-12 md:-top-12 md:left-4 left-2 text-7xl md:text-8xl font-semibold md:font-extrabold text-red-600">
                .
              </div>
              <div className=" absolute left-20 top-5 md:left-28 text-4xl text-center md:text-6xl font-bold mb-4 text-red-600">
                4.9
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-2 mb-2 text-blue-600">
            <span className="md:text-4xl">★</span>
            <span className="md:text-4xl">★</span>
            <span className="md:text-4xl">★</span>
            <span className="md:text-4xl">★</span>
            <span className="md:text-4xl">★</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
        <div className="flex   grayscale text-center hover:grayscale-0 flex-col items-center">
         <div className="rounded-xl p-6 hover:drop-shadow-lg bg-gray-200  hover:bg-white hover:shadow">
          <Image
            className=""
            src="TopDevelopers 1.svg"
            alt="Top Developer"
            width={150}
            height={10}
          />
          </div>
          <p className="mt-2 font-semibold text-center">Top Developer</p>
          <p className="text-sm text-center">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex grayscale text-center  hover:grayscale-0 flex-col items-center">
        <div className="rounded-xl px-2 py-6  lg:px-2 lg:py-7 xl:py-9 xl:px-4 sm:p-8 bg-gray-200 hover:drop-shadow-lg  hover:bg-white hover:shadow">
          <Image
            src="freelancer-1.svg"
            alt="Freelancer"
            width={150}
            height={10}
          />
          </div>
          <p className="mt-2 font-semibold">Freelancer</p>
          <p className="text-sm">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex  grayscale text-center hover:grayscale-0 flex-col items-center">
        <div className="rounded-xl p-6 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
          <Image
            src="AppFutura-1.svg"
            alt="AppFutura"
            width={150}
            height={10}
          />
          </div>
          <p className="mt-2 font-semibold">AppFutura</p>
          <p className="text-sm">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex grayscale hover:grayscale-0 flex-col text-center items-center">
        <div className="rounded-xl p-8 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
          <Image src="GoodFirms.svg" alt="GoodFirms" width={150} height={10} />
          </div>
          <p className="mt-2 font-semibold">GoodFirms</p>
          <p className="text-sm text-center ">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
        <div className="rounded-xl p-8 bg-gray-200 hover:drop-shadow-lg  hover:bg-white hover:shadow">
          <Image src="Clutch-1.svg" alt="Clutch" width={150} height={10} />
</div>
          <p className="mt-2 font-semibold">Clutch</p>
          <p className="text-sm">Top Mobile App<br/> Developers</p>
        </div>
      </div>
      <div className="flex flex-row w-full xl:justify-between ">
        <div className="flex flex-col lg:flex-row w-full">
         
            <div className="  text-4xl flex flex-col sm:text-4xl md:text-5xl lg:text-5xl  mb-4">
              <div className="font-bold playfair ">
                Grow with our
                <br /> technical expertise
              </div>
              <div className="text-lg  sm:text-lg lg:text-xl md:text-3xl">
                Our team is experienced with various different mobile
                <br />
                technologies and can help you choose the right tech.
             
            </div>
          </div>
          <div className=" grid grid-rows-1 sm:px-14 lg:px-32  xl:px-20 xl:justify-right items-right">
            <div className="relative flex flex-row   grayscale">
              <Image
                className="sm:w-40 md:w-48   lg:w-40 xl:w-48 2xl:w-52"
                src="top_clutch.svg"
                alt="Clutch"
                width={150}
                height={10}
              />
              <Image
                className="absolute sm:w-40 lg:w-40  2xl:w-52 contrast-100 xl:w-48 md:w-48 top-2  bottom-10 lg:top-10 xl:left-20 xl:top-4 2xl:top-2 left-16 md:top-5 md:left-20"
                src="top_clutch.svg"
                alt="Clutch"
                width={150}
                height={10}
              />
              <Image
                className="sm:w-40  lg:w-40  xl:w-48 2xl:w-52 md:w-48"
                src="top_clutch.svg"
                alt="Clutch"
                width={150}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;