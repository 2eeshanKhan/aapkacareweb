import React from 'react'
import KneeArthroscopy from '@/components/Orthopaedic/KneeArthroscopy'

export const metadata  = {
  title: 'Knee Arthroscopy – Quick Healing with Expert Orthopedic Care',
  description: 'Minimally invasive knee repair with fast recovery. Affordable and performed by orthopedic specialists.',
  keywords: 'Knee Arthroscopy Surgery',
  openGraph: {
    title: 'Knee Arthroscopy – Quick Healing with Expert Orthopedic Care',
    description: 'Minimally invasive knee repair with fast recovery. Affordable and performed by orthopedic specialists.',
    
    
    url: 'https://aapkacare.com/knee-arthroscopy', // optional but helpful for SEO
    type: 'website',
    },
   
  

}

const KneeArthroscopyPage = () => {
  return (
    <div>
      <KneeArthroscopy />
    </div>
  )
}

export default KneeArthroscopyPage
