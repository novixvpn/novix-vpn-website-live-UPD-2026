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
              Last updated: May 31, 2025 
            </p>

            <ol className="list-decimal marker:font-bold marker:text-2xl marker:text-black ">
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                  <p>
                    Thank you for choosing us. Before starting, please read
                    these Terms of Service carefully. This is an
                    <span className="font-bold mx-1">agreement </span>
                    between you and Novix VPN for Virtual Private Network VPN
                    communications services. By visiting the website,
                    registering, installing and/or using the Novix VPN Services
                    on any platform or device you agree to be bound by these
                    terms. If you do not agree with any of these terms, please
                    do not install and do not use our software, our mobile
                    application and/or any of our products or services.
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    ELIGIBILITY & ACCOUNT USE
                  </h2>
                  <ul>
                    <li>
                      The Services are available only to individuals who are at
                      least 13 years old. Minors must have parental or legal
                      guardian consent to use the Services.
                    </li>
                    <li>
                      Accounts created by automated means or “botsˮ are
                      prohibited and will be terminated.
                    </li>
                    <li>
                      You are responsible for all activity conducted through
                      your Account.
                    </li>
                    <li>
                      You agree to provide accurate and complete information
                      when registering and to keep your Account credentials
                      secure.
                    </li>
                  </ul>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    AUTHORIZED USE
                  </h2>
                  <p>
                    You must not use your account or our services for anything
                    illegal or against the rules. This includes (but is not
                    limited to):
                  </p>
                  <ul>
                    <li>
                      Disrupting or damaging Novix VPNʼs network or servers
                    </li>
                    <li>
                      Accessing, sharing, or distributing illegal content.
                    </li>
                    <li>Violating intellectual property rights.</li>
                    <li>Harassing, discriminating, or threatening others.</li>
                    <li>
                      Transferring your Account to third parties without Novix
                      VPNʼs consent.
                    </li>
                    <li>Using fraudulent payment methods.</li>
                    <li>
                      Engaging in spam, phishing, or malware distribution.
                    </li>
                    <li>
                      Attempting unauthorized access to any system or network.
                    </li>
                    <li>
                      Exploiting referral programs or promotions unfairly.
                    </li>
                  </ul>
                  <p>
                    Novix VPN reserves the right to suspend or terminate
                    Accounts violating these rules without prior notice.
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold">
                    SUBSCRIPTION AND AUTO-RENEWALS
                  </h2>
                  <h2 className="text-xl font-semibold">4.1 SUBSCRIPTION</h2>
                  <p>
                    Novix VPN is a subscription-based service. To unlock our
                    advanced features, simply choose a subscription plan.
                    Payments are securely processed via Google Play, and the
                    full amount is charged upfront at the time of purchase. All
                    pricing and billing details are clearly displayed before you
                    confirm your subscription.
                  </p>
                  <h2 className="text-xl font-semibold">4.2 Auto-Renewal</h2>
                  <p>
                    All subscriptions are set to auto-renew by default. This
                    means your chosen plan will automatically renew at the end
                    of each billing cycle unless you cancel it through your
                    Google Play account before the renewal date.
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold">
                    CANCELLATION AND REFUND POLICY
                  </h2>
                  <h2 className="text-xl font-semibold">
                    5.1 Subscription Cancellation
                  </h2>
                  <p>
                    To cancel your subscription, you must do so directly through
                    your Google Play account. Uninstalling the app does not
                    cancel your subscription.
                  </p>
                  <h2 className="text-xl font-semibold">5.2 Refund</h2>
                  <p>
                    We seek your full satisfaction with our Services. However,
                    if you are not satisfied with our Services, you may cancel
                    the Subscription and request a refund within 48h via Google
                    play store. If you cancel after 48 hours, your payment
                    becomes non-refundable, and you will not be eligible for any
                    partial or full refund for the remaining period. Novix VPN
                    does not directly process or manage refunds. All refund
                    decisions are made by Google based on their refund policy.
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4"> PRIVACY</h2>
                  <p>
                    You agree to read our{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link> which
                    explains what type of information we collect and what might
                    happen to that information, including, without limitation,
                    how such information is shared and used. Our Privacy Policy
                    contains information that you should review prior to using
                    the Novix VPN Services.
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4"> LICENSE</h2>
                  <p>
                    By using the Novix VPN app and related services (“Serviceˮ),
                    you are granted a limited, non-exclusive, non-transferable,
                    and revocable license to access and use the Service strictly
                    for your personal, non-commercial use, and in accordance
                    with these Terms of Service. This license does not permit
                    you to copy, modify, adapt, translate, reverse engineer,
                    decompile, disassemble, or create derivative works based on
                    any part of the Service. You may not sell, rent, lease,
                    sublicense, distribute, or otherwise transfer the Service or
                    any part thereof to any third party. Additionally, you agree
                    not to use the Service for any unlawful purpose or in
                    violation of any applicable laws or regulations, nor to
                    attempt unauthorized access to any systems, networks, or
                    user data related to Novix VPN. Automated tools, scripts, or
                    software designed to interfere with or extract data from the
                    Service are strictly prohibited. All intellectual property
                    rights in and to the Service—including but not limited to
                    software, content, design, and trademarks—are owned by Novix
                    VPN or its licensors and are protected by applicable
                    intellectual property laws. No rights are granted to you
                    other than those expressly stated in this section. This
                    license remains in effect until terminated, and Novix VPN
                    reserves the right to suspend or revoke your access to the
                    Service at any time and for any reason, including, but not
                    limited to, any violation of these Terms.
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    DISCLAIMER OF WARRANTIES
                  </h2>
                  <p>
                    THE SERVICES AND WEBSITES ARE PROVIDED “AS ISˮ AND WITH ALL
                    FAULTS. WE MAKE NO REPRESENTATION OR WARRANTY WHATSOEVER
                    REGARDING THE COMPLETENESS, ACCURACY, ADEQUACY, SUITABILITY,
                    FUNCTIONALITY, AVAILABILITY, OR OPERATION OF THE SERVICES.
                    YOU ACKNOWLEDGE THAT WE DO NOT HAVE CONTROL OVER YOUR USE OF
                    THE SERVICES, AND WE DO NOT WARRANT THE PERFORMANCE OR
                    RESULTS THAT MAY BE OBTAINED THROUGH YOUR USE OF THE
                    SERVICES. YOU ASSUME ALL RISKS AND RESPONSIBILITY FOR YOUR
                    USE OF THE SERVICES AND FOR ANY LOSS OF OR ERRORS IN ANY
                    DATA OR INFORMATION. TO THE FULL EXTENT PERMISSIBLE BY
                    APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES OF ANY KIND,
                    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
                    IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON INFRINGEMENT, AND ANY WARRANTIES
                    ARISING THROUGH COURSE OF DEALING, COURSE OF PERFORMANCE, OR
                    USAGE OF TRADE. WITHOUT LIMITING THE FOREGOING, WE NEITHER
                    WARRANT NOR REPRESENT THAT YOUR USE OF THE SERVICES WILL NOT
                    INFRINGE THE RIGHTS OF ANY THIRD PARTIES, NOR THAT THE
                    SERVICES WILL BE AVAILABLE FOR YOUR ACCESS OR USE, NOR THAT
                    OPERATION OF THE SERVICES WILL BE ERRORFREE OR
                    UNINTERRUPTED. PLEASE NOTE THAT SOME JURISDICTIONS MAY NOT
                    ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO SOME OF THE
                    ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. IN ADDITION, YOU MAY
                    ALSO HAVE OTHER RIGHTS THAT VARY FROM ONE JURISDICTION TO
                    ANOTHER JURISDICTION.
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    LIMITATIONS OF LIABILITY
                  </h2>
                  <p>
                    YOUR USE OF THE SERVICES IS AT YOUR OWN RISK. NEITHER NOVIX
                    NOR ANY OF ITS PARENTS, SUBSIDIARIES OR AFFILIATES, NOR ANY
                    OF THEIR EMPLOYEES, OFFICERS OR DIRECTORS, AGENTS,
                    DISTRIBUTORS OR LICENSEES SHALL BE LIABLE FOR ANY DIRECT,
                    INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                    OTHER DAMAGES INCLUDING, WITHOUT LIMITATION, LOSS OF DATA
                    OR INFORMATION OF ANY KIND, LOSS OF BUSINESS, LOST PROFITS,
                    INTERRUPTION OF BUSINESS, COST OF COVER OR ANY OTHER DAMAGES
                    ARISING OUT OF OR IN ANY WAY RELATED TO THIS AGREEMENT OR
                    THE USE OR INABILITY TO USE THE SERVICES, WHETHER BASED ON
                    CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF WE
                    HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY
                    CASE, THE LIABILITY OF NOVIX SHALL NOT EXCEED WHAT THE USER
                    PAID TO NOVIX AND SHALL NOT INCLUDE ATTORNEY FEES OR COURT
                    COSTS IRRESPECTIVE OF ANY LAWS OR STATUTES THAT MAY
                    PRESCRIBE OTHERWISE.
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    INDEMNIFICATION
                  </h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless Novix VPN,
                    including its parent company, affiliates, officers,
                    directors, employees, agents, partners, and licensors,from
                    and against any and all claims, liabilities, damages,
                    losses, costs, and expenses (including reasonable attorneysʼ
                    fees and expert fees) that arise from or relate to:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Your violation of these Terms of Service</li>
                    <li>
                      Your use or misuse of the Novix VPN apps and services
                    </li>
                    <li>
                      Any other actions or omissions by you in connection with
                      your use of Novix VPN.
                    </li>
                  </ul>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">TERMINATION</h2>
                  <p>
                    We may suspend (for clarification, investigation, or when
                    requesting you to explain your actions) or terminate your
                    Account and/or Services, if (i) we cannot charge you for the
                    auto-renewed Subscription, (ii) you breach Section 8 of the
                    General Terms (“Prohibited and Restricted Useˮ), (iii) you
                    breach any applicable laws, (iv) it is required to do so by
                    law or competent authority (e.g., where the provision of the
                    Services becomes unlawful in your country of residence, or
                    final court judgment bearing relation to your use of our
                    Services, Software, or Websites is issued).
                  </p>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    UPDATES TO THE TERMS
                  </h2>
                  <p>
                    We might change these Terms for a number of reasons,
                    including to obey new laws, respond to regulators, make the
                    service better, correct problems, make things clearer, make
                    things safer, or stop anyone from using them wrong. If we
                    make important changes that affect your rights or how the
                    Service works, we will let you know in advance—by email or
                    other reasonable means. Unless we say otherwise, updates
                    take effect as soon as we publish the new version. If you
                    keep using Novix VPN after the changes, it means you agree
                    to the new Terms. If you donʼt agree, you can stop using the
                    Service and close your account at any time.
                  </p>
                </section>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
