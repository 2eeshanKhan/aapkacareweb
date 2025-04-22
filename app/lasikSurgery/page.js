import React from 'react'
import Lasik from '@/components/Ophthalmology/Lasik'

export const metadata  = {
  title: 'LASIK Eye Surgery – Precision Laser Vision Correction by Experts',
  description: 'Get the best LASIK surgery for perfect eyesight without glasses. Affordable, painless, and quick recovery with expert care.',
  keywords: 'LASIK Surgery',
  openGraph: {
    title: 'LASIK Eye Surgery – Precision Laser Vision Correction by Experts',
  description: 'Get the best LASIK surgery for perfect eyesight without glasses. Affordable, painless, and quick recovery with expert care.',
  
    url: 'https://aapkacare.com/lasikSurgery', // optional but helpful for SEO
    type: 'website',
    },
  

}

const LasikSurgery = () => {
  return (
    <div>
      <Lasik />
    </div>
  )
}

export default LasikSurgery
