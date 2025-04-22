import React from 'react'
import Circumcision from '@/components/Urology/Circumcision'

export const metadata  = {
  title: 'Circumcision Procedure – Safe, Hygienic & Comfortable Surgery',
  description: 'Gentle and expert circumcision surgery for children and adults. Affordable, hygienic, and quick recovery.',
  keywords: 'Circumcision Surgery',
  openGraph: {
    title: 'Circumcision Procedure – Safe, Hygienic & Comfortable Surgery',
  description: 'Gentle and expert circumcision surgery for children and adults. Affordable, hygienic, and quick recovery.',
  
    
    url: 'https://aapkacare.com/circumcision', // optional but helpful for SEO
    type: 'website',
    },

   
  

}

const CircumcisionPage = () => {
  return (
    <div>
      <Circumcision />
    </div>
  )
}

export default CircumcisionPage
