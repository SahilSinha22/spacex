"use client"
import React from 'react';
import Image from 'next/image';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Background1 from '@/public/land.png'; // replace with your image path
import Tab from '@/public/3pef.webp'; // replace with your image path

const ParallaxComponent = () => {
    return (
        <ParallaxProvider>
            <div className="relative bg-teal-400">
           
                {/* First Section with Red Background */}
                <div className="h-screen sticky top-0 z-10  flex items-center justify-center text-white">
                <div className="font-sans h-screen max-h-screen">
                <div className="max-w-screen-lg mx-auto py-2 px-4 sm:px-6 lg:px-8 xl:px-6 ">
                  <div className="">
                    <div className="p-5 px-4 items-center justify-center text-center">
                      <h1 className="text-4xl text-white md:text-5xl pt-8 2xl:text-6xl font-sedan font-bold mb-4">
                        Liquiclear
                      </h1>
                      <p className="text-white text-center 2xl:text-2xl text-lg md:text-xl">
                        Liquiclear is your one-stop solution for all water
                        purification and softening needs. We bring you a wide
                        range of water purifiers and softeners for commercial and
                        domestic use.
                      </p>

                      <Image
                        src={Tab}
                        alt="VR Experience"
                        className="mx-auto lg:h-[300px] lg:w-[500px] xl:w-[700px] h-full lg:max-w-xl lg:max-h-96 xl:h-[500px] mt-12 2xl:w-[900px] 2xl:max-w-4xl 2xl:max-h-[600px] 2xl:h-full"
                        width={1000}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
                </div>

                {/* Parallax Section with Background Image */}
                <ParallaxBanner
                    layers={[
                        { image: Background1.src, speed: -10 },
                    ]}

                    className="aspect-[2/1]"// Adjust height as needed
                />

                
            </div>
        </ParallaxProvider>
    );
};

export default ParallaxComponent;
