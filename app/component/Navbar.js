"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Induspic from "@/public/Induspic.png"
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const logos = {
  '/': 'logo.png',
  '/Portfolio': 'logo1.png',
  '/LiquiClear': 'logo1.png',
  '/Services': 'logo1.png',
  '/Technology': 'logo1.png',
  '/Blog': 'logo1.png',
  '/contact': 'logo.png',
  '/About': 'logo1.png',
  '/Chatbot':'logo1.png'
};
const services = [

  { name: "On Demand", logo: "/Industries/OnDemand.svg" },
  { name: "eCommerce", logo: "/Industries/Ecommerce.svg" },
  { name: "Real Estate", logo: "/Industries/Realestate.svg" },
  { name: "Healthcare", logo: "/Industries/Healthcare.svg" },
  { name: "SaaS", logo: "/Saas.svg" },
  { name: "Education", logo: "/Industries/Education.svg" },
  { name: "Restaurant", logo: "/Industries/Restaurant.svg" },
  { name: "Games", logo: "/Industries/Games.svg" },
  { name: "News", logo: "/Industries/News.svg" },
  { name: "Entertainment", logo: "/Industries/Entertainment.svg" },
  { name: "Wellness", logo: "/Industries/Wellness.svg" },
  { name: "Logistics", logo: "/Industries/Logistics.svg" },
  { name: "Travel", logo: "/Industries/Travel.svg" },
  { name: "Finance", logo: "/Industries/Finance.svg" },
  { name: "Aviation", logo: "/Industries/Travel.svg" },
  { name: "E-Scooter", logo: "/Industries/Escooter.svg" },
  { name: "Politics", logo: "/Industries/Politics.svg" },
  { name: "Agriculture", logo: "/Industries/Agriculture.svg" },
  { name: "Events", logo: "/Industries/Events.svg" },
  { name: "Social Networking", logo: "/Industries/SocialN.svg" },
  { name: "EV", logo: "/Industries/EV.svg" },
  { name: "Oil and Gas", logo: "/Industries/Oilgas.svg" },
  { name: "Banking", logo: "/Industries/Banking.svg" },
  { name: "Automotive", logo: "/Industries/Automotive.svg" },
  { name: "Telecom", logo: "/Industries/Telecom.svg" },
  { name: "Insurance", logo: "/Industries/Insurance.svg" },
  { name: "Manufacturing", logo: "/Industries/Manufacturing.svg" },

  { name: "Construction", logo: "/Industries/Construction.svg" },


];
const technology = [

  { name: "React Native", logo: "/Technology/reactNative.svg", link:"/Technology/reactnative" },
  { name: "AI Development", logo: "/Technology/Ai.svg", link:"#" },
  { name: "Chatbot", logo: "/Technology/Chatbot.svg", link:"/Technology/Chatbot" },
  { name: "IOT", logo: "/Technology/IOT.svg", link:"#" },
  { name: "Augmented Reality", logo: "/Technology/AR.svg", link:"#" },
  { name: "Ionic", logo: "/Technology/Ionic.svg", link:"#" },
  { name: "VR Development", logo: "/Technology/VR.svg", link:"#" },
  { name: "PHP/Nodes JS", logo: "/Technology/Php.svg", link:"#" },
  { name: "Quality Analyst", logo: "/Technology/Quality.svg", link:"#" },
  { name: "Wearable", logo: "/Technology/Wearable.svg", link:"#" },
  { name: "iOS App", logo: "/Technology/IOS.svg", link:"#" },
  { name: "Flutter", logo: "/Technology/Flutter.svg", link:"/Technology/flutter" },
  { name: "Android App", logo: "/Technology/Android.svg", link:"#" },
  { name: "Blockchain", logo: "/Technology/Blockchain.svg", link:"#" },
  { name: "UI/UX Designing", logo: "/Technology/Ui.svg", link:"#" },


];

