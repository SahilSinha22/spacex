import React from "react";
import Image from "next/image";
import Mobi from "@/public/1grow.png";  // Adjust the import path if necessary

const Award = () => {
  return (
    <div className="bg-white text-zinc-800 p-8 sm:mx-4 xl:mx-28 mt-10 lg:mt-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-extrabold mb-2 md:mb-4 sm:text-4xl md:text-5xl playfair_display">
            Awards & Recognition
          </h1>
          <p className="text-lg outfit_dispaly font-light md:text-xl mb-10">
            We have been featured and certified by recognized authorities Worldwide.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <div className="relative -top-2 -left-6 md:-left-16 2xl:-left-20 flex-row flex text-6xl md:text-7xl font-extrabold">
              C
              <div className="absolute -top-12 md:-top-12 md:left-4 left-2 text-7xl md:text-8xl font-semibold md:font-extrabold text-red-600">
                .
              </div>
              <div className="absolute left-12 top-2 md:left-20 text-5xl text-center md:text-10xl font-extrabold mb-4 text-red-600">
                4.9
              </div>
            </div>
          </div>
          <div className="flex justify-center ml-8 md:l-14 2xl:ml-0 space-x-2 mb-2 text-blue-600">
            <span className="text-3xl md:text-4xl">★</span>
            <span className="text-3xl md:text-4xl">★</span>
            <span className="text-3xl md:text-4xl">★</span>
            <span className="text-3xl md:text-4xl">★</span>
            <span className="text-3xl md:text-4xl">★</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
          <div className="rounded-xl p-6 hover:drop-shadow-lg bg-gray-200 hover:bg-white hover:shadow">
            <Image
              src="/TopDevelopers 1.svg"  // Updated to public directory path
              alt="Top Developer"
              width={150}
              height={10}
            />
          </div>
          <p className="mt-2 font-semibold text-center">Top Developer</p>
          <p className="text-sm text-center">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
          <div className="rounded-xl px-2 py-6 lg:px-2 lg:py-7 xl:py-9 xl:px-4 sm:p-8 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
            <Image
              src="/freelancer-1.svg"  // Updated to public directory path
              alt="Freelancer"
              width={150}
              height={10}
            />
          </div>
          <p className="mt-2 font-semibold">Freelancer</p>
          <p className="text-sm">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
          <div className="rounded-xl p-6 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
            <Image
              src="/AppFutura-1.svg"  // Updated to public directory path
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
            <Image src="/GoodFirms.svg" alt="GoodFirms" width={150} height={10} />
          </div>
          <p className="mt-2 font-semibold">GoodFirms</p>
          <p className="text-sm text-center">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
          <div className="rounded-xl p-8 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
            <Image src="/Clutch-1.svg" alt="Clutch" width={150} height={10} />
          </div>
          <p className="mt-2 font-semibold">Clutch</p>
          <p className="text-sm">Top Mobile App<br/> Developers</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row xl:justify-between w-full">
          <div className="xl:mt-2 text-4xl w-full  flex flex-col sm:text-4xl md:text-5xl xl:text-5xl lg:text-5xl mb-4">
            <div className="font-bold playfair">
              Grow with our
              <br /> technical expertise
            </div>
            <div className="text-lg outfit_dispaly font-light  sm:text-lg lg:text-xl md:text-3xl">
              Our team is experienced with various different mobile
              
              technologies and can help you choose the right tech.
            </div>
          </div>
          <div className="sm:pl-14 lg:pl-32 xl:mx-2 mt-0 w-full h-full xl:pl-52 xl:justify-right items-right">
            <Image src={Mobi} alt="Technical Expertise" width={400} height={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;

