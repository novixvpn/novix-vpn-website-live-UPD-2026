"use client";

import Image from "next/image";
import { useState } from "react";

export default function VpnBenefits() {
  const [openItem, setOpenItem] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  const accordionItems = [
    {
      title: "Hide your IP address",
      content:
        "Connect to ghost everything. A VPN connects your device to its server and assigns a new IP address for your device replacing the original one. This means a VPN hides your online activity and location, making it harder to track you.",
      image: "/hide-your-ip-address.webp",
    },
    {
      title: "Guard your device",
      content:
        "Ensure advanced security for your device and data, and use your phone confidently. A VPN channels your internet connection through a secured tunnel and shields your device from cyber-threats.",
      image: "/guard-your-device.webp",
    },
    {
      title: "Safely access contents",
      content:
        "Fly to wherever you wish to go — virtually. A VPN enables you to choose from a world-wide network of servers and decide your virtual location. This enables you to access region-specific contents from anywhere. Enjoy your online freedom.",
      image: "/server-features.webp",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="md:text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          The Benefits of Using a VPN
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Usually, your internet behavior stays exposed. You are always at the
          danger of hostile monitoring, privacy violation, and data theft while
          using the Internet, streaming material, or file sharing. A Virtual
          Private Network, or simply VPN, protects your internet connection,
          removes geo-restrictions, and keeps your activities totally private.
        </p>
      </div>

      <div className="w-full flex justify-center items-center gap-8 py-10">
        {/* Image container */}
        <div className="relative w-[700px] h-[700px]">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                openItem === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={item.image}
                alt={`Illustration for ${item.title}`}
                width={700}
                height={700}
                className="object-contain w-full h-full scale-110"
              />
            </div>
          ))}
        </div>

        {/* Accordion container */}
        <div className="flex flex-col justify-center space-y-4 max-w-md">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`border-l-4 pl-4 transition-colors ${
                openItem === index ? "border-blue-500" : "border-[#B1B1B4]"
              }`}
            >
              <div
                className="py-2 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {item.title}
                </h3>
              </div>

              <div
                className={`pl-4 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index
                    ? "max-h-96 opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
