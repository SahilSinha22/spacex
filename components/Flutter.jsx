"use client";
import Image from 'next/image'
import React from 'react';
import FormComponent from '@/components/Popups';

import { useState } from 'react';
import Form from './Form';
import Indus from './Indus';
const Flutter = () => {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        console.log("open");
        setShowForm(true);
    };
    // State to keep track of the currently open question
    const [openQuestion, setOpenQuestion] = useState(0); // Initially, the first question is open

    // Function to handle question click
    const handleQuestionClick = (index) => {
        setOpenQuestion((prev) => (prev === index ? -1 : index)); // Toggle the clicked question
    };

    // FAQ content
    const faqContent = [
        {
            question: "Q. How do you define a top Flutter app development company in India?",
            answer:
                "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
        },
        {
            question: "Q. What are the three disadvantages of Flutter?",
            answer:
                "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
        },
        {
            question: "Q. What’s makes you Flutter development services unique?",
            answer:
                "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
        },
        {
            question: "Q. What are some of the most popular platforms using the Flutter framework?",
            answer:
                "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
        },
        {
            question: "Q. What is cross-platform app development?",
            answer:
                "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
        },
        {
            question: "Q. How does a Flutter app development company reduce costs of building Flutter apps?",
            answer:
                "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
        },
        {
            question: "Q. How does a Flutter app development company in India reduce costs of building Flutter apps?",
            answer:
                "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
        },
    ];
    return (
        <>
            <div className='mx-auto'>
                <div class="max-w-7xl items-center text-center mx-auto px-2 md:px-10 xl:px-20 2xl:px-10 py-16 md:py-20 lg:pt-28 lg:pb-10 ">
                    <h1 class="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl md:leading-loose font-bold playfair_displays mb-4">Flutter App Development Company Helps You Build Applications for Multiple Screens!</h1>
                    <p class=" md:text-2xl lg:text-xl xl:text-2xl   text-muted-foreground mb-6">Introducing big waves in modern cross-platform app development, Flutter tech <br /> builds exquisite, high-performing, and flawless mobile apps.</p>

                </div>
                <div class="flex relative flex-wrap justify-center gap-4  px-2 md:px-10 max-w-7xl mx-auto ">
                    <video
                        autoPlay
                        muted
                        loop
                        className="inset-0  object-cover"
                    >
                        <source src="/Intro.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className='absolute z-50 w-screen  -bottom-12 md:-bottom-16  bg-[#0062FF]   -rotate-6'>
                        <Image src="/bannerxlogo.png" className='w-[1290px] p-4 rotate-2 mx-auto '
                            alt='' width={1000} height={1000} />               </div>
                </div>  

                <div class=" max-w-7xl mx-auto my-10 mt-40 open_sans_display px-2 md:px-10 xl:px-20 ">
                    <h1 class="text-3xl md:text-5xl  text-primary mb-4">Introduction to <span class="text-blue-500">Flutter</span></h1>
                    <p class=" text-xl md:text-2xl leading-relaxed  mb-1">
                        Initially released by Google in 2017, it is an app framework rapidly amplified with yearly improvements and alterations. The tech is well-known for providing charismatic, distinctive, and natively
                        compiled applications supporting desktop, mobile, and cloud-based platform development. Furthermore, with robust graphics and animation libraries, the Flutter framework ensures easy building UIs
                        that respond fluently.
                    </p>
                    <p class="text-xl md:text-2xl leading-relaxed ">
                        But how to get started working with the framework?
                    </p> <p class="text-xl md:text-2xl leading-relaxed mb-4">
                        Space to Tech - a CMMI Level 3 and top-notch flutter mobile application development company, is the way to go! We are a team of technocrats that
                        will help you reach a wider audience by building an app for multiple platforms.
                    </p>
                    <p class="text-xl md:text-2xl my-5 md:my-10">The organization has weaved over 900 highly successful mobile apps and has helped businesses generate high revenue.</p>

                    <div className='flex pt-5 gap-6 md:gap-10'>
                        <div>
                            <video
                                autoPlay
                                muted
                                loop
                                className="inset-0  object-cover"
                            >
                                <source src="/fruitapplication.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div>
                                <h1 className='text-xl md:text-4xl mt-8 mb-4 font-bold playfair_displays'> Create Custom Juice</h1>
                                <p className='open_sans_display text-base  md:text-2xl '>
                                    Loren Epsom is dummy text for the <br /> print and digital
                                </p>
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-10'>
                            <video
                                autoPlay
                                muted
                                loop
                                className="inset-0  object-cover"
                            >
                                <source src="/music learning application tubik ui design (1).mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div>
                                <h1 className='text-xl md:text-4xl mt-8 mb-4 font-bold playfair_displays'> Music Learning App</h1>
                                <p className='open_sans_display text-base md:text-2xl '>
                                    Loren Epsom is dummy text for the <br /> print and digital
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" bg-background max-w-7xl mx-auto pt-10 text-foreground px-2 md:px-10 xl:px-20 ">
                    <h1 class="text-2xl md:text-4xl  mb-4">Trump Card Played By Flutter App Development Company</h1>
                    <p class="mb-6 md:text-xl leading-normal">The flutter mechanism comes along with a number of benefits, and the best flutter <br />app development company in India, UK & USA helps you bag the same.</p>
                    <div class="grid gap-4 md:grid-cols-2 open_sans_display">
                        <div class="p-4 border border-border open_sans_display  boxes bg-[#F8F8F8]">
                            <h2 class="text-xl open_sans_display pt-1 pb-1 font-semibold">Reduced Time for App Development</h2>
                            <p>
                                When working on a medium-sized Android application, the process of adjusting a layout feature can consume up to 40 seconds. However, with the built-in hot reload feature, your modifications
                                become nearly instantaneous.
                            </p>
                        </div>
                        <div class="p-4 border border-border boxes bg-[#F8F8F8]">
                            <h2 class="text-xl open_sans_display pt-1 pb-1 font-semibold">Accelerated Time To Market</h2>
                            <p>
                                Building apps separately for different platforms will require varied specialized teams. However, it takes only half a workforce of a Flutter app development company to work with the framework, as platform-specific code is not required.
                            </p>
                        </div>
                        <div class="p-4 border border-border  boxes bg-[#F8F8F8]">
                            <h2 class="text-xl open_sans_display pt-1 pb-1 font-semibold">Similar Framework to Native App Development</h2>
                            <p>
                                Building digital products also demands fabricating apps that prioritize the user experience. Therefore, the Flutter framework can create exceptional user interface animations and eliminate performance bugs.
                            </p>
                        </div>
                        <div class="p-4 border border-border  boxes bg-[#F8F8F8]">
                            <h2 class="text-xl open_sans_display pt-1 pb-1 font-semibold">Speedy App Growth</h2>
                            <p>
                                You can accelerate both development and expansion by utilizing numerous widgets in your development process. Additionally, if you aim to capture a share of the market for your application,
                                Flutter allows you to craft smooth-running apps.
                            </p>
                        </div>

                        <div class="p-4 border border-border   boxes bg-[#F8F8F8]">
                            <h2 class="text-xl open_sans_display pt-1 pb-1 font-semibold">Minimalist Design Features</h2>
                            <p>
                                Should you desire to employ unique widgets within your application, Flutter can fashion new ones. These newly crafted widgets can be utilized independently or seamlessly with pre-existing
                                ones.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=' my-16 boxshad open_sans_display p-8'>


                    <div class="max-w-7xl mx-auto md:px-6 xl:px-20 ">
                        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Types of Businesses That Prefer Using Flutter</h2>
                        <p class="md:text-lg text-white mb-6">
                            While Flutter seems like a potential framework, there may be better fits for some projects. Can you leverage the framework in your app with the help of a Flutter mobile app development company?
                            Take a look!
                        </p>
                        <div className='flex flex-col gap-4 mt-10'>


                            <div class="mb-4 gap-2 flex ">

                                <div class="lg:mt-1 "> <Image className='w-12 h-12 md:w-10 md:h-10 lg:w-6 lg:h-6 ' src="/arrowd.svg" alt="" width={16} height={16} />  </div>

                                <div>


                                    <h3 class="text-xl font-semibold text-white flex items-center"> Startups</h3>
                                    <p class="text-white">
                                        Flutter, an easy-to-use and free framework, is highly convenient for startup businesses as the mechanism also possesses good tooling and libraries for developing a top-notch app. Icing on the
                                        cake?
                                    </p>
                                </div>
                            </div>

                            <div class="mb-4 gap-2 flex ">

                                <div class="lg:mt-1 "> <Image className='w-12 h-12 md:w-10 md:h-10 lg:w-6 lg:h-6' src="/arrowd.svg" alt="" width={24} height={24} />  </div>

                                <div>
                                    <h3 class="text-xl font-semibold text-white flex items-center"> Businesses Working on MVPs</h3>
                                    <p class="text-white">
                                        A Minimum Viable Product (MVP) is a product with basic features that provides an idea of the success that can be attained. Therefore, Flutter is a dazzling option offered by a tremendous Flutter
                                        app development company for MVP creation, as it’s quick and easy.
                                    </p>
                                </div>
                            </div>

                            <div class="mb-4 gap-2 flex ">

                                <div class=" lg:mt-1"> <Image className='w-12 h-12 md:w-10 md:h-10 lg:w-6 lg:h-6' src="/arrowd.svg" alt="" width={20} height={20} />  </div>

                                <div>
                                    <h3 class="text-xl font-semibold text-white flex items-center"> Businesses with Limited Resources</h3>
                                    <p class="text-white">
                                        Flutter is an excellent option for any business with limited resources, as it saves time and money. Moreover, the right strategies fabricated by one of India’s top Flutter app development
                                        companies add the cherry on top!
                                    </p>
                                </div>
                            </div>

                            <div class="mb-4 gap-2 flex ">

                                <div class="lg:mt-1 "> <Image className='w-12 h-12 md:w-10 md:h-10 lg:w-6 lg:h-6' src="/arrowd.svg" alt="" width={16} height={16} />  </div>

                                <div>
                                    <h3 class="text-xl font-semibold text-white flex items-center"> Other Well-Established Businesses</h3>
                                    <p class="text-white">
                                        As said, there’s always scope for improvement. Therefore, businesses looking forward to building their cross-network platforms can use the Flutter framework and reach a wider audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto  bg-background text-foreground open-sans_display px-2 md:px-10 xl:px-20  ">
                    <h1 class="text-2xl md:text-3xl font-bold mb-4">Space to Tech : Your One-Stop-Shop To Success</h1>
                    <p class="mb-6  xl:text-xl ">
                        Evidently, you’re planning to build a mobile app to push your business ahead of the competition.<br /> Must be giddy with enthusiasm? But have you figured out the way to get kickstarted?
                    </p>
                    <div class="py-6 border-b-2">
                        <h2 class=" text-xl md:text-2xl font-semibold">Market Experience</h2>
                        <p className='xl:pr-40'>
                            For efficient flutter development services, your dedicated flutter mobile application development company must have a clear understanding of your target audience and their dynamic demands.
                            Undoubtedly, a team well aware of easily connecting with the audience will pave the way to success.
                        </p>
                    </div>

                    <div class="py-6 border-b-2">
                        <h2 class="text-xl md:text-2xl font-semibold">A Cutting-Edge Development Procedure</h2>
                        <p className='xl:pr-40'>
                            We offer a clear-cut app development process and stick to the pattern and strategies. Every individual involved in the project will be educated about the objectives to be achieved, so we can
                            work in the same direction and fulfill it. Techugo - a terrific flutter app development company has got you!
                        </p>
                    </div>

                    <div class="py-6 border-b-2">
                        <h2 class="text-xl md:text-2xl font-semibold">Diverse Skills and Well-Defined Roles</h2>
                        <p className='xl:pr-40'>
                            Sure, having an experience is not enough! Therefore, we have a team with diverse skills, and being a flawless and the best flutter application development company in India, we ensure that we
                            work together to weave a noteworthy digital solution for your business.
                        </p>
                    </div>

                    <div class="py-6 border-b-2">
                        <h2 class="text-xl md:text-2xl font-semibold">Elevated Coding Standards</h2>
                        <p className='xl:pr-40'>
                            A flutter app development company that chases high coding standards should always be your first pick; and fortunately, our team is familiar with using multiple programming languages that’ll do
                            justice to your app development.
                        </p>
                    </div>

                    <div class="py-6 border-b-2">
                        <h2 class="text-xl md:text-2xl font-semibold">Open Communication Channels</h2>
                        <p className='xl:pr-40'>
                            We believe in an easy-to-reach approach, which is why, being a top flutter mobile app development company, we are always available for client support via emails, chat, or even video
                            conferencing. Constant communication allows us and our clients to freely discuss and stay updated regarding the status of the project.
                        </p>
                    </div>
                    <div class="py-6 border-b-2">
                        <h2 class="text-xl md:text-2xl font-semibold">Dedication To the Project</h2>
                        <p className='xl:pr-40'>
                            We are a dedicated flutter app development company in India of 150+ experts who go to lengths to bring out the best in each of our projects. Our clients bring us raw ideas, and we turn them into a money magnet for high business revenues. We do not just work for money or success but to satisfy our clientele and offer them value.
                        </p>
                    </div>
                </div>
                {showForm && <FormComponent />}
                <div className='bg-[#5F2AE2] mt-20 xl:px-20'>


                    <div className=' md:px-10 mt-10 flex  py-10 max-w-7xl gap-4 md:gap-16 mx-auto'>
                        <div>
                            <Image src="/phoni.png" className='w-40 md:w-60 lg:w-[400px] h-full' alt="" width={1000} height={1000} />
                        </div>
                        <div className='place-content-center'>
                            <h2 className='text-xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-snug lg:leading-normal xl:leading-snug open_sans_displays font-light text-white '> What is Flutter App <br /> Development?</h2>
                            <button onClick={handleClick} class="text-white mt-4  max-w-xl text-xs md:text-sm lg:text-base xl:text-lg bg-gradient-to-r from-[#C9784F] via-[#A06A7B] to-[#6C506F] px-3  md:px-6 py-2 rounded-3xl">Let's Talk</button>

                        </div>
                    </div>

                </div>
                <div className='2xl:px-40 '>
                    <Indus />
                </div>
                <div className="bg-black h-auto pt-2  md:px-10 xl:px-20">
                    <div className="bg-black text-white open_sans_displays   max-w-7xl mx-auto text-foreground p-6">
                        <Image aria-hidden="true" alt="FAQ Icon" src="/FAQ.svg" className="mr-2" width={60} height={60} />
                        <div className="space-y-4 my-10 xl:my-20">
                            {faqContent.map((item, index) => (
                                <div key={index} className='xl:py-4'>
                                    <h3
                                        className="font-semibold border-b border-gray-700 xl:text-xl pb-2 cursor-pointer"
                                        onClick={() => handleQuestionClick(index)}
                                    >
                                        {item.question}
                                    </h3>
                                    {openQuestion === index && item.answer && (
                                        <p className="text-muted-foreground xl:text-lg  mt-2">
                                            {item.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='bg-black'>
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Flutter
