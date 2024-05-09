import React from 'react'
import Image from 'next/image'
const Journey = () => {
  return (
    
    <div class="max-w-7xl  px-4 py-12 mx-10 sm:mx-20">
        <div className="mx-5 md:mx-20">
    <h2 class="text-3xl md:text-6xl font-bold font-sedan text-left">Spacetotech journey of <br/> Mobile app development</h2>
    <p class="text-left md:text-2xl text-zinc-600 mt-4">Our top mobile app development company proudly serves a diverse range of industries. Through innovative technology solutions, we empower businesses in numerous sectors to engage customers, optimize operations, and unlock new opportunities for growth.</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-3 space-y-5 lg:grid-cols-5 justify-center items-center space-x-8 mt-8">
        <div class="text-center ml-10">
            <div class="w-40 h-40 border-dashed border-2 mx-auto mb-2 flex items-center justify-center rounded-full">
                <Image  src="book.svg" alt="Inception" width={100} height={10}/>
            </div>
            <div class="text-sm font-semibold">Inception</div>
        </div>
        <div class="text-center">
            <div class="w-40 h-40 border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
                <Image src="design.svg" alt="Design" width={100} height={10}/>
            </div>
            <div class="text-sm font-semibold">Design</div>
        </div>
        <div class="text-center">
            <div class="w-40 h-40 border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
                <Image src="development.svg" alt="Development" width={100} height={10}/>
            </div>
            <div class="text-sm font-semibold">Development</div>
        </div>
        <div class="text-center">
            <div class="w-40 h-40 border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
                <Image src="stabi.svg" alt="Stabilization" width={100} height={10}/>
            </div>
            <div class="text-sm font-semibold">Stabilization</div>
        </div>
        <div class="text-center">
            <div class="w-40 h-40 border-dashed border-2 mx-auto mb-2 flex items-center justify-center  rounded-full">
                <Image src="deploy.svg" alt="Deployment" width={100} height={10}/>
            </div>
            <div class="text-sm font-semibold">Deployment</div>
        </div>
    </div>
</div>
</div>

  )
}

export default Journey