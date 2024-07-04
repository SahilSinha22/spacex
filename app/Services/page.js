"use client";
import React from "react";

import Form from "@/components/Form";

const page = () => {
  return (
   
      

      
      
    
  <div>
      <div className="xl:mx-40 mx-10 mb-20 w-auto h-auto  rounded-2xl banner">
        <div className=" text-white mt-10 mb-2 mx-5 xl:mt-5 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
          <h1 className="text-lg mt-4 xl:mt-12  xl:mx-0 lg:text-5xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
            Our Robust Mobile & Web App <br /> Development Solutions Stands Your
            <br />
            Business at the top!
          </h1>

          <button className="border-white border mt-4 mb-6 lg:mb-8 lg:mt-4 banner hover:bg-gradient-to-r hover:from-red-400 hover:to-purple-600 rounded-full  inline-flex items-center md:text-base bg-amber-500  py-2 px-4 xl:px-8   text-white lg:mr-10 xl:mr-0">
            Let's Talk
          </button>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default page;
