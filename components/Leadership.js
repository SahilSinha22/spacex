import Image from 'next/image'
import React from 'react'

const Leader = () => {
  return (
    <div className='flex flex-col max-w-[1530px] m-auto p-4'>
      <div class=" mx-auto xl:mx-20 2xl:px-20 py-10">
        <h2 class="text-2xl md:text-3xl font-bold text-left mb-4">Leadership That Inspires</h2>
        <p class=" text-muted-foreground  text-left mb-8">Here’s our leadership team that is driving our purpose to help our clients succeed.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="text-center">
            <div className='bg-[#F2F2F2] inline-block place-content-center items-center'>

           
            <Image class="" src="/Leader.png" alt="Amit Singh" width={300} height={300} />
            </div>
            <h3 class="mt-2 font-semibold">Amit Singh</h3>
            <p class="text-muted-foreground">Co-Founder</p>
          </div>
          <div class="text-center">
          <div className='bg-[#F2F2F2] inline-block place-content-center items-center'>

           
<Image class="" src="/Leader.png" alt="Amit Singh" width={300} height={300} />
</div>            <h3 class="mt-2 font-semibold">Name Here</h3>
            <p class="text-muted-foreground">Position Here</p>
          </div>
          <div class="text-center">
          <div className='bg-[#F2F2F2] inline-block place-content-center items-center'>

           
<Image class="" src="/Leader.png" alt="Amit Singh" width={300} height={300} />
</div>            <h3 class="mt-2 font-semibold">Name Here</h3>
            <p class="text-muted-foreground">Position Here</p>
          </div>
          <div class="text-center">
          <div className='bg-[#F2F2F2] inline-block place-content-center items-center'>

           
<Image class="" src="/Leader.png" alt="Amit Singh" width={300} height={300} />
</div>            <h3 class="mt-2 font-semibold">Name Here</h3>
            <p class="text-muted-foreground">Position Here</p>
          </div>
          <div class="text-center">
          <div className='bg-[#F2F2F2] inline-block place-content-center items-center'>

           
<Image class="" src="/Leader.png" alt="Amit Singh" width={300} height={300} />
</div>            <h3 class="mt-2 font-semibold">Name Here</h3>
            <p class="text-muted-foreground">Position Here</p>
          </div>
          <div class="text-center">
          <div className='bg-[#F2F2F2] inline-block place-content-center items-center'>

           
<Image class="" src="/Leader.png" alt="Amit Singh" width={300} height={300} />
</div>            <h3 class="mt-2 font-semibold">Name Here</h3>
            <p class="text-muted-foreground">Position Here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leader
