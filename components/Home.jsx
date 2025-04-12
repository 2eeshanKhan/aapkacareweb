import React from 'react'
import DashboardBody from '@/module/DashboardBody'
import Benefit from './Benefit'
import HospitalSlider from './HospitalSlider'
import OurServices from './OurServices'
import Testimonials from './Testimonial'
import Features from './Features'
import CareCamps from './Camps'
import BoardMembers from './BoardMembers'
import OurWork from './OurWork'

 

const Home = () => {
  return (
    <>
       <DashboardBody />
       <Benefit />
       <HospitalSlider />
       <OurServices />
      < Testimonials />
      <Features />
      <CareCamps />
      {/* < BoardMembers  /> */}
      <OurWork />
      
   
  
    </>
  )
}

export default Home
