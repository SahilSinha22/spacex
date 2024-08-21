import Technology from '@/components/Technology'
import React from 'react'
import Indus from '@/components/Indus1'
import Form from '@/components/Form'
import Navbar from '@/app/component/Navbarsec'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Technology/>
      <Indus/>

    <Form/>
    </div>
  )
}

export default page
