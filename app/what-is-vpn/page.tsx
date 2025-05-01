import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Shield,
  Lock,
  Globe,
  Check,
  Eye,
  Server,
  Wifi,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function WhatIsVPN() {
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

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                What is a VPN?
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Understanding how Virtual Private Networks protect your online
                privacy and security.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  VPN Explained Simply
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A Virtual Private Network (VPN) creates a secure, encrypted
                  connection between your device and the internet. It acts like
                  a protective tunnel that shields your online activities from
                  prying eyes.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  When you connect to a VPN, your internet traffic is routed
                  through a remote server operated by the VPN provider. This
                  masks your IP address and encrypts your data, making it
                  virtually impossible for anyone to track your online
                  activities or steal your information.
                </p>
                <p className="text-lg text-muted-foreground">
                  Think of a VPN as a secure, private tunnel through the public
                  internet. It's like having a personal bodyguard for your
                  digital life.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="VPN Tunnel Illustration"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                How Does a VPN Work?
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding the technology behind VPN protection.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Encryption</h3>
                  <p className="text-muted-foreground">
                    When you connect to a VPN, it encrypts your data using
                    advanced protocols like AES-256. This turns your information
                    into an unreadable code that can only be deciphered with the
                    correct key.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. Tunneling</h3>
                  <p className="text-muted-foreground">
                    Your encrypted data travels through a secure "tunnel" to a
                    VPN server located in a different city or country. This
                    prevents anyone from intercepting or viewing your data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. IP Masking</h3>
                  <p className="text-muted-foreground">
                    The VPN server acts as an intermediary between you and the
                    internet. Websites and services see the VPN server's IP
                    address instead of yours, hiding your true location and
                    identity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Why Do You Need a VPN?
              </h2>
              <p className="text-xl text-muted-foreground">
                Protect yourself from these common online threats.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Wifi className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Public Wi-Fi Security
                  </h3>
                  <p className="text-muted-foreground">
                    Public Wi-Fi networks at cafes, airports, and hotels are
                    often unsecured, making it easy for hackers to intercept
                    your data. A VPN encrypts your connection, keeping your
                    sensitive information safe even on public networks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">ISP Tracking</h3>
                  <p className="text-muted-foreground">
                    Your Internet Service Provider (ISP) can see everything you
                    do online and may sell this data to advertisers or share it
                    with government agencies. A VPN prevents your ISP from
                    monitoring your browsing activities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Geo-Restrictions</h3>
                  <p className="text-muted-foreground">
                    Many streaming services and websites restrict content based
                    on your location. A VPN allows you to bypass these
                    restrictions by connecting to servers in different
                    countries, giving you access to global content.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Privacy</h3>
                  <p className="text-muted-foreground">
                    Companies, advertisers, and governments collect vast amounts
                    of data about your online activities. A VPN helps protect
                    your privacy by masking your IP address and encrypting your
                    internet traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Common VPN Use Cases
              </h2>
              <p className="text-xl text-muted-foreground">
                How people around the world use VPNs in their daily lives.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Secure Remote Work</h3>
                  <p className="text-muted-foreground">
                    Remote workers use VPNs to securely access company resources
                    and protect sensitive business data when working from home
                    or public places.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Streaming Content</h3>
                  <p className="text-muted-foreground">
                    Access your favorite streaming services and content
                    libraries from around the world, regardless of your physical
                    location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Secure Online Banking
                  </h3>
                  <p className="text-muted-foreground">
                    Protect your financial information when accessing online
                    banking services, especially when using public Wi-Fi
                    networks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Safe Online Shopping
                  </h3>
                  <p className="text-muted-foreground">
                    Keep your payment details and personal information secure
                    when shopping online, preventing data theft and fraud.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Travel Security</h3>
                  <p className="text-muted-foreground">
                    Travelers use VPNs to maintain access to their home
                    country's services and protect their data when using
                    unfamiliar networks abroad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Privacy Protection</h3>
                  <p className="text-muted-foreground">
                    Many people use VPNs simply to maintain their privacy online
                    and prevent tracking by advertisers, websites, and other
                    third parties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Why Choose Novix VPN?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Not all VPNs are created equal. Here's why Novix VPN stands out
                from the crowd.
              </p>

              <div className="grid gap-4 md:grid-cols-2 mb-8">
                <div className="flex items-start gap-3 text-left">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Military-Grade Encryption</h4>
                    <p className="text-sm text-muted-foreground">
                      AES-256 encryption keeps your data secure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Strict No-Logs Policy</h4>
                    <p className="text-sm text-muted-foreground">
                      We never track or store your online activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Global Server Network</h4>
                    <p className="text-sm text-muted-foreground">
                      Servers in 90+ countries for unrestricted access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Lightning-Fast Speeds</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized for streaming, gaming, and downloads.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Try Novix VPN Risk-Free
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                30-day money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
