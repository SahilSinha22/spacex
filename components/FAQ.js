"use client"
import Image from 'next/image';
import React from 'react'
import { useState, useEffect, useRef } from 'react';
const FAQ = () => {
    
     
    const textRef = useRef(null);
     const [openQuestion, setOpenQuestion] = useState(0); 

   
     const handleQuestionHover = (index) => {
         setOpenQuestion(index);
     };
 
     const handleMouseLeave = () => {
         setOpenQuestion(-1); 
     };
 
     // FAQ content
     const faqContent = [
         {
             question: "Q. How do you define a top Flutter app development company in India?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. What are the three disadvantages of Flutter?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. What’s makes you Flutter development services unique?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. What are some of the most popular platforms using the Flutter framework?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. What is cross-platform app development?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. How does a Flutter app development company reduce costs of building Flutter apps?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. How does a Flutter app development company in India reduce costs of building Flutter apps?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
     ];


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
    <div className='bg-black'>
         <div className="max-w-7xl m-auto h-auto pt-2 mt-5 sm:px-10 xl:px-20 2xl:px-10">
                    <div className=" text-white open_sans_displays pt-6  max-w-7xl mx-auto text-foreground p-6">
                        <Image src="/Chatbot/FAQ.webp" className='w-14 h-14 xl:w-20 xl:h-20' alt='FAQ' width={100} height={100}/>
                        <div className="space-y-4 my-7 xl:my-10">
                            {faqContent.map((item, index) => (
                                <div key={index} className='xl:py-4'>
                                    <h3
                                        className="font-semibold border-b border-gray-700 xl:text-xl pb-2 cursor-pointer"
                                        onMouseEnter={() => handleQuestionHover(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {item.question}
                                    </h3>
                                    {openQuestion === index && item.answer && (
                                        <p className="text-muted-foreground xl:text-lg  mt-2">
                                            {item.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
      
    </div>
  )
}

export default FAQ
