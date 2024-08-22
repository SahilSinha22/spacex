"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "@/public/Arrow.png"
import Induspic from "@/public/Induspic.png"
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
const logos = {
  '/': 'logo.png',
  '/Portfolio': 'logo1.png',
  '/LiquiClear': 'logo1.png',
  '/Services': 'logo1.png',
  '/Technology/reactnative': 'logo1.png',
  '/Technology/flutter': 'logo1.png',
  '/Blog': 'logo1.png',
  '/Industries': 'logo1.png',
  
};
const technology = [

  { name: "React Native", logo: "/OnDemand.svg" },
  { name: "Android", logo: "/Ecommerce.svg" },
  { name: "PHP/Node JS Development", logo: "/Realestate.svg" },
  { name: "ionic", logo: "/Healthcare.svg" },
  { name: "IOT", logo: "/Saas.svg" },
  { name: "Ui/UX Design", logo: "/Education.svg" },
  { name: "IOS App", logo: "/Restaurant.svg" },
  { name: "Quality Analyst", logo: "/Games.svg" },
  { name: "VR Development", logo: "/News.svg" },
  { name: "AI", logo: "/Entertainment.svg" },
  { name: "Blockchain", logo: "/Wellness.svg" },
  { name: "Flutter", logo: "/Logistics.svg" },
  { name: "wearables", logo: "/Travel.svg" },
  { name: "Argumented Reality", logo: "/Finance.svg" },
  { name: "Chatbots", logo: "/Travel.svg" },


];
const services = [

  { name: "On Demand", logo: "/OnDemand.svg" },
  { name: "eCommerce", logo: "/Ecommerce.svg" },
  { name: "Real Estate", logo: "/Realestate.svg" },
  { name: "Healthcare", logo: "/Healthcare.svg" },
  { name: "SaaS", logo: "/Saas.svg" },
  { name: "Education", logo: "/Education.svg" },
  { name: "Restaurant", logo: "/Restaurant.svg" },
  { name: "Games", logo: "/Games.svg" },
  { name: "News", logo: "/News.svg" },
  { name: "Entertainment", logo: "/Entertainment.svg" },
  { name: "Wellness", logo: "/Wellness.svg" },
  { name: "Logistics", logo: "/Logistics.svg" },
  { name: "Travel", logo: "/Travel.svg" },
  { name: "Finance", logo: "/Finance.svg" },
  { name: "Aviation", logo: "/Travel.svg" },
  { name: "E-Scooter", logo: "/Escooter.svg" },
  { name: "Politics", logo: "/Politics.svg" },
  { name: "Agriculture", logo: "/Agriculture.svg" },
  { name: "Events", logo: "/Events.svg" },
  { name: "Social Networking", logo: "/SocialN.svg" },
  { name: "EV", logo: "/EV.svg" },
  { name: "Oil and Gas", logo: "/Oil&gas.svg" },
  { name: "Banking", logo: "/Banking.svg" },
  { name: "Automotive", logo: "/Automotive.svg" },
  { name: "Telecom", logo: "/Telecom.svg" },
  { name: "Insurance", logo: "/Insurance.svg" },
  { name: "Manufacturing", logo: "/Manufacturing.svg" },

  { name: "Construction", logo: "/Construction.svg" },


];
const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('black');
  const pathname = usePathname();
  const [logo, setLogo] = useState(logos[pathname]);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuT, setIsOpenMenuT] = useState(false);

  useEffect(() => {
    const handleRouteChange = (pathname) => {
      console.log(pathname);

      if (pathname === '/') {
        setBgColor('black');
        setTextColor('gray');
        setLogo(logos[pathname]);
      } else {
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
      baseStyle += isActive ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-black ';
    }
    else if (path === '/Technology') {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-black ';
    }
    else {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-black ';
    }

    return baseStyle;
  };

  return (
    <nav className="items-center text-center p-4" style={{ backgroundColor: bgColor }}>
      <div className="md:px-10 xl:px-40 relative  max-w-screen-2xl 2xl:max-w-screen-2xl 2xl:mx-auto flex items-center place-content-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-5 ml-8 xl:ml-0 2xl:ml-8 xl:mr-20 2xl:mr-40 lg:mr-20">
          <Link href="/"><span>
            <Image src={`/${logo}`} id="navbar-logo" className="w-56 sm:w-60 lg:w-44  lg:h-5 sm:h-10" alt="Logo" width={600} height={10} />
          </span>
          </Link>
        </div>
        <div className="block lg:hidden text-center">
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
          <div className="text-sm lg:mr-8 xl:ml-0 xl:mr-0 open_sans_display font-semibold justify-left lg:flex-grow">
            <Link href="/" className={linkStyles('/')}>
              About
            </Link>



            <div className=" lg:inline-block  group"
             onMouseEnter={() => setIsOpenMenu(true)}
             onMouseLeave={() => setIsOpenMenu(false)}>

              <Link
                href="/Industries"
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
                <section className="grid grid-rows-2 md:flex open_sans_display font-light">
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
                  <ul className="py-1 text-xs xl:text-sm 2xl:text-lg  md:pl-10 md:gap-4 Poppin grid grid-cols-3">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-center mr-4 dropslash md:mr-2 w-20 md:w-auto xl:mr-0 xl:w-60 hover:text-[#C9784F] custom-filter"
                      >
                        <Image
                          src={service.logo}
                          alt={`${service.name} logo`}
                          className="lg:h-8 lg:w-8 h-4 w-4 md:h-6 md:w-6 mr-1 md:mr-2 xl:h-6 xl:w-6 2xl:w-6 2xl:h-6"
                          width={100}
                          height={100}
                        />
                        <Link
                          href={`/services/${service.name
                            .toLowerCase()
                            .replace(/\s+/g, "")}`}
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
                className={`absolute left-0  mt-10 w-auto h-full md:h-auto md:px-10 xl:px-20 2xl:px-60 text-black bg-white rounded-md z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
              >
                <div className="grid grid-rows-2 justify-center  md:flex Poppinx ">

                  <ul className="py-1 text-xs md:text-base  lg:text-base xl:text-lg  Poppin grid grid-cols-3">
                    {technology.map((service, index) => (
                      <li key={index} className="flex items-center  dropslash lg:mr-2 xl:mr-10 p-2 hover:text-[#C9784F] custom-filter">
                        <Image
                          src={service.logo}
                          alt={`${service.name} logo`}
                          className="lg:h-8 lg:w-8 h-6 w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-10 2xl:h-10"
                          width={100}
                          height={100}
                        />
                        <Link
                          href={`/Technology/${service.name.toLowerCase().replace(/\s+/g, "")}`}
                          className="block lg:px-2 py-2 md:py-4 lg:py-0 "
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/Portfolio" className={`nav-link block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ${isActiveLink('/Portfolio') || isActiveLink('/LiquiClear') ? 'text-black hover:text-black' : 'text-zinc-400 hover:text-black'}`}>
              Portfolio
            </Link>
            <Link href="/Blog" className={linkStyles('/')}>
              Blog
            </Link>
          </div>
          <div>
          <Link href="/contact" className={linkStyles('/contact')}>
            <button className="juggle-button mt-4 lg:mt-0 bg-gradient-to-r from-red-400 to-purple-600 rounded-full inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white lg:mr-0 xl:mr-0 xl:ml-10 2xl:ml-40 lg:ml-0">
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
