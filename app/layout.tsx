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
