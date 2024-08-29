"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Mobi from "@/public/CS 01.png";
import Mobis from "@/public/CS 02.png";
import Mobi1 from "@/public/CS 03.png";
import Tab from "@/public/CS 04.png";

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

 
  
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleViewMoreClick = (navigate) => {
    router.push(navigate);
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

  
  
  const cardx = [
    {  title: "LiquiClear" }
   
  ];
  const cards = [
    { image: Mobi, title: "Cris - Indian Railway", description: "We tackled operational and data ", descriptionx:"challenges at CRIS",  },
    { image: Mobi1, title: "Dating App", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital",  },
    { image: Mobi1, title: "Siidcul UI Design", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital",  },
    { image: Mobi1, title: "Find the Doctors Online", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital",  },
    { image: Mobi1, title: "Clothes Store", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital",  },
    { image: Mobi1, title: "Generative AI", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital", },
    { image: Mobis, title: "VR Platform App", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital",  },
    { image: Tab, title: "Water Purifier App", description: "Lorem Epsom is dummy text for the ", link:"LiquiClear", descriptionx:"print and digital",alt:"LiquiClear",  },
    { image: Mobi1, title: "Gaming App", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital",  },
    { image: Mobi1, title: "Gaming App", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital",  },
    { image: Mobi1, title: "Free Game Online", description: "Lorem Epsom is dummy text for the ", descriptionx:"print and digital",  },
    { image: Mobi1, title: "Fit with App", description: "Lorem Epsom is dummy text for the ",descriptionx:"print and digital",  },
  ];

  return (
    <div>
      <div className="m-auto">
        <h1 className="playfair_display text-2xl md:text-4xl ml-8 md:ml-24 xl:text-5xl font-bold mx-20 xl:mx-44 2xl:mx-80 mt-20 md:mt-32">
          Revolutionize with Your Idea,
          <br />
          Transforming the World
        </h1>
        <p className="xl:mx-44 2xl:mx-80 mr-5 md:ml-24 md:mr-20 ml-8 text-lg mt-4 md:mt-6 outfit_dispalys md:text-2xl">
          From dream to reality, we proudly contribute to transforming apps shaping
          <br />
          the future of innovation and technology.
        </p>
      </div>
      <div className="mt-20 mx-8 md:mx-20 xl:mx-40  2xl:mx-20 mb-20 gap-2 md:gap-0 xl:gap-1  xl:mb-0 flex md:justify-center">
        <div className="left-column  md:mx-5 w-full md:w-auto 2xl:w-[650px]">
          {cards.slice(0, 6).map((card, index) => (
            <div key={index} className=" relative pb-10 "
             
                   onMouseEnter={() => handleMouseEnter(index)}
                   onMouseLeave={handleMouseLeave}
                   onClick={() => handleViewMoreClick(card.alt)}>
                <Image
                  src={card.image}
                  className="cardxx w-full h-[280px]   md:h-[400px] xl:h-[550px]"
                  alt="Image 1"
                  width={500}
                  height={500}
                />
                
              

              <div className="mt-5">
                <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                  {card.title}
                </h2>
                <p className="outfit_dispalys text-base  md:text-xl lg:text-2xl">
                  {card.description}
                  <br/>
                  {card.descriptionx}
                </p>
              </div>

              {hoveredCard === index && (
                  <div
                    className=" bg-black view-more opacity-40  absolute z-10 Poppin text-xs sm:text-lg viewMore lg:text-xl text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                    style={{
                      top: `${cursorPosition.y - 5}px`,
                      left: `${cursorPosition.x + 20}px`,
                      
                    }}
                  
                  >
                    Read<br /> More...
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="right-column ">
          {cards.slice(6).map((card, index) => (
            <div key={index} className=" mb-10 md:mb-20  2xl:w-[650px]">
              <div className="relative "
                   onMouseEnter={() => handleMouseEnter(index + 6)}
                   onMouseLeave={handleMouseLeave}
                   onClick={() => handleViewMoreClick(card.alt)}>
                <Image
                  src={card.image}
                  alt="Image 2"
                  className="cardxx w-full  h-[250px] md:h-[300px] xl:h-[480px] "
                  width={600}
                  height={600}
                />
                {hoveredCard === index + 6 && (
                  <div
                    className=" bg-black view-more opacity-40 absolute z-10 Poppin text-xs sm:text-lg lg:text-xl text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                    style={{
                      top: `${cursorPosition.y - 5}px`,
                      left: `${cursorPosition.x + 20}px`,
                     
                    }}
                    
                  >
                    Read<br /> More...
                  </div>
                )}
              </div>
              <div className="mt-5">
                <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                  {card.title}
                </h2>
                <p className="outfit_dispalys text-base lg:text-2xl md:text-xl">
                  {card.description}
                  <br/>
                  {card.descriptionx}
                </p>
              </div>
            </div>
          ))}
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
          <button  className="mt-4 mb-6 lg:mb-16 lg:mt-4 bg-gradient-to-r from-red-400 to-purple-600 rounded-full text-whiteinline-flex items-center bg-amber-500 border-0 py-2 px-4 xl:px-8 text-white lg:mr-10 xl:mr-0">
            Let's Talk
          </button>
        </div>
      </div>
    

    </div>
  );
};

export default Portfolio