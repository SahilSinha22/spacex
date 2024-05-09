import React from "react";
import Image from "next/image";
const Award = () => {
  return (
    <div class="bg-white text-zinc-800 p-8 sm:mx-8">
      <div class="text-between flex flex-col md:flex-row justify-between">
        <div className="">
          <h1 class="text-4xl font-bold mb-4 md:text-6xl font-sedan">Awards & Recognition</h1>
          <p class="text-lg md:text-2xl mb-10">
            We have been featured and certified by recognised authorities
            Worldwide.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center ">
            <div className="relative -left-10 flex-row flex text-6xl md:text-8xl font-extrabold">C
            <div className="absolute  -top-12 md:-top-8 md:left-5 left-3 text-8xl md:text-12xl font-extrabold text-red-600">.</div>
            <div class=" absolute left-20 top-5 text-4xl text-center md:text-6xl font-bold mb-4 text-red-600">
              4.9
            </div>
</div>
            
          </div>
          <div class="flex justify-center space-x-2 mb-20 text-blue-600">
            <span class="md:text-4xl">★</span>
            <span class="md:text-4xl">★</span>
            <span class="md:text-4xl">★</span>
            <span class="md:text-4xl">★</span>
            <span class="md:text-4xl">★</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
        <div class="flex grayscale text-center hover:grayscale-0 flex-col items-center">
          <Image
          className=""
            src="TopDevelopers 1.svg"
            alt="Top Developer"
            width={150}
            height={10}
          />
          <p class="mt-2 font-semibold">Top Developer</p>
          <p class="text-sm">Top Mobile App Developers</p>
        </div>
        <div class="flex grayscale text-center mt-4 hover:grayscale-0 flex-col items-center">
          <Image
            src="freelancer-1.svg"
            alt="Freelancer"
            width={150}
            height={10}
          />
          <p class="mt-2 font-semibold">Freelancer</p>
          <p class="text-sm">Top Mobile App Developers</p>
        </div>
        <div class="flex grayscale text-center hover:grayscale-0 flex-col items-center">
          <Image
            src="AppFutura-1.svg"
            alt="AppFutura"
            width={150}
            height={10}
          />
          <p class="mt-2 font-semibold">AppFutura</p>
          <p class="text-sm">Top Mobile App Developers</p>
        </div>
        <div class="flex grayscale hover:grayscale-0 flex-col text-center items-center">
          <Image src="GoodFirms.svg" alt="GoodFirms" width={150} height={10} />
          <p class="mt-2 font-semibold">GoodFirms</p>
          <p class="text-sm text-center ">Top Mobile App Developers</p>
        </div>
        <div class="flex grayscale text-center hover:grayscale-0 flex-col items-center">
          <Image src="Clutch-1.svg" alt="Clutch" width={150} height={10} />

          <p class="mt-2 font-semibold">Clutch</p>
          <p class="text-sm">Top Mobile App Developers</p>
        </div>
      </div>
<div className="flex flex-row w-full ">
      <div class="w-full"> 
      <div className="flex flex-row justify-between">
        <div class="text-lg md:text-6xl font-bold font-sedan mb-4">
          Grow with our<br/> technical expertise
        </div>
        <div className=" grid grid-rows-1 items-right">
        <div className="relative flex flex-row   grayscale">
      <Image  className="" src="top_clutch.svg" alt="Clutch" width={100} height={10} />
      <Image className="absolute top-2 bottom-5 left-10 md:top-5 md:left-10" src="top_clutch.svg" alt="Clutch" width={100} height={10} />
      <Image className="" src="top_clutch.svg" alt="Clutch" width={100} height={10} />
      </div>

      </div>
        </div>
        <p class="text-sm md:text-3xl">
          Our team is experienced with various different mobile<br/>technologies and
          can help you choose the right tech.
        </p>
      </div>
      
      </div>
    </div>
  );
};

export default Award;
