import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Zap,
  Globe,
  Check,
  Server,
  Download,
  Wifi,
  Gauge,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function HighSpeedVPN() {
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
                Lightning-Fast VPN
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Experience the internet at full speed with our high-performance
                VPN network.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Try Our High-Speed VPN
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Speed Without Compromise
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Most VPNs slow down your internet connection due to encryption
                  overhead and server distance. Novix VPN is different.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We've built our network from the ground up with speed in mind,
                  using the latest technologies and optimizations to ensure you
                  get the fastest possible connection without sacrificing
                  security.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Gauge className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">
                    Up to 10 Gbps Servers
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  Stream in 4K, download large files, play online games, and
                  video chat without lag or buffering. Our high-speed VPN keeps
                  you connected at peak performance.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="High-Speed VPN"
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
                What Makes Our VPN So Fast?
              </h2>
              <p className="text-xl text-muted-foreground">
                The technology behind our lightning-fast speeds.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    High-Capacity Servers
                  </h3>
                  <p className="text-muted-foreground">
                    Our network consists of high-capacity 10 Gbps servers that
                    can handle massive amounts of traffic without slowing down.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Optimized Protocol</h3>
                  <p className="text-muted-foreground">
                    We use our proprietary NovixLynx protocol, designed
                    specifically for high-speed connections while maintaining
                    security.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Strategic Server Locations
                  </h3>
                  <p className="text-muted-foreground">
                    Our servers are strategically placed at internet exchange
                    points around the world to minimize latency.
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
                Perfect for High-Bandwidth Activities
              </h2>
              <p className="text-xl text-muted-foreground">
                Our high-speed VPN is optimized for all your online needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">4K Streaming</h3>
                  <p className="text-muted-foreground">
                    Stream your favorite content in ultra-high definition
                    without buffering or quality drops. Our VPN is optimized for
                    Netflix, Disney+, HBO Max, and other streaming platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Online Gaming</h3>
                  <p className="text-muted-foreground">
                    Enjoy low-ping gaming with our optimized gaming servers. Our
                    VPN minimizes latency and packet loss, giving you a
                    competitive edge in online games.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Downloads</h3>
                  <p className="text-muted-foreground">
                    Download large files at maximum speed. Our P2P-optimized
                    servers ensure fast and secure file transfers without
                    throttling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Wifi className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Video Conferencing</h3>
                  <p className="text-muted-foreground">
                    Stay connected with crystal-clear video calls. Our VPN
                    ensures stable connections for Zoom, Teams, and other video
                    conferencing platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Speed Test"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Speed Test Results</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Don't just take our word for it. Independent speed tests
                  consistently rank Novix VPN among the fastest VPN services
                  available.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Average Download Speed: 850 Mbps
                      </h4>
                      <p className="text-muted-foreground">
                        On a 1 Gbps connection, our VPN maintains up to 85% of
                        your base speed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Low Latency: 5-20ms</h4>
                      <p className="text-muted-foreground">
                        Our optimized network keeps ping times low for
                        responsive browsing and gaming.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Consistent Performance</h4>
                      <p className="text-muted-foreground">
                        Our speeds remain stable even during peak hours,
                        ensuring reliable performance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Experience the Speed Difference
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Try Novix VPN risk-free with our 30-day money-back guarantee.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Novix VPN Now
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                No speed caps. No bandwidth limits. No compromises.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
