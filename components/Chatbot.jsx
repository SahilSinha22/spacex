"use client"
import React, {useState} from 'react'
import Image from 'next/image'

import Indus from './Indus'
import FAQ from './FAQ'
import Form from './Form'
import Modal from '@/components/Model'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
function Chatbot() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };
    return (
        <>
        <div>
           
            <div className="  ">
                <div className=" pt-10 sm:pt-20  lg:pt-28 xl:pt-20 ">
                    <div className=" Open_Sans mt-10 mb-2 mx-5 xl:mt-32 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
                        <h2 className="text-xl xl:mx-0 lg:text-5xl sm:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
                            Chatbot Services : A Floodgate of <br />Opportunities for Business
                        </h2>
                        <p className=" Open_Sans w-[300px] sm:w-[450px] lg:w-[650px]  2xl:w-[850px] text-base Open_Sans   xl:text-xl 2xl:text-2xl lg:text-xl md:text-lg mb-8 ">
                            Have you ever wondered if a computer program could impersonate human interaction?
                        </p>
                        <button className="border-2 z-20 text-sm  border-solid rounded-full text-white  py-4 px-6  bg-gradient-to-r from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
                            Get in touch with our experts
                        </button>
                    </div>
                </div>
                <div className='m-auto w-auto  my-10 flex justify-center'>

                
                <Image src="/Chatbot/Bot.webp" alt=' ' width={1000} height={1000} />
                </div>
            </div>

            <div className='w-full'>
                    <div className=" w-screen bg-[#0062FF] banix  transform -translate-x-1/2">
                        <Image
                            src="/bannerxlogo.webp"
                            className="xl:w-[1270px]  p-4 rotate-2 mx-auto"
                            alt=""
                            width={1000}
                            height={1000}
                        />

                    </div>
                </div>
            <div className=" max-w-7xl mx-auto my-14 xl:mt-40 open_Sans px-4 sm:px-10 xl:px-20 ">
                <h2 className="text-3xl md:text-4xl xl:text-5xl  text-primary mb-4">Why do you need the Chatbot Integration?</h2>
                <p className=" text-lg md:text-xl leading-relaxed  mb-1">
                    Why would any business need a dedicated team to listen to customer queries 24/7 when chatbot development can deliver the same experience?
                </p>
                <p className="text-lg md:text-xl leading-relaxed mt-8 ">
                    Undoubtedly, an online business holds an expanded reach, and the consumers associated with the brand can be anywhere, considering geographical boundaries! Moreover, they can reach out for customer support anytime; therefore, it is essential to be there for them.
                </p> <p className="text-lg md:text-xl leading-relaxed mb-4 mt-8">
                    Fortunately, chatbot apps are the way to go! The mechanism enables your business to stand out and acquire a competitive edge in the global marketplace.
                </p>
            </div>
            <div className=" max-w-7xl mx-auto my-10 xl:my-20 open_Sans px-4 sm:px-10 xl:px-20 ">
                <h2 className="text-3xl md:text-4xl xl:text-5xl  text-primary mb-4">Why Chatbot Integration?</h2>
                <p className=" text-lg md:text-xl leading-relaxed  mb-1">
                    Why would any business need a dedicated team to listen to customer queries 24/7 when chatbot development can deliver the same experience?
                </p>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 open_Sans text-base md:text-xl my-10  '>
                    <div className=' p-2 md:p-6 flex flex-col text-center justify-center items-center bg-[#EDFFF5]'>
                        <Image src="/Chatbot/Chatbot1.webp" alt="" width={60} height={60} />
                        <p className='mt-4'>
                            It bridges the gap between a business and its audience
                        </p>
                    </div>
                    <div className='p-2 md:p-6 flex flex-col text-center justify-center items-center bg-[#EDFFF5]'>
                    <Image src="/Chatbot/Chatbot2.webp" alt="" width={60} height={60} />
                    <p className='mt-4'>
                            Performs efficiently 24/7
                        </p>
                    </div>
                    <div className='p-2 md:p-6 flex flex-col text-center justify-center items-center bg-[#EDFFF5]'>
                    <Image src="/Chatbot/Chatbot3.webp" alt="" width={60} height={60} />
                    <p className='mt-4'>
                            Enables collecting Valuable data
                        </p>
                    </div>
                    <div className='p-2 md:p-6 flex flex-col text-center justify-center items-center bg-[#EDFFF5]'>
                    <Image src="/Chatbot/Chatbot4.webp" alt="" width={60} height={60} />
                    <p className='mt-4'>
                            Saves time, money and other resources
                        </p>
                    </div>
                </div>
               
            </div>
            <div className='bannerx py-10  '>
                <div className='max-w-7xl flex flex-col justify-start m-auto my-10 h-auto text-white '>
                    <div className='mx-4 lg:mx-10 xl:px-10'>
                        <h2 className='text-2xl md:text-4xl xl:text-5xl playfair_display  '>
                            How can Space to Tech help <br /> you achieve the Desired Results?       </h2>
                        <p className='my-4 text-base md:text-lg xl:text-xl Open_Sans  md:w-[640px] lg:w-[850px] xl:w-[1050px]'>
                            Techugo, the best chatbot development company in USA, Canada, UK, and UAE, comprises a brood of experts dedicated to delivering efficient chatbot apps.
                        </p>

                        <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 text-[#000000] h-auto mt-8 gap-6 lg:gap-10 justify-around  '>
                            <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-4 md:p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-black Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-white text-3xl'>01</span>
                                    </div>
                                </div>
                                <p className=' text-lg md:text-xl mt-4  Open_Sans'>
                                    Helps businesses reply <br /> promptly
                                </p>
                            </div>
                            <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-4 md:p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-black Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-white text-3xl'>02</span>
                                    </div>
                                </div>
                                <p className='  text-lg md:text-xl mt-4 Open_Sans'>
                                    Build a secure communication networks
                                </p>
                            </div>
                            <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-black Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-white text-3xl'>03</span>
                                    </div>
                                </div>
                                <p className='  text-lg md:text-xl mt-4  Open_Sans'>
                                    Ensure reduced workload</p>
                            </div>
                            <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-4 md:p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-black Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-white text-3xl'>04</span>
                                    </div>
                                </div>
                                <p className=' text-lg md:text-xl mt-4  Open_Sans'>
                                    Forwards relevant post notifications
                                </p>
                            </div>
                            <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-4 md:p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-black Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-white text-3xl'>05</span>
                                    </div>
                                </div>
                                <p className=' text-lg md:text-xl mt-4  Open_Sans'>
                                    Automates the support system
                                </p>
                            </div>
                            <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-black Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-white text-3xl'>06</span>
                                    </div>
                                </div>
                                <p className='  text-lg md:text-xl mt-4  Open_Sans'>
                                    Allows order placement via bots</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className=" max-w-7xl mx-auto my-10 mt-20 open_Sans px-4 sm:px-10 xl:px-20 ">
                <h2 className="text-3xl md:text-4xl xl:text-5xl  text-primary mb-4">Do you want to Hop on Board?</h2>
                <h2 className=" py-2 text-xl md:text-xl  xl:text-2xl leading-relaxed  mb-1">
                    Then you need us!
                </h2>
                <div className='flex flex-col my-4'>
                    <h2 className="  text-base md:text-lg  xl:text-xl leading-relaxed  mb-1">
                        — We will improve your customer service patterns.
                    </h2>
                    <h2 className=" text-base md:text-lg xl:text-xl leading-relaxed  mb-1">
                        — We will help you serve efficiently to the customers for their satisfaction.
                    </h2>
                    <h2 className=" text-base md:text-lg xl:text-xl  leading-relaxed  mb-1">
                        — We help you build a business trusted by your customers in the long run.
                    </h2>
                    <h2 className=" text-base md:text-lg xl:text-xl  leading-relaxed  mb-1">
                        — Our Chatbot apps help you monitor consumer’s shopping patterns and collect relevant data.
                    </h2>
                    <h2 className=" text-base md:text-lg xl:text-xl leading-relaxed  mb-1">
                        — We ensure improved lead generation.
                    </h2>
                    <h2 className=" text-base md:text-lg xl:text-xl leading-relaxed  mb-1">
                        — We build an experience that’ll enable you to connect with your customers globally.
                    </h2>
                </div>
            </div>


            <div className='bg-[#20A9B1] Poppind mt-10 '>


                <div className='  m-auto  mt-10 flex justify-around py-10 max-w-7xl gap-4 lg:gap-20  mx-auto'>
                    <div>
                        <Image src="/Chatbot/Chats.webp" className='w-40 sm:w-60 lg:w-[600px] h-full' alt="" width={1000} height={1000} />
                    </div>
                    <div className='place-content-center w-auto '>
                        <h2 className='text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl leading-snug lg:leading-normal xl:leading-relaxed open_sans_displays font-light text-white '> Request custom <br />Chatbot Development </h2>
                        <button onClick={handleButtonClick} className="text-[#000000] font-bold mt-4 md:mt-10 open_Sans  max-w-xl text-xs md:text-sm lg:text-base xl:text-lg bg-[#ffffff] px-3  md:px-6 py-2 rounded-3xl">Let&apos;s Talk</button>

                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>

            </div>
            <div className=" max-w-7xl mx-auto my-10 md:mt-40 open_sans_display px-4 sm:px-10 xl:px-20 ">
            <div className='flex pt-5 gap-6 md:gap-10'>
                        <div>
                            <video
                                autoPlay
                                muted
                                loop
                                className="inset-0  object-cover"
                            >
                                <source src="/Chatbot/fruitapplication.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div>
                                <h2 className='text-lg md:text-4xl mt-8 mb-4 font-bold playfair_displays'> Create Custom Juice</h2>
                                <p className='open_sans_display text-sm  md:text-2xl '>
                                    Loren Epsom is dummy text for the <br /> print and digital
                                </p>
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-10 '>
                            <video
                                autoPlay
                                muted
                                loop
                                className="inset-0  object-cover "
                            >
                                <source src="/Chatbot/music learning application tubik ui design.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div>
                                <h2 className='text-lg md:text-4xl mt-8 mb-4 font-bold playfair_displays'> Music Learning App</h2>
                                <p className='open_sans_display text-sm md:text-2xl '>
                                    Loren Epsom is dummy text for the <br /> print and digital
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='max-w-[1530px] m-auto'>
            <Indus/>
            </div>
            <FAQ/>
            <Form/>
        </div>
        </>
    )
}

export default Chatbot
