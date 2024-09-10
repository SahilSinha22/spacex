"use client"
import React from 'react';
import Image from 'next/image';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Background1 from '@/public/land.png'; // replace with your image path
import Mobi1 from '@/public/2pef.webp'; // replace with your image path

const ParallaxComponent = () => {
    return (
        <ParallaxProvider>
            <div className="relative bg-purple-600 ">
           
                {/* First Section with Red Background */}
                <div className="h-auto sticky top-0 z-10  flex  justify-center text-white">
                <div className="text-white text-center h-auto p-8">
                <h2 className="text-center text-4xl md:text-5xl 2xl:text-6xl pt-2 font-bold mb-4 font-sedan">
                  Netme
                </h2>
                <p className="md:text-xl text-lg text-center 2xl:text-2xl mb-8">
                  NETME does not swipe, chat or judge by look - instead, we are
                  old school and believe <br />
                  that the best acquaintance comes from meeting people in real
                  life.
                </p>
               
                    <Image
                      src={Mobi1}
                      alt="VR Experience"
                      className="m-auto w-full sm:w-3/4 lg:w-2/5 xl:w-3/5 2xl:w-2/4 h-auto  max-w-7xl my-20 lg:my-10"
                      width={1000}
                      height={300}
                    />
                
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
