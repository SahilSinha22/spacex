"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Mobi from "@/public/1pef.png";
import Mobi1 from "@/public/2pef.png";
import Tab from "@/public/3pef.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Pef = () => {
  const ref = useRef();
  // Function to check if an element is in the viewport
  const isInViewport = useCallback((element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }, []);

  // Function to update the number to its correct value
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
    }, 50); // Adjust interval duration as needed
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
    // Add event listener for scroll
    document.addEventListener("scroll", animateNumbers);
    // Initial check for elements in viewport on page load
    animateNumbers();

    // Cleanup function to remove event listener on component unmount
    return () => {
      document.removeEventListener("scroll", animateNumbers);
    };
  }, [animateNumbers]);

  return (
    <div className="bg-black text-white">
      <div className="flex justify-around lg:h-auto lg:items-center lg:text-center p-5  bg-black text-white">
        <div className="text-center items-center px-2 border-gray-600 sm:pr-10 md:pr-20 xl:pr-30 lg:px-10 border-r-2">
          <div className="flex flex-row text-center ml-6 lg:ml-10 m-0 p-0">
            <h1
              className="number Bebas_Neue text-4xl proportional-nums md:text-6xl lg:text-7xl xl:text-8xl lg:pt-8 "
              data-target="25"
            >
              0
            </h1>
            <span className="Bebas_Neue text-4xl lg:text-7xl lg:pt-8  md:text-6xl xl:text-8xl ">
              +
            </span>
          </div>
          <p className="text-sm sm:text-lg font-light lg:text-4xl lg:pr-16  ">
            PARTNERS
          </p>
        </div>
        <div className="text-center px-2 sm:pr-10 md:pr-20 lg:px-10 xl:pr-10 border-gray-600 border-r-2">
          <div className="flex flex-row ml-8 lg:ml-10 ">
            <h1
              className="number Bebas_Neue text-4xl proportional-nums md:text-6xl lg:text-7xl xl:text-8xl lg:pt-8 "
              data-target="50"
            >
              0
            </h1>
            <span className="Bebas_Neue text-4xl lg:text-7xl lg:pt-8 md:text-6xl xl:text-8xl ">
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
              className="number Bebas_Neue text-4xl proportional-nums md:text-6xl lining-nums xl:text-8xl lg:text-7xl lg:pt-8 "
              data-target="100"
            >
              0
            </h1>
            <span className="Bebas_Neue text-4xl lg:text-7xl lg:pt-8 md:text-6xl xl:text-8xl ">
              +
            </span>
          </div>
          <p className="text-sm sm:text-lg font-light pr-2 lg:text-4xl lg:pr-16">
            SUCCESSFUL <br />
            PRODUCTS
          </p>
        </div>
      </div>

      <div
        className="h-[500px] xl:h-[600px]
       w-full"
      >
        <Parallax pages={3} ref={ref}>
          {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

          <ParallaxLayer offset={0} speed={1} factor={2} className="okomo" />

          <ParallaxLayer
            offset={1}
            speed={1}
            factor={4}
            className="land"
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0, end: 1.5 }}
            style={{ textAlign: "center" }}
          >
            <div className=" p-10 text-center items-center">
              <h2 className="text-2xl text-white md:text-6xl pt-8 font-bold mb-4 font-sedan">
                Okomo
              </h2>
              <p className="text-sm text-white text-center md:text-2xl">
                Welcome to Okomo360, the world's first dedicated 360-degree VR
                platform. We're redefining
                <br /> video technology, making immersive VR experiences not
                just a luxury.
              </p>
              <div className="flex justify-center mt-6">
                <Image
                  src={Mobi}
                  alt="VR Experience"
                  className="mr-4"
                  width={600}
                  height={550}
                />
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className="h-[500px] xl:h-[600px] w-full">
        <Parallax pages={3} ref={ref}>
          {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            className="bg-purple-600"
          />

          <ParallaxLayer
            offset={1}
            speed={1}
            factor={4}
            className="land"
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0, end: 1.5 }}
            style={{ textAlign: "center" }}
          >
            <div className=" text-white text-center p-8">
              <div className="text-center text-4xl md:text-6xl pt-8 font-bold mb-4 font-sedan">
                Netme
              </div>
              <p className="md:text-2xl text-sm text-center mb-8">
                NETME does not swipe, chat or judge by look - instead, we are
                old school and believe <br />
                that the best acquaintance comes from meeting people in real
                life.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="h-200">
                  <Image
                    src={Mobi1}
                    alt="VR Experience"
                    className="mr-4"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>

      <div className="h-[500px] xl:h-[600px] 2xl:mb-auto w-full">
        <Parallax pages={3} ref={ref}>
          {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            className="bg-teal-400"
          />

          <ParallaxLayer
            offset={1}
            speed={1}
            factor={4}
            className="land"
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0, end: 1.5 }}
            style={{ textAlign: "center" }}
          >
            <div className=" font-sans">
              <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="">
                  <div className="p-5 px-4 items-center justify-center text-center">
                    <h1 className="text-4xl text-white md:text-6xl pt-8 font-sedan font-bold mb-4">
                      Liquiclear
                    </h1>
                    <p className="text-white text-center text-sm md:text-2xl">
                      Liquiclear is your one-stop solution for all water
                      purification and softening needs. We bring you a wide
                      range of water purifiers and softeners for commercial and
                      domestic use.
                    </p>

                    <Image
                      src={Tab}
                      alt="VR Experience"
                      className=" mx-auto mt-12"
                      width={600}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default Pef;
