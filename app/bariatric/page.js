import React from 'react'
import Bariatric  from '@/components/Bariatric/Bariatric'

export const metadata  = {
  title: 'Bariatric Surgery – Transformative Weight Loss with Medical Safety',
  description: 'Transform your life with safe weight-loss surgery. Affordable and ensures long-term health benefits.',
  keywords: 'Bariatric Surgery',
  openGraph: {
    title: 'Bariatric Surgery – Transformative Weight Loss with Medical Safety',
    description: 'Transform your life with safe weight-loss surgery. Affordable and ensures long-term health benefits.',
    url: 'https://aapkacare.com/bariatric', // optional but helpful for SEO
    type: 'website',
  },
  }

const BariatricPage = () => {
  return (
    <div>
      <Bariatric  />
    </div>
  )
}

export default BariatricPage
