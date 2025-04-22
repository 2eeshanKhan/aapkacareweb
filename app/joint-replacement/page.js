import React from 'react'
import JoinReplacement from '@/components/Orthopaedic/JointReplacement'

export const metadata  = {
  title: 'Joint Replacement – Restored Mobility with High-Quality Implants',
  description: 'Restore joint function with high-quality implants. Affordable and tailored for active lifestyles.',
  keywords: 'Joint Replacement Surgery',
  openGraph: {
    title: 'Joint Replacement – Restored Mobility with High-Quality Implants',
    description: 'Restore joint function with high-quality implants. Affordable and tailored for active lifestyles.',
   
    
    url: 'https://aapkacare.com/joint-replacement', // optional but helpful for SEO
    type: 'website',
    },
    
  

}

const JoinReplacementPage = () => {
  return (
    <div>
      <JoinReplacement />
    </div>
  )
}

export default JoinReplacementPage
