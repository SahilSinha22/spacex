import React from "react";
import Image from "next/image";
const Journey = () => {
    return (
        <div className="bannerx ">

      
        <div className=" max-w-7xl 2xl:max-w-[1530px] 2xl:mt-20 px-4 py-12 m-auto text-white ">
            <div className="mx-5 md:mx-10 xl:mx-20 2xl:px-20">
                <h2 className="text-3xl md:text-5xl font-bold playfair text-left">
                    Process of Development
                </h2>
                <p className="text-left md:text-lg  mt-4 open_sans_display">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s <br/>standard dummy text ever since the 1500s.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2   space-y-5 lg:grid-cols-3 xl:grid-cols-5  justify-center items-center 2xl:gap-10 space-x-8 mt-8">
                    <div className="text-center  justify-center mt-4 ml-10">
                        <div className="w-48 h-48  logo-img  2xl:w-52 2xl:h-52  border-dashed mb-4 border-2  mx-auto  flex items-center justify-center rounded-full">
                            <div className="relative bg-[#EFEFEF] hover:bg-amber-100 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48  w-40 h-40    rounded-full items-center">
                                <Image
                                    className="absolute top-12  left-12 fill-white stroke-cyan-500 2xl:top-14 2xl:left-16 "
                                    src="1jour.svg"
                                    alt="Inception"
                                    width={60}
                                    height={8}
                                />
                            </div>
                        </div>
                        <div className="text-xl md:text-xl 2xl:text-2xl 2xl:ml-12 font-bold">Analysis</div>
                    </div>
                    <div className="text-center justify-center items-center lg:mx-2  2xl:mx-4">
                        <div className="w-48 h-48  logo-img 2xl:mx-6   2xl:w-52 2xl:h-52 border-dashed border-2  mx-auto mb-2 flex items-center justify-center  rounded-full">
                            <div className="relative  hover:bg-amber-100 transform hover:scale-110 transition duration-300  2xl:w-48 2xl:h-48  w-40 h-40    bg-gray-200 rounded-full items-center">
                                <Image
                                    className="absolute  top-10 left-10 2xl:top-12 2xl:left-16"
                                    src="2jour.svg"
                                    alt="Design"
                                    width={80}
                                    height={8}
                                />
                            </div>
                        </div>
                        <div className="text-xl md:text-xl 2xl:text-2xl 2xl:ml-20 font-bold">Design</div>
                    </div>
                    <div className="text-center lg:mx-2 2xl:mx-4">
                        <div className="w-48 h-48  logo-img 2xl:mx-10  2xl:w-52 2xl:h-52  border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
                            <div className="relative hover:bg-amber-100 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48  w-40 h-40    bg-gray-200 rounded-full items-center">
                                <Image
                                    className="absolute   top-10 left-10 2xl:top-14 2xl:left-14"
                                    src="3jour.svg"
                                    alt="Development"
                                    width={80}
                                    height={8}
                                />
                            </div>
                        </div>
                        <div className="text-xl md:text-xl 2xl:text-2xl 2xl:ml-20  font-bold">Development</div>
                    </div>
                    <div className="text-center lg:mx-2 2xl:mx-4">
                        <div className="w-48 h-48  logo-img 2xl:mx-10  2xl:w-52 2xl:h-52  border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
                            <div className="relative  hover:bg-amber-100 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48  w-40 h-40    bg-gray-200 rounded-full items-center">
                                <Image
                                    className="absolute  top-10 left-10 2xl:top-14 2xl:left-14"
                                    src="4jour.svg"
                                    alt="Stabilization"
                                    width={80}
                                    height={8}
                                />
                            </div>
                        </div>
                        <div className="text-xl md:text-xl text-center px-4 2xl:text-2xl 2xl:ml-20 font-bold">
                            <h2>Testing
                                </h2></div>
                    </div>
                    <div className="text-center lg:mx-2  2xl:mx-10">
                        <div className="w-48 h-48  logo-img   2xl:mx-10  2xl:w-52 2xl:h-52  border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
                            <div className="relative hover:bg-amber-100 transform hover:scale-110 transition duration-300 2xl:w-48 2xl:h-48  w-40 h-40    bg-gray-200 rounded-full items-center">
                                <Image
                                    className="absolute  top-8 left-6 2xl:top-12 2xl:left-10"
                                    src="5jour.svg"
                                    alt="Deployment"
                                    width={100}
                                    height={10}
                                />
                            </div>
                        </div>
                        <div className="text-xl md:text-xl text-center px-8 2xl:ml-20 2xl:text-2xl font-bold">
                            <h2>Live
                                </h2></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Journey;

