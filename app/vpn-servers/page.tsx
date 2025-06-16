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
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
                Network of Global VPN Servers
              </h1>
              <p className="text-sm mb-8">
                Very rapid speeds. Browsing without borders. Security at the
                bank level.
              </p>
              <p className="text-sm mb-8">
                Our VPN network covers four continents and has top-of-the-line
                infrastructure that does more than just speed. You can always
                have smart, safe, and easy access to the internet. We have your
                back whether you're watching your favourite shows, keeping your
                data safe, or avoiding censorship.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span className="text-lg font-bold">
                    Servers available worldwide for unrestricted global access.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-6 text-center">
                Server Locations That Are Good for Business and Fun
              </h2>
            </div>

            <div className="space-y-12">
              {/* Asia and the Pacific */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Asia and the Pacific
                </h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/ID/flat/64.png"
                            alt="Indonesia Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Jakarta, Indonesia
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            The best way to get to Southeast Asia.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        All in one: smooth streaming and powerful local access.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/JP/flat/64.png"
                            alt="Japan Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Tokyo, Japan</h3>
                          <p className="text-sm text-muted-foreground">
                            Use Japan's world-class internet backbone.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Great for gaming, broadcasting, and staying one step
                        ahead.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/AU/flat/64.png"
                            alt="Australia Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Sydney, Australia
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Fast connectivity across the Pacific.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Complete access to regional content around the Pacific.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/HK/flat/64.png"
                            alt="Hong Kong Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Hong Kong, China
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Major digital link to continental Asia.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">No limits. No compromises.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/SG/flat/64.png"
                            alt="Singapore Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Singapore (2 Servers)
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            IT capital of the region.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Amazing speeds and connections that never break.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/IN/flat/64.png"
                            alt="India Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Delhi, India</h3>
                          <p className="text-sm text-muted-foreground">
                            Connect to India's digital realm.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Routes optimized for speed and stability.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* The Americas */}
              <div>
                <h3 className="text-2xl font-bold mb-6">The Americas</h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/BR/flat/64.png"
                            alt="Brazil Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            São Paulo, Brazil
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Digital engine room of South America.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Quick, safe, and ready for use throughout Latin America.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/CA/flat/64.png"
                            alt="Canada Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Toronto, Canada</h3>
                          <p className="text-sm text-muted-foreground">
                            Unrestricted high-speed route.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Access one of North America's best IT clusters.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/US/flat/64.png"
                            alt="USA Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Iowa, USA</h3>
                          <p className="text-sm text-muted-foreground">
                            Central US for even coverage.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Great for gaming, streaming, and more.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/US/flat/64.png"
                            alt="USA Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Los Angeles, USA (2 Servers)
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            West Coast connectivity.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Greater load handling and constant content access.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Europe and the Middle East */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Europe and the Middle East
                </h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/DE/flat/64.png"
                            alt="Germany Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Berlin, Germany</h3>
                          <p className="text-sm text-muted-foreground">
                            EU's IT capital with privacy-first connections.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">Fast, safe, and dependable.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/GB/flat/64.png"
                            alt="UK Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">London, England</h3>
                          <p className="text-sm text-muted-foreground">
                            Fastest way to British content.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">Easy access throughout Europe.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/FR/flat/64.png"
                            alt="France Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Paris, France</h3>
                          <p className="text-sm text-muted-foreground">
                            Centre of Europe connectivity.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Quick and easy access to French and EU material.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="overflow-hidden w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="https://flagsapi.com/QA/flat/64.png"
                            alt="Qatar Flag"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Doha, Qatar (2 Servers)
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Key point in the Middle East.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Fast in the region and connects to the rest of the
                        world.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-primary hover:bg-primary/90">
                <Link href="/download">Get Novix VPN</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Why Our Global Network Works Smarter
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Peak Performance</h4>
                      <p className="text-sm text-muted-foreground">
                        We carefully choose each server location to make sure
                        that speeds are fast, latency is minimal, and uptime is
                        high.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">More Reach</h4>
                      <p className="text-sm text-muted-foreground">
                        You can always connect to a server nearby because there
                        are 14 of them on four continents.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Privacy Comes Standard</h4>
                      <p className="text-sm text-muted-foreground">
                        Choose servers in places where the regulations of data
                        protection are strong to keep your information
                        protected.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Access to Content Around the World
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Get around restrictions and get to the stuff you desire,
                        no matter where it is.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Redundancy Built In</h4>
                      <p className="text-sm text-muted-foreground">
                        In busy places like Los Angeles, multiple servers keep
                        your connection consistent, even when demand goes up.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Just One Click. Four Continents. Full Access.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our VPN gives you the connectivity you need and the protection
                you need, no matter where you are or what you're trying to do.
              </p>

              <Button
                size="lg"
                variant="outline"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="/download">Get Started Today</Link>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                48-hours money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
