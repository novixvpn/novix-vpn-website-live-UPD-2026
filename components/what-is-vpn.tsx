"use client";

import Head from "next/head";
import { useState } from "react";

export default function WhatIsVpn() {
  const [activeTab, setActiveTab] = useState("general");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-8 text-center md:text-left">
      {/* meta tads for SEO */}
      <Head>
        <title>
          Novix VPN – Fast, Private & Secure VPN for Android | 70% Off
        </title>
        <meta
          name="description"
          content="Guard your privacy with Novix VPN. Enjoy blazing-fast speed, no logs, secure servers & Android-first design. Try Extra Free. 70% off premium now!"
        />
      </Head>
      <h1 className="mb-4 text-4xl font-bold text-gray-800">What is a VPN?</h1>
      <p className="mb-8 text-gray-700">
        A <strong className="px-1">VPN</strong>
        (Virtual Private Network) is a powerful online tool that lets you browse
        the internet securely and privately by creating a protected tunnel
        between your device and a remote VPN server. This process shields your
        data from hackers, snoopers, or anyone trying to spy on your online
        activity.
      </p>

      {/* Accordions */}
      <div className="space-y-4">
        {/* Accordion 1 */}
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <button
            onClick={() => toggleAccordion("types")}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-lg font-medium text-gray-800">
              How a VPN Works — Step by Step:
            </span>
            <svg
              className={`h-5 w-5 text-gray-500 transition-transform ${
                openAccordion === "types" ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openAccordion === "types" && (
            <div className="border-t border-gray-200 px-6 py-4">
              <ol className="mt-2 list-inside list-decimal space-y-1 text-gray-700">
                <li>
                  First, you install a VPN application on your computer,
                  smartphone, or other device.
                </li>
                <li>
                  When you activate the VPN, it forms a secure connection
                  between your device and a VPN server.
                </li>
                <li>
                  Your internet traffic is then rerouted through that VPN
                  server, hiding your IP address in the process.
                </li>
                <li>
                  The data is then scrambled into unreadable code during
                  transmission.
                </li>
                <li>
                  The VPN server accesses the internet for you and securely
                  forwards the information to its final destination.
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <button
            onClick={() => toggleAccordion("legal")}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-lg font-medium text-gray-800">
              Key Benefits of Using a VPN:
            </span>
            <svg
              className={`h-5 w-5 text-gray-500 transition-transform ${
                openAccordion === "legal" ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openAccordion === "legal" && (
            <div className="border-t border-gray-200 px-6 py-4">
              <ul className="mt-2 list-inside space-y-2 text-gray-700">
                <li>
                  <strong>🔒 Enhanced Security: </strong>VPNs protect your
                  internet traffic by securing it in a way that prevents hackers
                  from accessing your data, especially on open or untrusted
                  networks
                </li>
                <li>
                  <strong>👤 Online Privacy:</strong> By hiding your real IP
                  address, a VPN helps you stay anonymous and prevents websites
                  from tracking your location and identity.
                </li>
                <li>
                  <strong>🌍 Access Blocked Content: </strong>Connect to servers
                  in different countries to unlock websites, streaming services,
                  or content that’s restricted in your region.
                </li>
                <li>
                  <strong>📶 Safe Public Wi-Fi Use:</strong> Public hotspots are
                  often unprotected — VPNs secure your connection so you can use
                  public Wi-Fi without risk.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Accordion 3 */}
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <button
            onClick={() => toggleAccordion("speed")}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-lg font-medium text-gray-800">
              Types of VPN Services:
            </span>
            <svg
              className={`h-5 w-5 text-gray-500 transition-transform ${
                openAccordion === "speed" ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openAccordion === "speed" && (
            <div className="border-t border-gray-200 px-6 py-4">
              <ul className="mt-2 list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Free VPNs – </strong>These are no-cost options with
                  basic features, but often come with ads, limited speeds, or
                  bandwidth restrictions.
                </li>
                <li>
                  <strong>Premium VPNs</strong> – Paid VPN services offer faster
                  speeds, stronger security, and more server choices — ideal for
                  consistent, high-performance protection.
                </li>
                <li>
                  <strong>Business VPNs</strong> – Designed for organizations,
                  these offer features like team management, secure remote
                  access, and centralized control.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
