"use client";
import React, { useState,useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Mobi from "@/public/CS 01.png";
import Mobis from "@/public/CS 02.png";
import Mobi1 from "@/public/CS 03.png";
import Tab from "@/public/CS 04.png";
import Modal from '@/components/Model'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups'
const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };
  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleViewMoreClick = () => {
    router.push('/introduction');
  };

  useEffect(() => {
    if (hoveredCard !== null) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredCard]);

  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // After the first animation, make the card fixed
            setTimeout(() => {
              entry.target.classList.remove('visible');
              entry.target.classList.add('fixed');
            }, 600); // Match this duration to your CSS transition time
          }
        });
      },
      { threshold: 0.2 }
    );

    const elementsToObserve = document.querySelectorAll('.card');
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animated-image");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const cards = [
    { image: Mobi  },
   
  ];
  let index;
  return (
    <div>
      <div className="m-auto">
        <h1 className="playfair_display text-2xl md:text-4xl ml-8 md:ml-24 xl:text-5xl font-bold mx-20 xl:mx-44 2xl:mx-96 mt-20 md:mt-32">
          Revolutionize with Your Idea,
          <br />
          Transforming the World
        </h1>
        <p className="xl:mx-44 2xl:mx-96 mr-5 md:ml-24 md:mr-20 ml-8 text-lg mt-4 md:mt-6 outfit_dispalys md:text-2xl">
          From dream to reality, we proudly contribute to transforming apps shaping
          <br />
          the future of innovation and technology.
        </p>
      </div>
      <div className=" mt-20 mx-8 md:mx-20 xl:mx-40 mb-20 xl:mb-0 flex md:justify-center">
        <div className="left-column mr-1 lg:mr-5 md:mx-5 w-full md:w-auto">
          <div className="animated-image left show" >
          
         
            <div className="bg-black"  onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi}
                className="imgx  w-62 h-[400px] xl:h-[550px]"
                alt="Image 1"
                width={500}
                height={500}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
        
            <div className="mt-5">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                Cris - Indian Railway
              </h2>
              <p className="outfit_dispalys text-base md:text-xl lg:text-2xl">
                We tackled operational and data
                <br />
                challenges at CRIS
              </p>
            </div>
           
          </div>
          <div className="animated-image left show mt-10">
            <div    onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[300px] object-cover xl:h-[500px]"
                width={500}
                height={500}
              />
              {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className="mt-5">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                Dating App
              </h2>
              <p className="outfit_dispalys text-base md:text-xl lg:text-2xl">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image left show mt-10">
            <div className="bg-black" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[300px] md:h-[400px] xl:h-[500px]"
                width={500}
                height={5}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className=" mt-5 ">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                Siidcul UI Design
              </h2>
              <p className="outfit_dispalys text-lg lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image left show mt-10">
            <div className="bg-black" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[300px] md:h-[380px] xl:h-[500px]"
                width={500}
                height={5}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className=" mt-5 ">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                Find the Doctors Online
              </h2>
              <p className="outfit_dispalys text-lg lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image left show mt-10">
            <div className="bg-black" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[300px] md:h-[380px] xl:h-[500px]"
                width={500}
                height={5}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className=" mt-5 ">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl  lg:text-4xl">
                Clothes Store
              </h2>
              <p className="outfit_dispalys  text-lg lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image left show mt-10">
            <div className="bg-black" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[300px] md:h-[380px] xl:h-[500px]"
                width={500}
                height={5}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className=" mt-5 ">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                Generative AI
              </h2>
              <p className="outfit_dispalys text-lg lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          {/* Other left show column items... */}
        </div>
        <div className="right-column ml-1">
          <div className="animated-image right show">
            <div className="bg-black" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobis}
                alt="Image 2"
                className="imgx h-[200px] object-cover md:h-[230px] lg:h-[240px] xl:h-[400px]"
                width={600}
                height={600}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className="mt-5">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                VR Platform App
              </h2>
              <p className="outfit_dispalys text-base lg:text-2xl md:text-xl">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <Link href="/LiquiClear">
            <div className="animated-image right  show mt-10 lg:mt-9 xl:mt-10">
              <div className="bg-black" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
                <Image
                  src={Tab}
                  alt="Image 4"
                  className="imgx h-[370px] object-fill md:h-[325px] lg:h-[330px] xl:h-[500px]"
                  width={600}
                  height={600}
                />
                 {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
              </div>
              <div className="mt-5">
                <h2 className="playfair_display font-bold text-2xl md:text-3xl lg:text-4xl">
                  Water Purifier App <span className="rounded-full hover:bg-blue-600 hover:text-white text-sm md:text-lg p-1 border-blue-600 border-2">Read more </span>
                </h2>

                <p className="outfit_dispalys text-base lg:text-2xl md:text-xl">
                  Lorem Epsom is dummy text for the
                  <br />
                  print and digital
                </p>
              </div>
            </div>
          </Link>
          <div className=" animated-image right show show mt-10">
            <div className="bg-black"  onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[380px] md:h-[400px] xl:h-[500px]"
                width={600}
                height={5}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className=" mt-5 ">
              <h2 className="playfair_display font-bold text-2xl md:text-3xl lg:text-4xl">
                Gaming App
              </h2>
              <p className="outfit_dispalys text-lg lg:text-2xl  md:text-xl">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image right show show mt-10">
            <div className="bg-black"  onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[360px] md:h-[380px] lg:h-[420px] xl:h-[500px]"
                width={600}
                height={5}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className=" mt-5 ">
              <h2 className="playfair_display font-bold text-2xl md:text-3xl lg:text-4xl">
                Gaming App
              </h2>
              <p className="outfit_dispalys text-lg lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image right show show mt-10">
            <div className="bg-black" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[360px] md:h-[410px] lg:h-[450px] xl:h-[500px]"
                width={600}
                height={5}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className=" mt-5 ">
              <h2 className="playfair_display font-bold text-2xl md:text-3xl lg:text-4xl">
                Free Games Online
              </h2>
              <p className="outfit_dispalys text-lg lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image right show show mt-10">
            <div className="bg-black" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[380px] md:h-[400px] lg:h-[420px] xl:h-[500px]"
                width={600}
                height={5}
              />
               {hoveredCard === index && (
                <div
                  className=" absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 10}px`,
                    left: `${cursorPosition.x + 20}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  Read<br/> More...
                </div>
              )}
            </div>
            <div className=" mt-5 ">
              <h2 className="playfair_display font-bold text-2xl md:text-3xl lg:text-4xl">
                Fit with App
              </h2>
              <p className="outfit_dispalys text-lg lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          {/* Other right show column items... */}
        </div>
      </div>
      <div className="xl:mx-40 mx-10 mb-20 w-auto h-auto rounded-2xl bg-gray-200">
        <div className="mt-10 mb-2 mx-5 xl:mt-20 lg:mb-8 md:mx-auto flex flex-col items-center text-center">
          <h1 className="text-lg mt-4 xl:mt-20 xl:mx-0 lg:text-5xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
            Our Robust Mobile & Web App
            <br />
            Development Solutions Stands Your
            <br />
            Business at the top!
          </h1>
          <button onClick={handleButtonClick} className="mt-4 mb-6 lg:mb-16 lg:mt-4 bg-gradient-to-r from-red-400 to-purple-600 rounded-full text-whiteinline-flex items-center bg-amber-500 border-0 py-2 px-4 xl:px-8 text-white lg:mr-10 xl:mr-0">
            Let's Talk
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
     
    </div>
  );
};

export default Portfolio;

