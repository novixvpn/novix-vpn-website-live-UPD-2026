import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Shield,
  Lock,
  Zap,
  Globe,
  Check,
  Smartphone,
  Laptop,
  Tv,
  Server,
  Eye,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/footer";

export default function Features() {
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
                Novix VPN Features
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover all the powerful features that make Novix VPN the best
                choice for your online privacy and security.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="security" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>

              <TabsContent value="security" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      Military-Grade Security
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Novix VPN uses the most advanced encryption standards to
                      keep your data secure and private.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">AES-256 Encryption</h4>
                          <p className="text-muted-foreground">
                            The gold standard in encryption, used by governments
                            and security experts worldwide.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Kill Switch</h4>
                          <p className="text-muted-foreground">
                            Automatically disconnects your internet if the VPN
                            connection drops, preventing data leaks.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">DNS Leak Protection</h4>
                          <p className="text-muted-foreground">
                            Ensures your DNS requests are always routed through
                            our secure servers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Double VPN</h4>
                          <p className="text-muted-foreground">
                            Routes your traffic through two VPN servers for an
                            extra layer of encryption.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Security Features"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Performance Features"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      Lightning-Fast Performance
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Enjoy blazing-fast speeds without compromising on security
                      or privacy.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Optimized Servers</h4>
                          <p className="text-muted-foreground">
                            Our servers are optimized for speed, ensuring
                            minimal impact on your connection.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Unlimited Bandwidth</h4>
                          <p className="text-muted-foreground">
                            Stream, download, and browse without restrictions or
                            throttling.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">P2P Support</h4>
                          <p className="text-muted-foreground">
                            Optimized servers for peer-to-peer file sharing with
                            fast download speeds.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Smart Connect</h4>
                          <p className="text-muted-foreground">
                            Automatically connects you to the fastest server
                            based on your location.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="accessibility" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      Easy Accessibility
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Novix VPN is designed to be user-friendly and accessible
                      on all your devices.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Smartphone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">
                            Multi-Platform Support
                          </h4>
                          <p className="text-muted-foreground">
                            Apps for Windows, Mac, iOS, Android, Linux, and
                            browser extensions.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Laptop className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">
                            Connect Up to 8 Devices
                          </h4>
                          <p className="text-muted-foreground">
                            Protect all your devices with a single subscription.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Tv className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Smart TV Support</h4>
                          <p className="text-muted-foreground">
                            Dedicated apps for Android TV, Fire TV, and other
                            smart TV platforms.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">One-Click Connect</h4>
                          <p className="text-muted-foreground">
                            Simple interface that makes it easy to connect with
                            just one click.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Accessibility Features"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="privacy" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Privacy Features"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      Complete Privacy
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      We take your privacy seriously with features designed to
                      keep your online activities completely private.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Eye className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Strict No-Logs Policy</h4>
                          <p className="text-muted-foreground">
                            We never track, collect, or share your browsing
                            history.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Server className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">RAM-Only Servers</h4>
                          <p className="text-muted-foreground">
                            Our servers run on RAM only, ensuring all data is
                            wiped with every reboot.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Anonymous Browsing</h4>
                          <p className="text-muted-foreground">
                            Hide your IP address and encrypt your internet
                            traffic to browse anonymously.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Camouflage Mode</h4>
                          <p className="text-muted-foreground">
                            Disguise your VPN traffic to look like regular HTTPS
                            traffic, bypassing VPN blocks.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Additional Features
              </h2>
              <p className="text-xl text-muted-foreground">
                Novix VPN comes packed with even more features to enhance your
                online experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Split Tunneling</h3>
                  <p className="text-muted-foreground">
                    Choose which apps use the VPN and which ones connect
                    directly to the internet.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ad Blocker</h3>
                  <p className="text-muted-foreground">
                    Block ads, trackers, and malicious websites for a cleaner
                    browsing experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dedicated IP</h3>
                  <p className="text-muted-foreground">
                    Get your own dedicated IP address for enhanced security and
                    access.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Multi-Factor Authentication
                  </h3>
                  <p className="text-muted-foreground">
                    Add an extra layer of security to your Novix VPN account.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Auto-Connect</h3>
                  <p className="text-muted-foreground">
                    Automatically connect to Novix VPN when you join untrusted
                    networks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Obfuscated Servers</h3>
                  <p className="text-muted-foreground">
                    Bypass network restrictions in countries with internet
                    censorship.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore All Features
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Ready to Experience Novix VPN?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join millions of users who trust Novix VPN for their online
                privacy and security.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
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
