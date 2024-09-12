"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Mobi from "@/public/1form.png";
import { FaCheckCircle } from "react-icons/fa";
import { generateArithmeticCaptcha } from "@/app/utils/generateCaptcha";

import Script from "next/script";
const Form = () => {
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
      "https://nextfirebase-fab92-default-rtdb.firebaseio.com/Query.json",
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
    <div className=" bg-black ">
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async
        defer
      />

      <div className="   pt-2  ">
        <Image
          src={Mobi}
          alt="picture"
          className="imgx"
          width={4000}
          height={40}
        />{" "}
      </div>
      <div className="md:relative  -top-2 w-full h-92 ">
        <div className="  flex flex-col  ">
          <h1 className="md:absolute md:-top-16 lg:-top-20 text-left mx-5  sm:ml-12 md:mx-20 2xl:ml-48 2xl:mr-0  2xl:pr-60 lg:ml-28 lg:mr-20  xl:mr-60 xl:ml-48 sm:text-2xl 2xl:text-5xl items-center text-white text-lg lg:text-4xl  playfair_display">
            Get in touch with us today to see how we can help you develop
            the right product - faster.
          </h1>

          <div className="sm:mx-10 lg:mx-20 xl:mx-40 ">
            <div className="border-b flex  2xl:mt-6 flex-col lg:flex-row items-center m-auto 2xl:h-auto  md:mx-4 ">
              <div className=" 2xl:w-auto md:ml-2 mx-4 md:mx-0 2xl:pr-8 xl:ml-4 xl:pr-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 border  border-rounded pl-2 bg-blue-500 text-white my-8  ">
                <div className="sm:m-8 m-2 lg:m-6 2xl:text-4xl md:text-2xl ">
                  <h1 className="md:text-2xl text-2xl 2xl:text-3xl font-semibold">
                    Hello now !
                  </h1>
                  <div className="flex flex-row my-2">
                   <a href="tel:+91 88 820 76 755" ><Image src="/flag.svg" alt="logo" width={40} height={4} />{" "}</a> 
                    <div className="ml-4 2xl:text-3xl md:text-xl">
                    <a href="tel:+91 88 820 76 755" >  +91 88 820 76 755{" "}</a>
                    </div>{" "}
                  </div>
                  <h1 className="md:text-xl 2xl:text-2xl text-xl font-semibold mt-2 xl:mt-4">
                    Connect with us
                  </h1>
                  <div className="text-xl lg:text-base flex flex-col space-y-2 open_sans_display xl:text-[17px] 2xl:text-2xl ">
                  <a href= "mailto: amit@spacetotech.com  ">   <span> Email : amit@spacetotech.com </span> </a>
                    
                    <span className="w-[300px] 2xl:w-[450px]">office : Platina Heights, C24, C Block,
                      Phase 2, Industrial Area, Sector 62,
                      Noida, Uttar Pradesh 201309, </span>
                  </div>
                </div>
              </div>

              <div className="md:mr-4  xl:mr-0 xl:w-[500px] w-full lg:w-auto  px-4 mb-4 lg:ml-20 2xl:ml-60  xl:ml-20 md:mx-2 sm:ml-10 ">
                {successBanner && (
                  <div className=" translate-x-2 absolute  z-10   xl:w-[500px] mb-4 lg:ml-40 2xl:ml-20  xl:ml-60 md:mx-2 sm:ml-10 bg-green-500 text-white p-4 rounded-lg">
                    <FaCheckCircle size={24} className="mr-2" />
                    <span>Query Submitted Successfully!</span>
                  </div>
                )}
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className=" mx-auto   "
                >
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
                        htmlFor="Name"
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
                        htmlFor="Email"
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
                        htmlFor="Number"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        <div className="flex flex-row">
                          <div className="">
                            <Image
                              src="/flag.svg"
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
                        htmlFor="floating_company"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        
                          Budget*
                         
                      
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
                      htmlFor="message"
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
                      className="xl:w-16  w-28 text-xl text-center  border-b-2 bg-black text-white"
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
  );
};

export default Form;
