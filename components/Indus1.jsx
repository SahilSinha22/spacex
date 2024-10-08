'use client'

import React ,{ useEffect } from "react";
import Link from "next/link";

const Indus = () => {
  useEffect(() => {
    
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("mouseover", handleMouseEnter);
    });

    function handleMouseEnter(event) {
      removeActiveClasses();
      event.currentTarget.classList.add("active");
    }

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("mouseover", handleMouseEnter);
      });
    };
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className=" md:mx-20 2xl:max-w-7xl lg:mx-24 2xl:mx-52 bg-background open_sans_display  py-12 pr-10 ">
      <div className="text-left ml-2lg:ml-28 2xl:ml-16 md:mx-20 ">
        <h2 className="text-3xl font-bold playfair md:text-6xl text-zinc-900">
          Industries we serve
        </h2>
        <p className="mt-2 text-lg xl:mr-20 md:text-xl text-zinc-600 ">
          Our top mobile app development company proudly serves a diverse range
          of industries. Through innovative technology solutions, we empower
          businesses in numerous sectors to engage customers, optimize
          operations, and unlock new opportunities for growth.
        </p>
        <div className="galerrys ">
          <div className="containers mr-10 2xl:mr-28">
            <div className="panel active Indus">
              <div className="img-boxs">
                <h3 className="head">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className=" mt-5  lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className="round  ">
                   <span  className=" px-1 md:px-2 py-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus1">
              <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus2">
            <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus3">
            <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus4">
            <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus5">
            <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Indus;
