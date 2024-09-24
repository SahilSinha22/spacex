"use client";

import React, { useEffect, useCallback } from "react";


const Pef = () => {
  



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
      // Check if element is in the viewport and hasn't been animated yet
      if (isInViewport(element) && !element.classList.contains("animated")) {
        element.classList.add("fall-in", "animated"); // Add 'animated' class to prevent rerun
        updateNumber(element);
      }
    });
  }, [isInViewport, updateNumber]);

  useEffect(() => {
    const handleScroll = () => {
      animateNumbers();
    };

    document.addEventListener("scroll", handleScroll);
    animateNumbers(); // Trigger animation on page load in case the elements are already in view

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [animateNumbers]);




 

  return (
    <div className="bg-black text-white h-full w-full overflow-hidden">
      <div className="flex justify-around lg:h-auto lg:items-center lg:text-center p-5 2xl:p-10 bg-black text-white">
        <div className="text-center items-center px-4 border-gray-600 sm:pr-10 md:pr-20 xl:pr-30 2xl:pr-40 lg:px-10 border-r-2">
          <div className="flex flex-row text-center ml-6 lg:ml-10 m-0 p-0">
            <h1
              className="number Bebas_Neue text-5xl proportional-nums md:text-7xl lg:text-7xl xl:text-8xl  2xl:text-12xl lg:pt-8"
              data-target="25"
            >
              0
            </h1>
            <span className="Bebas_Neue text-5xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl   2xl:text-12xl">
              +
            </span>
          </div>
          <p className="text-sm sm:text-lg font-light md:text-2xl lg:text-4xl 2xl:text-5xl lg:pr-16">
            PARTNERS
          </p>
        </div>
        <div className="text-center px-2 sm:pr-10 md:pr-20 lg:px-10 xl:pr-10 border-gray-600 2xl:pr-40 border-r-2">
          <div className="flex flex-row ml-8 lg:ml-10">
            <h1
              className="number Bebas_Neue text-5xl proportional-nums md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-12xl lg:pt-8"
              data-target="50"
            >
              0
            </h1>
            <span className="Bebas_Neue text-5xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl 2xl:text-12xl">
              +
            </span>
          </div>
          <p className="text-sm sm:text-lg font-light md:text-2xl lg:text-4xl px-4  2xl:text-5xl sm:px-1 lg:pr-16">
            TEAM SIZE
          </p>
        </div>
        <div className="text-center lg:pl-1 xl:pl-1">
          <div className="flex flex-row ml-8 xl:text-8xl 2xl:text-12xl lg:ml-10">
            <h1
              className="number Bebas_Neue text-5xl proportional-nums md:text-7xl lining-nums xl:text-8xl 2xl:text-12xl lg:text-7xl lg:pt-8"
              data-target="100"
            >
              0
            </h1>
            <span className="Bebas_Neue text-5xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl 2xl:text-12xl">
              +
            </span>
          </div>
          <p className="text-sm sm:text-lg font-light md:text-2xl pr-2 lg:text-4xl 2xl:text-5xl lg:pr-16">
            SUCCESSFUL <br />
            PRODUCTS
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Pef;
