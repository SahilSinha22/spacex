"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Train from "@/public/CS 01.png";
import Tablet from "@/public/CS 02.png";
import Building from "@/public/CS 01.png";
import Gaming from "@/public/CS 03.png";
import Phone from "@/public/CS 04.png";
import Gym from "@/public/CS 01.png";
import Bluecard from "@/public/CS 02.png";
import Maskcard from "@/public/CS 03.png";
import Aicard from "@/public/CS 04.png";
import Educard from "@/public/CS 01.png";

const Sucess = () => {
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
  

  const cards = [
    { image: Train, title: "Cris - Indian Railway" },
    { image: Building, title: "Siidcul UI Design" },
    { image: Gaming, title: "Gaming App" },
    { image: Phone, title: "Find the Doctors Online" },
    { image: Gym, title: "Fit with Our App" },
    { image: Tablet, title: "Water Purifier App" },
    { image: Bluecard, title: "Dating App" },
    { image: Maskcard, title: "Free Games Online" },
    { image: Aicard, title: "Generative AI" },
    { image: Educard, title: "Deep Dive into Mobile" },
  ];

  return (
    <div className="Poppins w-full relative">
      <section className="bg-background text-white p-6 gap-8 md:gap-10 lg:gap-12 2xl:px-40 pt-24 xl:pt-32 flex justify-center 2xl:space-x-5 xl:gap-16">
        <div className="w-1/2">
          <div className='flex flex-col lg:mb-32 xl:mb-28 2xl:mb-36'>
            <span className="2xl:text-6xl  text-xl sm:text-3xl md:text-4xl Poppin font-bold  tracking-wide  lg:text-5xl xl:text-6xl  text-white mb-2">Success stories </span>
            <span className="2xl:text-6xl  text-xl sm:text-3xl md:text-4xl Poppin font-bold    lg:text-5xl xl:text-6xl text-white mb-2">that demonstrate </span>
            <span className="2xl:text-6xl  text-xl sm:text-3xl md:text-4xl Poppin font-bold  tracking-wide  lg:text-5xl xl:text-6xl text-white ">our expertise</span>
          </div>
          {cards.slice(0, 5).map((card, index) => (
            <div
              key={index}
            
              className="bg-card  mt-10 lg:mt-16  2xl:p-4 rounded-lg shadow-lg relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              
              <Image src={card.image} alt={card.title} className=" imgx w-full h-[400px] xl:h-[550px]" width={1000} height={1000} />
              
              <div className="mt-6 2xl:mt-10">
                <h3 className="2xl:text-5xl sm:text-2xl lg:text-3xl font-medium text-foreground">{card.title}</h3>
                <div className="flex space-x-1 sm:space-x-2 Poppin-row 2xl:space-x-4 mt-4">
                  <button className="bg-[#7b61ff] text-white px-2 sm:px-3 py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl">Design</button>
                  <button className="bg-[#7b61ff] text-white px-2 sm:px-3 py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl">Mobile</button>
                  <button className="bg-[#7b61ff] text-white px-2 sm:px-3 py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl">Web</button>
                </div>
              </div>
              {hoveredCard === index && (
                <div
                  className="view-more absolute z-10 Poppin text-xs sm:text-lg lg:text-xl  text-white px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
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
          ))}
        </div>

        <div className="2xl:mt-10 mt-8 lg:mt-2 xl:mt-10 w-1/2">
          {cards.slice(5).map((card, index) => (
            <div
              key={index + 5}
              className="bg-card mt-10 lg:mt-16 2xl:p-4 rounded-lg shadow-lg relative"
              onMouseEnter={() => handleMouseEnter(index + 5)}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={card.image} alt={card.title} className=" imgx w-full h-[400px] xl:h-[550px]" width={1000} height={1000} />
              <div className="mt-6 2xl:mt-10">
                <h3 className="2xl:text-5xl sm:text-2xl lg:text-3xl font-medium text-foreground">{card.title}</h3>
                <div className="flex space-x-1 sm:space-x-2 Poppin-row 2xl:space-x-4 mt-4">
                  <button className="bg-[#7b61ff] text-white px-2 sm:px-3 py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl">Design</button>
                  <button className="bg-[#7b61ff] text-white px-2 sm:px-3 py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl">Mobile</button>
                  <button className="bg-[#7b61ff] text-white px-2 sm:px-3 py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl">Web</button>
                </div>
              </div>
              {hoveredCard === index + 5 && (
                <div
                  className="view-more absolute z-10 Poppin text-xs sm:text-lg lg:text-xl px-2 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-6 rounded-full cursor-pointer"
                  style={{
                    top: `${cursorPosition.y - 20}px`,
                    left: `${cursorPosition.x + 10}px`,
                  }}
                  onClick={handleViewMoreClick}
                >
                  <span className='text-white'>
                  Read<br/> More...
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sucess;