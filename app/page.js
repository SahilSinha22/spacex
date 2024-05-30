import React from 'react'
import Form from '@/components/Form'
import Award from '@/components/Award'
import Imgcmp from '@/components/Imgcmp'
import Journey from '@/components/Journey'
import Indus from '@/components/Indus'
import Intros from '@/components/Intros'

import Pef from '@/components/Pef'
const page = () => {
  

  return (
<div className="w-full items-center ">
    <Intros/>
  
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