import React from "react";
import Image from "next/image";
import Img1 from "@/public/1.jpg"
import Img2 from "@/public/2.jpg"
import Img3 from "@/public/3.jpg"
import Img4 from "@/public/4.jpg"
import Img5 from "@/public/5.jpg"
import Img6 from "@/public/6.jpg"
import Img7 from "@/public/7.jpg"
import Img8 from "@/public/8.jpg"
import Img9 from "@/public/9.jpg"
import Img10 from "@/public/10.jpg"
import Img11 from "@/public/11.jpg"
import Img12 from "@/public/12.jpg"
const Form = () => {
  return (
    <div className=" bg-black ">

<div className="flex flex-col m-1  pt-4  ">
  <div className="grid grid-cols-4 py-4 px-4 ">
    <div className=" m-1">
      <Image src={Img1} alt="staff" width={400} height={40}/>
    </div>
    <div className="flex flex-col mx-4 ">
    <Image src={Img2} alt="staff" width={400} height={20}/>
    <Image className="mt-4"  src={Img3} alt="staff" width={400} height={20}/>
    </div>
    <div className="m-1">
    <Image src={Img4} alt="staff" width={400} height={40}/>
    </div>
    <div className="flex flex-col mx-4">
    <Image src={Img5} alt="staff" width={400} height={20}/>
    <Image className="mt-4"  src={Img6} alt="staff" width={400} height={20}/>
    </div>
  </div>
  <div className="grid grid-cols-4 ">
    <div className="flex flex-col m-1">
    <Image src={Img7} alt="staff" width={400} height={20}/>
    <Image className="mt-4" src={Img8} alt="staff" width={400} height={20}/>
    </div>
    <div className="m-1 mx-4 ">
    <Image src={Img9} alt="staff" width={400} height={40}/>
    </div>
    <div className="flex flex-col m-1">
    <Image src={Img10} alt="staff" width={400} height={20}/>
    <Image className="mt-4"  src={Img11} alt="staff" width={400} height={20}/>
    </div>
    <div className="m-1 mx-4">
    <Image src={Img12} alt="staff" width={400} height={40}/>
    </div>
  </div>
</div>


<div className=" text-center mx-16 lg:ml-28 xl:ml-64 flex flex-col ">
<h1 className="text-left sm:text-2xl items-center text-white text-lg md:text-4xl  font-sedan">
        Get in touch with us today to see how we can help <br/> you develop the right
        product-faster
      </h1>
      </div>
      <div className="flex flex-col mx-10 sm:flex-row items-center m-auto justify-around md:mx-4">
        
          <div className="  md:mx-2 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 border  border-rounded pl-2 bg-blue-500 text-white my-8 md:ml-10 ">
            <div className="m-8 md:text-2xl ">
              <h1 className="md:text-2xl font-semibold" >Hello now !</h1>
              <div className="flex flex-row my-2" > 
                <Image src="flag.svg" alt="logo" width={40} height={4} /> <div className="ml-4 md:text-xl">+91 88 820 76 755 </div> </div>
              <h1 className="md:text-2xl font-semibold mt-2" >Connect with us</h1>
              <p className="md:text-xl ">
                Email : amit@spacetotech.com
                <br />
                office : C-171 Sector-63,Noida
                <br />
                Uttar Pradesh 201301
              </p>
              </div>
          </div>
       
        <div className="mr-4 mb-4  md:mx-2 ">
          <form className="max-w-md mx-auto ">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  className="peer-focus:font-medium  absolute text-sm lg:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
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
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                ><div className="flex flex-row">
                  <div className=""><Image src="flag.svg" alt="flag" width={40} height={5} /> </div>
                <div className="">+91</div>
                </div>
                 
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
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
                Budget
                (selext a range)
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
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
            </div>
            <button
              className="text-white border-white border-2  bg-black hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get a free quote -
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
