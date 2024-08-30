import React from 'react'
import Navbar from '../component/Navbarabout'
import Indus from '@/components/Indus'
import Form from '@/components/Form'
import Award from '@/components/Award'
import About from '@/components/About'

const page = () => {
  return (
    <div className='w-full items-center'>
      <Navbar/>
     <About/>
     <div className='  2xl:px-40'>
<Award/>



      <Indus/>
      </div>
      <Form/>
      
    </div>
  )
}

export default page
