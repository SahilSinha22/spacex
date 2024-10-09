"use client"
import Image from 'next/image'
import Modal from '@/components/Model'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
import React, { useState, useEffect, useRef } from "react";
const Benefit = [
    { title: "Work From Anywhere", para: "You don’t need to move towns or cross seas to work with us." },
    { title: "Amazing Team", para: "Work with our diverse and talented professionals scattered all across the world." },
    { title: "Flexible Working Hours", para: "We understand the need for flexible working hours." },
    { title: "Fun Fridays", para: "Step into the weekends with positivity and happiness." },
    { title: "Sempiternal Growth", para: "We want you to have every opportunity that helps you to get hold of the latest tech & trends." },
    { title: "Training And Mentorship", para: "Once you start working with us learning becomes a lifestyle." },
]
const Tech = [
    { title: "React Native Developer", para: "Experience - 2-5 yrs", img: "/Career/React.png" },
    { title: "UI/UX Designer", para: "Experience - 3-4 yrs", img: "/Career/UIUX.png" },
    { title: "Flutter Developer", para: "Experience - 2-5 yrs", img: "/Career/Flutter.png" },
    { title: "Python Developer", para: "Experience - 3-4 yrs", img: "/Career/Python.png" },
]
const logos = [
    "/Career/Experience1.png",
    "/Career/Experience2.png",
    "/Career/Experience3.png",
    "/Career/Experience4.png",
    "/Career/Experience1.png",
    "/Career/Experience2.png",
    "/Career/Experience3.png",
    "/Career/Experience4.png",

];
const Career = () => {
    const textRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // Use the global CSS class
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {

        };
    }, []);
    return (
        <div>
            <div className='text-center flex flex-col justify-center max-w-7xl 2xl:max-w-[1500px] m-auto mt-20 mb-16'>
                <div className='mx-4'>

              
                <h1 className='playfair_displays font-bold text-2xl md:text-4xl lg:text-5xl my-6'>
                    Be part of something great.
                </h1>
                <h1 className='open_sans_display text-base md:text-lg lg:text-2xl '>
                    Join the ranks of visionaries, innovators, and creators, combining talent and <br />technology to craft a future that is dynamic, inclusive, and groundbreaking.
                </h1>
                </div>
            </div>
            <div className='w-screen'>
                <Image src="/Career/Intro.png" className="w-screen" alt="" height={1000} width={1000} />
            </div>
            <div className='max-w-7xl flex flex-col justify-start m-auto my-20 '>
                <div className='mx-4'>
                    <h1 className='text-2xl md:text-3xl xl:text-4xl playfair_displays font-bold '>
                        Experience a culture of empowerment and inclusion.
                    </h1>
                    <p className='my-4 text-base md:text-lg lg:text-base xl:text-xl open_sans_display'>
                        We prioritize a culture where every individual is empowered to innovate, <br />contribute, and make decisions that matter.
                    </p>
                    <div>
                        <button onClick={() => document.getElementById('carrercurr').scrollIntoView({ behavior: 'smooth' })} className="border open_sans_display text-sm lg:text-lg xl:text-xl  border-solid rounded-full text-white px-3 py-2 lg:py-3 lg:px-5 bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] transition duration-300">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            <div className=" ">
                <div className="carouselxx lg:h-auto">
                    <div className="trackx  ">
                        {logos.concat(logos).map((logo, index) => (
                            <div key={index} className="logox  ">
                                <Image src={logo} alt={`Logo ${index % logos.length + 1}`} className='h-full w-full ' width={1000} height={1000} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className='max-w-7xl flex flex-col justify-start m-auto my-10 '>
                <div className='mx-4'> 
                <h1 className='text-3xl xl:text-4xl playfair_displays font-bold '>
                    Our Culture        </h1>
                <p className='my-4 text-lg md:text-base  xl:text-xl open_sans_display md:w-[640px] lg:w-[800px] xl:w-[1000px] max-w-7xl'>
                    Our inclusive and collaborative work culture inspires innovation, drives excellence, and unlocks a team 
                      member’s true potential through focused development and a sense of community. We believe in promoting a 
                     value-based leadership style that guides our behavior and is the foundation of Space to Tech’s
                    company culture.        </p>

                <div className='w-full mt-10'>
                    <Image className='w-full' src="/Career/OurCulture.png" alt="" width={1000} height={1000} />
                </div>

                </div>
            </div>

            <div className='max-w-7xl flex flex-col justify-start m-auto my-10 lg:my-20 '>
                <div className='mx-4'>
                <h1 className='text-3xl xl:text-4xl playfair_displays font-bold '>
                    Work From Home Or From A Beach!       </h1>
                <p className='my-4 text-base  xl:text-xl open_sans_display  md:w-[640px] lg:w-[850px] xl:w-[1050px]'>
                    Work-life balance is a basic necessity for any individual’s holistic development. Woking remotely allows our team 
                    to focus on both- professional and personal lives. Space to Tech’s growth is largely dependent on the 
                    exceptionally creative ideas that come from our brood. In order to feed our team’s artistic desires, we allow 
                     them to operate from any part of the world. So if you too are passionate about making a difference, bringing out 
                    your best, and enjoying what you do, then we are eagerly waiting for you!      </p>
            
                    </div>
                    </div>
            <div className='bannerx py-10 '>
                <div className='max-w-7xl flex flex-col justify-start m-auto my-10 h-auto text-white '>
                    <div className='mx-4'>
                    <h1 className='text-3xl xl:text-4xl playfair_displays font-bold '>
                        Our Hiring Process        </h1>
                    <p className='my-4 text-base xl:text-xl open_sans_display md:w-[640px] lg:w-[850px] xl:w-[1050px]'>
                        Cubix makes hiring easier by breaking down the steps to working with us below. Our process evaluates
                         candidates for technical knowledge, IQ, communications skills, and ability to work in a team environment.
                    </p>
                    <div>
                        <button onClick={() => document.getElementById('carrercurr').scrollIntoView({ behavior: 'smooth' })} className="border-2 open_sans_display text-sm xl:text-lg  border-solid rounded-full text-white px-3 py-2 lg:py-2 md:px-4 bg-gradient-to-r from-[#C9784F] via-[#A06A7B] to-[#6C506F] transition duration-300">
                            Apply Now
                        </button>
                    </div>
                    <div className='flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row text-black h-auto mt-8 gap-6 justify-around  '>
                        <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-4 md:p-6'>
                            <Image src="/Career/Application.png" alt="" width={50} height={50} />
                            <h1 className='text-xl lg:text-2xl playfair_displays font-bold my-3 '>
                                Application       </h1>
                            <p className=' text-base xl:text-lg open_sans_display'>
                                Submit your online application <br /> through our website. Our Talent <br />Acquisition talent will access your skills<br /> and experience.
                            </p>
                        </div>
                        <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-4 md:p-6'>
                            <Image src="/Career/Message.png" alt="" width={50} height={50} />
                            <h1 className='text-xl lg:text-2xl playfair_displays font-bold my-3 '>
                                Interview      </h1>
                            <p className='  text-base xl:text-lg open_sans_display'>
                                A face-to-face interview will follow so<br /> that we can familiarize you with your <br />expertise and experience in the field.                            </p>
                        </div>
                        <div className='flex flex-col bg-[#E3E3E3] rounded-3xl p-6'>
                            <Image src="/Career/Office.png" alt="" width={50} height={50} />
                            <h1 className='text-xl lg:text-2xl playfair_displays font-bold my-3 '>
                                Decision & Offer     </h1>
                            <p className='  text-base xl:text-lg open_sans_display'>
                                Congratulations! You have been <br />selected. Sign the agreement and <br />begin the on-boarding process with us                            </p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

            <div className='max-w-7xl m-auto my-20 '>
                <div className='mx-4'>
                <h1 className='text-3xl xl:text-4xl playfair_displays font-bold '>
                    Perks & Benefits</h1>
                <p className='my-4 text-base xl:text-xl open_sans_display md:w-[640px] lg:w-[850px] xl:w-[1050px]'>
                    We are not the kind of team that would lure you for a free coffee, beer, or snacks. That’s not really our style. But 
                    fantastic vacations and ceiling-free growth? You have it! So if you are game for holistic development, then check 
                    out the ways we give it back to you.                    </p>
                <div className=' grid grid-col-2 md:grid-cols-3 gap-6 mt-10'>
                    {Benefit.map((benefit, index) => (
                        <div key={index} className='p-5 lg:p-6 bg-[#EFEFFF] rounded-xl'>
                            <h1 className='text-xl md:text-lg lg:text-2xl playfair_displays font-bold my-1'>
                                {benefit.title}
                            </h1>
                            <p className=' text-base md:text-sm lg:text-lg open_sans_display pr-4'>
                                {benefit.para}
                            </p>

                        </div>

                    )

                    )}
                </div>
                </div>
            </div>

            <div id="carrercurr" className='max-w-7xl flex flex-col justify-start m-auto my-10 '>
<div className='mx-4'>
                <h1 className='text-2xl lg:text-3xl xl:text-4xl playfair_displays font-bold '>
                    Join Us To Revolutionize The Future Of Technology                </h1>
                <p className='my-4 text-base xl:text-xl open_sans_display'>
                    An adventurous journey awaits…                </p>
                <div className=' grid md:grid-cols-2 gap-8 mt-10'>
                    {Tech.map((tech, index) => (
                        <div key={index} className='p-6 bg-[#EFEFFF] rounded-xl flex justify-between'>
                            <div >

                                <h1 className='text-lg lg:text-xl playfair_displays font-bold '>
                                    {tech.title}
                                </h1>
                                <p className=' text-sm lg:text-base open_sans_display pr-4 my-2'>
                                    {tech.para}
                                </p>
                                <button onClick={handleButtonClick} className="border open_sans_display text-sm  border-solid rounded-full text-white  py-1 px-3 bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] transition duration-300">
                                    Apply Now
                                </button>
                            </div>
                            <div className=''>
                                <Image src={tech.img} alt="" className="w-auto h-14 lg:h-20" width={100} height={100} />
                            </div>
                            <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
                        </div>

                    )

                    )}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Career
