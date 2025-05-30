import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: March 24, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Novix VPN ("we", "our", or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our VPN
                service, website, and mobile application (collectively, the
                "Service").
              </p>
              <p>
                Please read this Privacy Policy carefully. By using our Service,
                you consent to the collection, use, and disclosure of your
                information as described in this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Create an account</li>
                <li>Purchase a subscription</li>
                <li>Contact our customer support</li>
                <li>Sign up for our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>
                This information may include your name, email address, payment
                information, and other contact details.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-6">
                Usage Information
              </h3>
              <p>
                We collect minimal information about your use of our Service to
                maintain and improve our service quality:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Server load information</li>
                <li>
                  Connection attempt timestamps (not linked to personal
                  information)
                </li>
                <li>Aggregate bandwidth usage</li>
                <li>Service performance data</li>
              </ul>
              <p>
                <strong>
                  We do not log your browsing activity, IP addresses, downloaded
                  content, or DNS queries.
                </strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Our No-Logs VPN Policy
              </h2>
              <p>
                Novix VPN operates under a strict no-logs policy. This means:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  We do not monitor, record, log, store or share any of your
                  activities while using our VPN service
                </li>
                <li>
                  We do not store connection timestamps, session information,
                  used bandwidth, traffic logs, IP addresses, or browsing data
                </li>
                <li>
                  We do not store any information that could identify what you
                  browse, view, or do online via our VPN connection
                </li>
                <li>
                  We do not store your original IP address or the IP addresses
                  of the VPN servers you use
                </li>
              </ul>
              <p>
                Our no-logs policy has been independently audited by
                cybersecurity experts to verify our claims. The audit reports
                are available upon request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>
                  Send technical notices, updates, security alerts, and support
                  messages
                </li>
                <li>
                  Monitor and analyze trends, usage, and activities in
                  connection with our Service
                </li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and
                  other illegal activities
                </li>
                <li>
                  Personalize and improve your experience with our Service
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Service Providers:</strong> We may share your
                  information with third-party vendors, service providers, and
                  other business partners who need access to such information to
                  carry out work on our behalf.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your
                  information if required to do so by law or in response to
                  valid requests by public authorities (e.g., a court or
                  government agency).
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a
                  merger, acquisition, or sale of all or a portion of our
                  assets, your information may be transferred as part of that
                  transaction.
                </li>
                <li>
                  <strong>Protection of Rights:</strong> We may disclose your
                  information to protect the rights, property, or safety of
                  Novix VPN, our users, or others.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Google Play Store Compliance
              </h2>
              <p>
                For users who download our application from the Google Play
                Store, we comply with Google Play's Developer Program Policies,
                including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  We do not use your data for any purpose other than providing
                  and improving our VPN service
                </li>
                <li>
                  We do not sell your personal or sensitive data to third
                  parties
                </li>
                <li>
                  We clearly disclose our data collection and use practices in
                  this Privacy Policy
                </li>
                <li>
                  We implement appropriate security measures to protect your
                  data
                </li>
                <li>
                  We comply with all applicable laws and regulations, including
                  GDPR, CCPA, and other privacy laws
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect the security of your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>AES-256 encryption for all VPN connections</li>
                <li>
                  Perfect Forward Secrecy to ensure that your encrypted data
                  cannot be captured and decrypted later
                </li>
                <li>Regular security audits and penetration testing</li>
                <li>
                  Secure, encrypted storage of any personal information we do
                  collect
                </li>
              </ul>
              <p>
                However, please be aware that no method of transmission over the
                Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access your personal information</li>
                <li>
                  The right to rectify inaccurate or incomplete information
                </li>
                <li>The right to erase your personal information</li>
                <li>
                  The right to restrict processing of your personal information
                </li>
                <li>The right to data portability</li>
                <li>
                  The right to object to processing of your personal information
                </li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the
                information provided in the "Contact Us" section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">GDPR Compliance</h2>
              <p>
                For users in the European Economic Area (EEA), we comply with
                the General Data Protection Regulation (GDPR). This means:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  We process your data lawfully, fairly, and transparently
                </li>
                <li>
                  We collect data for specified, explicit, and legitimate
                  purposes
                </li>
                <li>
                  We limit data collection to what is necessary for the purposes
                  for which it is processed
                </li>
                <li>We take steps to ensure data accuracy</li>
                <li>We store data only as long as necessary</li>
                <li>
                  We implement appropriate security measures to protect your
                  data
                </li>
              </ul>
              <p>
                Our Data Protection Officer can be contacted at
                dpo@novixvpn.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">CCPA Compliance</h2>
              <p>
                For California residents, we comply with the California Consumer
                Privacy Act (CCPA). Under the CCPA, you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Know what personal information we collect about you</li>
                <li>Request deletion of your personal information</li>
                <li>
                  Opt-out of the sale of your personal information (note that we
                  do not sell your personal information)
                </li>
                <li>Non-discrimination for exercising your CCPA rights</li>
              </ul>
              <p>
                To exercise your rights under the CCPA, please contact us using
                the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Children's Privacy
              </h2>
              <p>
                Our Service is not directed to children under the age of 16. We
                do not knowingly collect personal information from children
                under 16. If you are a parent or guardian and you are aware that
                your child has provided us with personal information, please
                contact us so that we can take necessary actions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top of
                this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> novixvpna@gmail.com
                <br />
                <strong>Address:</strong> 123 Privacy Street, Secure City, 10001
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
