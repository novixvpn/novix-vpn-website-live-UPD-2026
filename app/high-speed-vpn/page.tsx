import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Zap,
  Globe,
  Server,
  Activity,
  Youtube,
  Download,
  Gamepad2,
  Check,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HighSpeedVPNPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary-100 rounded-full">
                NOVIX VPN EXPERT INSIGHTS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Novix VPN:{" "}
                <span className="text-primary">Designed for You</span>, Built
                for Speed
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                With VPNs, speed is not merely a benefit; it is really rather
                crucial. A bad connection spoils the experience, whether you are
                streaming your favourite series, gaming without latency, or
                loading a website fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/download"
                  className="inline-flex  h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Get Novix VPN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                {/* <Link
                  href="/features"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Learn More
                </Link> */}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mx-auto w-full max-w-xl">
                <Image
                  src="/high-speed-vpn.webp"
                  alt="Novix VPN Security"
                  width={700}
                  height={700}
                  className="w-full h-auto scale-125"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-950"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Speedy Features of Novix VPN
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Designed with performance in mind, especially for Android users,
              Novix offers high-speed browsing without compromising privacy or
              comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-200  p-8 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  WireGuard Protocol for Next Generation
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Fundamentally, WireGuard is contemporary, lightweight, and built
                for speed. Novix VPN's speed is unlike older VPN protocols like
                OpenVPN; WireGuard permits your data to go through with the
                least latency by providing stronger security and cleaner coding.
                From a practical standpoint? Even over great distances, a quick
                connection and fewer interruptions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-200  p-8 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Server className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Network of Best Servers</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Novix VPN links you to a global network of strategically located
                servers, both free and premium. Depending on location and
                performance, the software picks the optimal server for you; no
                human guessing or switching is necessary. The item? Quicker
                speeds every time you log on.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-200  p-8 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Activity className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Speed Test Built-In</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Unsure of which server to choose? Novix simplifies things. Check
                real-time performance of many servers using the in-app speed
                test and select the one that most meets your requirements. It's
                great for everyone who wishes to stream, download, or play
                without delays.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-200 p-8 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  Particularly Designed for Android Devices
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Unlike big VPN applications that slow down your phone, Novix is
                quick and simple. Promising quick performance, low battery use,
                and seamless multitasking even with your VPN running in the
                background, it was built only for Android.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Possible Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              All That Speed: What Is Possible?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Experience the full potential of high-speed VPN connectivity with
              Novix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <Youtube className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">View in HD or 4K</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Wave farewell to fuzzy streaming and buffering.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <Gamepad2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Play Online Games</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Using low ping to avoid lag.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Download Files Promptly
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Transfer backups or big files without delay.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Effortless Browsing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fast-loading websites, ideal video calls, and smooth social
                media access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      {/* <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary rounded-full opacity-10"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-10"></div>
              <div className="relative mx-auto max-w-xs">
                <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[40px] p-4 shadow-2xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-xl"></div>
                  <div className="w-full h-full rounded-[32px] overflow-hidden border-4 border-gray-800">
                    <Image
                      src="/images/app-screenshot-new.png"
                      alt="Novix VPN App"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Extra Features
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Beyond speed, Novix VPN offers additional features to enhance
                your online experience.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Kill Switch Protection
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Should the VPN fail, it will maintain your connection
                      safely and not slow you down.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Flexible Subscription Plans
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      No commitment pressure; weekly, monthly, and annual
                      choices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Premium Benefits</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Annual memberships offer extra days and unique benefits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Easy Setup Tutorials
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      In-app YouTube lessons make it easy for even beginners to
                      set up.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Get Novix VPN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Extra Features Section */}
      <section className="w-full py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Extra Features</h2>
              <p className="text-lg text-gray-600">
                Beyond speed, Novix VPN offers additional features to enhance
                your online experience.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary-100 mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-gray-600">
                    Should the VPN fail, it will maintain your connection safely
                    and not slow you down.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary-100 mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-gray-600">
                    Under Flexible Plans, no commitment pressure; weekly,
                    monthly, and annual choices.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary-100 mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-gray-600">
                    Annual memberships offer extra days and unique benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Point */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Makes Novix VPN Unique?
              </h2>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-200  p-10">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                A lot of VPNs claim to be fast. Novix shows that it works. It's
                made for people who want speed without giving up security. It
                uses advanced protocols, fast server routeing, and a focus on
                Android performance. Novix fits your lifestyle, whether you just
                browse the web occasionally or use it a lot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience True Speed?
            </h2>
            <p className="text-xl mb-10 text-muted-foreground">
              If slow VPNs that offer a lot but don't deliver are wearing you
              out, it's time to switch. Novix VPN is what a current VPN should
              be like: fast, easy, and safe. Right now, give it a try to see how
              fast privacy might change things.
            </p>
            <Link
              href="/download"
              className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get Novix VPN Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
