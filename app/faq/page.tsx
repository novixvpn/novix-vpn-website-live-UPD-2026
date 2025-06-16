import type { Metadata } from "next";
import FAQAccordion from "@/components/faq-accordion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | NovixVPN",
  description:
    "Find answers to common questions about NovixVPN, including security features, pricing, and more.",
};

export default function FAQPage() {
  const generalFaqs = [
    {
      question: "What makes Novix VPN stand out?",
      answer: (
        <div className="space-y-4">
          <p>
            Novix VPN isn’t just another VPN app — it’s a premium privacy
            solution built exclusively for Android users who value speed,
            security, and simplicity.
          </p>
          <p>
            At its core is the powerful <strong>WireGuard® protocol</strong>,
            delivering lightning-fast connections and strong security without
            draining your battery.
          </p>
          <p>
            With the <strong>built-in Kill Switch</strong>, your data stays
            protected even if the connection drops.
          </p>
          <p>
            Designed with Android in mind, Novix offers a clean interface,
            one-tap connection, and automatic protection across mobile data and
            Wi-Fi.
          </p>
        </div>
      ),
    },
    {
      question: "How secure is Novix VPN?",
      answer: (
        <div className="space-y-4">
          <p>Novix VPN is built with security as the top priority.</p>
          <p className="font-semibold">Advanced VPN Protocols</p>
          <p className="ml-6">
            Novix supports{" "}
            <a
              href="https://www.novixvpn.com/blogs/wire-guard-explained-fast-secure-and-simple-vpn-technology"
              target="_blank"
              className="text-primary underline"
            >
              WireGuard
            </a>
            , offering top-tier speed and security.
          </p>
          <p className="font-semibold">Built-In Kill Switch</p>
          <p className="ml-6">
            Automatically disconnects the internet if the VPN drops to prevent
            data leaks.
          </p>
          <p className="font-semibold">Hardened Backend Architecture</p>
          <p className="ml-6">
            Secure Python backend following OWASP standards.
          </p>
          <p className="font-semibold">No Data Tracking or Logs</p>
          <p className="ml-6">
            Strict no-logs policy ensures complete privacy.
          </p>
        </div>
      ),
    },
    {
      question: "How much can I trust Novix in terms of security?",
      answer: (
        <div className="space-y-4">
          <p>
            NovixVPN combines modern security protocols and smart protection
            features to keep your online activities safe.
          </p>
          <p className="font-semibold">Powered by WireGuard®</p>
          <ul className="list-disc ml-6">
            <li>Fast, secure, and open-source.</li>
            <li>Low battery usage and optimized for Android.</li>
          </ul>
          <p className="font-semibold">Kill Switch Protection</p>
          <ul className="list-disc ml-6">
            <li>Blocks internet if VPN drops.</li>
            <li>Prevents IP/data leaks.</li>
          </ul>
          <p className="ml-6">
            Strict no-logs — even we don’t know what you’re doing.
          </p>
        </div>
      ),
    },
    {
      question: "Will using Novix VPN slow down my internet?",
      answer: (
        <div className="space-y-4">
          <p>
            VPNs may slow down your internet, but NovixVPN's WireGuard protocol
            ensures high performance and minimal lag.
          </p>
          <p className="font-semibold">Light and efficient protocol:</p>
          <ul className="list-disc ml-6">
            <li>Faster than OpenVPN.</li>
            <li>Lower battery usage and faster connections.</li>
          </ul>
          <p className="font-semibold">Optimized global servers:</p>
          <ul className="list-disc ml-6">
            <li>Connect to local high-speed servers globally.</li>
            <li>Works well on mobile data or public Wi-Fi.</li>
          </ul>
        </div>
      ),
    },
  ];

  const paymentFaqs = [
    {
      question: "What payment methods do you accept?",
      answer: (
        <p>
          All transactions are securely processed via Google Play to protect
          your financial information.
        </p>
      ),
    },
    {
      question: "How does the 48-hour money-back guarantee work?",
      answer: (
        <p>
          Cancel through Google Play within 48 hours of purchase for a full
          refund. No hassle.
        </p>
      ),
    },
    {
      question: "Do you offer different subscription plans?",
      answer: (
        <p>
          Yes! Weekly, monthly, and yearly plans are available. Yearly offers
          best value and VIP features.
        </p>
      ),
    },
    {
      question: "Will my subscription auto-renew?",
      answer: (
        <p>
          Yes. Subscriptions auto-renew but can be canceled anytime through
          Google Play.
        </p>
      ),
    },
    {
      question: "Can I change my subscription plan?",
      answer: (
        <p>
          Yes. Upgrade/downgrade anytime. Changes will apply from the next
          billing cycle.
        </p>
      ),
    },
    {
      question: "How can I cancel my subscription?",
      answer: (
        <p>Cancel anytime through your Google Play Store account settings.</p>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="container mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about NovixVPN and how it protects
            your online privacy.
          </p>
        </div>

        {/* General FAQs with Image */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/FAQ.png"
              alt="FAQ Illustration"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              General Questions
            </h2>
            <FAQAccordion items={generalFaqs} />
          </div>
        </div>

        {/* Payment FAQs Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
            Payment & Billing
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={paymentFaqs} />
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
