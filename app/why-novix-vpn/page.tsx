import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Lock, Zap, Globe, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function WhyNovixVPN() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Why Novix VPN?
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Security that’s silent. Speed that speaks for itself.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Novix VPN
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-primary shadow-md hover:scale-105 transition-all ease-in-out duration-500">
                <CardContent className="p-6">
                  <div className="w-full flex justify-center items-center">
                    <span className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center border border-primary">
                      <Shield className="h-6 w-6 text-primary" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Data Protection for Businesses
                  </h3>
                  <p className="text-muted-foreground">
                    The same strong standards that global organizations use to
                    protect your online activity and keep your data safe are
                    used by Novix.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-primary shadow-md hover:scale-105 transition-all ease-in-out duration-500">
                <CardContent className="p-6">
                  <div className="w-full flex justify-center items-center">
                    <span className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center border border-primary">
                      <Zap className="h-6 w-6 text-primary" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Performance Without Giving Up
                  </h3>
                  <p className="text-muted-foreground">
                    Our server architecture is built for business and optimized
                    for regular use, so you can always have quick connections.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-primary shadow-md hover:scale-105 transition-all ease-in-out duration-500">
                <CardContent className="p-6">
                  <div className="w-full flex justify-center items-center">
                    <span className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center border border-primary">
                      <Globe className="h-6 w-6 text-primary" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Infrastructure around the world, an advantage at home
                  </h3>
                  <p className="text-muted-foreground">
                    You can connect as if you were next door, no matter where
                    business or curiosity takes you, thanks to servers in more
                    than 90 countries.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-primary shadow-md hover:scale-105 transition-all ease-in-out duration-500">
                <CardContent className="p-6">
                  <div className="w-full flex justify-center items-center">
                    <span className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center  border border-primary">
                      <Lock className="h-6 w-6 text-primary" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    No Tracking. No Profiling. No Exceptions.
                  </h3>
                  <p className="text-muted-foreground">
                    Your privacy isn't a perk; it's the base of everything. We
                    don't keep track of, trace, or log your digital imprint.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-primary shadow-md hover:scale-105 transition-all ease-in-out duration-500">
                <CardContent className="p-6">
                  <div className="w-full flex justify-center items-center">
                    <span className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center  border border-primary">
                      <Check className="h-6 w-6 text-primary" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Smooth Onboarding</h3>
                  <p className="text-muted-foreground">
                    Novix connects with just one click, so you don't need to
                    know how to use technology or just get by.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-primary shadow-md hover:scale-105 transition-all ease-in-out duration-500">
                <CardContent className="p-6">
                  <div className="w-full flex justify-center items-center">
                    <span className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center border border-primary">
                      <Shield className="h-6 w-6 text-primary" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    30-Day Money-Back Guarantee
                  </h3>
                  <p className="text-muted-foreground">
                    Try Novix on your own terms. Not a good fit? You can get
                    your money back in full if you cancel within 30 days. No
                    problems, no fine print.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-muted-foreground">
                Novix VPN combines uncompromising security with peak performance
                — trusted by professionals, preferred by millions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Enterprise-Grade Security
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Military-Grade Encryption</h4>
                      <p className="text-muted-foreground">
                        AES-256 encryption makes your online activities safe
                        from hackers and other people who want to spy on you.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Automatic Kill Switch</h4>
                      <p className="text-muted-foreground">
                        We cut off your internet access right away if your VPN
                        connection drops to keep your data safe. No gaps, no
                        assumptions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">DNS Leak Prevention</h4>
                      <p className="text-muted-foreground">
                        Your DNS requests always go through Novix servers that
                        are safe, so no one can listen in on your traffic.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Seamless Performance
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Servers that are fast</h4>
                      <p className="text-muted-foreground">
                        Our infrastructure is built for speed, so no matter
                        where you connect from, you'll have a smooth experience
                        with low latency
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Unlimited Bandwidth:</h4>
                      <p className="text-muted-foreground">
                        You can stream, download, and browse without limits. No
                        limits, no slowing down, no giving in.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Trusted by Millions Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                Join the millions of users who trust Novix VPN to protect their
                online privacy and security.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow border border-border">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">
                  "Novix VPN has been a game-changer for me. The speed is
                  incredible and I can finally stream without buffering while
                  staying protected."
                </p>
                <div className="font-medium">Alex J., United States</div>
              </div>

              <div className="bg-background rounded-lg p-6 shadow border border-border">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">
                  "I travel frequently for work and Novix VPN keeps me safe on
                  public WiFi. The app is so easy to use - just one tap and I'm
                  protected!"
                </p>
                <div className="font-medium">Sarah C., Canada</div>
              </div>

              <div className="bg-background rounded-lg p-6 shadow border border-border">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">
                  "After trying several VPN services, I've finally found one
                  that doesn't slow down my connection. The customer support is
                  also excellent."
                </p>
                <div className="font-medium">Michael R., Spain</div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Try Novix VPN Risk-Free
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                30-day money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </section> */}
        {/* <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Trusted by Millions Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                Join the millions of users who trust Novix VPN to protect their
                online privacy and security.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow border border-border">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">
                  "Novix VPN has been a game-changer for me. The speed is
                  incredible and I can finally stream without buffering while
                  staying protected."
                </p>
                <div className="font-medium">Alex J., United States</div>
              </div>

              <div className="bg-background rounded-lg p-6 shadow border border-border">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">
                  "I travel frequently for work and Novix VPN keeps me safe on
                  public WiFi. The app is so easy to use - just one tap and I'm
                  protected!"
                </p>
                <div className="font-medium">Sarah C., Canada</div>
              </div>

              <div className="bg-background rounded-lg p-6 shadow border border-border">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">
                  "After trying several VPN services, I've finally found one
                  that doesn't slow down my connection. The customer support is
                  also excellent."
                </p>
                <div className="font-medium">Michael R., Spain</div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Try Novix VPN Risk-Free
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                30-day money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
