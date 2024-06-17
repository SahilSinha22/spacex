"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Mobi from "@/public/CS 01.png";
import Mobis from "@/public/CS 02.png";
import Mobi1 from "@/public/CS 03.png";
import { generateArithmeticCaptcha } from "@/app/utils/generateCaptcha";

import Tab from "@/public/CS 04.png";
import { FaCheckCircle } from "react-icons/fa";

import Script from "next/script";
const page = () => {
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
      "https://nextfirebase-fab92-default-rtdb.firebaseio.com/UserData.json",
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
    <div className="">
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async
        defer
      />
      <div className=" m-auto">
        <h1 className="playfair_display text-2xl md:text-4xl ml-8 md:ml-24 xl:text-5xl font-bold mx-20 xl:mx-44 mt-20 md:mt-32">
          Revolutionize with Your Idea,
          <br />
          Transforming the World
        </h1>
        <p className="xl:mx-44 mr-5 md:ml-24 md:mr-20 ml-8 text-lg mt-4  md:mt-6 outfit_dispalys md:text-2xl">
          From dream to reality, we proudly contribute to transforming apps
          shaping <br />
          the future of innovation and technology.{" "}
        </p>
      </div>
      <div class="image-container mt-20 mx-8 md:mx-20 xl:mx-40 mb-20 xl:mb-0 flex md:justify-center">
        <div class=" left-column mr-2 lg:mr-5 md:mx-5 ">
          <div className="animated-image left show">
            <div className="bg-black ">
              <Image
                src={Mobi}
                className="imgx  h-[400px] xl:h-[550px]"
                alt="Image 1"
                width={500}
                height={5}
              />
            </div>
            <div className=" mt-5 ">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl lg:text-4xl">
                Cris - Indian Railway
              </h2>
              <p className="outfit_dispalys  text-base md:text-xl lg:text-2xl  ">
                We tackled operational and data <br /> challenges at CRIS
              </p>
            </div>
          </div>
          <div className=" animated-image left show mt-10">
            <div className="  ">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx  h-[300px] object-cover  xl:h-[500px]"
                width={500}
                height={5}
              />
            </div>
            <div className=" mt-5 ">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl  lg:text-4xl">
                Dating App
              </h2>
              <p className="outfit_dispalys text-base md:text-xl lg:text-2xl  ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image left show mt-10">
            <div className="bg-black">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[400px] xl:h-[500px]"
                width={500}
                height={5}
              />
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
            <div className="bg-black">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[300px] md:h-[380px] xl:h-[500px]"
                width={500}
                height={5}
              />
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
            <div className="bg-black">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[300px] md:h-[380px] xl:h-[500px]"
                width={500}
                height={5}
              />
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
            <div className="bg-black">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[300px] md:h-[380px] xl:h-[500px]"
                width={500}
                height={5}
              />
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
        </div>
        <div class="right-column">
          <div className="animated-image right show">
            <div className="bg-black">
              <Image
                src={Mobis}
                alt="Image 2"
                className="imgx h-[200px] object-cover md:h-[230px] lg:h-[240px] xl:h-[400px]"
                width={600}
                height={5}
              />
            </div>
            <div className=" mt-5 ">
              <h2 className="lg:playfair_display playfair_displays font-bold text-2xl md:text-3xl  lg:text-4xl">
                VR Platform App
              </h2>
              <p className="outfit_dispalys text-base lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className="animated-image right show mt-10 lg:mt-9 xl:mt-10">
            <div className="bg-black">
              <Image
                src={Tab}
                alt="Image 4"
                className="imgx h-[370px] object-fill  md:h-[325px] lg:[330px] xl:h-[500px]"
                width={600}
                height={5}
              />
            </div>
            <div className=" mt-5 ">
              <h2 className="playfair_display font-bold text-2xl md:text-3xl lg:text-4xl">
                Water Purifier App
              </h2>
              <p className="outfit_dispalys text-base  lg:text-2xl md:text-xl ">
                Lorem Epsom is dummy text for the
                <br />
                print and digital
              </p>
            </div>
          </div>
          <div className=" animated-image right show mt-10">
            <div className="bg-black">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[380px] md:h-[400px] xl:h-[500px]"
                width={600}
                height={5}
              />
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
          <div className="animated-image right show mt-10">
            <div className="bg-black">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[360px] md:h-[380px] lg:h-[420px] xl:h-[500px]"
                width={600}
                height={5}
              />
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
          <div className="animated-image right show mt-10">
            <div className="bg-black">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[360px] md:h-[410px] lg:h-[450px] xl:h-[500px]"
                width={600}
                height={5}
              />
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
          <div className="animated-image right show mt-10">
            <div className="bg-black">
              <Image
                src={Mobi1}
                alt="Image 3"
                className="imgx h-[380px] md:h-[400px] lg:h-[420px] xl:h-[500px]"
                width={600}
                height={5}
              />
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
        </div>
      </div>
      <div className="xl:mx-40 mx-10 mb-20 w-auto h-auto  rounded-2xl bg-gray-200">
        <div className=" mt-10 mb-2 mx-5 xl:mt-20 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
          <h1 className="text-lg mt-4 xl:mt-20  xl:mx-0 lg:text-5xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
            Our Robust Mobile & Web App <br /> Development Solutions Stands Your
            <br />
            Business at the top!
          </h1>

          <button className=" mt-4 mb-6 lg:mb-16 lg:mt-4 bg-gradient-to-r from-red-400 to-purple-600 rounded-full text-whiteinline-flex items-center bg-amber-500 border-0 py-2 px-4 xl:px-8   text-white lg:mr-10 xl:mr-0">
            Let's Talk
          </button>
        </div>
      </div>
      <div className="bg-black">
        <div className=" w-full h-92 ">
          <div className="  flex flex-col  ">
            <h1 className="text-left mx-14 mt-10 lg:mt-20 mb-8 sm:ml-12 md:ml-20 2xl:ml-48 lg:ml-28 xl:ml-48 sm:text-2xl 2xl:text-5xl items-center text-white text-lg lg:text-4xl playfair_display">
              Get in touch with us today to see how we can help <br /> you
              develop the right product - faster.
            </h1>

            <div className="sm:mx-10 lg:mx-20 xl:mx-40 ">
              <div className="border-b flex  2xl:mt-6 flex-col lg:flex-row items-center m-auto 2xl:h-auto  md:mx-4 ">
                <div className=" 2xl:w-auto md:ml-2 2xl:pr-8 xl:ml-4 xl:pr-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 border  border-rounded pl-2 bg-blue-500 text-white my-8  ">
                  <div className="m-8 lg:m-6 2xl:text-4xl md:text-2xl ">
                    <h1 className="md:text-2xl 2xl:text-4xl font-semibold">
                      Hello now !
                    </h1>
                    <div className="flex flex-row my-2">
                      <Image src="flag.svg" alt="logo" width={40} height={4} />{" "}
                      <div className="ml-4 2xl:text-3xl md:text-xl">
                        +91 88 820 76 755{" "}
                      </div>{" "}
                    </div>
                    <h1 className="md:text-2xl 2xl:text-4xl font-semibold mt-2 xl:mt-4">
                      Connect with us
                    </h1>
                    <p className="text-xl lg:text-base open_sans_display xl:text-[17px] 2xl:text-2xl ">
                      Email : amit@spacetotech.com
                      <br />
                      office : C-171 Sector-63 Noida,
                      <br />
                      Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                <div className="mr-4 xl:mr-0 xl:w-[500px] mb-4 lg:ml-20 2xl:ml-20  xl:ml-20 md:mx-2 sm:ml-10 ">
                  {successBanner && (
                    <div className=" translate-x-2 absolute  z-10   xl:w-[500px] mb-4 lg:ml-40 2xl:ml-20  xl:ml-60 md:mx-2 sm:ml-10 bg-green-500 text-white p-4 rounded-lg">
                      <FaCheckCircle size={24} className="mr-2" />
                      <span>Query Submitted Successfully!</span>
                    </div>
                  )}
                  <form method="POST" className=" mx-auto  ">
                    <div className="grid w-full md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-4 group">
                        <input
                          type="text"
                          name="Name"
                          id="floating_first_name"
                          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                          for="Name"
                          className="peer-focus:font-medium  absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="Email"
                          id="floating_last_name"
                          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                          for="Email"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email*
                        </label>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="tel"
                          name="Number"
                          id="floating_phone"
                          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                          for="Number"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          <div className="flex flex-row">
                            <div className="">
                              <Image
                                src="flag.svg"
                                alt="flag"
                                width={30}
                                height={2}
                              />{" "}
                            </div>
                            <div className="">+91</div>
                          </div>
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="Budget"
                          id="floating_company"
                          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                          for="floating_company"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          <select
                            id="question"
                            className=" peer h-full  text-sm   bg-transparent pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
                          >
                            <option
                              className="peer text-zinc-500  text-xs md:text-sm border-gray-500 bg-transparent  pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
                              selected
                            >
                              Budget (selext a range)
                            </option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                            <option value="option4">option4</option>
                            <option value="option5">option5</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="message"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                        for="message"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Description
                      </label>
                    </div>

                    <div>
                      <label className="text-green-600 text-xl font-bold">
                        {captcha.question} ={" "}
                      </label>
                      <input
                        type="text"
                        className="xl:w-16 text-xl text-center border-b-2 bg-black text-white"
                        value={inputCaptcha}
                        onChange={handleCaptchaChange}
                        required
                      />
                      {isCaptchaValid === true && (
                        <span className="mx-10 text-xl" style={{ color: "green" }}>
                          ✔️
                        </span>
                      )}
                      {isCaptchaValid === false && (
                        <span className="mx-10 text-xl" style={{ color: "red" }}>
                          ❌
                        </span>
                      )}
                    </div>

                    <button
                      onClick={getdata}
                      className="rounds mt-4 text-white border-white border-2  bg-black hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="submit"
                      style={{
                        backgroundColor: isCaptchaValid ? "green" : "black",
                        color: "white",
                      }}
                      disabled={isCaptchaValid === null || !isCaptchaValid}
                    >
                      Get a free quote →
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
