import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Globe, Search, Check, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";

export default function VPNServers() {
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
                Global VPN Server Network
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Access the internet securely from anywhere with our extensive
                network of high-speed servers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  <span className="text-lg font-bold">3,000+ Servers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span className="text-lg font-bold">90+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span className="text-lg font-bold">Unlimited Bandwidth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for a country or city..."
                    className="pl-10"
                  />
                </div>
                <Button className="whitespace-nowrap">Find Servers</Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="USA Flag"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">United States</h3>
                      <p className="text-sm text-muted-foreground">
                        500+ servers
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>New York</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Los Angeles</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Chicago</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Miami</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Seattle</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="UK Flag"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">United Kingdom</h3>
                      <p className="text-sm text-muted-foreground">
                        200+ servers
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>London</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Manchester</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Glasgow</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Birmingham</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Germany Flag"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Germany</h3>
                      <p className="text-sm text-muted-foreground">
                        150+ servers
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Berlin</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Frankfurt</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Munich</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Hamburg</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Japan Flag"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Japan</h3>
                      <p className="text-sm text-muted-foreground">
                        100+ servers
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tokyo</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Osaka</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Yokohama</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Australia Flag"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Australia</h3>
                      <p className="text-sm text-muted-foreground">
                        80+ servers
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Sydney</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Melbourne</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Brisbane</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Perth</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Canada Flag"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Canada</h3>
                      <p className="text-sm text-muted-foreground">
                        120+ servers
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Toronto</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Vancouver</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Montreal</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Calgary</span>
                      <span className="text-green-500">Optimal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="mr-2">
                View More Countries
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Get Novix VPN
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Server Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Optimized for Speed</h4>
                      <p className="text-muted-foreground">
                        Our servers are optimized for maximum speed and minimal
                        latency, ensuring a smooth browsing experience.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">P2P Support</h4>
                      <p className="text-muted-foreground">
                        Many of our servers support P2P file sharing, making
                        them ideal for torrenting and other peer-to-peer
                        activities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Obfuscated Servers</h4>
                      <p className="text-muted-foreground">
                        Special servers designed to bypass network restrictions
                        in countries with internet censorship.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Double VPN</h4>
                      <p className="text-muted-foreground">
                        Route your traffic through two different VPN servers for
                        an extra layer of security.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Server Network Map"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Ready to Connect?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get access to our global network of high-speed servers with
                Novix VPN.
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
