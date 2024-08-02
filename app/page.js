import React from 'react'
import Form from '@/components/Form'
import Award from '@/components/Award'
import Imgcmp from '@/components/Imgcmp'
import Journey from '@/components/Journey'
import Indus from '@/components/Indus'
import Intros from '@/components/Intros'

import DumyForm from "@/components/dumyForm";
import Pef from '@/components/Pef'
import Navbar from './component/Navbar'
const page = () => {
  

  return (
<div className="w-full items-center ">
  <Navbar  />
    <Intros/>
   
 <DumyForm/>
    <Award/>
    <Imgcmp/>
<Pef/>

    <Journey/>
<Indus/>

    <Form/>
   
    </div>
  )
}

export default page