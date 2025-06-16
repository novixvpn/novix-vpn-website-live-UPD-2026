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
          <h1 className="text-3xl font-bold mb-8">
            Novix VPN Privacy & Policy
          </h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground  mb-6">
              Last updated: 31 May, 2025
            </p>
            <p className=" mb-6">
              The <span className="font-bold">Privacy Policy</span> describes
              how we collect and use the user's personal data and submitted or
              other information when you install or use Novix VPN Services.
              These privacy practices apply across all Android devices.
            </p>

            <ol className="list-decimal marker:font-bold marker:text-2xl marker:text-black ">
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold">No-Logs Policy</h2>
                  <p>
                    At <span className="font-bold">Novix VPN</span> , we operate
                    on a{" "}
                    <span className="font-bold"> strict no-log policy</span> ,
                    meaning we do not collect, store, or share any data related
                    to your online activities. This ensures that your online
                    presence and activities remain private, secure, and
                    anonymous.
                  </p>
                  <h2 className="text-2xl font-semibold mb-4">
                    What We Never Collect:
                  </h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li>
                      <span className="font-bold"> Browsing History: </span> The
                      websites you visit, searches you perform, and apps you use
                      remain invisible to us.
                    </li>
                    <li>
                      <span className="font-bold"> IP Addresses: </span> Neither
                      your real IP nor your VPN-assigned IP is ever logged.
                    </li>
                    <li>
                      <span className="font-bold"> Data Traffic: </span> The
                      details of your sent or received data, including protocols
                      used, packet contents, or destination addresses, are never
                      monitored or recorded.
                    </li>
                    <li>
                      <span className="font-bold"> DNS Requests: </span> DNS
                      requests are never cached, logged, or leaked to third
                      parties.
                    </li>
                    <li>
                      <span className="font-bold"> Bandwidth Usage: </span> We
                      do not track, limit, or store your data consumption.
                    </li>
                    <li>
                      <span className="font-bold">
                        {" "}
                        Connection timestamps:{" "}
                      </span>{" "}
                      We donʼt log when you connect or disconnect from our VPN
                      service.
                    </li>
                    <li>
                      <span className="font-bold"> No Ad Tracking: </span> We do
                      not profile users for targeted advertising — your online
                      identity remains completely anonymous.
                    </li>
                  </ul>
                </section>
              </li>
              <li>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Information We Collect
                  </h2>
                  <p>
                    As per our no-logs policy, we don't track your online
                    activity—but we may collect minimal information necessary
                    for service management, improvement, and troubleshooting
                    purposes, such as:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li> Email, first name, last name.</li>
                    <li>
                      Payment information (handled by a trusted third-party
                      payment processor)
                    </li>
                    <li>
                      The app may request access to your deviceʼs location in
                      order to connect you to the nearest server and to optimize
                      speed test results. We simply utilize this information to
                      check performance and connections, and we don't keep or
                      log it.
                    </li>
                    <li>
                      The app may request access to your phone features solely
                      to enable content support via email. This allows you to
                      contact our support team directly from the app and attach
                      relevant information for troubleshooting.
                    </li>
                    <li> Device Information</li>
                  </ul>
                </section>
              </li>
              <li>
                <h3 className="text-2xl font-semibold mb-4">
                  Use of Information
                </h3>
                <p>
                  Any information we collect is used solely for the purpose of
                  providing and improving our VPN service. This includes:
                </p>
                <ul className="list-disc pl-6 ">
                  <li> Account setup and management</li>
                  <li>Customer support and service improvement</li>
                  <li> Ensuring optimal service performance</li>
                </ul>
              </li>
              <li>
                <h3 className="text-2xl font-semibold mb-4">
                  Cookies and Tracking Technologies
                </h3>
                <p>
                  We use cookies and other tracking technologies to enhance your
                  experience on our website. For more detailed information about
                  our use of cookies and how you can manage your preferences,
                  please visit our
                  <a href="/cookie-policy" className="hover:underline mx-1">
                    Cookie Policy
                  </a>{" "}
                  page.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold mb-4">
                  Sharing of Information
                </h3>
                <p>
                  Your privacy is our priority—Novix VPN does not trade, rent,
                  or sell your information to outside parties for profit. Any
                  information shared with third parties (such as payment
                  processors) is strictly for the purpose of providing Novix
                  Premium service
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold mb-4">Data Security</h3>
                <p>
                  We maintain tight controls over the personal data we collect.
                  Our dedicated IT security team has implemented appropriate
                  physical, technical, and organizational measures to protect
                  information about you against accidental or unlawful
                  destruction or accidental loss, alteration, unauthorized
                  disclosure, or access, and against all other unlawful
                  activity.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold mb-4">
                  Changes to This Privacy Policy
                </h3>
                <p>
                  We may update our Privacy Policy from time to time. As long as
                  you are using the Services, you are responsible for regularly
                  reviewing this Privacy Policy.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy, please feel free to contact us
                </p>

                <p className="text-gray-600 text-sm">
                  <strong>Company:</strong> CYBERLOOM IT TECHNOLOGIES
                  <br />
                  <strong>Address:</strong> Plot-33, Main Road, Section-10,
                  Senpara Parbata Mirpur - 1216 Bangladesh (BD)
                  <br />
                  <strong>Phone:</strong> +8801974523700
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:novixvpn@gmail.com"
                    className="text-primary hover:underline"
                  >
                    novixvpn@gmail.com
                  </a>
                  <br />
                </p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
