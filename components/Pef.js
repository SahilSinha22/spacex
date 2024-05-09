import React from "react";
import Image from "next/image";
import Mobi from "@/public/mobi1.png"
import Tab from "@/public/tab.png"
const Pef = () => {
  return (
    <div className="bg-black text-white sm:mx-8">
      <div className="flex justify-between items-center text-center p-10 bg-black text-white ">
        <div className="text-center px-4 md:pr-4  border-r-2">
          <h1 className="text-2xl  md:text-6xl h-45 font-bold">25+</h1>
          <p className="text-sm md:text-xl mt-2">PARTNERS</p>
        </div>
        <div className="text-center px-2 md:pr-4 border-r-2">
          <h1 className="text-2xl md:text-6xl font-bold">50+</h1>
          <p className=" text-sm md:text-xl mt-2">TEAM SIZE</p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl md:text-6xl font-bold">100+</h1>
          <p className="text-sm md:text-xl mt-2">SUCCESSFUL PRODUCTS</p>
        </div>
      </div>
      <div className="bg-red-600 p-10 text-center items-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-sedan">Okomo</h2>
        <p className="text-sm text-center md:text-2xl">
          Welcome to Okomo360, the world's first dedicated 360-degree VR
          platform. We're redefining video technology, making immersive VR
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

      <div class="bg-purple-600 text-white text-center p-8">
        <div class="text-center text-4xl md:text-6xl  font-bold mb-4 font-sedan">Netme</div>
        <p class="md:text-2xl text-sm text-center mb-8">
          NETME does not swipe, chat or judge by look - instead, we are old
          school and believe that the best acquaintance comes from meeting
          people in real life.
        </p>
        <div class="flex justify-center space-x-4">
          <div class=" h-200 ">
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

     
      <div class="bg-teal-400 font-sans">
    <div class="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class=" ">
            <div class="p-5 text-center">
                <h1 class="text-4xl text-white md:text-6xl font-sedan font-bold  mb-4">Liquiclear</h1>
                <p class="text-white  text-sm md:text-2xl">
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
