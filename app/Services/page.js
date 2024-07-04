"use client";
import React from "react";
import Mobi from "@/public/Liqiclear.svg";
import Mobi1 from "@/public/water.png";
import Mobi2 from "@/public/drop.png";
import Mobi3 from "@/public/plant.png";
import Mobi4 from "@/public/section.png";
import Mobi5 from "@/public/screen.png";
import Mobi6 from "@/public/mobile.png";


import Image from "next/image";
import Form from "@/components/Form";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  bg-background text-foreground mt-10 md:mt-40 p-4">
        <Image
          src={Mobi}
          alt="Liquiclear Logo"
          className="mb-4"
          width={300}
          height={5}
        />
        <h1 className="text-3xl Domine md:text-4xl text-center mb-4">
          Next-Generation Water Purification <br />
          and Water Softening Solutions
        </h1>
        <button className="bg-yellow-400 text-base  text-primary-foreground hover:bg-yellow/80 py-2 px-4 rounded-full mb-4">
          Let's talk <span className="font-bold">→</span>
        </button>
        <p className=" text-center Montserrat my-16 text-3xl font-light text-muted-foreground">
          Liquiclear is your one-stop solution for all water <br />
          purification and softening needs.
        </p>
      </div>
      <div className="h-12 md:h-32 xl:h-44"></div>
      <div class="relative bg-[#005AA8]  h-auto py-8">
        <div class=" absolute  -top-20 md:-top-40 xl:-top-52  px-4 sm:px-6 lg:px-32">
          <div class=" grid grid-cols-3 md:grid-cols-3  gap-8 lg:gap-28 items-center">
            <div class="text-center ">
              <Image
                class="w-full rounded-2xl h-68  object-cover "
                src={Mobi1}
                alt="Glass of water"
                width={300}
                height={5}
              />
              <h3 class="mt-4 text-white text-xl xl:text-2xl font-semibold">
                Maximum Purity
              </h3>
              <p class="mt-2 text-sm md:text-xl xl:text-2xl  text-blue-200">
                Our advanced water purification
                <br /> solutions for domestic.
              </p>
            </div>

            <div class="text-center">
              <Image
                class="w-full rounded-2xl h-68 object-cover "
                src={Mobi2}
                alt="Leaf in water drop"
                width={300}
                height={5}
              />
              <h3 class="mt-4 text-white text-xl xl:text-2xl font-semibold">
                Energy Efficient
              </h3>
              <p class="mt-2 text-sm md:text-xl xl:text-2xl text-blue-200">
                Liquiclear gives considerable thought
                <br /> to sustainability and energy.
              </p>
            </div>

            <div class="text-center items-center">
              <Image
                class="w-full rounded-2xl h-68 object-cover "
                src={Mobi3}
                alt="Plant growing in coins jar"
                width={300}
                height={5}
              />
              <h3 class="mt-4 text-white text-xl xl:text-2xl font-semibold">
                Cost Effective
              </h3>
              <p class="mt-2 text-sm md:text-xl xl:text-2xl  text-blue-200">
                We are committed to delivering best-
                <br />
                in-class water purification solutions.
              </p>
            </div>
          </div>
        </div>
        <div class="text-center mt-72 md:pt-20 mx-10 xl:mx-32 xl:mt-60 xl:pt-40 items-center">
          <Image
            class="w-full rounded-2xl h-68 object-cover "
            src={Mobi4}
            alt="Plant growing in coins jar"
            width={1000}
            height={10}
          />
        </div>
      </div>

      <div class="bg-white xl:p-8 py-10">
        <div class="max-w-4xl mx-10 xl:mx-28">
          <h2 class="text-5xl  text-zinc-900">
            Benefits of Bathroom Water Softener
          </h2>
          <p class="mt-4 font-medium text-xl text-zinc-700">
            Reduced Hard Water Effects: Hard water contains high levels of
            minerals like calcium and magnesium, which can cause various issues
            in the bathroom. Installing a water softener specifically for the
            bathroom helps alleviate these effects. Softened water prevents the
            build-up of mineral deposits on bathroom fixtures such as faucets,
            showerheads, and sinks, reducing the need for frequent cleaning and
            maintenance. It also helps prevent the formation of soap scum and
            scale on bathroom surfaces, making cleaning easier and reducing the
            need for harsh cleaning products.
          </p>
        </div>
      </div>
      <div className="mt-10 xl:mt-40 lg:mb-28 mb-20 xl:mb-40">
        <div class="relative mt-8 lg:mt-20 flex justify-center">
          <Image
            class="absolute mobile h-[220px] w-20 md:w-40 lg:w-60 xl:h-[740px] lg:h-[540px] lg:-top-20 lg:left-20 md:h-96 md:-top-8 -top-6 xl:-top-28 left-10 xl:left-40 "
            src={Mobi6}
            alt="Smartphone displaying chat app"
            width={1000}
            height={10}
          />
          <Image
            class="h-auto w-full "
            src={Mobi5}
            alt="Water softener system"
            width={800}
            height={8}
          />
        </div>
      </div>
      
    
  
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
