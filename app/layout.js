import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from '@/components/Client/ClientLayout';
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
  openGraph: {
    title: 'Aapka Care – Surgery Simplified | NABH Multi-Specialty Hospitals in Mumbai',
    description: 'Aapka Care – Surgery Simplified | NABH Multi-Specialty Hospitals in Mumbai',
    images: ["https://play-lh.googleusercontent.com/QbVB-sk4RE5sAfbA48VkArWnMmfXZpcxya7X7kYwjruVcfAgPvThImq2HNfW8XaVBIU7=w480-h960-rw"],
    url: 'https://aapkacare.com/',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N26W8RH8');
            `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-N26W8RH8`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Traffic Guard Script */}
        <Script
          id="traffic-guard-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var dataTrafficGuard = dataTrafficGuard || [];
              dataTrafficGuard.push(['property', 'tg-018336-001']);
              dataTrafficGuard.push(['event','pageview']);
              (function() {
                var tg = document.createElement('script');
                tg.type = 'text/javascript';
                tg.async = true;
                tg.src = '//tgtag.io/tg.js?pid=tg-018336-001';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(tg, s);
              })();
            `,
          }}
        />
        <noscript>
          <img
            src="//p.tgtag.io/event?property_id=tg-018336-001&event_name=pageview&no_script=1"
            width="1"
            height="1"
            border="0"
          />
        </noscript>

        <ClientLayout>{children}</ClientLayout>

      </body>
    </html>
  );
}
