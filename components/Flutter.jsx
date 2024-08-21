import Image from 'next/image'
import React from 'react'

const Flutter = () => {
  return (
    <div>
      <div class="max-w-7xl items-center text-center mx-auto px-10 py-28  ">
  <h1 class="text-6xl leading-tight font-bold playfair_displays mb-4">Flutter App Development Company Helps You Build Applications for Multiple Screens!</h1>
  <p class="text-3xl  text-muted-foreground mb-8">Introducing big waves in modern cross-platform app development, Flutter tech <br/> builds exquisite, high-performing, and flawless mobile apps.</p>
  
</div>
<div class="flex flex-wrap justify-center gap-4">
  <video
          autoPlay
          muted
          loop
          className="inset-0  object-cover"
        >
          <source src="/Intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  </div>
    </div>
  )
}

export default Flutter
