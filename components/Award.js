import React from "react";
import Image from "next/image";
import Mobi from "@/public/1grow.png";  // Adjust the import path if necessary
import Mobis from "@/public/Image 13.png"
const Award = () => {
  return (
    <div className="bg-white text-zinc-800 p-8 sm:mx-4 xl:mx-28 mt-10 lg:mt-20">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-extrabold mb-2 md:mb-4 sm:text-4xl md:text-5xl playfair_display">
            Awards & Recognition
          </h1>
          <p className="text-lg outfit_dispaly font-light md:text-xl mb-10">
            We have been featured and certified by recognized authorities Worldwide.
          </p>
        </div>
        <div className=" relative w-40 2xl:w-60 left-16 sm:left-0 sm:top-1 sm:w-52 md:w-40 xl:-top-8 md:top-2 justify-center 2xl:left-6  -top-10">
          <Image src={Mobis} alt="" className="" width={180} height={10}/>
          
      </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        <div className="flex hover:grayscale text-center grayscale-0 flex-col items-center">
          <div className="rounded-xl p-4 md:p-6 drop-shadow-lg hover:bg-gray-200 bg-white ">
            <Image
              src="/TopDevelopers 1.svg"  // Updated to public directory path
              alt="Top Developer"
              className="2xl:h-40 2xl:w-60 contrast-100" 
              width={150}
              height={10}
            />
          </div>
          <p className="mt-2 font-semibold text-center">Top Developer</p>
          <p className="text-sm text-center">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex hover:grayscale text-center grayscale-0 flex-col items-center">
          <div className="rounded-xl px-2 py-6 lg:px-2 lg:py-7 xl:py-9  xl:px-4 sm:p-8 hover:bg-gray-200 drop-shadow-lg bg-white ">
            <Image
              src="/freelancer-1.svg" 
              className="2xl:h-36 md:h-32  lg:h-28 xl:h-28 2xl:w-60" // Updated to public directory path
              alt="Freelancer"
              width={150}
              height={12}
            />
          </div>
          <p className="mt-2 font-semibold">Freelancer</p>
          <p className="text-sm">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex hover:grayscale text-center grayscale-0 flex-col items-center">
          <div className="rounded-xl p-4 md:p-6 hover:bg-gray-200 drop-shadow-lg bg-white ">
            <Image
              src="/AppFutura-1.svg"  // Updated to public directory path
              className="2xl:h-40 2xl:w-60 contrast-100" 
              alt="AppFutura"
              width={150}
              height={10}
            />
          </div>
          <p className="mt-2 font-semibold">AppFutura</p>
          <p className="text-sm">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex hover:grayscale grayscale-0 flex-col text-center items-center">
          <div className="rounded-xl p-4 md:p-8 hover:bg-gray-200 drop-shadow-lg bg-white ">
            <Image src="/GoodFirms.svg" className="2xl:h-36 2xl:w-60 contrast-100"  alt="GoodFirms" width={150} height={10} />
          </div>
          <p className="mt-2 font-semibold">GoodFirms</p>
          <p className="text-sm text-center">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex hover:grayscale text-center grayscale-0 flex-col items-center">
          <div className="rounded-xl p-4 md:p-7 hover:bg-gray-200 drop-shadow-lg bg-white ">
            <Image src="/Clutch-1.svg" className="2xl:h-40 2xl:w-60 contrast-100"   alt="Clutch" width={150} height={10} />
          </div>
          <p className="mt-2 font-semibold">Clutch</p>
          <p className="text-sm">Top Mobile App<br/> Developers</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row lg:flex-row xl:justify-between w-full">
          <div className="xl:mt-2 text-4xl w-full  flex flex-col sm:text-3xl md:text-3xl xl:text-5xl lg:text-5xl mb-4">
            <div className="font-bold playfair">
              Grow with our
              <br /> technical expertise
            </div>
            <div className="text-lg outfit_dispalys  font-light  sm:text-lg lg:text-xl 2xl:text-2xl md:text-xl">
              Our team is experienced with various different mobile
              
              technologies and can help you choose the right tech.
            </div>
          </div>
          <div className="sm:pl-14 lg:pl-32 xl:mx-2 mt-0 w-full h-full  xl:pl-52 xl:justify-right items-right">
            <Image src={Mobi} alt="Technical Expertise" width={500} height={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;

