"use client";
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaTimes, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const FormComponent = () => {
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
    if (!user.message) newErrors.message = 'Message is required';
    
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
      }, 3000);
    } else {
      alert("Error Occurred");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    document.body.style.overflow = 'auto';
  };

  if (!visible) return null;

  return (
    <div className="fixed mx-6 lg:my-6 xl:h-[612px] inset-0 h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white   mx-10 p-8 md:-top-40 lg:top-0 rounded-lg shadow-lg w-full max-w-md relative transform transition-transform duration-300 scale-105">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl mb-6 playfair_display font-bold text-center text-gray-800">Get in Touch</h2>
        {successBanner && (
          <div className="absolute inset-0 flex items-center justify-center  bg-green-500 text-white p-4 rounded-lg">
            <div className="flex mt-10 ml-16">
           <FaCheckCircle size={24} className="mr-2" />
            <span>Query Submitted Successfully!</span>
            </div>
          </div>
        )}
        <form method="POST" className="space-y-4" onSubmit={getdata}>
          <div className="relative z-0 w-full mb-4 group">
            <input
              type="text"
              name="Name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={user.Name}
              autoComplete="off"
              onChange={data}
            />
            {errors.Name && <p className="text-red-600 text-xs mt-1">{errors.Name}</p>}
            <label
              htmlFor="Name"
              className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="Email"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={user.Email}
              autoComplete="off"
              onChange={data}
            />
            {errors.Email && <p className="text-red-600 text-xs mt-1">{errors.Email}</p>}
            <label
              htmlFor="Email"
              className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email*
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
             
              name="Number"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={user.Number}
              autoComplete="off"
              onChange={data}
            />
            {errors.Number && <p className="text-red-600 text-xs mt-1">{errors.Number}</p>}
            <label
              htmlFor="Number"
              className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
          <div className="relative z-0 w-full mb-4 group">
          <label
              htmlFor="message"
              className=" text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Query
            </label>
            <textarea
              name="message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={user.message}
              autoComplete="off"
              onChange={data}
            ></textarea>
            {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
            
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="file"
              name="File"
              autoComplete="off"
              onChange={(e) => setUser({ ...user, File: e.target.files[0] })}
              className="py-2.5 px-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 md:file:ml-20 sm:file:ml-10 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {errors.File && <p className="text-red-600 text-xs mt-1">{errors.File}</p>}
          </div>
          <div className="flex  justify-between ">
          <button type="submit" className="rounds  text-white border-white border-2 bg-blue-500 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit →
          </button>
          
          <a href="https://wa.me/YOURNUMBER" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition-colors">
            <FaWhatsapp size={40} />
            <span>Whatsapp</span>
          </a>
          <a href="tel:YOURNUMBER" className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
            <FaPhone size={40} />
            <span>Call</span>
            </a>
           
            </div>
        </form>
        
          
        
      </div>
    </div>
  );
};

export default FormComponent;
