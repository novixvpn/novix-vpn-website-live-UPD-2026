import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Zap,
  Check,
  Download,
  Smartphone,
  Laptop,
  Star,
  Tag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountdownTimer from "@/components/countdown-timer";
import IpBanner from "@/components/ip-banner";
import ComparisonTable from "@/components/comparison-table";
import PricingCards from "@/components/pricing-cards";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import HeroPromotionCom from "@/components/HeroPromotionCom";
import HeaderCom from "@/components/HeaderCom";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <IpBanner />

      {/* Header/Navigation */}
      <HeaderCom />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Guard What’s Yours. Ghost Everything Else.
                  </h1>
                  <ul>
                    <li className="flex justify-start items-center gap-2  ">
                      <Check className="text-[#2460D1]" />
                      Route traffic through two secure servers
                    </li>
                    <li className="flex justify-start items-center gap-2  ">
                      <Check className="text-[#2460D1]" />
                      Blazing-fast servers, no throttling
                    </li>
                    <li className="flex justify-start items-center gap-2  ">
                      <Check className="text-[#2460D1]" />
                      Strict No-Logs
                    </li>
                  </ul>
                  {/* promotion section */}
                  <Link href="#">
                    <HeroPromotionCom />
                  </Link>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Free Trial →
                  </Button>
                  <Button size="lg" variant="outline">
                    View Plans
                  </Button>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Join Millions of Happy Novix VPN Users</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                  </div>
                  <span className="text-sm font-medium">
                    25,798 reviews on Trustpilot
                  </span>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 bg-primary/10 rounded-full w-80 h-80 blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="VPN App Interface"
                  className="relative z-10 mx-auto"
                />
                <Badge className="absolute top-10 right-10 text-lg py-2 px-4 bg-primary text-white">
                  -65% OFF
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Timer Section */}
        <section className="bg-[#0052cc] text-white py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold mb-6">
                Limited Time Offer, Grab Now!{" "}
              </h2>
              <CountdownTimer />
              <Button
                size="lg"
                className="mt-6 bg-[#ff7043] hover:bg-[#ff7043]/90 text-white"
              >
                Save 65% Now!
              </Button>
              <div className="flex items-center gap-2 mt-4">
                <Check className="h-5 w-5 text-[#ff7043]" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                One VPN. 360° Protection. Zero Hassle.
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                No complex configurations. No tech skills needed. Just install,
                tap connect, and you're instantly protected.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Download & Install</h3>
                  <p className="text-muted-foreground">
                    Available on all devices
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/features">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">One-Tap Connect</h3>
                  <p className="text-muted-foreground">
                    Instant encryption - no manual setup
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/high-speed-vpn">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Stay Private & Secure
                  </h3>
                  <p className="text-muted-foreground">
                    Auto-connect with 24/7 protection
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/no-user-tracking">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Multi-device Section */}
        <section className="bg-muted/50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        One-click setup on any device—get protected instantly
                      </h3>
                      <p className="text-muted-foreground">
                        Connect with a single tap on Windows, Mac, iOS, Android,
                        Linux, and more.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Seamlessly switch between devices without interruptions
                      </h3>
                      <p className="text-muted-foreground">
                        Your connection stays secure as you move between your
                        phone, tablet, and computer.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Secure up to 8 devices with one simple connection
                      </h3>
                      <p className="text-muted-foreground">
                        Protect your entire household with a single
                        subscription.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  width={700}
                  height={500}
                  alt="VPN on multiple devices"
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="bg-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Novix VPN?
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                See how we compare to other leading VPN providers
              </p>
            </div>
            <ComparisonTable />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-muted/50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works for you
              </p>
            </div>
            <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 65%)</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <PricingCards interval="monthly" />
              </TabsContent>
              <TabsContent value="yearly">
                <PricingCards interval="yearly" />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Join millions of satisfied users worldwide
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Download Section */}
        <section
          id="download"
          className="bg-primary text-primary-foreground py-12 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Download Novix VPN Now
              </h2>
              <p className="mt-4 max-w-[700px] md:text-xl">
                Available on all your favorite platforms
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <Link
                href="https://play.google.com/store"
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="rounded-full bg-white/10 p-4">
                  <Smartphone className="h-8 w-8" />
                </div>
                <span>Android</span>
              </Link>
              <Link
                href="https://apps.apple.com"
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="rounded-full bg-white/10 p-4">
                  <Smartphone className="h-8 w-8" />
                </div>
                <span>iOS</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="rounded-full bg-white/10 p-4">
                  <Laptop className="h-8 w-8" />
                </div>
                <span>Windows</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="rounded-full bg-white/10 p-4">
                  <Laptop className="h-8 w-8" />
                </div>
                <span>macOS</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
