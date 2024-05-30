import React from 'react'
import Image from 'next/image'
import Arrow from "@/public/arrow.svg"
const Imgcmp = () => {
  return (
  <div className="mx-4 md:mx-8 xl:mx-36 grid  mb-10 items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
    
    <div className="hover:bg-zinc-800   bg-black xl:w-64 2xl:w-80 h-44 px-6 rounded-xl space-y-2">
      <div className="text-zinc-400 mt-2">01</div>
      <div className="pt-8">
      <h2 className="text-xl text-zinc-500 font-poppins xl:text-2xl ">Blockchain</h2>
      <p className='text-zinc-500'>Our team is experienced <br/>with various</p>
      <div className="text-blue-300 cursor-pointer relative right-2 bottom-7  items-right"><Image className="absolute lg:right-1 xl:-bottom-8  right-2" src={Arrow} alt='Arrow' width={20} height={5}/></div>
    </div>
    </div>
    
    <div className="hover:bg-zinc-800  bg-black xl:w-64 2xl:w-80 h-44 px-6 rounded-xl space-y-2">
      <div className="text-zinc-400 mt-2">02</div>
      <div className="pt-8">
      <h2 className="text-xl text-zinc-500 xl:text-2xl">AR/VR</h2>
      <p className='text-zinc-500'>Our team is experienced <br/>with various</p>
      <div className="text-blue-300 cursor-pointer relative  bottom-7"><Image className="absolute xl:-bottom-8 right-2" src={Arrow} alt='Arrow' width={20} height={5}/></div>
    </div>
    </div>
    
    <div className="hover:bg-zinc-800  bg-black xl:w-64 2xl:w-80 h-44 px-6 rounded-xl space-y-2">
      <div className="text-zinc-400 mt-2">03</div>
<div className="pt-8">
      <h2 className="text-xl text-zinc-500 xl:text-2xl">Metaverse</h2>
      <p className='text-zinc-500'>Our team is experienced <br/>with various</p>
      <div className="text-blue-300 cursor-pointer relative right-1 bottom-7"><Image className="absolute xl:-bottom-8 right-2" src={Arrow} alt='Arrow' width={20} height={5}/></div>
    </div>
    </div>
    
    <div className="hover:bg-zinc-800  bg-black px-6 xl:w-64 2xl:w-80 h-44 rounded-xl space-y-2">
      <div className="text-zinc-400 mt-2">04</div>
      <div className="pt-8">
      <h2 className="text-xl text-zinc-500 xl:text-2xl">IOT</h2>
      <p className='text-zinc-500'>Our team is experienced <br/>with various</p>
      <div className="text-blue-300 cursor-pointer relative right-2 bottom-7"><Image className="absolute xl:-bottom-8 right-2" src={Arrow} alt='Arrow' width={20} height={5}/></div>
    </div>
    </div>
    
    <div className="hover:bg-zinc-800  bg-black px-6 xl:w-64 2xl:w-80 h-44 rounded-xl space-y-2">
      <div className="text-zinc-400 mt-2">05</div>
      <div className="pt-8">
      <h2 className="text-xl text-zinc-500 xl:text-2xl">NFT</h2>
      <p className='text-zinc-500'>Our team is experienced <br/>with various</p>
      <div className="text-blue-300 cursor-pointer relative right-2 bottom-7"><Image className="absolute xl:-bottom-8 right-2" src={Arrow} alt='Arrow' width={20} height={5}/></div>
    </div>
    </div>
    
    <div className="hover:bg-zinc-800  bg-black px-6 xl:w-64 2xl:w-80 h-44 rounded-xl space-y-2">
      <div className="text-zinc-400 mt-2">06</div>
      <div className="pt-8">
      <h2 className="text-xl text-zinc-500 xl:text-2xl">AI Development</h2>
      <p className='text-zinc-500'>Our team is experienced <br/>with various</p>
      <div className="text-blue-300 cursor-pointer relative right-2 bottom-7"><Image className="absolute xl:-bottom-8 right-2" src={Arrow} alt='Arrow' width={20} height={5}/></div>
    </div>
    </div>
    
    <div className="hover:bg-zinc-800  bg-black px-6 xl:w-64 2xl:w-80 h-44 rounded-xl space-y-2">

<div className="text-zinc-400 mt-2 flex flex-row justify-between"><div className="">07</div>
<div className=" opacity-0 hover:opacity-100"><Image className='rounded-full' src="icons.svg" alt='icon' width={50} height={50}/> </div>
</div>

      <h2 className="text-xl text-zinc-500 xl:text-2xl">Android</h2>
      <p className='text-zinc-500'>Our team is experienced <br/>with various</p>
      <div className="text-blue-300 cursor-pointer relative right-2 bottom-7"><Image className="absolute xl:-bottom-6 right-2" src={Arrow} alt='Arrow' width={20} height={5}/></div>
    </div>
    
    
    <div className="hover:bg-zinc-800  bg-black px-6 xl:w-64 2xl:w-80 h-44 rounded-xl space-y-2">
      <div className=" relative text-zinc-400 mt-2">08</div>
      <div className="pt-8">
      <h2 className="text-xl text-zinc-500 xl:text-2xl">iOS</h2>
      <p className='text-zinc-500'>Our team is experienced <br/>with various</p>
      <div className="text-blue-300 cursor-pointer relative right-2 bottom-7"><Image className="absolute xl:-bottom-8 right-2" src={Arrow} alt='Arrow' width={20} height={5}/></div>
    </div>
    </div>
  </div>


  )
}

export default Imgcmp