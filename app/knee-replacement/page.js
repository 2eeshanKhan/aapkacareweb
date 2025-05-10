import React from 'react'
import KneeReplacement from '@/components/Orthopaedic/KneeReplacement'

export const metadata  = {
  title: 'Knee Replacement – Long-Term Relief with Custom-Fit Implants',
  description: 'Permanent solution for knee pain. Affordable, custom-fit implants for natural movement.',
  keywords: 'Knee Replacement Surgery',
  openGraph: {
    title: 'Knee Replacement – Long-Term Relief with Custom-Fit Implants',
  description: 'Permanent solution for knee pain. Affordable, custom-fit implants for natural movement.',
  
    
    url: 'https://aapkacare.com/knee-replacement', // optional but helpful for SEO
    type: 'website',
    },
    
  

}

const KneeReplacementPage = () => {
  return (
    <div>
      <KneeReplacement />
    </div>
  )
}

export default KneeReplacementPage
