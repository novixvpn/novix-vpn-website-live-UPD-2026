import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <body className={inter.className}>
        {children}
        {/* HubSpot Embed Code */}
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/242560734.js"
        />
      </body>
    </html>
  );
}
