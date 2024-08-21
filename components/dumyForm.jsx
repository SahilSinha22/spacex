
"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { generateArithmeticCaptcha } from "@/app/utils/generateCaptcha";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const DumyForm = () => {
    const [captcha, setCaptcha] = useState("");
    const [inputCaptcha, setInputCaptcha] = useState("");

    const [visible, setVisible] = useState(false);
    const [errors, setErrors] = useState({});
    const [successBanner, setSuccessBanner] = useState(false);

    const [user, setUser] = useState({
        Name: '', Email: '', Number: '', message: '', File: null
    });

    let name, value;
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!user.Name) newErrors.Name = 'Name is required';
        else if (!/^[A-Za-z\s]+$/.test(user.Name)) newErrors.Name = 'Name can only contain letters and spaces';
        if (!user.Email) newErrors.Email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(user.Email)) newErrors.Email = 'Email address is invalid';
        if (!user.Number.trim()) newErrors.Number = 'Phone number is required';
        else if (!/^\d{7,12}$/.test(user.Number)) newErrors.Number = 'Phone number must be between 7 to 12 digits';
        if (!user.message) newErrors.message = 'description is a required ';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getdata = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        const { Name, Email, Number, message, File } = user;

        const formData = new FormData();
        formData.append('Name', Name);
        formData.append('Email', Email);
        formData.append('Number', Number);
        formData.append('message', message);
        formData.append('File', File);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Number, message, File
            })
        };

        const res = await fetch(
            'https://nextfirebase-fab92-default-rtdb.firebaseio.com/Query.json',
            options
        );
        if (res) {
            setSuccessBanner(true);
            setTimeout(() => {
                setSuccessBanner(false);
                setVisible(false);
                document.body.style.overflow = 'auto';
              }, 2000);

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
        setVisible(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
            document.body.style.overflow = 'hidden';
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setVisible(false);
        document.body.style.overflow = 'auto';
    };


    if (!visible) return null;
    return (
        <div className=''>
            <div class="justify-center items-center  Glassys flex m-auto   duration-1000 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className='relative'>
                <div class=" grid md:grid-cols-2  w-[600px] lg:w-[800px] lg:top-10 xl:top-0 xl:w-auto my-6 mx-auto justify-center place-content-center xl:max-w-4xl ">
                    <div className=' hidden md:block'>
                        <div className='relative '>


                            <Image src="/FormImg.png" className="-z-20 w-[300px] lg:w-[400px] xl:w-[500px] h-[550px] xl:h-[650px]" alt="" width={1000} height={1000} />
                            <div className='z-20 absolute justify-center top-6  text-white'>
                                <div className='px-5'>


                                    <h1 className='text-4xl xl:text-5xl leading-snug font-extrabold playfair_display'>We’d love to <br />hear from you.</h1>
                                    <h1 className='leading-snug text-lg pt-2 xl:text-xl'>By enabling an innovative <br />digital experience <br />that fulfills new-age demands.</h1>
                                </div>
                            </div>
                            <div className='absolute bottom-6 text-white'>
                                <div className='px-5'>


                                    <h1 className='text-2xl leading-snug  open_sans_displays inline-block border-b'>Explore our works —</h1>
                                    <div className='grid  aspect grid-cols-3 items-center py-4 gap-4 xl:gap-4'>
                                        <div className='border-r-2 pr-4'>
                                            <Image src="/premio.png" alt='' className="" width={100} height={100} />
                                        </div>
                                        <div className='border-r-2 pr-4 inline-block'>
                                            <Image src="/Dominos.png"  className="" alt='' width={120} height={120} />
                                        </div>
                                        <div className=''>
                                            <Image src="/Okmox.png" className="" alt='' width={100} height={100} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="w-full flex  md:w-[500px]  2xl:w-[650px]   items-center ">

                        {successBanner && (
                            <div className=" translate-x-2 absolute  z-10 top-10  xl:w-[500px] mb-4 lg:ml-40 2xl:ml-20  xl:ml-60 md:mx-2 sm:ml-10 bg-green-500 text-white p-4 rounded-lg">
                                <FaCheckCircle size={24} className="mr-2" />
                                <span>Query Submitted Successfully!</span>
                            </div>
                        )}
                        <form
                            method="POST"
                            onSubmit={handleSubmit}
                            className="    "
                        >
                            <div class="flex flex-col  gap-10  w-full">
                                <div class="lg:w-[450px] md:w-[400px] xl:w-[550px] xl:max-w-4xl h-[550px] bg-[#FFF]  md:h-[550px] xl:h-[650px]  2xl:w-[650px] w-[calc(100vw-10%)] px-6 lg:px-10 flex flex-col   ">
                                    <div class="flex pt-10  justify-end ">

                                        <svg onClick={handleClose} class="font-bold cursor-pointer hover:red-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M1 1L19 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                            <path d="M1 19L19 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg>
                                    </div>
                                      <div className='flex flex-col lg:mt-8 gap-4 xl:gap-10'>
                                    <div className="relative z-0   w-full  group">
                                        <input
                                            type="text"
                                            name="Name"
                                            id="floating_first_name"
                                            className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                            className="peer-focus:font-medium  absolute text-lg  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Full Name*
                                        </label>
                                    </div>

                                 
                                    <div className="relative z-0 w-full  group">
                                        <input
                                            type="text"
                                            name="Email"
                                            id="floating_last_name"
                                            className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                            className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            E-Mail ID*
                                        </label>
                                    </div>
                                    </div>
                                    <div className='flex flex-col mt-4 xl:mt-8 gap-4 xl:gap-10'>
                                    <div className="relative z-0 w-full group">
                                        <input
                                            type="tel"
                                            name="Number"
                                            id="floating_phone"
                                            className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Contact Number*
                                        </label>
                                    </div>


                                    <div className="relative z-0 w-full  group">
                                        <input
                                            type="text"
                                            name="message"
                                            id="floating_email"
                                            className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Message (Optional)
                                        </label>
                                    </div>

                                    </div>
                                    <div className='flex mt-8 flex-col space-y-6 md:space-y-0 md:flex-row xl:mt-10 md:justify-between md:items-center'>
                                    <div>
                                        <label className="text-green-600 text-xl xl:text-2xl font-bold">
                                            {captcha.question} ={" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="xl:w-16  w-16 text-xl text-center  border-b-2  text-black"
                                            value={inputCaptcha}
                                            onChange={handleCaptchaChange}
                                            required
                                        />
                                        {isCaptchaValid === true && (
                                            <span className=" mx-5 lg:mx-10 text-xl" style={{ color: "green" }}>
                                                ✔️
                                            </span>
                                        )}
                                        {isCaptchaValid === false && (
                                            <span className=" mx-5 lg:mx-10 text-xl" style={{ color: "red" }}>
                                                ❌
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        onClick={getdata}
                                        className="rounded-full rounds t-4 text-white border-white border-2 bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]   hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 open_sans_display  text-lg w-full sm:w-auto px-8 py-3 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="submit"
                                        style={{
                                            backgroundColor: isCaptchaValid ? "green" : "[#7b61ff]",
                                            color: "white",
                                        }}
                                        disabled={isCaptchaValid === null || !isCaptchaValid}
                                    >
                                        Submit
                                    </button>
                                    </div>
                                    <div className=' flex justify-between items-center pb-6 md:pb-0 mt-6 md:mt-12 2xl:mt-8'>

                                   
                                    <h2 className='text-black z-20 text-sm md:text-lg lg:text-xl xl:text-xl open_sans_display '>In Just <b> 10 min</b> You Will Get A Response</h2>
                                    <Image src="/whatsapp.svg" className=" mr-10" alt="" width={40} height={40} />
                                    </div>
                                    </div>
                                    
                                </div>
                         
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DumyForm
