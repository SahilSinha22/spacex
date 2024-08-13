import Image from 'next/image'
import React from 'react'

const Comingsoon = () => {
  return (
    <div >
       <section class="containerx text-white">
      <Image src="/Comingsoon.jpg" alt="" class="image w-full h-full" width={1000} height={1000}/>
      <header>Coming Soon Page</header>
      <p>
        Our website is under construction. We&apos;re working hard to improve our
        website and we &apos;ll ready to launch after.
      </p>
     
    
    </section>
    </div>
  )
}

export default Comingsoon
