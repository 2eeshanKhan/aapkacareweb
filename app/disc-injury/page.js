import React from 'react'
import  DiscInjury from '@/components/Orthopaedic/DiscInjury'

export const metadata  = {
  title: 'Disc Surgery – Precise, Minimally Invasive Spinal Care',
  description: 'Advanced treatment for slipped or herniated discs. Affordable and ensures quick pain relief.',
  keywords: 'Disc Injury Treatment',
  openGraph: {
    title: 'Disc Surgery – Precise, Minimally Invasive Spinal Care',
  description: 'Advanced treatment for slipped or herniated discs. Affordable and ensures quick pain relief.',
  
    
    url: 'https://aapkacare.com/disc-injury', // optional but helpful for SEO
    type: 'website',
    },
    
  

}

const  DiscInjuryPage = () => {
  return (
    <div>
      < DiscInjury  />
    </div>
  )
}

export default  DiscInjuryPage
