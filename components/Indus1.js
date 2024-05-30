"use client";
import React, { useEffect } from "react";

const Indus1 = () => {
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
    <div className="mx-10">
      <div className="ml-10">
        <div className="galerrys">
          <div className="containers">
            <div className="panel active bg-black">
              <div className="img-boxs">
                <h3 className="head">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-4 lg:mt-5 xl:mt-10">
                  <a href="#" className="round  ">
                    Explore more →
                  </a>
                </div>
              </div>
            </div>
            <div className="panel bg-black">
              <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-4 lg:mt-5 xl:mt-10">
                  <a href="#" className=" round    ">
                    Explore more →
                  </a>
                </div>
              </div>
            </div>
            <div className="panel bg-black">
            <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-4 lg:mt-5 xl:mt-10">
                  <a href="#" className=" round    ">
                    Explore more →
                  </a>
                </div>
              </div>
            </div>
            <div className="panel bg-black">
            <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-4 lg:mt-5 xl:mt-10">
                  <a href="#" className=" round    ">
                    Explore more →
                  </a>
                </div>
              </div>
            </div>
            <div className="panel bg-black">
            <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-4 lg:mt-5 xl:mt-10">
                  <a href="#" className=" round    ">
                    Explore more →
                  </a>
                </div>
              </div>
            </div>
            <div className="panel bg-black">
            <div className="img-boxs ">
                <h3 className="head ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="mt-4 lg:mt-5 xl:mt-10">
                  <a href="#" className=" round    ">
                    Explore more →
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

export default Indus1;
