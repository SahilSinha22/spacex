import React from "react";
import Image from "next/image";
import Mobi from "@/public/mobi1.png"
import Tab from "@/public/tab.png"
const Pef = () => {
  return (
    <div className="bg-black text-white ">
      <div className="flex justify-between  lg:h-auto lg:items-center lg:text-center p-5 lg:p-20 bg-black text-white ">
        <div className="text-center px-2 sm:pr-5 md:pr-10  border-r-gray-900 border-r-2">
          <h1  className="text-2xl proportional-nums md:text-6xl  lg:text-8xl lg:pt-8 h-45 font-semibold">25+</h1>
          <p className="text-lg font-light lg:text-4xl lg:py-8 mt-2">PARTNERS</p>
        </div>
        <div className="text-center px-2 sm:pr-5 md:pr-10 border-r-gray-900 border-r-2">
          <h1 className="text-2xl proportional-nums md:text-6xl lg:text-8xl lg:pt-8 font-bold">50+</h1>
          <p className=" text-lg font-light lg:text-4xl px-4 sm:px-1 lg:py-8 mt-2">TEAM SIZE</p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl proportional-nums md:text-6xl lining-nums lg:text-8xl lg:pt-8 font-bold">100+</h1>
          <p className="text-lg font-light pr-2  lg:text-4xl lg:py-8 mt-2">SUCCESSFUL PRODUCTS</p>
        </div>
      </div>
      <div className="bg-red-600 p-10 text-center items-center">
        <h2 className="text-2xl md:text-6xl pt-8 font-bold mb-4 font-sedan">Okomo</h2>
        <p className="text-sm text-center md:text-2xl">
          Welcome to Okomo360, the world's first dedicated 360-degree VR
          platform. We're redefining<br/> video technology, making immersive VR
          experiences not just a luxury.
        </p>
        <div className="flex justify-center mt-6">
          <Image
            src={Mobi}
            alt="VR Experience"
            className="mr-4"
            width={800}
            height={600}
          />
        </div>
      </div>

      <div className="bg-purple-600 text-white text-center p-8">
        <div className="text-center text-4xl md:text-6xl pt-8  font-bold mb-4 font-sedan">Netme</div>
        <p className="md:text-2xl text-sm text-center mb-8">
          NETME does not swipe, chat or judge by look - instead, we are old
          school and believe <br/>that the best acquaintance comes from meeting
          people in real life.
        </p>
        <div className="flex justify-center space-x-4">
          <div className=" h-200 ">
          <Image
            src={Mobi}
            alt="VR Experience"
            className="mr-4"
            width={800}
            height={600}
          />           
          </div>
         
        </div>
      </div>

     
      <div className="bg-teal-400 font-sans">
    <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className=" ">
            <div className="p-5 text-center">
                <h1 className="text-4xl text-white md:text-6xl pt-8 font-sedan font-bold  mb-4">Liquiclear</h1>
                <p className="text-white text-center text-sm md:text-2xl">
                    Liquiclear is your one-stop solution for all water purification and softening needs. We bring you a wide range of water purifiers and softeners for commercial and domestic use.
                </p>
                <Image
            src={Tab}
            alt="VR Experience"
            className="mr-4"
            width={800}
            height={600}
          />
            </div>
            
            </div>
        </div>
    </div>
</div>

     
   
  );
};

export default Pef;
