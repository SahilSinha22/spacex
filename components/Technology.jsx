"use client";
import React, { useState } from 'react';
import FormComponent from '@/components/Popups';
import Techno1 from "@/public/Techno11.webp"
import Techno2 from "@/public/Techno2.png"
import Techno3 from "@/public/Techno3.png"
import Image from 'next/image'
import Modal from '@/components/Model'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
const Technology = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };
  return (
    <div className='open_sans_display cursor-default '>
   
      <div className="flex flex-col items-center justify-center md:mx-20 lg:mx-28 xl:mx-36 2xl:mx-72  xl:px-10 mt-10  lg:mt-32 text-center p-6">
        <h1 className="text-2xl md:text-4xl  xl:text-5xl 2xl:text-6xl  font-bold playfair_display">React Native is an open-source framework that has transformed the landscape</h1>
        <p className="mt-4  md:mx-16 xl:mx-24 2xl:mx-32 text-base md:text-lg lg:text-2xl font-semibold  open_sans_display">The core concept driving the framework’s creation was to streamline the process of developing cross-platform mobile applications.</p>
        <div className="mt-8">
          <Image src={Techno1} alt="Mobile applications showcasing React Native capabilities" className=" w-full h-full 2xl:w-[1272px] mt-4
 2xl:h-[977px]" width={1000} height={100} />
        </div>
      </div>

      <div className=" xl:mb-10 md:mx-20  lg:mx-28 xl:mx-24 2xl:mx-52 mx-6 md:p-6 bg-card open_sans_display ">
        <h1 className="text-3xl  mb-4">React Native</h1>
        <p className="text-base lg:text-xl 2xl:text-2xl mb-4 open_sans_display">
          Developed by Facebook, React Native is an open-source framework that has transformed the landscape of mobile application development since its introduction in 2015. By integrating React with
          JavaScript, it provides a unified development environment for both iOS and Android platforms. The core concept driving the framework’s creation was to streamline the process of developing
          cross-platform mobile applications.Our React Native app development company uses it to write code in a single language, primarily JavaScript, and deploy it across multiple platforms. This “develop once, deploy everywhere” approach
          streamlines the development process, allowing for faster time-to-market and significant cost savings. React Native utilizes native components and code optimizations. Due to this, apps developed
          using React Native achieve performance levels comparable to those developed using native languages.Thus, the platform guarantees a seamless and responsive user experience, a pivotal element contributing to the success of mobile applications.</p>
      </div>

      <div className="xl:mb-10 md:mx-20 lg:mx-28 2xl:mx-52 p-6 bg-background open_sans_display ">
        <h2 className="text-2xl md:text-3xl  text-foreground mb-4">Advantages of React Native For Mobile App Development</h2>
        <p className="text-base md:text-xl xl:pr-72 2xl:mr-96 mb-6">React Native is a premier front-end framework for developing cross-platform apps with a native interface and other features like:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6 lg:grid-cols-3 gap-4">
          <div className="p-4 c xl:pt-8 bg-[#F8F8F8] 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">Cross-Platform Development</h3>
            <p className="xl:text-base xl:pr-2 2xl:pr-20">Developers can build apps across multiple platforms through a single React Native codebase.</p>
          </div>
          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-accent-foreground">Swift Deployment</h3>
            <p className="xl:text-base xl:pr-2  2xl:pr-20">React Native codes and configurations  can easily be maneuvered to swiftly   deploy the application.</p>
          </div>
          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground">Components Library</h3>
            <p className="xl:text-base xl:pr-0 2xl:pr-20">React Native comes in-built with various widgets on distinct features to enrich app functionality.</p>
          </div>
          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground">3rd Party Integration</h3>
            <p className="xl:text-base  2xl:pr-20">Various integrations of 3rd party services for certain specific functionalities can be easily deployed.</p>
          </div>
          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl text-foreground">Live Reloading & Debugging</h3>
            <p className="xl:text-base 2xl:pr-20">React Native allows developers to cross-check codes in real time and make corrections to specific lines.</p>
          </div>

          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground">Cost-effective Maintenance</h3>
            <p className="xl:text-base 2xl:pr-20">Provided the live reload option in React Native, the cost for maintenance is lowered.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-black xl:mb-10  text-white  w-full  p-2 md:p-8 flex flex-row md:flex-row items-center open_sans_displays font-extralight">

          <div className=" p-0  lg:ml-28 2xl:ml-48 mt-10 md:space-y-8 w-1/2">
            <div className=" font-extralight md:space-y-4 flex flex-col">
              <span className=" text-lg md:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">Why is React Native </span>
              <span className=" text-lg md:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">The Future of</span>
              <span className="text-lg md:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">Mobile App</span>
              <span className="text-lg md:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">Development?</span>
            </div>
            <button onClick={handleButtonClick}  className=" mt-4  max-w-xl text-sm md:text-lg bg-gradient-to-r from-[#C9784F] via-[#A06A7B] to-[#6C506F] px-3  md:px-6 py-2 rounded-3xl">Let's Talk</button>

          </div>
          <div className=" mt-10 md:mt-6 2xl:mr-20 mb-6">
            <Image src={Techno2} alt="Mobile App Screenshot 1" className=" w-40 h-40 md:w-96 md:h-full 2xl:w-[550px] 2xl:h-[500px]" width={1000} height={1000} />

          </div>


        </div>
      </div>
      <section className="md:mx-20 xl:mb-10 lg:mx-28 2xl:mx-52 p-6 bg-background open_sans_display  ">
        <h2 className="text-3xl  2xl:text-4xl  mb-4">Our React Native App Development Services</h2>
        <p className="mb-6 xl:text-lg 2xl:text-2xl xl:pr-48 xl:mr-40 2xl:pr-60 2xl:mr-96">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

        <div className="space-y-8 2xl:pl-10 xl:w-[900px] 2xl:w-[1000px]">
          <div className="p-6   shadow-lg shadow-[#E9A0FF4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2">Ideation</h3>
            <p className="text-muted-foreground ">
            The first phase in our blueprint is that of ideation. We put clients at the forefront and give their vision a ground to flourish. 
            Our developers understand the goals of businesses by studying their target audience and ensuring they align with market trends and user needs.
            </p>
          </div>

          <div className="p-6 shadow-lg shadow-[#FFD7A04D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2">Planning</h3>
            <p className="text-muted-foreground  2xl:pr-10">
            This is where we dexterously chart the course for the project. Our team develops a comprehensive roadmap, defining features, timelines, and resource requirements. 
            We prioritise goals and do what must be done in the short term before setting a base for long term functionalities.
             This strategic planning ensures a smooth development process, minimizes risks, and provides clients with a transparent overview of the project's trajectory.
            </p>
          </div>

          <div className="p-6 shadow-lg shadow-[#A0C5FF4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2">Workflow</h3>
            <p className="text-muted-foreground xl:pr-24 2xl:pr-36">
            No React Native App Development company can run without a proper workflow. 
            Our operation cycle is characterized by agile methodologies with flexibility and adaptability at the core. We break down the marathon development process into sprints, fostering incremental progress. Nothing is done without a proper analysis of the consequences.
             Each step is broken into a compact set of pros and cons. Regular feedback loops with clients ensure alignment with expectations            </p>
          </div>

          <div className="p-6 shadow-lg shadow-[#A0FFDE4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2">Execution</h3>
            <p className="text-muted-foreground xl:pr-20 2xl:pr-28">
            With a well-defined plan in place, our execution phase kicks into gear. 
            Our adept developers make the best use of React Native's capabilities to bring your application to life. With relentless integration and testing, we guarantee code stability while prioritizing user-centric design for a seamless and engaging experience. 
            Consistent updates and progress reports serve as evidence of our unwavering dedication to maintaining transparency throughout the entire development process. It is our duty to make sure our clients stay well-informed at every stage of the journey.            </p>
          </div>
        </div>
      </section>

      <div className="mb-10">
        <Image src={Techno3} alt="Mobile App Screenshot 1" className="w-full  h-full 2xl:h-[1000px]" width={1000} height={1000} />

      </div>
      <section className="md:mx-20 xl:mb-10 lg:mx-28 2xl:mx-52 p-6 bg-background open_sans_display ">
        <h2 className="text-3xl  2xl:text-4xl   mb-4">Our Offerings</h2>
        <p className="mb-16 md:text-lg 2xl:text-2xl xl:text-lg xl:pr-60 xl:mr-24 2xl:pr-60 2xl:mr-96">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:pr-60 w-full">
          <div className="p-4  w-auto 2xl:w-[400px] bg-[#F8F8F8] xl:pt-6 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">React Native UI/UX Design</h3>
            <p className=" xl:text-base  2xl:pr-6  ">
            We combine “What wins the eyes, wins the heart” with “the smoother it runs, the better it performs.” 
            As a react native app development company in India, our goal is to deliver customized UI/UX designs. 
            Our design team brings innovation and usability to the forefront to trigger a seamless and visually engaging interface.
            </p>
          </div>

          <div className="p-4  2xl:w-[400px] bg-[#F8F8F8] xl:pt-6 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">Migration & Upgradation</h3>
            <p className="xl:text-base  2xl:pr-6">
            Technological advancements are unavoidable. It is essential to keep up with them. Our Migration and Upgradation services will put you ahead of your competitors by ensuring seamless transitions.
            Whether migrating from a different platform to React Native or upgrading your existing React Native application, our experts secure a smooth and efficient process.            </p>
          </div>
          <div className="p-4  2xl:w-[400px] bg-[#F8F8F8] xl:pt-6 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground"> Enterprise-oriented Solutions</h3>
            <p className="xl:text-base  2xl:pr-6">
            Our specialized react native app development services are tailored for corporate environments.We inherently build enterprise-oriented solutions using the versatility of React Native to create robust, scalable, and secure applications.
            The developers at Space to Tech address the unique challenges of large-scale operations by prioritising efficiency, data security, and cohesive integration.     
            </p>     </div>

          <div className="p-4 2xl:w-[400px]  bg-[#F8F8F8] xl:pt-6 2xl:p-8 hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">QA & Testing Services</h3>
            <p className="xl:text-base  2xl:pr-6">
            Regular tests are the only way to keep issues at bay. 
            When you choose our React Native app development company, our QA & Testing Services work as a shield for your application.We have dedicated quality assurance teams that employ a rigorous testing framework to identify and rectify potential issues.
            It guarantees a robust and error-free user experience 
            </p>
          </div>

          <div className="p-4  2xl:w-[400px] bg-[#F8F8F8] xl:pt-6 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">React Native Support & Maintenance</h3>
            <p className="xl:text-base  2xl:pr-6">
            Longevity is the cornerstone of any business product. Our Support and Maintenance services tick this box to deliver optimal performance to your users.We provide continuous support to address issues promptly and ensure your app remains in good health.
            From handling updates, and resolving bugs, to adapting to new OS releases, we prioritize the uninterrupted functioning.
            </p>
          </div>

        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>

    </div>
  )
}

export default Technology
