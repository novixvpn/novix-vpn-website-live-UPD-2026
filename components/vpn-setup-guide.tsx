import { Download, Server, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function VPNSetupGuide() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Setting up an Android VPN on your tablet/phone
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              On Android, safeguarding your online privacy is simpler than ever.
              Wherever you are, installing a VPN on your Android phone or tablet
              only takes a few minutes and allows you complete control over your
              digital security.
            </p>
          </div>

          {/* Main content with phone image */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-12">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Research and Download Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary-100">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Research and Download
                    </h3>
                  </div>

                  <div className="space-y-4 pl-16">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        1. Select a Reliable VPN Provider
                      </h4>
                      <p className="text-gray-600">
                        Search for a dependable Android VPN with the best
                        features fit for you; they might be— quick speeds,
                        robust security, and a no-logs policy. Being among the
                        most sophisticated VPN companies, NovixVPN provides all
                        of them.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        2. Get the VPN App
                      </h4>
                      <p className="text-gray-600">
                        On your Android device, launch the Play Store and look
                        for your selected VPN app (e.g., "NovixVPN"). Press
                        Install and let the software download. Some companies,
                        such as NovixVPN, let you download or install from their
                        sites.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        3. Launch and Log In
                      </h4>
                      <p className="text-gray-600">
                        Launch the app and log in using your credentials. If
                        you're new, you often need to subscribe to a monthly or
                        yearly plan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Setting Up Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary-100">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Setting up everything
                    </h3>
                  </div>

                  <div className="space-y-4 pl-16">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        1. Select a server location
                      </h4>
                      <p className="text-gray-600">
                        Choose a server site depending on your requirements:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">
                            For speed, pick a local server (e.g., Netherlands,
                            if you are from the EU).
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">
                            For content access, choose a site to enable
                            region-specific services (e.g., US/UK, for services
                            available only for UK or US people).
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        2. Enable Kill Switch (Optional but Recommended)
                      </h4>
                      <p className="text-gray-600">
                        Most top-tier VPNs, Including NovixVPN, let you activate
                        kill-switch protection to keep you safe even should the
                        VPN disconnects abruptly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
