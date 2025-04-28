import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from '@/components/Client/ClientLayout'
import { GoogleTagManager } from '@next/third-parties/google'








const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aapka Care – Surgery Simplified | NABH Multi-Specialty Hospitals in Mumbai",
  description: "Aapka Care – Surgery Simplified | NABH Multi-Specialty Hospitals in Mumbai",
  keywords: 'LASIK surgery, cataract surgery, hernia treatment, kidney stone treatment, hip replacement, knee replacement, piles treatment, varicose veins treatment',
  openGraph:{
    title: 'Aapka Care – Surgery Simplified | NABH Multi-Specialty Hospitals in Mumbai',
    description: 'Aapka Care – Surgery Simplified | NABH Multi-Specialty Hospitals in Mumbai',
    images : ["https://play-lh.googleusercontent.com/QbVB-sk4RE5sAfbA48VkArWnMmfXZpcxya7X7kYwjruVcfAgPvThImq2HNfW8XaVBIU7=w480-h960-rw"],
    url:'https://aapkacare.com/'


  }
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <GoogleTagManager gtmId="GTM-N26W8RH8" />

      
   

    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
   
    <ClientLayout>{children}</ClientLayout>

    </body>
  </html>
  );
}
