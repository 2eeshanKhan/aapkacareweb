import React from 'react'
import LasikBooking from '@/components/Ophthalmology/LasikBooking'


export const metadata  = {
    title: 'LASIK Eye Surgery – Precision Laser Vision Correction by Experts',
    description: 'Get the best LASIK surgery for perfect eyesight without glasses. Affordable, painless, and quick recovery with expert care.',
    keywords: 'LASIK Surgery',
    openGraph: {
      title: 'LASIK Eye Surgery – Precision Laser Vision Correction by Experts',
    description: 'Get the best LASIK surgery for perfect eyesight without glasses. Affordable, painless, and quick recovery with expert care.',
    
      url: 'https://aapkacare.com/lasik/book-consultancy', // optional but helpful for SEO
      type: 'website',
      },
    
  
  }

const LasikBookConsultancy = () => {
  return (
    <div>
      <LasikBooking  />
    </div>
  )
}

export default LasikBookConsultancy