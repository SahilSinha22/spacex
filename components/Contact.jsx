"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { FaCheckCircle } from "react-icons/fa";
import { generateArithmeticCaptcha } from "@/app/utils/generateCaptcha";
import Contactimg from "@/public/Contactimg.png"
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
    <div className=" px-10 lg:px-0  xl:px-40">
      <section className="flex flex-row md:gap-10 justify-center xl:gap-20 2xl:gap-20 w-full h-auto lg:h-full mt-10">
        <div>



          <div className="mr-4  xl:mr-0 lg:w-[400px] xl:w-[400px] 2xl:w-[400px] mb-4 lg:ml-20   xl:ml-0 md:mx-2 sm:ml-10 ">
            <h1 className="text-white text-3xl md:text-6xl playfair_display">Let's Work</h1>
            <h1 className="text-white text-sm md:text-2xl my-8">Consult over experts!</h1>
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
              <div className="grid w-full md:grid-cols-2 md:gap-10 xl:gap-6 2xl:gap-15 ">
                <div className="relative z-0 w-full mb-4 group">
                  <input
                    type="text"
                    name="Name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-48 md:w-40  lg:w-44 xl:w-48 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                    htmlhtmlFor="Name"
                    className="peer-focus:font-medium  absolute text-base  text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name*
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="Email"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-48 md:w-40  lg:w-44 xl:w-48  text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                    className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email*
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 mt-4 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="Number"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-48 md:w-40  lg:w-44 xl:w-48  text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                    className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    className="block py-2.5 px-0 w-48 md:w-40  lg:w-44 xl:w-48  text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                    className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <label
                      id="question"
                      className=" peer h-full  text-base   bg-transparent pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
                    >
                      <div
                        className="peer text-white text-xs md:text-base border-gray-500 bg-transparent  pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"

                      >
                        Budget*
                      </div>

                    </label>
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 mt-6 group">
                <input
                  type="text"
                  name="message"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                  className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Description*
                </label>
              </div>


              <div className="flex flex-col  space-y-6 md:space-y-0 md:flex-row justify-between mt-10 ">
                <div className="flex items-center">
                  <label className="text-white text-xl ">
                    {captcha.question} ={" "}
                  </label>
                  <input
                    type="text"
                    className="xl:w-20 ml-4   w-10 md:w-28  text-xl text-center  border-b-2 bg-black text-white"
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
                    className="rounds  text-white border-white border-2 banner  focus:ring-4 focus:outline-none   text-sm w-full sm:w-auto px-5 py-2.5 xl:px-8  text-center  "
                    type="submit"
                    style={{
                      backgroundColor: isCaptchaValid ? "green" : "black",
                      color: "white",
                    }}
                    disabled={isCaptchaValid === null || !isCaptchaValid}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            
            <div className="flex flex-col space-y-6 lg:space-y-0 my-6 lg:flex-row justify-around text-base md:text-lg  lg:my-20 text-white">
              <div className='flex justify-left py-3 items-center gap-2 leading-loose'>
                <div>
                <a href= "mailto: amit@spacetotech.com  "> <Image src="./Mailbox.svg" alt="./Mailbox.svg" width={24} height={24} /> </a>
                </div>
                <a href= "mailto: amit@spacetotech.com  ">  <span className='text-base'>  amit@spacetotech.com </span> </a>

              </div>
              <div className='flex justify-left items-center gap-2'>
                <div> 
                  <a href="tel:+91 88 820 76 755" ><Image src="./Calling.svg" alt="./Calling.svg" width={24} height={24} /> </a>
                </div>
                <a href="tel:+91 88 820 76 755" className='text-base'>  +91 88 820 76 755 </a>
              </div>
            </div>
            </div>
        </div>
        <div>
          <div className="w-full lg:w-[500px] xl:w-[500px] 2xl:w-[600px] h-full 2xl:h-[700px]">
            <Image src={Contactimg} alt='Contactimg' className="w-40 md:w-60   lg:w-full 2xl:w-[700px]  lg:h-full" width={1000} height={1000} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
