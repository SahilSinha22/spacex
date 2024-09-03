import React from 'react'
import Navbar from '../component/Navbarabout'
import Indus from '@/components/Indus'
import Form from '@/components/Form'
import Award from '@/components/Award'
import About from '@/components/About'
import About1 from '@/components/About1'

const page = () => {
  return (
    <div className='w-screen items-center'>
     <About1/>
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
