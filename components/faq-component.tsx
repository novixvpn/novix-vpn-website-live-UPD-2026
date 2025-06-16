import FAQAccordion from "@/components/faq-accordion";
import Link from "next/link";

export default function FAQComponent() {
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
    // {
    //   question: "Is Novix VPN free?",
    //   answer: (
    //     <div className="space-y-4">
    //       <p>
    //         Yes, Novix VPN offers both free and premium access , so you can
    //         enjoy secure browsing no matter your budget.
    //       </p>
    //       <p>
    //         With the Extra Free plan, you get access to select VPN servers and
    //         essential privacy features—perfect for basic protection and
    //         anonymous browsing.
    //       </p>
    //       <p>
    //         However, if you're looking for faster speeds, more server locations,
    //         and advanced features like the kill switch, server performance
    //         stats, and priority support, Novix VPN’s premium plans (available
    //         weekly, monthly, or yearly) are designed to deliver the full
    //         experience.
    //       </p>
    //       <p className="font-medium">
    //         <strong>Bonus:</strong> We also offer a Try Extra Free for 3 Days
    //         for yearly plans, so you can explore premium features risk-free
    //         before committing.
    //       </p>
    //     </div>
    //   ),
    //   icon: "",
    // },
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
              In case your connection drops, the <strong>Kill Switch</strong>{" "}
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
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about NovixVPN and how it can help
            protect your online privacy.
          </p>
        </div>

        <FAQAccordion items={faqItems} />

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
