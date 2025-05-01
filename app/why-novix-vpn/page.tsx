import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Lock, Zap, Globe, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function WhyNovixVPN() {
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
                Why Choose Novix VPN?
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Secure, fast, and reliable VPN service that puts your privacy
                first.
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
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Military-Grade Encryption
                  </h3>
                  <p className="text-muted-foreground">
                    Novix VPN uses AES-256 encryption, the same standard used by
                    security experts worldwide to protect sensitive data.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Lightning-Fast Speeds
                  </h3>
                  <p className="text-muted-foreground">
                    Our optimized servers ensure you get the fastest possible
                    connection speeds without compromising security.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Global Server Network
                  </h3>
                  <p className="text-muted-foreground">
                    With servers in over 90 countries, you can access content
                    from anywhere in the world with just one click.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Strict No-Logs Policy
                  </h3>
                  <p className="text-muted-foreground">
                    We never track, collect, or share your browsing history,
                    ensuring your online activities remain private.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
                  <p className="text-muted-foreground">
                    Our intuitive apps make it simple to connect and protect
                    your devices with just one click, no technical knowledge
                    required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    30-Day Money-Back Guarantee
                  </h3>
                  <p className="text-muted-foreground">
                    Try Novix VPN risk-free with our 30-day money-back
                    guarantee. No questions asked.
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
                Novix VPN offers unique features that make us the preferred
                choice for millions of users worldwide.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Unmatched Security</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Advanced Encryption</h4>
                      <p className="text-muted-foreground">
                        AES-256 encryption keeps your data secure from hackers
                        and surveillance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Kill Switch</h4>
                      <p className="text-muted-foreground">
                        Automatically disconnects your internet if the VPN
                        connection drops, preventing data leaks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">DNS Leak Protection</h4>
                      <p className="text-muted-foreground">
                        Ensures your DNS requests are always routed through our
                        secure servers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Superior Performance
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Optimized Servers</h4>
                      <p className="text-muted-foreground">
                        Our servers are optimized for speed, ensuring minimal
                        impact on your connection.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Unlimited Bandwidth</h4>
                      <p className="text-muted-foreground">
                        Stream, download, and browse without restrictions or
                        throttling.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Multi-Platform Support</h4>
                      <p className="text-muted-foreground">
                        Protect all your devices with apps for Windows, Mac,
                        iOS, Android, and more.
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
