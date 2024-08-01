"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import Mobi from "@/public/1pef.png";
import Mobi1 from "@/public/2pef.png";
import Tab from "@/public/3pef.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Pef = () => {
  const parallaxRef = useRef();
  const [pages, setPages] = useState(3);

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

  useEffect(() => {
    const updateParallaxPages = () => {
      if (window.innerWidth >= 1024) {
        setPages(3);
      } else if (window.innerWidth >= 768) {
        setPages(2);
      } else {
        setPages(1.5);
      }
    };

    updateParallaxPages();
    window.addEventListener("resize", updateParallaxPages);

    return () => {
      window.removeEventListener("resize", updateParallaxPages);
    };
  }, []);

  return (
    <div className="bg-black text-white h-full w-full overflow-hidden">
      <div className="flex justify-around lg:h-auto lg:items-center lg:text-center p-5 bg-black text-white">
        <div className="text-center items-center px-2 border-gray-600 sm:pr-10 md:pr-20 xl:pr-30 lg:px-10 border-r-2">
          <div className="flex flex-row text-center ml-6 lg:ml-10 m-0 p-0">
            <h1
              className="number Bebas_Neue text-4xl proportional-nums md:text-6xl lg:text-7xl xl:text-8xl lg:pt-8"
              data-target="25"
            >
              0
            </h1>
            <span className="Bebas_Neue text-4xl lg:text-7xl lg:pt-8 md:text-6xl xl:text-8xl">
              +
            </span>
          </div>
          <p className="text-sm sm:text-lg font-light lg:text-4xl lg:pr-16">
            PARTNERS
          </p>
        </div>
        <div className="text-center px-2 sm:pr-10 md:pr-20 lg:px-10 xl:pr-10 border-gray-600 border-r-2">
          <div className="flex flex-row ml-8 lg:ml-10">
            <h1
              className="number Bebas_Neue text-4xl proportional-nums md:text-6xl lg:text-7xl xl:text-8xl lg:pt-8"
              data-target="50"
            >
              0
            </h1>
            <span className="Bebas_Neue text-4xl lg:text-7xl lg:pt-8 md:text-6xl xl:text-8xl">
              +
            </span>
          </div>
          <p className="text-sm sm:text-lg font-light lg:text-4xl px-4 sm:px-1 lg:pr-16">
            TEAM SIZE
          </p>
        </div>
        <div className="text-center lg:pl-1 xl:pl-1">
          <div className="flex flex-row ml-8 xl:text-8xl lg:ml-10">
            <h1
              className="number Bebas_Neue text-4xl proportional-nums md:text-6xl lining-nums xl:text-8xl lg:text-7xl lg:pt-8"
              data-target="100"
            >
              0
            </h1>
            <span className="Bebas_Neue text-4xl lg:text-7xl lg:pt-8 md:text-6xl xl:text-8xl">
              +
            </span>
          </div>
          <p className="text-sm sm:text-lg font-light pr-2 lg:text-4xl lg:pr-16">
            SUCCESSFUL <br />
            PRODUCTS
          </p>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="h-screen w-full">
          <Parallax pages={2} ref={parallaxRef}  className="parallax">
            <ParallaxLayer offset={0} speed={1} factor={2} className="okomo parallax-layer" />
              

            <ParallaxLayer offset={1} speed={1} factor={4} className="land parallax-layer" />

            <ParallaxLayer
              sticky={{ start: 0, end: 2 }}
              style={{ textAlign: "center" }}
              className="parallax-layer"
            >
              <div className="p-10 text-center mx-auto max-w-screen-2xl max-h-screen items-center">
                <h2 className="text-4xl text-white md:text-5xl pt-2 font-bold mb-4 font-sedan">
                  Okomo
                </h2>
                <p className="text-lg lg:mx-10 xl:mx-44 2xl:mx-60 text-white text-center md:text-xl">
                  Welcome to Okomo360, the world's first dedicated 360-degree VR
                  platform. We're redefining
                  video technology, making immersive VR experiences not
                  just a luxury.
                </p>
                <div className="flex justify-center max-h-screen mt-6">
                <div className="max-h-screen">
                  <Image
                    src={Mobi}
                    alt="VR Experience"
                    className="mr-4 xl:h-[500px]  mx-auto h-full lg:w-[500px] xl:w-[400px] lg:max-w-xl lg:max-h-screen lg:h-[400px] 2xl:w-[600px] 2xl:h-[600px]"
                    width={1000}
                    height={300}
                  />
                </div>
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>

        <div className="h-screen w-full">
          <Parallax pages={pages} ref={parallaxRef} className="parallax">
            <ParallaxLayer offset={0} speed={1} factor={2} className="bg-purple-600 parallax-layer" />

            <ParallaxLayer offset={1} speed={1} factor={4} className="land parallax-layer" />

            <ParallaxLayer
              sticky={{ start: 0, end: 2 }}
              style={{ textAlign: "center" }}
              className="parallax-layer"
            >
              <div className="text-white text-center max-h-screen p-8">
                <h2 className="text-center text-4xl md:text-5xl pt-2 font-bold mb-4 font-sedan">
                  Netme
                </h2>
                <p className="md:text-xl text-lg text-center mb-8">
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
                      className="mr-4  lg:h-[400px] lg:w-[400px] h-full md:h-[700px] md:w-[600px]  lg:max-h-screen xl:w-[300px] xl:h-[500px] 2xl:w-[400px] 2xl:h-[500px]"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>

        <div className="h-screen w-full">
          <Parallax pages={pages} ref={parallaxRef} className="parallax">
            <ParallaxLayer offset={0} speed={1} factor={2} className="bg-teal-400 parallax-layer" />

            <ParallaxLayer offset={1} speed={1} factor={4} className="land parallax-layer" />

            <ParallaxLayer
              sticky={{ start: 0, end: 2 }}
              style={{ textAlign: "center" }}
              className="parallax-layer"
            >
              <div className="font-sans h-screen max-h-screen">
                <div className="max-w-screen-lg mx-auto py-2 px-4 sm:px-6 lg:px-8 xl:px-6 ">
                  <div className="">
                    <div className="p-5 px-4 items-center justify-center text-center">
                      <h1 className="text-4xl text-white md:text-5xl pt-8 font-sedan font-bold mb-4">
                        Liquiclear
                      </h1>
                      <p className="text-white text-center text-lg md:text-xl">
                        Liquiclear is your one-stop solution for all water
                        purification and softening needs. We bring you a wide
                        range of water purifiers and softeners for commercial and
                        domestic use.
                      </p>

                      <Image
                        src={Tab}
                        alt="VR Experience"
                        className="mx-auto lg:h-[300px] lg:w-[500px] xl:w-[700px] h-full lg:max-w-xl lg:max-h-96 xl:h-[500px] mt-12 2xl:h-full"
                        width={1000}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Pef;
