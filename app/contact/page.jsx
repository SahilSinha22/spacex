"use client";
import React, { useState } from "react";
import Navbar from '../component/Navbar'
import Contact from "@/components/Contact"
import Image from 'next/image'
import Form from '@/components/Form'
import Mobis from "@/public/Image 13.png"
import Modal from '@/components/Model'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };
  const logos = [
    "/6intro.png",
    "/7intro.png",
    "/8intro.png",
    "/9intro.png",
    

  ];
  return (
    <>
      <div className=' '>
      
        <Contact />

       
      </div>
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
            <Image src={Mobis} alt="" className="" width={180} height={10} />

          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
            <div className="rounded-xl p-6 hover:drop-shadow-lg bg-gray-200 hover:bg-white hover:shadow">
              <Image
                src="/TopDevelopers 1.svg"  // Updated to public directory path
                alt="Top Developer"
                className="2xl:h-40 2xl:w-60"
                width={150}
                height={10}
              />
            </div>
            <p className="mt-2 font-semibold text-center">Top Developer</p>
            <p className="text-sm text-center">Top Mobile App<br /> Developers</p>
          </div>
          <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
            <div className="rounded-xl px-2 py-6 lg:px-2 lg:py-7 xl:py-9  xl:px-4 sm:p-8 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
              <Image
                src="/freelancer-1.svg"
                className="2xl:h-36 md:h-32 lg:h-28 xl:h-28 2xl:w-60" // Updated to public directory path
                alt="Freelancer"
                width={150}
                height={12}
              />
            </div>
            <p className="mt-2 font-semibold">Freelancer</p>
            <p className="text-sm">Top Mobile App<br /> Developers</p>
          </div>
          <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
            <div className="rounded-xl p-6 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
              <Image
                src="/AppFutura-1.svg"  // Updated to public directory path
                className="2xl:h-40 2xl:w-60"
                alt="AppFutura"
                width={150}
                height={10}
              />
            </div>
            <p className="mt-2 font-semibold">AppFutura</p>
            <p className="text-sm">Top Mobile App<br /> Developers</p>
          </div>
          <div className="flex grayscale hover:grayscale-0 flex-col text-center items-center">
            <div className="rounded-xl p-8 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
              <Image src="/GoodFirms.svg" className="2xl:h-36 2xl:w-60" alt="GoodFirms" width={150} height={10} />
            </div>
            <p className="mt-2 font-semibold">GoodFirms</p>
            <p className="text-sm text-center">Top Mobile App<br /> Developers</p>
          </div>
          <div className="flex grayscale text-center hover:grayscale-0 flex-col items-center">
            <div className="rounded-xl p-7 bg-gray-200 hover:drop-shadow-lg hover:bg-white hover:shadow">
              <Image src="/Clutch-1.svg" className="2xl:h-40 2xl:w-60" alt="Clutch" width={150} height={10} />
            </div>
            <p className="mt-2 font-semibold">Clutch</p>
            <p className="text-sm">Top Mobile App<br /> Developers</p>
          </div>
        </div>

      </div>
      <div className="xl:mx-40 mx-10  w-auto h-auto  rounded-2xl md:rounded-none bannerx">
        <div className=" text-white mt-10 mb-2 mx-4 xl:mt-5  leading-loose lg:mb-8   md:mx-auto flex flex-col items-center text-center">
          <h1 className="text-lg mt-4 xl:mt-12 leading-loose  xl:mx-0 lg:text-4xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
          Get your ideas validated. <br/> Let’s give you an honest opinion.!
          </h1>

          <button onClick={handleButtonClick} className=" mt-2 mb-6 lg:mb-8 md:mt-4 text-black bg-white hover:bg-gradient-to-r hover:from-red-400 hover:to-purple-600 rounded-full  inline-flex items-center md:text-base  py-2 px-4 xl:px-8    lg:mr-10 xl:mr-0">
            Let's Talk
          </button>
        </div>
      </div>

      <div className="xl:mx-40 mx-10 mb-20 w-auto h-auto">
      <div className="flex text-2xl text-black font-semibold gap-4 py-10 ">
          <h2>Find us on Google Maps</h2>
          <Image src="/Path.svg" alt="" width={20} height={20} />
        </div>

        <div className="map-responsive">
        <iframe   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.246309723172!2d77.361188!3d28.61108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5697f8ef789%3A0x89218b014db0771c!2sPlatina%20Heights!5e0!3m2!1sen!2sin!4v1724229359599!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>   
             </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
      <Form />
    </>
  )
}

export default Page
