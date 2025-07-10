import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CountdownTimerClient from "@/components/shared/CountdownTimerClient";
import PixelTracker from "@/components/shared/PixelTracker.tsx";
import { AuthProvider } from "@/Context/AuthContext";
import HeaderCom from "@/components/HeaderCom";
import IpBanner from "@/components/ip-banner";
import Footer from "@/components/footer";
import HubspotLoader from "@/components/shared/HubspotLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novix VPN - Secure, Fast & Reliable VPN Service",
  description:
    "Protect your online privacy with Novix VPN. Secure connections, unlimited bandwidth, and global server access.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-54G43J2B');
            `,
          }}
        />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H7DLDD7SRJ"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-H7DLDD7SRJ');
      `,
          }}
        />

        {/* Facebook Pixel Script */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1682612962619444');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1682612962619444&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54G43J2B"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        {/* HubSpot Embed Code */}
        <HubspotLoader />

        {/* <Script
          id="hubspot-script"
          strategy="afterInteractive"
          src="//js-na2.hs-scripts.com/242560734.js"
        /> */}

        <PixelTracker />
        <AuthProvider>
          {/* ip banner component */}
          <IpBanner />
          {/* Header/Navigation */}
          <HeaderCom />
          {children}
          <Footer />
        </AuthProvider>
        <CountdownTimerClient />
      </body>
    </html>
  );
}
