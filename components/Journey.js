import React from "react";
import Image from "next/image";
const Journey = () => {
  return (
    <>
    <div className="max-w-7xl 2xl:mt-20 px-4 py-12 md:mx-10 ">
      <div className="mx-5 md:mx-0 xl:mx-20">
        <h2 className="text-3xl md:text-6xl font-bold playfair lg:w-[650px] text-left">
          Spacetotech journey of  Mobile app development
        </h2>
        <p className="text-left md:text-2xl text-zinc-600 mt-4">
          Our top mobile app development company proudly serves a diverse range
          of industries. Through innovative technology solutions, we empower
          businesses in numerous sectors to engage customers, optimize
          operations, and unlock new opportunities for growth.
        </p>
        
      </div>
    </div>
    <div className="grid flex-1 md:grid-cols-3 gap-5 2xl:max-w-[1580px] xl:flex  justify-around px-4 max-w-full  mx-5 md:mx-10 xl:mx-28 mt-8">
    <div className="text-center flex flex-col items-center justify-center ">
      <div className="w-48 h-48  logo-img  2xl:w-52 2xl:h-52  border-dashed mb-4 border-2    flex items-center justify-center rounded-full">
        <div className=" hover:bg-amber-100 transform hover:scale-110 transition duration-300 m-auto 2xl:w-48 2xl:h-48  w-40 h-40  flex justify-center  bg-gray-200 rounded-full items-center">
          <Image
            className=" fill-white stroke-cyan-500  "
            src="1jour.svg"
            alt="Inception"
            width={60}
            height={8}
          />
        </div>
      </div>
      <div className="text-xl md:text-xl 2xl:text-2xl open_sans_displays font-bold">Inception</div>
    </div>
    <div className="text-center items-center flex  flex-col justify-center ">
      <div className="w-48 h-48  logo-img    2xl:w-52 2xl:h-52 border-dashed border-2  mb-2 flex items-center justify-center  rounded-full">
        <div className="  hover:bg-amber-100  m-auto flex justify-center transform hover:scale-110 transition duration-300  2xl:w-48 2xl:h-48  w-40 h-40    bg-gray-200 rounded-full items-center">
          <Image
            className=""
            src="2jour.svg"
            alt="Design"
            width={80}
            height={8}
          />
        </div>
      </div>
      <div className="text-xl md:text-xl 2xl:text-2xl open_sans_displays font-bold">Design</div>
    </div>
    <div className="text-center items-center flex flex-col justify-center ">
      <div className="w-48 h-48  logo-img   2xl:w-52 2xl:h-52  border-dashed border-2 mb-2 flex items-center justify-center  rounded-full">
        <div className="flex justify-center m-auto hover:bg-amber-100 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48  w-40 h-40    bg-gray-200 rounded-full items-center">
          <Image
            className=""
            src="3jour.svg"
            alt="Development"
            width={80}
            height={8}
          />
        </div>
      </div>
      <div className="text-xl md:text-xl 2xl:text-2xl open_sans_displays font-bold">Development</div>
    </div>
    <div className="text-center items-center flex flex-col justify-center">
      <div className="w-48 h-48  logo-img  2xl:w-52 2xl:h-52  border-dashed border-2  mb-2 flex items-center justify-center  rounded-full">
        <div className="flex justify-center m-auto  hover:bg-amber-100 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48  w-40 h-40    bg-gray-200 rounded-full items-center">
          <Image
            className=""
            src="4jour.svg"
            alt="Stabilization"
            width={80}
            height={8}
          />
        </div>
      </div>
      <div className="text-xl md:text-xl 2xl:text-2xl open_sans_displays font-bold">Stabilization</div>
    </div>
    <div className="text-center items-center flex flex-col justify-center">
      <div className="w-48 h-48  logo-img     2xl:w-52 2xl:h-52  border-dashed border-2  mb-2 flex items-center justify-center  rounded-full">
        <div className="flex justify-center m-auto hover:bg-amber-100 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48  w-40 h-40    bg-gray-200 rounded-full items-center">
          <Image
            className=""
            src="5jour.svg"
            alt="Deployment"
            width={100}
            height={10}
          />
        </div>
      </div>
      <div className="text-xl md:text-xl  2xl:text-2xl open_sans_displays font-bold">Deployment</div>
    </div>
  </div>
  </>
  );
};

export default Journey;

