import React from 'react'
import Portfolio from '@/components/Portfolio'
import Form from "@/components/Form";
import Navbar from '../component/Navbarsec';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Portfolio/>
      <Form />
    </div>
  )
}

export default page

