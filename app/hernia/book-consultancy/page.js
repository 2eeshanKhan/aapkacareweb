import React from 'react'
import HerniaBooking from '@/components/HerniaBooking/HerniaAds'


export const metadata  = {
    title: 'Hernia Surgery – Reliable & Lasting Repair by Skilled Surgeons',
    description: 'Safe, effective, and affordable hernia surgery with minimal downtime. Expert surgeons ensure a smooth healing process.',
    keywords: 'Hernia Treatment',
    openGraph: {
      title: 'Hernia Surgery – Reliable & Lasting Repair by Skilled Surgeons',
    description: 'Safe, effective, and affordable hernia surgery with minimal downtime. Expert surgeons ensure a smooth healing process.',
   
      url: 'https://aapkacare.com/hernia/book-consultancy', // optional but helpful for SEO
      type: 'website',
      },
    
  
  }

const HerniaBookConsultancy = () => {
  return (
    <div>
      <HerniaBooking  />
    </div>
  )
}

export default HerniaBookConsultancy