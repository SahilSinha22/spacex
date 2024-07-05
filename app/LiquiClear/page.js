"use client";
import React from "react";
import Mobi from "@/public/Liqiclear.svg";
import Mobi1 from "@/public/water.png";
import Mobi2 from "@/public/drop.png";
import Mobi3 from "@/public/plant.png";
import Mobi4 from "@/public/sec.png"


import Mobi5 from "@/public/screen.png";
import Mobi6 from "@/public/mobile.png";
import Feature1 from "@/public/quality.png";
import Feature2 from "@/public/sensitive-skin.png";
import Feature3 from "@/public/shower.png";
import Feature4 from "@/public/waters.png";
import Feature5 from "@/public/24hours.png";
import Feature6 from "@/public/water-tap.png";
import Feature7 from "@/public/water-cycle.png";
import Feature8 from "@/public/steering-wheel.png";


import Tech1 from "@/public/azure.png";
import Tech2 from "@/public/Quickblock.png";
import Tech3 from "@/public/angular.png";
import Tech4 from "@/public/mysql.png";
import Tech5 from "@/public/nodejs.png";
import Tech6 from "@/public/react.png";

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
                <Image src={Mobi1} class="w-full rounded-2xl h-68  object-cover " alt="glass of water" width={300} height={10}/>
                <h3 class="mt-4 text-white text-xl xl:text-2xl font-semibold">
                  Maximum Purity
                </h3>
                <p class="mt-2 text-sm md:text-xl xl:text-2xl  text-blue-200">
                  Our advanced water purification
                  <br /> solutions for domestic.
                </p>
              </div>

              <div class="text-center">
              <Image src={Mobi2} class="w-full rounded-2xl h-68  object-cover " alt="glass of water" width={300} height={10}/>

                <h3 class="mt-4 text-white text-xl xl:text-2xl font-semibold">
                  Energy Efficient
                </h3>
                <p class="mt-2 text-sm md:text-xl xl:text-2xl text-blue-200">
                  Liquiclear gives considerable thought
                  <br /> to sustainability and energy.
                </p>
              </div>

              <div class="text-center items-center">
              <Image src={Mobi3} class="w-full rounded-2xl h-68  object-cover " alt="glass of water" width={300} height={10}/>

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
          <div class="text-center 2xl:pt-96 mt-72 md:pt-20 mx-10 xl:mx-32 xl:mt-60 xl:pt-40 items-center">
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
              minerals like calcium and magnesium, which can cause various
              issues in the bathroom. Installing a water softener specifically
              for the bathroom helps alleviate these effects. Softened water
              prevents the build-up of mineral deposits on bathroom fixtures
              such as faucets, showerheads, and sinks, reducing the need for
              frequent cleaning and maintenance. It also helps prevent the
              formation of soap scum and scale on bathroom surfaces, making
              cleaning easier and reducing the need for harsh cleaning products.
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
        <div className="mx-auto mt-20">
          <div class="bg-white p-8   py-4 md:py-10">
            <div class="ml-4 xl:ml-28 mr-2 xl:mr-6 ">
              <h2 class="text-4xl  text-zinc-900">Features</h2>
              <p class="mt-4 text-xl font-medium ">
                Reduced Hard Water Effects: Hard water contains high levels of
                minerals like calcium and magnesium, which can cause various
                issues in the bathroom. Installing a water softener specifically
                for the bathroom helps alleviate these effects.
              </p>

              <div class="grid md:mx-5 xl:mx-20 px-auto py-10  text-center my-10 gap-10  grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class=" w-40 md:w-52 pr-2 xl:pr-4 h-auto mb-2 border-t-2 text-center  rounded-2xl  p-4 shadow-zinc-400  shadow-xl">
                  <Image
                    alt="water-quality"
                    src={Feature1}
                    class="mx-auto mb-4 w-20 h-20 "
                    width={200}
                    height={2}
                  />
                  <h3 class="text-sm font-bold text-center mb-2">
                    Improves Water <br />
                    Quality
                  </h3>
                  <p class="text-muted-foreground text-sm text-center">
                    Refines the quality of water by removing harmful
                    contaminants from it.
                  </p>
                </div>
                <div class=" w-40 md:w-52 pr-2 rounded-2xl mb-2  border-t-2  p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="soft-skin-hair"
                    src={Feature2}
                    class="mx-auto mb-4 w-20 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 class="text-sm font-bold text-center mb-2">
                    Soft Skin & Hair
                  </h3>
                  <p class="text-muted-foreground text-sm text-center">
                    Nourishes your skin & hair.
                  </p>
                </div>
                <div class="  w-40 md:w-52 pr-2 rounded-2xl mb-2  border-t-2 p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="minimizes-scaling"
                    src={Feature3}
                    class="mx-auto mb-4 w-20 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 class="text-sm font-bold text-center mb-2">
                    Minimizes Scaling
                  </h3>
                  <p class="text-muted-foreground text-sm text-center">
                    Reduces scaling on tiles.
                  </p>
                </div>
                <div class="w-40 md:w-52 pr-2   rounded-2xl mb-2  border-t-2 p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="helps-choked-pipes"
                    src={Feature4}
                    class="mx-auto mb-4 w-20 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 class="text-sm font-bold text-center mb-2">
                    Helps Choked Pipes
                  </h3>
                  <p class="text-muted-foreground text-sm text-center">
                    Reduces mineral deposit, leading to choke-free pipes.
                  </p>
                </div>
                <div class="w-40 md:w-52 pr-2   rounded-2xl mb-2  border-t-2  p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="24-hour-operation"
                    src={Feature5}
                    class="mx-auto mb-4 w-20 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 class="text-sm font-bold text-center mb-2">
                    24 Hour Operation
                  </h3>
                  <p class="text-muted-foreground text-sm text-center">
                    Operates smoothly 24x7 for 365 days without stopping.
                  </p>
                </div>
                <div class="w-40 md:w-52 pr-2   rounded-2xl mb-2  border-t-2 p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="increases-appliance-life"
                    src={Feature6}
                    class="mx-auto mb-4 w-20 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 class="text-sm font-bold text-center mb-2">
                    Increases Appliance Life
                  </h3>
                  <p class="text-muted-foreground text-sm text-center">
                    Maximizes the life of appliances by keeping your pipes &
                    geysers rust-free.
                  </p>
                </div>
                <div class="w-40 md:w-52 pr-2  rounded-2xl mb-2  border-t-2  p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="saves-water"
                    src={Feature7}
                    class="mx-auto mb-4 w-20 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 class="text-sm font-bold text-center mb-2">
                    Saves Water
                  </h3>
                  <p class="text-muted-foreground text-sm text-center">
                    Saves more water than other conventional Water Softeners.
                  </p>
                </div>
                <div class="w-40 md:w-52 pr-2   rounded-2xl mb-2   border-t-2  p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="multi-port-valve"
                    src={Feature8}
                    class="mx-auto mb-4 w-20 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 class="text-sm font-bold text-center mb-2">
                    Multi Port Valve (MPV)
                  </h3>
                  <p class="text-muted-foreground text-sm text-center">
                    First in segment easy to use, with an excellent sealing
                    mechanism to avoid leaks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center p-6">
          <h2 class="text-2xl font-semibold mb-4">Tech Stacks</h2>
          <div class="bg-blue-600 p-6 rounded-xl grid grid-cols-3 md:grid-cols-6 justify-around w-full px-6 py-10 max-w-4xl">
            <div class="flex flex-col items-center my-4">
              <Image
                src={Tech1}
                alt="Azure"
                class="rounded-full w-20 h-20 bg-green-500 p-5"
                width={100}
                height={10}
              />
              <span class="mt-2 text-white">Azure</span>
            </div>
            <div class="flex flex-col items-center my-4">
              <Image
                src={Tech2}
                alt="Quickblox"
                class="rounded-full w-20 h-20 xl:w-20 xl:h-20 bg-yellow-500 p-5"
                width={100}
                height={10}
              />
              <span class="mt-2 text-white">Quickblox</span>
            </div>
            <div class="flex flex-col items-center my-4">
              <Image
                src={Tech3}
                alt="Angular 8"
                class="rounded-full w-20 h-20 bg-red-500 p-5 xl:w-20 xl:h-20"
                width={100}
                height={10}
              />
              <span class="mt-2 text-white">Angular 8</span>
            </div>
            <div class="flex flex-col items-center my-4">
              <Image
                src={Tech4}
                alt="MySQL"
                class="rounded-full w-20 h-20 bg-green-500 p-5 xl:w-20 xl:h-20"
                width={100}
                height={10}
              />
              <span class="mt-2 text-white">MySQL</span>
            </div>
            <div class="flex flex-col items-center my-4">
              <Image
                src={Tech5}
                alt="Node Js"
                class="rounded-full w-20 h-20 bg-yellow-500 p-5 xl:w-20 xl:h-20"
                width={100}
                height={10}
              />
              <span class="mt-2 text-white">Node Js</span>
            </div>
            <div class="flex flex-col items-center my-4">
              <Image
                src={Tech6}
                alt="React Native"
                class="rounded-full w-20 h-20 bg-red-500 p-5 xl:w-20 xl:h-20"
                width={100}
                height={10}
              />
              <span class="mt-2 ml-6 md:ml-8 text-white">React Native</span>
            </div>
          </div>
        </div>

        <div className="xl:mx-40 mx-10 mb-20 w-auto h-auto  rounded-2xl banner">
          <div className=" text-white mt-10 mb-2 mx-5 xl:mt-5 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
            <h1 className="text-lg mt-4 xl:mt-12  xl:mx-0 lg:text-5xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
              Our Robust Mobile & Web App <br /> Development Solutions Stands
              Your
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
