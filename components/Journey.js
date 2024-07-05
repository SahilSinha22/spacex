import React from "react";
import Image from "next/image";
const Journey = () => {
  return (
    <div className="max-w-7xl 2xl:mt-20 px-4 py-12 mx-10 ">
      <div className="mx-5 md:mx-20">
        <h2 className="text-3xl md:text-6xl font-bold playfair text-left">
          Spacetotech journey of <br /> Mobile app development
        </h2>
        <p className="text-left md:text-2xl text-zinc-600 mt-4">
          Our top mobile app development company proudly serves a diverse range
          of industries. Through innovative technology solutions, we empower
          businesses in numerous sectors to engage customers, optimize
          operations, and unlock new opportunities for growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2   space-y-5 lg:grid-cols-3 xl:grid-cols-5  justify-center items-center space-x-8 mt-8">
          <div className="text-center   mt-4 ml-10">
            <div className="w-48 h-48 2xl:w-52 2xl:h-52  border-dashed mb-4 border-2  mx-auto  flex items-center justify-center rounded-full">
              <div className="relative hover:bg-slate-600 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48 w-40 h-40    bg-gray-200 rounded-full items-center">
                <Image
                  className="absolute top-12 left-12 2xl:top-14 2xl:left-16"
                  src="1jour.svg"
                  alt="Inception"
                  width={60}
                  height={8}
                />
              </div>
            </div>
            <div className="text-xl md:text-xl font-bold">Inception</div>
          </div>
          <div className="text-center lg:mx-2  ">
            <div className="w-48 h-48 2xl:mx-6   2xl:w-52 2xl:h-52 border-dashed border-2  mx-auto mb-2 flex items-center justify-center  rounded-full">
              <div className="relative  hover:bg-slate-600 transform hover:scale-110 transition duration-300  2xl:w-48 2xl:h-48 w-40 h-40    bg-gray-200 rounded-full items-center">
                <Image
                  className="absolute top-10 left-10 2xl:top-12 2xl:left-16"
                  src="2jour.svg"
                  alt="Design"
                  width={80}
                  height={8}
                />
              </div>
            </div>
            <div className="text-xl md:text-xl font-bold">Design</div>
          </div>
          <div className="text-center lg:mx-2">
            <div className="w-48 h-48 2xl:mx-6 2xl:w-52 2xl:h-52  border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
              <div className="relative hover:bg-slate-600 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48 w-40 h-40    bg-gray-200 rounded-full items-center">
                <Image
                  className="absolute top-10 left-10 2xl:top-14 2xl:left-14"
                  src="3jour.svg"
                  alt="Development"
                  width={80}
                  height={8}
                />
              </div>
            </div>
            <div className="text-xl md:text-xl font-bold">Development</div>
          </div>
          <div className="text-center lg:mx-2">
            <div className="w-48 h-48 2xl:mx-6 2xl:w-52 2xl:h-52  border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
              <div className="relative  hover:bg-slate-600 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48 w-40 h-40    bg-gray-200 rounded-full items-center">
                <Image
                  className="absolute top-10 left-10 2xl:top-14 2xl:left-14"
                  src="4jour.svg"
                  alt="Stabilization"
                  width={80}
                  height={8}
                />
              </div>
            </div>
            <div className="text-xl md:text-xl font-bold">Stabilization</div>
          </div>
          <div className="text-center lg:mx-2">
            <div className="w-48 h-48 2xl:mx-6 2xl:w-52 2xl:h-52  border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
              <div className="relative hover:bg-slate-600 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48 w-40 h-40    bg-gray-200 rounded-full items-center">
                <Image
                  className="absolute top-8 left-6 2xl:top-12 2xl:left-10"
                  src="5jour.svg"
                  alt="Deployment"
                  width={100}
                  height={10}
                />
              </div>
            </div>
            <div className="text-xl md:text-xl font-bold">Deployment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;

