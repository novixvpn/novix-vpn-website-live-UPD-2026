import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function CookiePolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/novix-logo.png"
                  alt="Novix VPN Logo"
                  width={180}
                  height={58}
                  className="rounded-md"
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: March 24, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                This Cookie Policy explains how Novix VPN ("we", "us", or "our")
                uses cookies and similar technologies on our website and
                applications. This policy is designed to help you understand
                what cookies are, how we use them, and the choices you have
                regarding their use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently and provide information to the website owners.
                Cookies can be "persistent" or "session" cookies.
              </p>
              <p>
                Persistent cookies remain on your device when you go offline,
                while session cookies are deleted as soon as you close your web
                browser.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Cookies
              </h2>
              <p>We use cookies for several purposes, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are
                  necessary for the website to function properly. They enable
                  basic functions like page navigation and access to secure
                  areas of the website. The website cannot function properly
                  without these cookies.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> These cookies allow the
                  website to remember choices you make (such as your preferred
                  language or the region you are in) and provide enhanced, more
                  personal features.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies help us
                  understand how visitors interact with our website by
                  collecting and reporting information anonymously. This helps
                  us improve our website and services.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies are used to
                  track visitors across websites. The intention is to display
                  ads that are relevant and engaging for the individual user.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Types of Cookies We Use
              </h2>
              <p>We use the following types of cookies on our website:</p>
              <table className="w-full border-collapse border border-gray-300 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">
                      Cookie Type
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Purpose
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Session Cookies
                    </td>
                    <td className="border border-gray-300 p-2">
                      To keep you logged in during your visit
                    </td>
                    <td className="border border-gray-300 p-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Preference Cookies
                    </td>
                    <td className="border border-gray-300 p-2">
                      To remember your settings and preferences
                    </td>
                    <td className="border border-gray-300 p-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Analytics Cookies
                    </td>
                    <td className="border border-gray-300 p-2">
                      To collect anonymous data on how you use our website
                    </td>
                    <td className="border border-gray-300 p-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Marketing Cookies
                    </td>
                    <td className="border border-gray-300 p-2">
                      To provide you with relevant advertisements
                    </td>
                    <td className="border border-gray-300 p-2">90 days</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Third-Party Cookies
              </h2>
              <p>
                In addition to our own cookies, we may also use various
                third-party cookies to report usage statistics of the Service
                and deliver advertisements on and through the Service.
              </p>
              <p>Some of the third-party services we use include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Google Analytics:</strong> To analyze how users use
                  our website
                </li>
                <li>
                  <strong>Google AdSense:</strong> To display relevant
                  advertisements
                </li>
                <li>
                  <strong>Facebook Pixel:</strong> To measure the effectiveness
                  of our advertising campaigns
                </li>
                <li>
                  <strong>Stripe:</strong> To process payments securely
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Your Cookie Choices
              </h2>
              <p>
                Most web browsers allow you to control cookies through their
                settings preferences. However, if you limit the ability of
                websites to set cookies, you may worsen your overall user
                experience, since it will no longer be personalized to you.
              </p>
              <p>
                You can manage your cookie preferences in the following ways:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Browser Settings:</strong> You can manage cookies
                  through your browser settings. Most browsers allow you to
                  block or delete cookies.
                </li>
                <li>
                  <strong>Cookie Consent Tool:</strong> We provide a cookie
                  consent tool when you first visit our website, allowing you to
                  select which types of cookies you accept.
                </li>
                <li>
                  <strong>Opt-Out Links:</strong> Many third-party advertising
                  networks offer opt-out features. For example, you can opt out
                  of Google Analytics by installing the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-primary hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Do Not Track</h2>
              <p>
                Some browsers have a "Do Not Track" feature that signals to
                websites that you visit that you do not want to have your online
                activity tracked. Due to the lack of a common understanding of
                how to interpret the DNT signal, our website does not currently
                respond to browser DNT signals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Changes to This Cookie Policy
              </h2>
              <p>
                We may update our Cookie Policy from time to time. We will
                notify you of any changes by posting the new Cookie Policy on
                this page and updating the "Last updated" date at the top of
                this Cookie Policy.
              </p>
              <p>
                You are advised to review this Cookie Policy periodically for
                any changes. Changes to this Cookie Policy are effective when
                they are posted on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please
                contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@novixvpn.com
                <br />
                <strong>Address:</strong> 123 Privacy Street, Secure City, 10001
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
