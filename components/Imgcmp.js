import React from 'react'
import Image from 'next/image'
import Arrow from "@/public/arrow.svg"
const Imgcmp = () => {
  return (
  <div class="sm:mx-8 grid m-auto mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    
    <div class="hover:hover:bg-zinc-800    bg-black w-auto p-4 rounded-lg space-y-2">
      <div class="text-zinc-400">01</div>
      <h2 class="text-xl text-zinc-200 font-bold">Blockchain</h2>
      <p className='text-zinc-200'>Our team is experienced with various</p>
      <div class="text-blue-300 cursor-pointer a "><Image className="" src={Arrow} alt='Arrow' width={30} height={5}/></div>
    </div>
    
    <div class="hover:bg-zinc-800  bg-black p-4 rounded-lg space-y-2">
      <div class="text-zinc-400">02</div>
      <h2 class="text-xl text-zinc-200 font-bold">AR/VR</h2>
      <p className='text-zinc-200'>Our team is experienced with various</p>
      <div class="text-blue-300 cursor-pointer"><Image src={Arrow} alt='Arrow' width={30} height={5}/></div>
    </div>
    
    <div class="hover:bg-zinc-800  bg-black p-4 rounded-lg space-y-2">
      <div class="text-zinc-400">03</div>
      <h2 class="text-xl text-zinc-200 font-bold">Metaverse</h2>
      <p className='text-zinc-200'>Our team is experienced with various</p>
      <div class="text-blue-300 cursor-pointer"><Image src={Arrow} alt='Arrow' width={30} height={5}/></div>
    </div>
    
    <div class="hover:bg-zinc-800  bg-black p-4 rounded-lg space-y-2">
      <div class="text-zinc-400">04</div>
      <h2 class="text-xl text-zinc-200 font-bold">IOT</h2>
      <p className='text-zinc-200'>Our team is experienced with various</p>
      <div class="text-blue-300 cursor-pointer"><Image src={Arrow} alt='Arrow' width={30} height={5}/></div>
    </div>
    
    <div class="hover:bg-zinc-800  bg-black p-4 rounded-lg space-y-2">
      <div class="text-zinc-400">05</div>
      <h2 class="text-xl text-zinc-200 font-bold">NFT</h2>
      <p className='text-zinc-200'>Our team is experienced with various</p>
      <div class="text-blue-300 cursor-pointer"><Image src={Arrow} alt='Arrow' width={30} height={5}/></div>
    </div>
    
    <div class="hover:bg-zinc-800  bg-black p-4 rounded-lg space-y-2">
      <div class="text-zinc-400">06</div>
      <h2 class="text-xl text-zinc-200 font-bold">AI Development</h2>
      <p className='text-zinc-200'>Our team is experienced with various</p>
      <div class="text-blue-300 cursor-pointer"><Image src={Arrow} alt='Arrow' width={30} height={5}/></div>
    </div>
    
    <div class="hover:bg-zinc-800  bg-black p-4 rounded-lg space-y-2">
      <div class="text-zinc-400">07</div>
      <h2 class="text-xl text-zinc-200 font-bold">Android</h2>
      <p className='text-zinc-200'>Our team is experienced with various</p>
      <div class="text-blue-300 cursor-pointer"><Image src={Arrow} alt='Arrow' width={30} height={5}/></div>
    </div>
    
    <div class="hover:bg-zinc-800  bg-black p-4 rounded-lg space-y-2">
      <div class=" relative text-zinc-400">08</div>
      <h2 class="text-xl text-zinc-200 font-bold">iOS</h2>
      <p className='text-zinc-200'>Our team is experienced with various</p>
      <div class=" cursor-pointer"> <Image src={Arrow} alt='Arrow' width={30} height={5}/></div>
    </div>
  </div>


  )
}

export default Imgcmp