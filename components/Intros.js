import React from 'react'
import Image from 'next/image'
import Mobi from "@/public/liqui.png"
import Mobi1 from "@/public/im1.jpg"
import Mobi2 from "@/public/okomo.png"
import Mobi3 from "@/public/im3.jpg"

const Intros = () => {
  return (
    <div class=" text-white pt-12 h-auto sm:mx-8 "
    style={{
      backgroundImage: `url("bg.jpg")`,
    }}
    >
    <div class="  mx-auto flex flex-col items-center text-center">
        <h1 class="text-4xl font-bold mb-4 font-sedan">Transforming Business with <br/>Digital Innovation & Data-driven Apps</h1>
        <p class="text-xl mb-8 ">Spacetotech is turning ideas into reality for a decade now. Partner with us &<br/> drive digitization to your business with innovation and technology</p>
        <button class="border-2 border-solid rounded-full text-white font-bold py-2 px-4  hover:bg-blue-700  transition duration-300">Let's Talk!</button>
    </div>
    <div class=" relative h-20 lg:h-80 lg:my-10 lg:py-10 ">
      <div className="absolute lg:top-40 xl:top-10 mt-12  grid grid-cols-5  lg:grid-cols-5 gap-2">
        <Image src={Mobi1} alt="App Image 1" class="rounded-lg  shadow-lg transform hover:scale-105 transition duration-300" width={500} height={10}/>
        <Image src={Mobi1} alt="App Image 2" class="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"  width={500} height={10}/>
        <Image src={Mobi1} alt="App Image 2" class="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"  width={500} height={10}/>
        <Image src={Mobi3} alt="App Image 3" class="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" width={500} height={10}/>
        <Image src={Mobi3} alt="App Image 4" class="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" width={500} height={10}/>
    </div>
    </div>
    <div class="grid grid-cols-2 md:flex mt-5 justify-center md:justify-around  md:space-x-4 md:mt-40 bg-purple-500 h-60 md:h-60 xl:h-80">
        
        <Image src={Mobi2} alt="Company Logo 1" class=" md:mx-5 opacity-75 hover:opacity-100 transition duration-300"  width={100} height={5}/>
        <Image src={Mobi2} alt="Company Logo 2" class="md:mx-5 opacity-75 hover:opacity-100 transition duration-300" width={100} height={5}/>
        <Image src={Mobi} alt="Company Logo 3" class="md:mx-5 opacity-75 hover:opacity-100 transition duration-300" width={100} height={5}/>
        <Image src={Mobi} alt="Company Logo 4" class="md:mx-5 opacity-75 hover:opacity-100 transition duration-300" width={100} height={5}/>
    </div>
</div>
  )
}

export default Intros