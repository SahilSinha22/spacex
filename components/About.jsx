
"use client";
import Image from 'next/image'
import React, { useEffect, useCallback } from "react";
import Aboutproc from "@/components/Aboutprocess"
import Leader from '@/components/Leadership';
const About = () => {

    const isInViewport = useCallback((element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }, []);

    const updateNumber = useCallback((element) => {
        const targetValue = parseInt(element.dataset.target);
        let currentValue = 0;
        const interval = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                element.textContent = currentValue;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }, []);

    const animateNumbers = useCallback(() => {
        const numberElements = document.querySelectorAll(".number");
        numberElements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add("fall-in");
                updateNumber(element);
            }
        });
    }, [isInViewport, updateNumber]);

    useEffect(() => {
        document.addEventListener("scroll", animateNumbers);
        animateNumbers();

        return () => {
            document.removeEventListener("scroll", animateNumbers);
        };
    }, [animateNumbers]);


    return (
        <div className='items-center text-center my-4  '>


            <div className=' m-auto p-4 md:px-10 xl:px-40    max-w-screen-2xl 2xl:max-w-screen-2xl 2xl:mx-auto  '>
                <Image src="/About.png" className="w-full h-full" alt='' width={1000} height={1000} />
                <div class="flex flex-col max-w-7xl text-center  justify-center place-content-center leading-relaxed ">
                    <h2 class="text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-center text-primary playfair_display">Know our team who is putting day & night for your<br/> wonderful digital experience</h2>
                    <p class="mt-4 text-xs md:text-sm lg:text-xl 2xl:text-2xl text-muted-foreground text-center pen_sans_display m-auto">
                        Spacetotech is turning ideas into reality for a decade now. Partner with us & drive<br /> digitization to your business with innovation and technology.
                    </p>
                </div>
            </div>

            <div className='b-2 bg-[#EFFBFF] my-10 py-8'>
                <span className='border-black border-b py-1 text-lg md:text-2xl lg:text-3xl playfair_displays font-bold'> Location we are Catering</span>
                <div className='place-content-center py-10 items-center flex justify-center'>


                    <Image src="/World.png" alt="" width={1000} height={1000} />
                </div>
            </div>


<div className='bg-black w-screen  p-4 '>
    <div className='max-w-[1530px] m-auto'>

  
            <div className="bg-black   flex flex-col lg:flex-row gap-6 mx-auto py-10 xl:py-20 xl:px-20  2xl:mx-20 text-white h-full w-full overflow-hidden">

                <div class=" text-center lg:text-left ">
                    <div className='border-b py-6 inline-block border-white'>

                   
                    <h2 class="text-4xl  mb-4">With the Best</h2>
                    <p class="text-4xl mb-4">Services & Quality Always</p>
                    </div>
                    <div class="flex items-center justify-center lg:justify-start  mb-1 mt-4">
                        <span class="text-yellow-500 text-4xl">★ ★ ★ ★ ★</span>
                        <span class="ml-2 text-4xl open_sans_displays font-semibold px-4">5.0</span>
                    </div>
                    <p class="text-[#656565] mt-2 text-2xl">A five-star rating company</p>
                </div>
                <div className="flex justify-around pt-6 lg:h-auto lg:items-center lg:text-center p-5 2xl:p-10 bg-black text-white">
                    <div className="text-center items-center px-4 md:px-10 lg:px-4 border-gray-600  border-r-2">
                        <div className="flex flex-row text-center  ">
                            <h1
                                className="number Bebas_Neue text-6xl proportional-nums md:text-7xl lg:text-7xl xl:text-8xl  2xl:text-9xl lg:pt-8"
                                data-target="25"
                            >
                                0
                            </h1>
                            <span className="Bebas_Neue text-6xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl   2xl:text-9xl">
                                +
                            </span>
                        </div>
                        <p className="text-sm sm:text-lg  text-left open_sans_displays  md:text-2xl  2xl:text-xl ">
                            PARTNERS
                        </p>
                    </div>
                    <div className="text-center px-4 md:px-10 lg:px-4 border-gray-600  border-r-2">
                        <div className="flex flex-row text-center ">
                            <h1
                                className="number Bebas_Neue text-6xl proportional-nums md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl lg:pt-8"
                                data-target="50"
                            >
                                0
                            </h1>
                            <span className="Bebas_Neue text-5xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl 2xl:text-9xl">
                                +
                            </span>
                        </div>
                        <p className="text-sm sm:text-lg text-left md:text-center font-light md:text-2xl  px-0  2xl:text-xl sm:px-1 lg:pr-16">
                            TEAM SIZE
                        </p>
                    </div>
                    <div className="text-center px-4 md:px-10 lg:px-4">
                        <div className="flex flex-row  xl:text-8xl 2xl:text-12xl">
                            <h1
                                className="number Bebas_Neue text-6xl proportional-nums md:text-7xl lining-nums xl:text-8xl 2xl:text-9xl lg:text-7xl lg:pt-8"
                                data-target="100"
                            >
                                0
                            </h1>
                            <span className="Bebas_Neue text-6xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl 2xl:text-9xl">
                                +
                            </span>
                        </div>
                        <p className="text-sm sm:text-lg  text-left font-light md:text-2xl pr-2  2xl:text-xl ">
                            SUCCESSFUL <br />
                            PRODUCTS
                        </p>
                    </div>
                </div>

            </div>
            </div>
            </div>
            <Leader/>
            <Aboutproc />
        </div>
    )
}

export default About
