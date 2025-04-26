import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from '@/components/Client/ClientLayout'
import Script from 'next/script';






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
      
   

    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16789407993"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16789407993');
          `}
        </Script>
    <ClientLayout>{children}</ClientLayout>

    </body>
  </html>
  );
}
