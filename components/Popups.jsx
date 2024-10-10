
"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { generateArithmeticCaptcha } from "@/app/utils/generateCaptcha";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const DumyForm = ({ onClose }) => {
    const [captcha, setCaptcha] = useState("");
    const [inputCaptcha, setInputCaptcha] = useState("");

    const [visible, setVisible] = useState(true);
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
       if (!user.message) newErrors.message = 'Message is a required ';

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
            'https://nextfirebase-fab92-default-rtdb.firebaseio.com/SpacetoTech.json',
            options
        );
        if (res) {
            setSuccessBanner(true);
            setTimeout(() => {
                setSuccessBanner(false);
                setVisible(false);
                onClose();
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
        onClose();
    };

   

    const handleClose = () => {
        setVisible(false);
        document.body.style.overflow = 'auto';
        onClose();
    };
    

    if (!visible) return null;
    return (
        <div className='w-full'>
        <div class="sm:justify-center px-4 sm:px-0 Glassy   items-center flex m-auto w-full    overflow-y-auto fixed inset-0 z-50 e">
            <div className='relative  -top-4  lg:left-0   lg:top-0'>
            <div class="  flex w-auto md:w-[600px] lg:w-[800px]  lg:top-10 xl:top-0 xl:w-auto my-6  md:justify-center place-content-center xl:max-w-4xl 2xl:max-w-7xl">
                <div className='h-auto hidden rounded-3xl sm:block'>
                    <div className='relative h-full '>


                        <Image src="/FormImg.webp" className="-z-20 w-[300px] md:w-[400px] rounded-l-3xl rounded-r-none lg:w-[450px] xl:w-[500px] h-full" alt="" width={1000} height={1000} />
                        <div className='z-20 absolute justify-center top-6  text-white'>
                            <div className='px-5'>


                                <h2 className='text-3xl xl:text-5xl leading-snug font-extrabold playfair_display'>We’d love to <br />hear from you.</h2>
                                <h2 className='leading-snug text-base pt-2 xl:text-xl'>By enabling an innovative <br />digital experience <br />that fulfills new-age demands.</h2>
                            </div>
                        </div>
                        <div className='absolute bottom-6 text-white'>
                            <div className='px-5'>


                                <h2 className='text-xl lg:text-2xl leading-snug  open_sans_displays inline-block border-b'>Explore our works —</h2>
                                <div className='flex  aspect  items-center py-4 gap-4 xl:gap-4'>
                                    <div className='border-r-2 pr-2 lg:pr-4'>
                                        <Image src="/premio.png" alt='' className="" width={100} height={100} />
                                    </div>
                                    <div className='border-r-2 pr-2 lg:pr-4 inline-block'>
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



                <div class="w-full flex sm:w-[300px] md:w-[500px]  2xl:w-[650px] h-auto  items-center  ">

                    {successBanner && (
                        <div className=" translate-x-2 absolute  z-10 top-10  xl:w-[500px] mb-4 lg:ml-40 2xl:ml-20  xl:ml-60 md:mx-2 sm:ml-10 bg-green-500  text-white p-4 rounded-lg">
                            <FaCheckCircle size={24} className="mr-2" />
                            <span>Query Submitted Successfully!</span>
                        </div>
                    )}
                    <form
                        method="POST"
                        onSubmit={handleSubmit}
                        className="  h-full  "
                    >
                        <div class="flex flex-col h-full gap-10 rounded-4xl md:rounded-none w-full">
                            <div class="lg:w-[450px] sm:w-[300px]  md:w-[350px] xl:w-[550px] rounded-xl sm:rounded-r-3xl sm:rounded-none xl:max-w-4xl h-full bg-[#FFF]   2xl:w-[550px] w-[calc(100vw-10%)] px-6 lg:px-10 flex flex-col   ">
                                <div class="flex pt-10  justify-end ">

                                    <svg onClick={handleClose} class="font-bold cursor-pointer hover:red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path d="M1 1L19 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                        <path d="M1 19L19 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </div>
                                  <div className='flex flex-col xl:mt-6 2xl:mt-8 gap-4 xl:gap-10'>
                                <div className="relative z-0   w-full  group">
                                    <input
                                        type="text"
                                        name="Name"
                                        id="floating_first_name"
                                        className="block py-2.5 px-0 w-full text-sm md:text-base lg:text-lg text-[#000000] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                        className="peer-focus:font-medium  absolute text-sm md:text-base lg:text-lg  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 md:top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Full Name*
                                    </label>
                                </div>

                             
                                <div className="relative z-0 w-full  group">
                                    <input
                                        type="text"
                                        name="Email"
                                        id="floating_last_name"
                                        className="block py-2.5 px-0 w-full text-sm md:text-base lg:text-lg text-[#000000] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                        className="peer-focus:font-medium absolute text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 md:top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        E-Mail ID*
                                    </label>
                                </div>
                                </div>
                                <div className='flex flex-col mt-4 xl:mt-8 gap-4 xl:gap-10'>
                               
                                <div class=" ">
                                <div class="relative text-lg flex w-full">
                                    <PhoneInput
                                        country={'in'}
                                        value={user.Number}
                                        onChange={value => setUser({ ...user, Number: value })}
                                        inputProps={{
                                            name: 'Number',
                                            required: true,
                                            autoFocus: false
                                        }}
                                        className="border-b-2 w-full text-lg dark:border-gray-600 border-gray-300 peer-placeholder-shown:text-blue-gray-500"
                                        containerStyle={{ width: '100%' }}
                                        inputStyle={{ width: '100%', border: 'none',fontSize:'18px' }}
                                        buttonStyle={{ border: 'none', background: 'transparent',color: ' #6b7280' }}
                                    />

                                </div>
                                {errors.Number && <p className="text-red-600 text-xs mt-1">{errors.Number}</p>}
                                </div>


                                <div className="relative z-0 w-full  group">
                                    <input
                                        type="text"
                                        name="message"
                                        id="floating_email"
                                        className="block py-2.5 px-0 w-full text-sm md:text-base lg:text-lg text-[#000000] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                        className="peer-focus:font-medium absolute text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 md:top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                                        className="xl:w-16  w-16 text-xl text-center  border-b-2  text-[#000000]"
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
                                    className={`rounded-full  t-4 text-white border-white border-2 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 open_sans_display xl:text-lg w-full sm:w-auto xl:px-8 xl:py-3 px-4 py-2.5 text-center transition-opacity duration-300 ${
                                        isCaptchaValid ? 'bannerx' : 'bg-[#7b61ff] opacity-50 cursor-not-allowed'}`}
                                  
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
                                <div className=' flex justify-between items-center pb-6 md:pb-0 my-6 md:my-6 2xl:my-10'>

                               
                                <h2 className='text-[#000000] z-20 text-xs  lg:text-base xl:text-lg open_sans_display '>In Just <b> 10 min</b> You Will Get A Response</h2>
                                <a href="https://api.whatsapp.com/send?phone=918882076755">   <Image src="/whatsapp.svg" className="" alt="" width={40} height={40} /> </a>

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
