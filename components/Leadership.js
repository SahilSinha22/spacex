import Image from 'next/image'
import React from 'react'
const Leadership = [

  { name: "Amit Singh", logo: "/Leader2.png", subname:"Co-Founder" },
  { name: "Monika Chawala", logo: "/Leader2.png", subname:"Creative Head" },
  { name: "Abhinav Baisley", logo: "/Leader2.png", subname:"Creative Head" },
 


];
const Leader = () => {

  return (
    <div className='flex flex-col max-w-[1530px] m-auto p-4 playfair_displays'>
      <div className=" md:px-10 xl:mx-20 2xl:px-20 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 ">Leadership That Inspires</h2>
        <p className=" text-xl  text-left mb-8 open_sans_display">Here’s our leadership team that is driving our purpose to help<br /> our clients succeed.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Leadership.map((leader, index) => (
          <div  key={index} className="text-center">
            <div className=' inline-block place-content-center  mt-10 items-center'>

              <div className=' relative  '>
                <div className='bannerx w-72 h-72  rounded-full'>

                </div>
                <div className='absolute -top-12 place-content-center '>


                  <Image className=" w-full h-full rounded-full " src={leader.logo} alt={leader.subname} width={600} height={600} />
                </div>
              </div>
            </div>
            <h3 className="mt-2 text-3xl font-semibold">{leader.name}</h3>
            <p className="text-xl open_sans_display">{leader.subname}</p>
          </div>
          
        ))}

        </div>
      </div>
    </div>
  )
}

export default Leader
