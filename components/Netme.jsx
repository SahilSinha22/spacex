"use client"
import React from 'react';
import Image from 'next/image';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Background1 from '@/public/land.png'; // replace with your image path
import Mobi1 from '@/public/2pef.png'; // replace with your image path

const ParallaxComponent = () => {
    return (
        <ParallaxProvider>
            <div className="relative bg-purple-600">
           
                {/* First Section with Red Background */}
                <div className="h-screen sticky top-0 z-10  flex items-center justify-center text-white">
                <div className="text-white text-center max-h-screen p-8">
                <h2 className="text-center text-4xl md:text-5xl 2xl:text-6xl pt-2 font-bold mb-4 font-sedan">
                  Netme
                </h2>
                <p className="md:text-xl text-lg text-center 2xl:text-2xl mb-8">
                  NETME does not swipe, chat or judge by look - instead, we are
                  old school and believe <br />
                  that the best acquaintance comes from meeting people in real
                  life.
                </p>
                <div className="flex justify-center max-h-screen space-x-4">
                  <div className="max-h-screen">
                    <Image
                      src={Mobi1}
                      alt="VR Experience"
                      className="mr-4  lg:h-[400px] lg:w-[400px] h-full md:h-[700px] md:w-[600px]  lg:max-h-screen xl:w-[350px] xl:h-[400px] 2xl:w-[430px] 2xl:h-[500px]"
                      width={400}
                      height={300}
                    />
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
