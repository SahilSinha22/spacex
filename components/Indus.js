'use client'

import React ,{ useEffect } from "react";


const Indus = () => {
  useEffect(() => {
    console.log("hello");
    const panels = document.querySelectorAll(".panel");
    
    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
    console.log("hellow1");

    // Cleanup event listeners on component unmount
    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("click", () => {
          removeActiveClasses();
          panel.classList.add("active");
        });
      });
    };
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className=" max-w-7xl mx-10  lg:px-8 py-12">
      <div className="text-left ml-10 md:mx-20">
        <h2 className="text-3xl font-bold playfair md:text-6xl text-zinc-900">
          Industries we serve
        </h2>
        <p className="mt-2 text-lg md:text-2xl text-zinc-600 ">
          Our top mobile app development company proudly serves a diverse range
          of industries. Through innovative technology solutions, we empower
          businesses in numerous sectors to engage customers, optimize
          operations, and unlock new opportunities for growth.
        </p>
        <div className="galerrys ">
          <div className="containers mr-10">
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
                  <a href="#" className="round  ">
                   <span  className=" px-1 md:px-2 py-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </a>
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
                  <a href="#" className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </a>
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
                  <a href="#" className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </a>
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
                  <a href="#" className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </a>
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
                  <a href="#" className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </a>
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
                  <a href="#" className=" round    ">
                    <span  className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span> 
                  </a>
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
