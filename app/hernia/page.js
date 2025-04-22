import React from 'react'
import Hernia from '@/components/Laparoscopy/Hernia'

export const metadata  = {
  title: 'Hernia Surgery – Reliable & Lasting Repair by Skilled Surgeons',
  description: 'Safe, effective, and affordable hernia surgery with minimal downtime. Expert surgeons ensure a smooth healing process.',
  keywords: 'Hernia Treatment',
  openGraph: {
    title: 'Hernia Surgery – Reliable & Lasting Repair by Skilled Surgeons',
  description: 'Safe, effective, and affordable hernia surgery with minimal downtime. Expert surgeons ensure a smooth healing process.',
 
    url: 'https://aapkacare.com/hernia', // optional but helpful for SEO
    type: 'website',
    },
  

}

const HerniaPage = () => {
  return (
    <div>
       <Hernia />
      
    </div>
  )
}

export default HerniaPage
