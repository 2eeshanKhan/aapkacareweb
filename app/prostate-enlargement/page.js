import React from 'react'
import ProstateEnlargement from '@/components/Urology/ProstateEnlargement'

export const metadata  = {
  title: 'Prostate Surgery – Advanced, Minimally Invasive Prostate Care',
  description: 'Advanced treatment for prostate enlargement. Affordable, safe, and ensures long-term relief.',
  keywords: 'Prostate Enlargement Treatment',
  openGraph: {
    title: 'Prostate Surgery – Advanced, Minimally Invasive Prostate Care',
  description: 'Advanced treatment for prostate enlargement. Affordable, safe, and ensures long-term relief.',
  
    
    url: 'https://aapkacare.com/prostate-enlargement', // optional but helpful for SEO
    type: 'website',
    },
   
  

}

const ProstateEnlargementPage = () => {
  return (
    <div>
      <ProstateEnlargement  />
    </div>
  )
}

export default ProstateEnlargementPage
