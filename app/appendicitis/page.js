import React from 'react'
import  Appendicitis from '@/components/Laparoscopy/Appendicitis'
export const metadata  = {
  title: 'Appendicitis Treatment – Prompt, Expert Care with Minimal Downtime',
  description: 'Emergency appendicitis surgery with precision and care. Affordable treatment with quick recovery and minimal discomfort.',
  keywords: 'Appendicitis Surgery',
  openGraph: {
    title: 'Appendicitis Treatment – Prompt, Expert Care with Minimal Downtime',
    description: 'Emergency appendicitis surgery with precision and care. Affordable treatment with quick recovery and minimal discomfort.',
    
    url: 'https://aapkacare.com/appendicitis', // optional but helpful for SEO
    type: 'website',
    },
  

}

const AppendicitisPage = () => {
  return (
    <div>
        <Appendicitis />
      
    </div>
  )
}

export default AppendicitisPage
