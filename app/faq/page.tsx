import type { Metadata } from "next";
import FAQAccordion from "@/components/faq-accordion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | NovixVPN",
  description:
    "Find answers to common questions about NovixVPN, including security features, pricing, and more.",
};

export default function FAQPage() {
  const faqItems = [
    {
      question: "What makes Novix VPN stand out?",
      answer: (
        <div className="md:space-y-4">
          <p>
            Novix VPN isn’t just another VPN app — it’s a premium privacy
            solution built exclusively for Android users who value speed,
            security, and simplicity.
          </p>
          <p>
            At its core is the powerful <strong>WireGuard® protocol</strong>,
            delivering lightning-fast connections and strong security without
            draining your battery. Whether you're browsing, streaming, or
            gaming, Novix keeps your experience smooth and secure.
          </p>
          <p>
            With the <strong>built-in Kill Switch</strong>, your data stays
            protected even if the connection drops, ensuring your real IP is
            never exposed. Perfect for public Wi-Fi, travel, or everyday use.
          </p>
          <p>
            Designed with Android in mind, Novix offers a clean interface,
            one-tap connection, and automatic protection across mobile data and
            Wi-Fi.
          </p>
          <p>
            <strong> Download Novix VPN today —</strong> and take control of
            your online privacy, speed, and freedom.
          </p>
        </div>
      ),
      icon: "",
    },
    {
      question: "Is Novix VPN free?",
      answer: (
        <div className="space-y-4">
          <p>
            Yes, Novix VPN offers both free and premium access , so you can
            enjoy secure browsing no matter your budget.
          </p>
          <p>
            With the Extra Free plan, you get access to select VPN servers and
            essential privacy features—perfect for basic protection and
            anonymous browsing.
          </p>
          <p>
            However, if you're looking for faster speeds, more server locations,
            and advanced features like the kill switch, server performance
            stats, and priority support, Novix VPN’s premium plans (available
            weekly, monthly, or yearly) are designed to deliver the full
            experience.
          </p>
          <p className="font-medium">
            <strong>Bonus:</strong> We also offer a Try Extra Free for 3 Days
            for yearly plans, so you can explore premium features risk-free
            before committing.
          </p>
        </div>
      ),
      icon: "",
    },
    {
      question: "How secure is Novix VPN?",
      answer: (
        <div className="space-y-4">
          <p>
            Novix VPN is built with security as the top priority, combining
            industry-leading security and modern protocols to ensure your online
            activity stays private and protected at all times.
          </p>
          <div>
            <p className="font-semibold">Advanced VPN Protocols</p>
            <p className="ml-6">
              Novix supports
              <a
                href="https://www.novixvpn.com/blogs/wire-guard-explained-fast-secure-and-simple-vpn-technology"
                target="_blank"
                className="text-primary px-1 underline"
              >
                WireGuard
              </a>
              , one of the most trusted VPN protocols in the world. These offer
              a perfect balance of speed, stability, and strong security, ideal
              for streaming, browsing, or secure communication.
            </p>
          </div>
          <div>
            <p className="font-semibold">Built-In Kill Switch</p>
            <p className="ml-6">
              In case your connection drops, the <strong>Kill Switch</strong>
              automatically disconnects your device from the internet to prevent
              any accidental data leaks or IP exposure.
            </p>
          </div>
          <div>
            <p className="font-semibold">Hardened Backend Architecture</p>
            <p className="ml-6">
              Our backend is developed using secure Python frameworks and
              follows the OWASP Top 10 security standards—protecting you from
              common threats like data breaches, injection attacks, and identity
              theft.
            </p>
          </div>
          <div>
            <p className="font-semibold">No Data Tracking or Logs</p>
            <p className="ml-6">
              Novix VPN is designed with a
              <strong>strict privacy-first approach</strong>. We don’t track
              your browsing activity, and we don’t store sensitive usage
              logs—your data stays yours.
            </p>
          </div>
        </div>
      ),
      icon: "",
    },
    {
      question: "How much can I trust Novix in terms of security?",
      answer: (
        <div className="space-y-4">
          <p>
            Our motivation behind building NovixVPN is to deliver
            state-of-the-art technology that defines a new era of privacy and
            security for the internet users of the 21st Century. It combines
            modern security protocols with smart protection features to keep
            your online activities safe at all costs.
          </p>
          <p>Here’s why you can trust it:</p>
          <div className="mt-4">
            <p className="font-semibold">Powered by WireGuard®</p>
            <ul>
              <li>Equips with advanced security and open-source protocol.</li>
              <li>
                Runs faster, is more secure, and is less vulnerable to malicious
                activities than older technologies.
              </li>
              <li>Designed for stability and low battery impact on Android.</li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Kill Switch Protection</p>
            <ul>
              <li>Instantly blocks the internet if the VPN drops.</li>
              <li>Prevents IP leaks and data exposure.</li>
            </ul>
          </div>
          <div>
            <p className="ml-6">
              Also, we have a strict no-logs policy. When we say no-logs, we
              mean it — even we don’t know who you are and what you are doing.
              Thus, NovixVPN allows you to set your own rules.
            </p>
          </div>
        </div>
      ),
      icon: "",
    },
    {
      question: "Will using Novix VPN slow down my internet?",
      answer: (
        <div className="space-y-4">
          <p>
            Although VPNs generally slow down internet speed for implementing
            privacy and security measures, NovixVPN's WireGuard protocol is
            optimized for high performance and minimal lag — even during HD
            streaming, gaming, or video calls.
          </p>
          <p>How Novix keeps things fast:</p>
          <div className="mt-4">
            <p className="font-semibold">Light and efficient protocol:</p>
            <ul>
              <li>
                WireGuard protocol offers faster speeds than traditional
                protocols like OpenVPN.
              </li>
              <li>
                Minimizes battery usage and quicker server connections on
                Android.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Optimized global servers:</p>
            <ul>
              <li>
                Allows you to connect to local high-speed servers from anywhere.
              </li>
              <li>
                Offers seamless browsing, even on mobile data or public Wi-Fi
              </li>
            </ul>
          </div>
          <div>
            <p className="ml-6">
              While choosing VPNs for speed , NovixVPN can be your go-to.
            </p>
          </div>
        </div>
      ),
      icon: "",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about NovixVPN and how it can help
            protect your online privacy.
          </p>
        </div>

        <div className="w-full grid md:grid-cols-2 justify-items-center items-center gap-x-4">
          <div className=" top-0">
            <Image src="/FAQ.png" alt="" width={600} height={600} />
          </div>
          <FAQAccordion items={faqItems} />
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
