"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { generateArithmeticCaptcha } from "@/app/utils/generateCaptcha";
import Contactimg from "@/public/Contactimg.png"


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
  '/About': 'logo.png',
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

  { name: "React Native", logo: "/Technology/reactNative.svg", link: "/Technology/reactnative" },
  { name: "AI Development", logo: "/Technology/Ai.svg", link: "#" },
  { name: "Chatbot", logo: "/Technology/Chatbot.svg", link: "#" },
  { name: "IOT", logo: "/Technology/IOT.svg", link: "#" },
  { name: "Augmented Reality", logo: "/Technology/AR.svg", link: "#" },
  { name: "Ionic", logo: "/Technology/Ionic.svg", link: "#" },
  { name: "VR Development", logo: "/Technology/VR.svg", link: "#" },
  { name: "PHP/Nodes JS", logo: "/Technology/Php.svg", link: "#" },
  { name: "Quality Analyst", logo: "/Technology/Quality.svg", link: "#" },
  { name: "Wearable", logo: "/Technology/Wearable.svg", link: "#" },
  { name: "iOS App", logo: "/Technology/IOS.svg", link: "#" },
  { name: "Flutter", logo: "/Technology/Flutter.svg", link: "/Technology/flutter" },
  { name: "Android App", logo: "/Technology/Android.svg", link: "#" },
  { name: "Blockchain", logo: "/Technology/Blockchain.svg", link: "#" },
  { name: "UI/UX Designing", logo: "/Technology/Ui.svg", link: "#" },


];
const Contact = () => {


  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [errors, setErrors] = useState({});
  const [successBanner, setSuccessBanner] = useState(false);
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Number: "",
    message: "",
    Budget: "",
  });
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
      baseStyle += isActive ? 'text-[#ffffff] hover:text-[#ffffff]' : 'text-zinc-400 hover:text-[#ffffff] ';
    }
    else if (path === '/Technology') {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-[#ffffff] ';
    }
    else if (path === '/contact') {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-[#ffffff] ';
    }
    else if (path === '/About') {
      baseStyle += isActive ? 'text-[#ffffff] ' : 'text-zinc-400 hover:text-[#ffffff] ';
    }
    else {
      baseStyle += isActive ? 'text-black ' : 'text-zinc-400 hover:text-[#ffffff] ';
    }

    return baseStyle;
  };
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!user.Name) newErrors.Name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(user.Name))
      newErrors.Name = "Name can only contain letters and spaces";
    if (!user.Email) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.Email))
      newErrors.Email = "Email address is invalid";
    if (!user.Number.trim()) newErrors.Number = "Phone number is required";
    else if (!/^\d{7,12}$/.test(user.Number))
      newErrors.Number = "Phone number must be between 7 to 12 digits";
    if (!user.message) newErrors.message = "Message is required";
    if (!user.Budget) newErrors.File = "Budget is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getdata = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const { Name, Email, Number, message, Budget } = user;

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Number", Number);
    formData.append("message", message);
    formData.append("Budget", Budget);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Number,
        message,
        Budget,
      }),
    };

    const res = await fetch(
      "https://nextfirebase-fab92-default-rtdb.firebaseio.com/SpacetoTech.json",
      options
    );
    if (res) {
      setSuccessBanner(true);
      setTimeout(() => {
        setSuccessBanner(false);
      }, 3000);
    } else {
      alert("Error Occurred");
    }
  };

  const [isCaptchaValid, setIsCaptchaValid] = useState(null);

  useEffect(() => {
    setCaptcha(generateArithmeticCaptcha());
  }, []);

  const handleCaptchaChange = (e) => {
    const value = e.target.value;
    setInputCaptcha(value);
    setIsCaptchaValid(value === captcha.answer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha !== captcha.answer) {
      return;
    }
    // Handle form submission
    alert("Form submitted successfully!");
  };
  return (
    <>
      <div className=' h-auto sm:h-[800px] lg:h-screen  w-screen 2xl:max-w-full m-auto relative'>
        <Image src="/Contact.png" className="absolute  -z-10 inset-0 w-screen h-[1550px] sm:h-full lg:h-screen xl:h-screen object-cover" alt="" width={1000} height={1000} />

        <nav className=" items-center left-0 right-0 text-center  p-4" >
          <div className="  md:px-10 xl:px-40  relative  max-w-screen-2xl  2xl:mx-auto flex items-center place-content-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 text-[#ffffff] mr-5 ml-2 md:ml-8 xl:ml-0 2xl:ml-8 xl:mr-20 2xl:mr-40 lg:mr-18 ">
              <span>
                <Link href="/" >
                  <Image src={`/${logo}`} id="navbar-logo" className="w-56 sm:w-60 lg:w-44 lg:h-5 2xl:h-7 2xl:w-48 sm:h-10" alt="Logo" width={600} height={10} />
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
                      <ul className="py-1 text-xs xl:text-sm 2xl:text-lg  md:pl-10 md:gap-4 Poppin grid grid-cols-2 sm:grid-cols-3">
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
                  Technologies
                    {isOpenMenuT ? (
                      <FaChevronUp className="inline-flex ml-2" size={14} />
                    ) : (
                      <FaChevronDown className="inline-flex ml-2" size={14} />
                    )}
                  </Link>
                  <div
                className={`absolute  max-w-7xl sm:left-[10%] md:left-0 xl:left-28 2xl:left-40  justify-center  mt-10  h-full md:h-auto  text-black   z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
              >


                <section className="flex flex-col md:flex-row justify-between xl:justify-around rounded-3xl w-full md:gap-6 xl:gap-6 md:pt-10 lg:pt-16 pb-6 md:px-0 bg-white md:flex Poppinx ">
                  <div className="max-w-5xl xl:w-auto   md:w-[250px]  w-full mt-6 lg:mt-0  ">
                    <h2 className="text-xl lg:text-4xl text-left  pl-6 open_sans_displays">Technologies</h2>
                    <Image src="/Technology/Technologyimg.png" className=" p-4 w-auto sm:w-full  md:w-auto xl:w-72 2xl:w-96 " alt="" width={1000} height={1000} />
                  </div>
                  <ul className="py-1 text-xs sm:text-base md:text-xs  lg:text-base xl:text-lg  Poppin grid grid-cols-2 sm:grid-cols-3">
                    {technology.map((service, index) => (
                      <li key={index} className="flex items-center w-auto sm:w-full lg:w-[250px] xl:w-60 2xl:w-[300px] dropslash lg:mr-2 xl:mr-2 p-2 hover:text-[#C9784F] custom-filter">
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
                <Link href="/Portfolio" className={`nav-link block mt-4 lg:inline-block lg:mt-0 text-[#ffffff]-200 mr-8 ${isActiveLink('/Portfolio') || isActiveLink('/LiquiClear') ? 'text-black hover:text-black' : 'text-zinc-400 hover:text-[#ffffff]'}`}>
                  Portfolio
                </Link>
                <Link href="/Career" className={linkStyles('/')}>
                  Career
                </Link>
              </div>
              <div>
                <Link href="/contact" className={linkStyles('/contact')}>
                  <button className="juggle-button mt-4 lg:mt-0 bg-gradient-to-r from-red-400 to-purple-600 rounded-full inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-[#ffffff]  xl:ml-10 2xl:ml-40 ">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </nav>

        <div className="flex flex-col sm:flex-row justify-center  2xl:justify-center w-auto sm:my-20 xl:my-36  m-auto px-4 md:px-10 lg:px-0 xl:px-32 ">


          <div className="my-10 sm:my-0 mr-20 lg:mr-20 2xl:mr-40">
            <h1 className="text-[#ffffff] text-5xl sm:text-4xl lg:text-6xl  playfair_display leading-tight sm:leading-relaxed">Let’s work <br />together...</h1>
            <p className="text-[#ffffff] text-base md:text-sm lg:text-xl  open_sans_display py-6">
              Get all your questions answered by our<br /> business development team.
            </p>
            <div className="flex flex-col   space-y-2  w-full   lg:space-y-4 my-6 sm:justify-left  m-auto  max-w-5xl xl:max-w-7xl 2xl:max-w-[1280px] text-base md:text-lg  lg:my-10 text-[#ffffff]">
              <div className='flex justify-left  items-center gap-2  w-auto leading-loose'>
                <div className="pr-2">
                  <a href="mailto: amit@spacetotech.com  "> <Image src="./Mailbox.svg" alt="./Mailbox.svg" width={24} height={24} /> </a>
                </div>
                <a href="mailto: amit@spacetotech.com  ">  <span className='text-base lg:text-lg'>  amit@spacetotech.com </span> </a>

              </div>
              <div className='flex justify-left text-center items-center w-auto   '>
                <div className="pr-4">
                  <a href="tel:+91 88 820 76 755" ><Image src="./Calling.svg" alt="./Calling.svg" width={24} height={24} /> </a>
                </div>
                <a href="tel:+91 88 820 76 755" className='text-base lg:text-lg'>  +91  88  820  76  755 </a>
              </div>
            </div>
<div className="  ">
            <div className=" flex gap-4 lg:gap-6 py-6 ">
              <Image src="/6intro.png" alt="" className="sm:w-16.5 h-8 lg:w-auto " width={110} height={100}/>
              <Image src="/7intro.png" alt="" className="sm:w-16 h-8 lg:w-auto " width={110} height={100}/>
              <Image src="/8intro.png" alt="" className="sm:w-16. h-8 lg:w-32 " width={110} height={100}/>
              </div>
              <div className=" flex gap-10 pb-6">
              <Image src="/9intro.png" alt="" className="sm:w-24 h-8 lg:w-auto " width={120} height={100}/>
              <Image src="/10intro.png" alt="" className="sm:w-24 h-8 lg:w-36 " width={120} height={100}/>
              </div>
              </div>
           
          </div>
          <div className="flex flex-row md:gap-10   lg:px-10 p-6 lg:p-10 bg-black bg-opacity-50 rounded-3xl 2xl:px-10 xl:gap-20 2xl:gap-20 w-full md:w-auto h-auto lg:h-full">
            <div className="w-full">
              <div className="mr-4  xl:mr-0 lg:w-[400px] xl:w-[400px] 2xl:w-[400px] mb-4    xl:ml-0 md:mx-2 sm:ml-4  ">
                <h1 className="text-[#FFFFFF] opacity-100 text-2xl md:text-3xl my-8">Consult over experts!</h1>
                {successBanner && (
                  <div className=" translate-x-2 absolute  z-10   xl:w-[500px] mb-4 lg:ml-40 2xl:ml-20  xl:ml-60 md:mx-2 sm:ml-10 bg-green-500 text-[#ffffff] p-4 rounded-lg">
                    <FaCheckCircle size={24} className="mr-2" />
                    <span>Query Submitted Successfully!</span>
                  </div>
                )}
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className=" mx-auto   "
                >
                  <div className="flex flex-col sm:flex-row w-full sm:grid-cols-2 sm:gap-10 xl:gap-6 2xl:gap-15 ">
                    <div className="relative z-0 w-full mb-4 group">
                      <input
                        type="text"
                        name="Name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full md:w-40  lg:w-44 xl:w-48  2xl:w-auto text-base text-[#ffffff] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#ffffff] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={user.Name}
                        autoComplete="off"
                        required
                        onChange={data}
                      />
                      {errors.Name && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.Name}
                        </p>
                      )}

                      <label
                        htmlFor="Name"
                        className="peer-focus:font-medium  absolute text-base  text-[#ffffff] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Full Name*
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="Email"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full md:w-40  lg:w-44 xl:w-48 2xl:w-auto  text-base text-[#ffffff] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#ffffff] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={user.Email}
                        autoComplete="off"
                        required
                        onChange={data}
                      />
                      {errors.Email && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.Email}
                        </p>
                      )}

                      <label
                        htmlFor="Email"
                        className="peer-focus:font-medium absolute text-base text-[#ffffff] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email*
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:grid-cols-2 mt-4 sm:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="tel"
                        name="Number"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full md:w-40  lg:w-44 xl:w-48 2xl:w-auto text-base text-[#ffffff] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#ffffff] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={user.Number}
                        autoComplete="off"
                        required
                        onChange={data}
                      />
                      {errors.Number && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.Number}
                        </p>
                      )}

                      <label
                        htmlFor="Number"
                        className="peer-focus:font-medium absolute text-base text-[#ffffff] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        <div className="flex flex-row">

                          <div className="">Phone no.*</div>
                        </div>
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="Budget"
                        id="floating_company"
                        className="block py-2.5 px-0 w-full md:w-40  lg:w-44 xl:w-48 2xl:w-auto text-base text-[#ffffff] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#ffffff] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={user.Budget}
                        autoComplete="off"
                        required
                        onChange={data}
                      />
                      {errors.File && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.File}
                        </p>
                      )}

                      <label
                        htmlFor="floating_company"
                        className="peer-focus:font-medium absolute text-base text-[#ffffff] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        <label
                          id="question"
                          className=" peer h-full  text-base   bg-transparent pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
                        >
                          <div
                            className="peer text-[#ffffff] text-base border-gray-500 bg-transparent  pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"

                          >
                            Budget*
                          </div>

                        </label>
                      </label>
                    </div>
                  </div>
                  <div className=" flex relative z-0 w-full md:w-full 2xl:w-[450px] mb-5 mt-6 group">
                    <input
                      type="text"
                      name="message"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full  text-base text-[#ffffff] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#ffffff] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={user.message}
                      autoComplete="off"
                      required
                      onChange={data}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}

                    <label
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-base text-[#ffffff] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Description*
                    </label>
                  </div>


                  <div className="flex flex-col  space-y-6 md:space-y-0 md:flex-row justify-between mt-10 ">
                    <div className="flex items-center">
                      <label className="text-[#ffffff] text-xl ">
                        {captcha.question} ={" "}
                      </label>
                      <input
                        type="text"
                        className="xl:w-20 ml-4   w-10 sm:w-28  text-xl text-center  border-b-2 bg-black bg-opacity-10 text-[#ffffff]"
                        value={inputCaptcha}
                        onChange={handleCaptchaChange}
                        required
                      />
                      {isCaptchaValid === true && (
                        <span className="lg:mx-10 text-xl" style={{ color: "green" }}>
                          ✔️
                        </span>
                      )}
                      {isCaptchaValid === false && (
                        <span className=" mx-4 lg:mx-10 text-xl" style={{ color: "red" }}>
                          ❌
                        </span>
                      )}
                    </div>
                    <div>
                      <button
                        onClick={getdata}
                        className={`rounded-full  text-white border-white border-2   focus:ring-4 focus:outline-none   text-sm w-full sm:w-auto px-5 py-2.5 xl:px-8  text-center
                       ${isCaptchaValid ? 'bannerx' : 'bg-[#2cbac4] opacity-80 cursor-not-allowed'} `}
                        type="submit"
                        style={{
                          backgroundColor: isCaptchaValid ? "bannerx" : "[#7b61ff]",
                          color: "white",
                        }}
                        disabled={isCaptchaValid === null || !isCaptchaValid}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>


              </div>
            </div>
            <div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
