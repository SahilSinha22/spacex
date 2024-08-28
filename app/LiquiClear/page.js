"use client";
import React, { useState } from "react";
import Modal from '@/components/Model'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
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
import Navbar from "../component/Navbarsec";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
   <>
   <Navbar/>
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
          <button onClick={handleButtonClick} className="bg-yellow-400 text-base  text-primary-foreground hover:bg-yellow/80 py-2 px-4 rounded-full mb-4">
            Let's talk <span className="font-bold">→</span>
          </button>
          <p className=" text-center Montserrat my-16 text-3xl font-light ">
            Liquiclear is your one-stop solution for all water <br />
            purification and softening needs.
          </p>
        </div>
        <div className="h-12 md:h-32 xl:h-44"></div>
        <div className="relative bg-[#005AA8]  h-auto py-8">

          <div className=" absolute  -top-20 md:-top-40 xl:-top-52  px-4 sm:px-6 lg:px-32">
            <div className=" grid grid-cols-3 md:grid-cols-3  gap-8 lg:gap-28 items-center">
              <div className="text-center ">
                <Image src={Mobi1} className="w-full rounded-2xl h-68  object-cover " alt="glass of water" width={300} height={10}/>
                <h3 className="mt-4 text-white text-xl xl:text-2xl font-semibold">
                  Maximum Purity
                </h3>
                <p className="mt-2 text-sm md:text-xl xl:text-2xl px-2 md:px-6 text-blue-200">
                  Our advanced water purification
                  <br /> solutions for domestic.
                </p>
              </div>

              <div className="text-center">
              <Image src={Mobi2} className="w-full rounded-2xl h-68 object-cover " alt="glass of water" width={300} height={10}/>

                <h3 className="mt-4 text-white text-xl xl:text-2xl font-semibold">
                  Energy Efficient
                </h3>
                <p className="mt-2 text-sm md:text-xl xl:text-2xl px-2 lg:px-6 text-blue-200">
                  Liquiclear gives considerable thought
                   to sustainability and energy.
                </p>
              </div>

              <div className="text-center pt-4 md:pt-0 items-center">
              <Image src={Mobi3} className="w-full rounded-2xl h-68   object-cover " alt="glass of water" width={300} height={10}/>

                <h3 className="mt-4 text-white text-xl xl:text-2xl font-semibold">
                  Cost Effective
                </h3>
                <p className="mt-2 text-sm md:text-xl xl:text-2xl  lg:px-6 text-blue-200">
                  We are committed to delivering best-
                
                  in-class water purification solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center 2xl:pt-96 mt-72 md:pt-20 mx-10 xl:mx-32 xl:mt-60 xl:pt-40 items-center">
          <Image
            className="w-full rounded-2xl h-68 object-cover "
            src={Mobi4}
            alt="Plant growing in coins jar"
            width={1000}
            height={10}
          />
        </div>
        </div>
        

        <div className="bg-white xl:p-8 py-16 2xl:py-20">
          <div className="max-w-4xl mx-10 xl:mx-28">
            <h2 className="text-5xl  text-zinc-900">
              Benefits of Bathroom Water Softener
            </h2>
            <p className="mt-4 font-medium text-xl text-zinc-700">
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
          <div className="relative mt-8 lg:mt-20 flex justify-center">
            <Image
              className="absolute mobile h-[220px] w-32 md:w-60 lg:w-72 xl:w-[420px] 2xl:w-[520px] xl:h-[740px]  2xl:h-[750px] sm:h-[320px] lg:h-[560px] lg:-top-20 lg:left-20 md:h-96 md:left-12 md:-top-8 -top-6 2xl:-top-20 xl:-top-28 left-10 xl:left-40 "
              src={Mobi6}
              alt="Smartphone displaying chat app"
              width={1000}
              height={10}
            />
            <Image
              className="h-auto w-full 2xl:h-[500px] "
              src={Mobi5}
              alt="Water softener system"
              width={1000}
              height={100}
            />
          </div>
        </div>
        <div className="mx-auto mt-20">
          <div className="bg-white p-8   py-4 md:py-10">
            <div className="ml-4 xl:ml-28 mr-2 xl:mr-6 ">
              <h2 className="text-4xl  text-zinc-900">Features</h2>
              <p className="mt-4 text-xl font-medium ">
                Reduced Hard Water Effects: Hard water contains high levels of
                minerals like calcium and magnesium, which can cause various
                issues in the bathroom. Installing a water softener specifically
                for the bathroom helps alleviate these effects.
              </p>

              <div className="grid md:mx-5 xl:mx-20 px-auto py-10  text-center my-10 gap-10  grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className=" w-40 md:w-52 pr-2 2xl:w-72 2xl:pr-8 xl:pr-4 h-auto mb-2 border-t-2 text-center  rounded-2xl  p-4 shadow-zinc-400  shadow-xl">
                  <Image
                    alt="water-quality"
                    src={Feature1}
                    className="mx-auto mb-4 w-20 2xl:w-24 2xl:h-24 h-20 "
                    width={200}
                    height={2}
                  />
                  <h3 className="text-sm  2xl:text-2xl font-bold text-center mb-2">
                    Improves Water <br />
                    Quality
                  </h3>
                  <p className=" 2xl:text-xl text-sm text-center">
                    Refines the quality of water by removing harmful
                    contaminants from it.
                  </p>
                </div>
                <div className=" w-40 md:w-52 2xl:w-72 2xl:pr-8 pr-2 rounded-2xl mb-2  border-t-2  p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="soft-skin-hair"
                    src={Feature2}
                    className="mx-auto mb-4 w-20 2xl:w-24 2xl:h-24 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 className="text-sm 2xl:text-2xl font-bold text-center mb-2">
                    Soft Skin & Hair
                  </h3>
                  <p className=" 2xl:text-xl text-sm text-center">
                    Nourishes your skin & hair.
                  </p>
                </div>
                <div className="  w-40 md:w-52 pr-2 2xl:w-72 2xl:pr-8 rounded-2xl mb-2  border-t-2 p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="minimizes-scaling"
                    src={Feature3}
                    className="mx-auto mb-4 2xl:w-24 w-20 2xl:h-24 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 className="text-sm font-bold 2xl:text-2xl text-center mb-2">
                    Minimizes Scaling
                  </h3>
                  <p className=" 2xl:text-xl text-sm text-center">
                    Reduces scaling on tiles.
                  </p>
                </div>
                <div className="w-40 md:w-52 pr-2 2xl:w-72 2xl:pr-8  rounded-2xl mb-2  border-t-2 p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="helps-choked-pipes"
                    src={Feature4}
                    className="mx-auto mb-4 w-20 2xl:w-24 2xl:h-24 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 className="text-sm font-bold 2xl:text-2xl text-center mb-2">
                    Helps Choked Pipes
                  </h3>
                  <p className=" 2xl:text-xl  text-sm text-center">
                    Reduces mineral deposit, leading to choke-free pipes.
                  </p>
                </div>
                <div className="w-40 md:w-52 pr-2 2xl:w-72 2xl:pr-8  rounded-2xl mb-2  border-t-2  p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="24-hour-operation"
                    src={Feature5}
                    className="mx-auto mb-4 w-20 2xl:w-24 2xl:h-24 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 className="text-sm font-bold 2xl:text-2xl text-center mb-2">
                    24 Hour Operation
                  </h3>
                  <p className=" 2xl:text-xl text-sm text-center">
                    Operates smoothly 24x7 for 365 days without stopping.
                  </p>
                </div>
                <div className="w-40 md:w-52 pr-2   2xl:w-72 2xl:pr-8 rounded-2xl mb-2  border-t-2 p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="increases-appliance-life"
                    src={Feature6}
                    className="mx-auto mb-4 w-20 2xl:w-24 2xl:h-24 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 className="text-sm font-bold 2xl:text-2xl text-center mb-2">
                    Increases Appliance Life
                  </h3>
                  <p className=" 2xl:text-xl text-sm text-center">
                    Maximizes the life of appliances by keeping your pipes &
                    geysers rust-free.
                  </p>
                </div>
                <div className="w-40 md:w-52 pr-2 2xl:w-72 2xl:pr-8 rounded-2xl mb-2  border-t-2  p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="saves-water"
                    src={Feature7}
                    className="mx-auto mb-4 w-20 2xl:w-24 2xl:h-24 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 className="text-sm font-bold 2xl:text-2xl text-center mb-2">
                    Saves Water
                  </h3>
                  <p className=" 2xl:text-xl text-sm text-center">
                    Saves more water than other conventional Water Softeners.
                  </p>
                </div>
                <div className="w-40 md:w-52 pr-2 2xl:w-72 2xl:pr-8  rounded-2xl mb-2   border-t-2  p-4   shadow-zinc-400  shadow-xl">
                  <Image
                    aria-hidden="true"
                    alt="multi-port-valve"
                    src={Feature8}
                    className="mx-auto mb-4 w-20 2xl:w-24 2xl:h-24 h-20"
                    width={500}
                    height={5}
                  />
                  <h3 className="text-sm font-bold 2xl:text-2xl text-center mb-2">
                    Multi Port Valve (MPV)
                  </h3>
                  <p className=" 2xl:text-xl text-sm text-center">
                    First in segment easy to use, with an excellent sealing
                    mechanism to avoid leaks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center p-6">
          <h2 className="text-2xl font-semibold mb-4">Tech Stacks</h2>
          <div className="w-full  bori 2xl:max-w-[1600px] rounded-xl p-1 max-w-4xl">
          <div className="bg-[#000000]  p-6 rounded-xl grid grid-cols-3 md:grid-cols-6 justify-around w-full 2xl:max-w-[1600px] px-6 py-10 max-w-4xl">
            <div className="flex flex-col items-center my-4">
              <Image
                src={Tech1}
                alt="Azure"
                className="rounded-full w-20 h-20 2xl:w-28 2xl:h-28 bg-green-500 p-5"
                width={100}
                height={10}
              />
              <span className="mt-2 text-white">Azure</span>
            </div>
            <div className="flex flex-col items-center my-4">
              <Image
                src={Tech2}
                alt="Quickblox"
                className="rounded-full w-20 h-20 2xl:w-28 2xl:h-28 xl:w-20 xl:h-20 bg-yellow-500 p-5"
                width={100}
                height={10}
              />
              <span className="mt-2 text-white">Quickblox</span>
            </div>
            <div className="flex flex-col items-center my-4">
              <Image
                src={Tech3}
                alt="Angular 8"
                className="rounded-full w-20 h-20 2xl:w-28 2xl:h-28 bg-red-500 p-5 xl:w-20 xl:h-20"
                width={100}
                height={10}
              />
              <span className="mt-2 text-white">Angular 8</span>
            </div>
            <div className="flex flex-col items-center my-4">
              <Image
                src={Tech4}
                alt="MySQL"
                className="rounded-full w-20 h-20 2xl:w-28 2xl:h-28 bg-green-500 object-contain p-2 xl:w-20 xl:h-20"
                width={100}
                height={10}
              />
              <span className="mt-2 text-white">MySQL</span>
            </div>
            <div className="flex flex-col items-center my-4">
              <Image
                src={Tech5}
                alt="Node Js"
                className="rounded-full w-20 h-20 2xl:w-28 2xl:h-28 bg-yellow-500 p-5 xl:w-20 xl:h-20"
                width={100}
                height={10}
              />
              <span className="mt-2 text-white">Node Js</span>
            </div>
            <div className="flex flex-col items-center my-4">
              <Image
                src={Tech6}
                alt="React Native"
                className="rounded-full w-20 h-20 2xl:w-28 2xl:h-28 bg-red-500 p-5 xl:w-20 xl:h-20"
                width={100}
                height={10}
              />
              <span className="mt-2 ml-6 md:ml-8 text-white">React Native</span>
            </div>
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

            <button onClick={handleButtonClick} className="border-white border mt-4 mb-6 lg:mb-8 lg:mt-4 banner hover:bg-gradient-to-r hover:from-red-400 hover:to-purple-600 rounded-full  inline-flex items-center md:text-base bg-amber-500  py-2 px-4 xl:px-8   text-white lg:mr-10 xl:mr-0">
              Let's Talk
            </button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
        <Form />
      </div>
      </>
    
  );
};

export default Page;
