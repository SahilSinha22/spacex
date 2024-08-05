"use client"
import React from 'react';
import Image from 'next/image';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Background1 from '@/public/land.png'; // replace with your image path
import Smartphone from '@/public/1pef.png'; // replace with your image path

const ParallaxComponent = () => {
    return (
        <ParallaxProvider>
            <div className="relative okomo">
           
                {/* First Section with Red Background */}
                <div className="h-screen sticky top-0 z-10  flex items-center justify-center text-white">
                    <div className="p-10  text-center mx-auto max-w-screen-2xl">
                        <h2 className="text-4xl md:text-5xl 2xl:text-6xl pt-2 font-bold mb-4 font-sedan">
                            Okomo
                        </h2>
                        <p className="text-lg text-white 2xl:text-2xl md:text-xl">
                            Welcome to Okomo360, the world's first dedicated 360-degree VR
                            platform. We're redefining
                            <br /> video technology, making immersive VR experiences not
                            just a luxury.
                        </p>
                        <div className="flex justify-center max-h-screen mt-6">
                            <div className="max-h-screen">
                                <Image
                                    src={Smartphone}
                                    alt="VR Experience"
                                    className="mr-4 xl:h-[350px] mx-auto h-full lg:w-[500px] xl:w-[400px] lg:max-w-xl lg:max-h-screen lg:h-[400px] 2xl:w-[600px] 2xl:h-[600px]"
                                    width={1000}
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
