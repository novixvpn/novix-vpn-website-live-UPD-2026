import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: March 24, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Welcome to Novix VPN. These Terms of Service ("Terms") govern
                your use of our website, applications, and VPN services
                (collectively, the "Service") operated by Novix VPN ("we", "us",
                or "our").
              </p>
              <p>
                By accessing or using our Service, you agree to be bound by
                these Terms. If you disagree with any part of the Terms, you may
                not access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
              <p>
                Some parts of the Service are billed on a subscription basis.
                You will be billed in advance on a recurring and periodic basis,
                depending on the type of subscription plan you select.
              </p>
              <p>
                At the end of each period, your subscription will automatically
                renew under the same conditions unless you cancel it or we
                cancel it.
              </p>
              <p>
                You may cancel your subscription either through your online
                account management page or by contacting our customer support
                team.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Free Trial</h2>
              <p>
                We may, at our sole discretion, offer a subscription with a free
                trial for a limited period of time.
              </p>
              <p>
                You may be required to enter your billing information to sign up
                for the free trial. If you do, we will not bill you until the
                free trial has expired. On the last day of the free trial
                period, unless you cancel your subscription, we will
                automatically bill you for the applicable subscription fee.
              </p>
              <p>
                At any time and without notice, we reserve the right to (i)
                modify the terms and conditions of the free trial offer, or (ii)
                cancel such free trial offer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Fee Changes</h2>
              <p>
                Novix VPN, in its sole discretion and at any time, may modify
                the subscription fees. Any subscription fee change will become
                effective at the end of the then-current billing cycle.
              </p>
              <p>
                We will provide you with reasonable prior notice of any change
                in subscription fees to give you an opportunity to terminate
                your subscription before such change becomes effective.
              </p>
              <p>
                Your continued use of the Service after the subscription fee
                change comes into effect constitutes your agreement to pay the
                modified subscription fee amount.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
              <p>
                We offer a 30-day money-back guarantee for our Service. If you
                are not satisfied with our Service within the first 30 days of
                your subscription, you can request a full refund.
              </p>
              <p>
                To request a refund, please contact our customer support team
                within the 30-day period. Refunds requested after the 30-day
                period will be considered on a case-by-case basis and may be
                prorated based on the remaining time in your subscription
                period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
              <p>
                You agree not to use the Service for any purpose that is illegal
                or prohibited by these Terms. You may not use the Service in any
                manner that could damage, disable, overburden, or impair the
                Service or interfere with any other party's use and enjoyment of
                the Service.
              </p>
              <p>Prohibited activities include, but are not limited to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Engaging in any illegal activity</li>
                <li>
                  Attempting to gain unauthorized access to any part of the
                  Service
                </li>
                <li>
                  Interfering with or disrupting the Service or servers or
                  networks connected to the Service
                </li>
                <li>
                  Introducing malware, viruses, or other malicious code to the
                  Service
                </li>
                <li>
                  Harvesting or collecting user information without their
                  consent
                </li>
                <li>Impersonating another person or entity</li>
                <li>Using the Service to send unsolicited communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Intellectual Property
              </h2>
              <p>
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                Novix VPN and its licensors. The Service is protected by
                copyright, trademark, and other laws of both the United States
                and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection
                with any product or service without the prior written consent of
                Novix VPN.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Limitation of Liability
              </h2>
              <p>
                In no event shall Novix VPN, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from (i)
                your access to or use of or inability to access or use the
                Service; (ii) any conduct or content of any third party on the
                Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence) or any other legal theory, whether or not we have
                been informed of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is
                provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
                provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
              </p>
              <p>
                Novix VPN, its subsidiaries, affiliates, and its licensors do
                not warrant that a) the Service will function uninterrupted,
                secure or available at any particular time or location; b) any
                errors or defects will be corrected; c) the Service is free of
                viruses or other harmful components; or d) the results of using
                the Service will meet your requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of the United States, without regard to its conflict of
                law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days' notice prior to any new terms
                taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after any revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, you are no longer authorized
                to use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@novixvpn.com
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
