import React from 'react'
import HipReplacement from '@/components/Orthopaedic/HipReplacement'

export const metadata  = {
  title: 'Hip Replacement – Durable, Pain-Free Mobility with Latest Techniques',
  description: 'Regain mobility with advanced hip replacement. Affordable, durable, and ensures pain-free movement.',
  keywords: 'Hip Replacement Surgery',
  openGraph: {
    title: 'Hip Replacement – Durable, Pain-Free Mobility with Latest Techniques',
  description: 'Regain mobility with advanced hip replacement. Affordable, durable, and ensures pain-free movement.',
  
    
    url: 'https://aapkacare.com/hip-replacement', // optional but helpful for SEO
    type: 'website',
    },
   
  

}

const HipReplacementPage = () => {
  return (
    <div>
        <HipReplacement />
      
    </div>
  )
}

export default HipReplacementPage
