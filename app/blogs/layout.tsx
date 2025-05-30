import HeaderCom from "@/components/HeaderCom";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novix VPN - Blogs",
  description:
    "Learn about online privacy, security, and the benefits of using a VPN. Novix VPN blog provides insights and tips on how to protect your online identity and stay safe online.",
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
    <>
      <div className={inter.className}>{children}</div>
    </>
  );
}
