
"use client";
import React, { useState, useEffect }  from 'react'; 
import { FaCheckCircle } from 'react-icons/fa';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const DumyForm = () => {
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
           
        } else {
            alert("Error Occurred");
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
            document.body.style.overflow = 'hidden';
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setVisible(false);
        document.body.style.overflow = 'auto';
    };
    const handleFileClick = () => {
        document.getElementById('fileInput').click();
    };

    if (!visible) return null;
    return (
        <div>
            <div class="justify-center items-center flex overflow-x-hidden  duration-1000 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div class="relative w-auto my-6 mx-auto max-w-3xl "><div class="w-full flex items-center mx-auto z-50">
                  
                    <form method="POST" className="space-y-4" onSubmit={getdata}>
                        <div class="flex flex-col justify-center items-center w-full">
                            <div class="md:w-[650px]  bg-[#FFF] rounded-[25px]  md:h-[500px] w-[calc(100vw-10%)] md:p-10 p-[10%]  flex flex-col justify-center  ">
                                <div class="flex justify-between items-center ">
                                    <div>
                                        <p class=" text-[25px] font-bold ">Get in Touch </p>
                                    </div>
                                    <svg onClick={handleClose} class="font-bold cursor-pointer hover:red-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M1 1L19 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                        <path d="M1 19L19 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </div>
                                <div class="pt-2">
                                    <div class="relative w-full min-w-[200px] h-11">
                                        <input name="Name" width="300" placeholder=" "
                                            value={user.Name}
                                            ///autoComplete="off"
                                            onChange={data}
                                            id="floating_first_name"
                                            type="text" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm pt-4 pb-1.5 border-blue-gray-200 focus:border-gray-500" fdprocessedid="te8qzr" />

                                        <label htmlFor="Name" class="flex w-full h-full select-none pointer-events-none absolute  font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">Name* </label>
                                    </div>
                                    {errors.Name && <p className="text-red-600 text-xs mt-1">{errors.Name}</p>}
                                </div>
                                <div class="pt-2">
                                    <div class="relative w-full min-w-[200px] h-11">

                                        <input name="Email" type="email" placeholder=" "
                                            value={user.Email}
                                            ///autoComplete="off"
                                            onChange={data}
                                            id="floating_last_name"
                                            class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm pt-4 pb-1.5 border-blue-gray-200 focus:border-gray-500" />


                                        <label htmlFor="Email" class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5  after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">Email* </label>
                                    </div>
                                    {errors.Email && <p className="text-red-600 text-xs mt-1">{errors.Email}</p>}

                                </div>
                                <div class=" pt-2">
                                    <div class="relative flex w-full">
                                        <PhoneInput
                                            country={'in'}
                                            value={user.Number}
                                            onChange={value => setUser({ ...user, Number: value })}
                                            inputProps={{
                                                name: 'Number',
                                                required: true,
                                                autoFocus: false
                                            }}
                                            className="border-b-2 w-full peer-placeholder-shown:text-blue-gray-500"
                                            containerStyle={{ width: '100%' }}
                                            inputStyle={{ width: '100%', border: 'none' }}
                                            buttonStyle={{ border: 'none', background: 'transparent' }}
                                        />

                                    </div>
                                    {errors.Number && <p className="text-red-600 text-xs mt-1">{errors.Number}</p>}

                                </div>
                                <div className="relative w-full pt-4">
                                    <input type="file"
                                        name="File"
                                        id="fileInput"
                                        style={{ display: 'none' }}
                                        onChange={(e) => setUser({ ...user, File: e.target.files[0] })}
                                    />
                                    <div className="relative w-full min-w-[200px] h-11 ">
                                        <input type="text"
                                            name="File"
                                            placeholder="Attach File"
                                            value={user.File ? user.File.name : ''}
                                            readOnly
                                            onClick={handleFileClick}
                                            onChange={value => setUser({ ...user, File: value })}
                                            className="peer w-full h-full border-b-2 bg-transparent text-blue-gray-700 font-sans font-normal peer-placeholder-shown:text-blue-gray-500 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all  placeholder-shown:border-blue-gray-500 text-sm pt-4 pb-1.5 border-blue-gray-200 focus:border-gray-500"
                                        />
                                        <label onClick={handleFileClick} className="absolute right-2 top-4 cursor-pointer text-gray-500 placeholder:text-gray-500 after:border-gray-500 peer-focus:after:border-gray-900">
                                            <div class=" rounded-full text-center flex justify-center items-center  h-4 w-4 bg-gradient-to-r from-[#056BA7] to-[#30B0FA] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 7 8" fill="none"><path d="M3.07819 -0.000384092C3.03769 -0.000618219 2.99755 0.00714302 2.96006 0.0224555C2.92258 0.0377676 2.88848 0.0603297 2.85973 0.0888472L0.09049 2.85808C0.0325502 2.91602 0 2.99461 0 3.07655C0 3.15849 0.0325502 3.23707 0.09049 3.29501C0.14843 3.35295 0.227013 3.3855 0.308952 3.3855C0.390891 3.3855 0.469474 3.35295 0.527414 3.29501L3.07819 0.741156L5.62897 3.29501C5.65765 3.3237 5.69171 3.34645 5.7292 3.36198C5.76668 3.37751 5.80685 3.3855 5.84743 3.3855C5.888 3.3855 5.92817 3.37751 5.96566 3.36198C6.00314 3.34645 6.0372 3.3237 6.06589 3.29501C6.09458 3.26632 6.11734 3.23226 6.13286 3.19478C6.14839 3.15729 6.15638 3.11712 6.15638 3.07655C6.15638 3.03597 6.14839 2.9958 6.13286 2.95832C6.11734 2.92083 6.09458 2.88677 6.06589 2.85808L3.29665 0.0888472C3.2679 0.0603297 3.2338 0.0377676 3.19632 0.0224555C3.15883 0.00714302 3.11868 -0.000618219 3.07819 -0.000384092Z" fill="white">
                                                </path>
                                                    <path d="M3.07844 -1.90735e-05C2.99684 -1.90735e-05 2.91858 0.0323982 2.86087 0.0901022C2.80317 0.147806 2.77075 0.226069 2.77075 0.307674V7.69231C2.77075 7.77391 2.80317 7.85218 2.86087 7.90988C2.91858 7.96758 2.99684 8 3.07844 8C3.16005 8 3.23831 7.96758 3.29602 7.90988C3.35372 7.85218 3.38614 7.77391 3.38614 7.69231V0.307674C3.38614 0.226069 3.35372 0.147806 3.29602 0.0901022C3.23831 0.0323982 3.16005 -1.90735e-05 3.07844 -1.90735e-05Z" fill="white">
                                                    </path>
                                                </svg>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="relative w-full min-w-[200px] h-11">
                                        <input name="message" type="text" value={user.message}
                                            /// autoComplete="off"
                                            onChange={data} class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm pt-4 pb-1.5 border-blue-gray-200 focus:border-gray-500" placeholder=" " fdprocessedid="3fkzrr" />
                                        <label htmlFor="message" class="flex w-full h-full select-none pointer-events-none absolute  font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">Query* </label>
                                    </div>
                                    {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}

                                </div>
                                <div>
                                    <div class="flex flex-col  md:flex-row items-center  justify-between pt-10">
                                        <div>
                                            <button type="submit" class="pl-6 pr-3   py-1 rounded-[100px]  flex items-center text-center justify-center overflow-hidden  text-[30px]   text-white bg-gradient-to-r from-[#056BA7] to-[#30B0FA] w-[200px]" fdprocessedid="qv6koe">Submit<span class="h-[52px] w-[52px] ml-4 text-black rounded-full bg-white text-center items-center flex justify-center hover:duration-1000 bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-[#056BA7] hover:via-[#b0dffc] hover:to-[#30B0FA]   ">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd">
                                                    </path>
                                                </svg>
                                            </span>

                                            </button>
                                        </div>
                                        <div>
                                            <p>
                                            </p>
                                        </div>
                                        <div class="flex gap-6 mt-5 md:mt-0">
                                            <a href="https://wa.me/918882076755" target="_blank" rel="noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                                                    <circle cx="29" cy="29" r="29" fill="#25D366" fill-opacity="0.3"></circle>
                                                    <path d="M29 50C17.4038 50 8 40.5962 8 29C8 17.4038 17.4038 8 29 8C40.5962 8 50 17.4038 50 29C50 40.5962 40.5962 50 29 50Z" fill="#25D366"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.8239 19.2224C36.2199 16.6142 32.7507 15.1778 29.0589 15.1736C21.4527 15.1736 15.2577 21.3644 15.2577 28.9748C15.2577 31.4066 15.8919 33.7838 17.1015 35.8754L15.1443 43.028L22.4607 41.1086C24.4767 42.209 26.7447 42.7886 29.0547 42.7886H29.0589C36.6651 42.7886 42.8559 36.5978 42.8601 28.9874C42.8643 25.2998 41.4321 21.8306 38.8239 19.2224ZM29.0631 40.4576H29.0589C27.0009 40.4576 24.9807 39.9032 23.2209 38.8574L22.8009 38.6096L18.4581 39.7478L19.6173 35.5142L19.3443 35.0816C18.1977 33.2546 17.5887 31.1462 17.5887 28.9748C17.5929 22.6496 22.7379 17.5046 29.0673 17.5046C32.1333 17.5046 35.0103 18.7016 37.1775 20.8688C39.3447 23.036 40.5375 25.9214 40.5333 28.9832C40.5333 35.3126 35.3841 40.4576 29.0631 40.4576ZM35.3547 31.8644C35.0103 31.6922 33.3135 30.8564 32.9985 30.743C32.6835 30.6296 32.4525 30.5708 32.2215 30.9152C31.9905 31.2596 31.3311 32.0366 31.1295 32.2676C30.9279 32.4986 30.7263 32.528 30.3819 32.3558C30.0375 32.1836 28.9245 31.8182 27.6099 30.6422C26.5851 29.7266 25.8921 28.5968 25.6905 28.2524C25.4889 27.908 25.6695 27.719 25.8417 27.5468C25.9971 27.3914 26.1861 27.1436 26.3583 26.942C26.5305 26.7404 26.5893 26.5976 26.7027 26.3666C26.8161 26.1356 26.7615 25.934 26.6733 25.7618C26.5851 25.5896 25.8963 23.8928 25.6107 23.1998C25.3293 22.5278 25.0479 22.6202 24.8337 22.6076C24.6321 22.5992 24.4011 22.595 24.1743 22.595C23.9433 22.595 23.5695 22.6832 23.2545 23.0276C22.9395 23.372 22.0491 24.2078 22.0491 25.9046C22.0491 27.6014 23.2839 29.2436 23.4561 29.4704C23.6283 29.7014 25.8879 33.1832 29.3487 34.6784C30.1719 35.0354 30.8145 35.2454 31.3143 35.405C32.1417 35.6696 32.8935 35.6318 33.4857 35.5436C34.1493 35.4428 35.5269 34.7078 35.8125 33.9056C36.0981 33.0992 36.0981 32.4104 36.0141 32.2676C35.9301 32.1248 35.6991 32.0408 35.3547 31.8644Z" fill="white"></path></svg></a><a href="tel:+9188820076755">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                                                    <circle cx="29" cy="29" r="29" fill="#218AFF" fill-opacity="0.15">
                                                    </circle>
                                                    <path d="M21.2865 26.3677C23.3865 30.4948 26.7625 33.8708 30.8969 35.9708L34.1052 32.7552C34.5063 32.3542 35.0823 32.2375 35.5854 32.3979C37.2188 32.9375 38.976 33.2292 40.7917 33.2292C41.601 33.2292 42.25 33.8781 42.25 34.6875V39.7917C42.25 40.601 41.601 41.25 40.7917 41.25C27.0979 41.25 16 30.1521 16 16.4583C16 15.649 16.6562 15 17.4583 15H22.5625C23.3719 15 24.0208 15.649 24.0208 16.4583C24.0208 18.274 24.3125 20.0313 24.8521 21.6646C25.0125 22.1677 24.8958 22.7438 24.4948 23.1448L21.2865 26.3677Z" fill="#218AFF">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {successBanner && (
          <div className="absolute inset-0 flex items-center justify-center  bg-green-500 text-white p-4 rounded-lg">
            <div className="flex mt-10 ml-16">
           <FaCheckCircle size={24} className="mr-2" />
            <span>Query Submitted Successfully!</span>
            </div>
          </div>
        )}
                </div>
                </div>
            </div>
        </div>
    )
}

export default DumyForm
