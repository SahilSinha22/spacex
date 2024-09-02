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

  { name: "React Native", logo: "/Technology/reactNative.svg" },
  { name: "AI Development", logo: "/Technology/Ai.svg" },
  { name: "Chatbot", logo: "/Technology/Chatbot.svg" },
  { name: "IOT", logo: "/Technology/IOT.svg" },
  { name: "Augmented Reality", logo: "/Technology/AR.svg" },
  { name: "Ionic", logo: "/Technology/Ionic.svg" },
  { name: "VR Development", logo: "/Technology/VR.svg" },
  { name: "PHP/Nodes JS", logo: "/Technology/Php.svg" },
  { name: "Quality Analyst", logo: "/Technology/Quality.svg" },
  { name: "Wearable", logo: "/Technology/Wearable.svg" },
  { name: "iOS App", logo: "/Technology/IOS.svg" },
  { name: "Flutter", logo: "/Technology/Flutter.svg" },
  { name: "Android App", logo: "/Technology/Android.svg" },
  { name: "Blockchain", logo: "/Technology/Blockchain.svg" },
  { name: "UI/UX Designing", logo: "/Technology/Ui.svg" },


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
    let baseStyle = 'nav-link block mt-4 lg:inline-block lg:mt-0 text-black mr-8 ';

    if (path === '/') {
      baseStyle += isActive ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-orange-600 ';
    }
    else if (path === '/Technology') {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-orange-600 ';
    }
    else if (path === '/contact') {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-orange-600 ';
    }
    else if (path === '/About') {
      baseStyle += isActive ? 'text-orange-600 ' : 'text-zinc-400 hover:text-orange-600 ';
    }
    else {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-orange-600 ';
    }

    return baseStyle;
  };

  return (
    <nav className="items-center text-center  p-4" style={{ backgroundColor: bgColor }}>
      <div className="md:px-10 xl:px-40  relative  max-w-screen-2xl 2xl:max-w-screen-2xl 2xl:mx-auto flex items-center place-content-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-5 ml-8 xl:ml-0 2xl:ml-8 xl:mr-20 2xl:mr-40 lg:mr-20">
          <span>
            <Link href="/" >
              <Image src={`/${logo}`} id="navbar-logo" className="w-56 sm:w-60 lg:w-44 lg:h-5 sm:h-10" alt="Logo" width={600} height={10} />
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
        <div className={`w-full block flex-grow lg:flex  text-center lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="text-sm  open_sans_display font-semibold justify-left lg:flex-grow">
            <Link href="/About" className={linkStyles('/About')}>
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
                className={`absolute md:mx-10 xl:mx-40 left-0 p-2 md:p-6 mt-10 w-auto h-auto md:h-auto text-black bg-white rounded-md z-50 transition-all duration-300 ${isOpenMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
              >
                <section className="flex flex-col md:flex-row  md:flex open_sans_display font-light">
                  <div>
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
                  <ul className="py-1 text-xs xl:text-sm 2xl:text-lg  md:pl-10 md:gap-4 Poppin grid grid-cols-2 md:grid-cols-3">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-center mr-2  dropslash md:mr-2 w-auto xl:mr-0 xl:w-60 hover:text-[#C9784F] "
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
                Technology
                {isOpenMenuT ? (
                  <FaChevronUp className="inline-flex ml-2" size={14} />
                ) : (
                  <FaChevronDown className="inline-flex ml-2" size={14} />
                )}
              </Link>
              <div
                className={`absolute  max-w-7xl left-0 xl:left-28 2xl:left-40  justify-center  mt-10  h-full md:h-auto  text-black   z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
              >


                <section className="flex flex-col md:flex-row justify-between rounded-3xl w-full md:gap-6 md:pt-10 lg:pt-16 pb-6 md:px-0 bg-white md:flex Poppinx ">
                  <div className="max-w-5xl xl:w-1/2  sm:w-[250px]  w-full mt-6 lg:mt-0  ">
                    <h2 className="text-xl lg:text-4xl text-left  pl-6 open_sans_displays">Technologies</h2>
                    <Image src="/Technology/Technologyimg.png" className=" m-6 w-72 md:w-auto " alt="" width={400} height={400} />
                  </div>
                  <ul className="py-1 text-xs md:text-xs  lg:text-base xl:text-lg  Poppin grid grid-cols-2 md:grid-cols-3">
                    {technology.map((service, index) => (
                      <li key={index} className="flex items-center w-auto sm:w-full lg:w-[250px] 2xl:w-[300px] dropslash lg:mr-2 xl:mr-2 p-2 hover:text-[#C9784F] custom-filter">
                        <div className="lg:h-8 lg:w-8 h-4 w-4 hover:bg-yellow-700  hover:dropslash p-1 lg:p-1.5 2xl:p-2 bg-gray-700 rounded-full md:h-6 md:w-6 mr-1 md:mr-2 xl:h-6 xl:w-6 2xl:w-8 2xl:h-8">

                          <Image
                            src={service.logo}
                            alt={`${service.name} logo`}
                            width={100}
                            height={100}
                          />
                        </div>
                        <Link
                          /* href={`/Technology/${service.name.toLowerCase().replace(/\s+/g, "")}`}  */
                          href={`/Technology/${service.name.toLowerCase().replace(/\s+/g, "")}${service.name.toLowerCase() === 'flutter' || service.name.toLowerCase() === 'reactnative' ? '' : '#'}`}


                          className="block lg:px-2 py-2 md:py-4 lg:py-0 "
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <Link href="/Portfolio" className={`nav-link block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ${isActiveLink('/Portfolio') || isActiveLink('/LiquiClear') ? 'text-black hover:text-black' : 'text-zinc-400 hover:text-orange-600'}`}>
              Portfolio
            </Link>
            <Link href="#" className={linkStyles('/')}>
              Blog
            </Link>
          </div>
          <div>
            <Link href="/contact" className={linkStyles('/contact')}>
              <button className="juggle-button mt-4 lg:mt-0 bg-gradient-to-r from-red-400 to-purple-600 rounded-full inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white  xl:ml-10 2xl:ml-40 ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
