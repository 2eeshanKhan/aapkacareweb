import React from 'react'
import Cataract from '@/components/Ophthalmology/CataractPage'


export const metadata  = {
  title: 'Cataract Surgery – Trusted Solution for Clear Vision at the Right Price',
  description: 'Experience world-class cataract surgery at an affordable price. Trust Aapka Care for safe, effective, and permanent vision correction.',
  keywords: 'Cataract Surgery',
  openGraph: {
  title: 'Cataract Surgery – Trusted Solution for Clear Vision at the Right Price',
  description: 'Experience world-class cataract surgery at an affordable price. Trust Aapka Care for safe, effective, and permanent vision correction.',
  url: 'https://aapkacare.com/cataract', // optional but helpful for SEO
  type: 'website',
  },
  

}

const CataractPage = () => {
  return (
    <div>
      <Cataract />
    </div>
  )
}

export default CataractPage
