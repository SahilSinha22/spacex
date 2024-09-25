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
import Okomo from "@/components/ParallaxExample";
import Netme from "@/components/Netme";
import Liqui from "@/components/Liqui";

const page = () => {
  

  return (
<div className="w-full items-center ">
  <Navbar  />
  <DumyForm/>
    <Intros/>
   

    <Award/>
    <Imgcmp/>
<Pef/>
<Okomo/>
<Liqui/>
<Netme/>


    <Journey/>
<Indus/>

    <Form/>
   
    </div>
  )
}

export default page