const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('black');
  const pathname = usePathname();
  const [logo, setLogo] = useState(logos[pathname]);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuT, setIsOpenMenuT] = useState(false);


  useEffect(() => {
    const handleRouteChange = (pathname) => {
      console.log(pathname);

      if (pathname === '/' || pathname === '/contact') {
        setBgColor('black');
        setTextColor('gray');
        setLogo(logos[pathname]);
      }
      else {
        setBgColor('white');
        setTextColor('rgb(161 161 170)');
        setLogo(logos[pathname]);
      }
    };

    handleRouteChange(pathname);
  }, [pathname]);

  const isActiveLink = (path) => pathname === path;

  const linkStyles = (path) => {
    const isActive = pathname === path;
    let baseStyle = 'nav-link block mt-4 lg:inline-block lg:mt-0 text-black mx-4 ';
    let baseStyles = 'nav-link block mt-4 lg:inline-block lg:mt-0 text-black  ';
    if (path === '/') {
      baseStyle += isActive ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-white ';
    }
    else if (path === '/Technology') {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-white ';
    }
    else if (path === '/contact') {
      baseStyles += isActive ? 'text-black ' : 'text-zinc-400 hover:text-white ';
    }
    else if (path === '/About') {
      baseStyle += isActive ? 'text-orange-600 ' : 'text-zinc-400 hover:text-white ';
    }
    
    else {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-black ';
    }

    return baseStyle;
  };

  return (
    <nav className="items-center text-center  p-4" style={{ backgroundColor: bgColor }}>
      <div className="w-auto   m-auto  max-w-2xl lg:max-w-5xl  relative  2xl:max-w-6xl 2xl:mx-auto flex items-center place-content-center justify-between lg:justify-around flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white ">
          <span>
            <Link href="/" >
              <Image src={`/${logo}`} id="navbar-logo" className="w-56 sm:w-60 lg:w-44 lg:h-8  sm:h-10" alt="Logo" width={600} height={10} />
            </Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center pr-3 py-2 font-extrabold rounded text-zinc-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 sm:h-10 sm:w-10 w-5 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex  text-center  justify-center  lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="text-sm  open_sans_display font-semibold justify-around lg:flex">
            <Link href="/About" className={linkStyles('/About') }>
              About
            </Link>


            <div className=" lg:inline-block  group"
              onMouseEnter={() => setIsOpenMenu(true)}
              onMouseLeave={() => setIsOpenMenu(false)}>

              <Link
                href="#"
                className={` ${linkStyles('/')} nav-link block lg:inline-block group `}
                aria-haspopup="true"
                aria-expanded={isOpenMenu ? true : false}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                Industries
                {isOpenMenu ? (
                  <FaChevronUp className="inline-flex ml-2" size={14} />
                ) : (
                  <FaChevronDown className="inline-flex ml-2" size={14} />
                )}
              </Link>

              <div
                className={`absolute  left-0 p-2 md:p-6 mt-10 w-auto h-auto md:h-auto text-black bg-white rounded-md z-50 transition-all duration-300 ${isOpenMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
              >
                <section className="flex flex-col md:flex-row  md:flex open_sans_display font-light">
                  <div >
                    <div className="md:text-xs lg:text-sm text-left xl:text-sm 2xl:text-lg">
                      <h2 className=" text-2xl xl:text-3xl">Industries</h2>
                      <p className="leading-relaxed text-left my-6">
                        Space to Tech offers 360° custom <br />
                        software development services that<br />
                        fit your needs for short and long-term growth.
                      </p>
                    </div>
                    <div className="mt-8 text-left block">
                      <Image
                        src={Induspic}
                        className="md:w-60 lg:w-96 xl:w-[350px] 2xl:w-[500px]"
                        alt=""
                        width={1000}
                        height={1000}
                      />
                      <h2 className="mt-5 md:text-xs lg:text-sm xl:text-xs 2xl:text-lg leading-relaxed font-light">
                        Read our developments that have helped <br />
                        the industry boom in India
                      </h2>
                    </div>
                  </div>
                  <ul className="py-1 text-xs xl:text-sm 2xl:text-lg  md:pl-10 md:gap-4 Poppin grid grid-cols-2 sm:grid-cols-3">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-center mr-2  dropslash md:mr-2 w-auto md:w-auto xl:mr-0 xl:w-60 hover:text-[#C9784F] "
                      >
                        <div className="lg:h-8 lg:w-8 h-4 w-4 hover:bg-yellow-700  hover:dropslash p-1 lg:p-1.5 2xl:p-2 bg-gray-700 rounded-full md:h-6 md:w-6 mr-1 md:mr-2 xl:h-6 xl:w-6 2xl:w-8 2xl:h-8">


                          <Image
                            src={service.logo}
                            alt={`${service.name} logo`}

                            width={100}
                            height={100}
                          />
                        </div>
                        <Link
                          /* href={`/services/${service.name
                             .toLowerCase()
                             .replace(/\s+/g, "")}`}*/
                          href="#"
                          className="block lg:px-1 py-2 md:py-1 lg:py-0 2xl:py-1"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <div className=" lg:inline-block  group"
              onMouseEnter={() => setIsOpenMenuT(true)}
              onMouseLeave={() => setIsOpenMenuT(false)}>

              <Link
                href="#"
                className={` ${linkStyles('/Technology')} nav-link block lg:inline-block group `}
                aria-haspopup="true"
                aria-expanded={isOpenMenuT ? true : false}
                onClick={() => setIsOpenMenuT(!isOpenMenuT)}
              >
                Technologies
                {isOpenMenuT ? (
                  <FaChevronUp className="inline-flex ml-2" size={14} />
                ) : (
                  <FaChevronDown className="inline-flex ml-2" size={14} />
                )}
              </Link>
              <div
                className={`absolute  w-full sm:left-[10%] md:left-0   justify-center  mt-10  h-full md:h-auto  text-black   z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
              >


                <section className="flex flex-col md:flex-row justify-between xl:justify-around rounded-3xl w-full md:gap-6 xl:gap-6 md:pt-10 lg:pt-16 pb-6 md:px-0 bg-white md:flex Poppinx ">
                  <div className="max-w-5xl xl:w-auto   md:w-[250px]  w-full mt-6 lg:mt-0  ">
                    <h2 className="text-xl lg:text-3xl xl:text-4xl text-left  pl-6 open_sans_displays">Technologies</h2>
                    <Image src="/Technology/Technologyimg.png" className=" p-4 w-auto sm:w-full  md:w-auto xl:w-72  2xl:w-96 " alt="" width={1000} height={1000} />
                  </div>
                  <ul className="py-1 text-xs sm:text-base md:text-xs  lg:text-base  Poppin grid grid-cols-2 sm:grid-cols-3">
                    {technology.map((service, index) => (
                      <li key={index} className="flex items-center w-auto sm:w-full lg:w-[250px]  2xl:w-[300px] dropslash lg:mr-2 xl:mr-2 p-2 hover:text-[#C9784F] custom-filter">
                        <div className="lg:h-8 lg:w-8 h-4 w-4 hover:bg-yellow-700  hover:dropslash p-1 lg:p-1.5 2xl:p-2 bg-gray-700 rounded-full sm:h-6 sm:w-6 mr-1 md:mr-2 xl:h-6 xl:w-6 2xl:w-8 2xl:h-8">

                          <Image
                            src={service.logo}
                            alt={`${service.name} logo`}
                            width={100}
                            height={100}
                          />
                        </div>
                        <Link
                          /* href={`/Technology/${service.name.toLowerCase().replace(/\s+/g, "")}`}  */
                          href={`${service.link}`}


                          className={`block lg:px-2 py-2 md:py-4 lg:py-0 whitespace-nowrap overflow-hidden text-ellipsis `}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <Link href="/Portfolio" className={`nav-link block mt-4 lg:inline-block lg:mt-0 text-white-200 mx-4 ${isActiveLink('/Portfolio') || isActiveLink('/LiquiClear') ? 'text-black hover:text-black' : 'text-zinc-400 hover:text-white'}`}>
              Portfolio
            </Link>
            <Link href="/Career" className={linkStyles('/')}>
             Career
            </Link>
          </div>
         
        </div>
        <div className={`  w-auto m-auto block  lg:m-0 lg:flex justify-center lg:justify-normal text-center   ${isOpen ? "block" : "hidden"}`}>
            <Link href="/contact" className={linkStyles('/contact')}>
              <button className="juggle-button mt-4 lg:mt-0 bg-gradient-to-r from-red-400 to-purple-600 rounded-full inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white  ">
                Contact Us
              </button>
            </Link>
          </div>

      </div>
    </nav>
  );
};

export default Navbar;
