import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Eye,
  Lock,
  Shield,
  Check,
  FileText,
  Server,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function NoUserTracking() {
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
                No User Tracking
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Your privacy is our priority. We never track, log, or share your
                online activities.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Eye className="h-6 w-6" />
                <span className="text-xl font-bold">
                  Zero logs. Zero tracking. Zero compromises.
                </span>
              </div>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Browse Privately Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Our Strict No-Logs Policy
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Novix VPN, we take your privacy seriously. Unlike many VPN
                  providers who claim "no logs" but still collect some data, we
                  truly don't track or store any information about your online
                  activities.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our strict no-logs policy means we don't monitor, record, or
                  store:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Your browsing history</h4>
                      <p className="text-muted-foreground">
                        We never track which websites you visit or what you do
                        online.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Your IP address</h4>
                      <p className="text-muted-foreground">
                        We don't store your real IP address or the IP addresses
                        you connect to.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Your connection timestamps
                      </h4>
                      <p className="text-muted-foreground">
                        We don't record when you connect or disconnect from our
                        service.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Your bandwidth usage</h4>
                      <p className="text-muted-foreground">
                        We don't monitor how much data you use through our VPN.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="No User Tracking"
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
                Why No-Logs VPN Matters
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding the importance of a true no-logs VPN service.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Protection from Surveillance
                  </h3>
                  <p className="text-muted-foreground">
                    Without logs, there's no data for governments, ISPs, or
                    other entities to request or subpoena about your online
                    activities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">True Anonymity</h3>
                  <p className="text-muted-foreground">
                    A no-logs policy ensures your online identity remains
                    completely anonymous, even from the VPN provider itself.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Data Breach Protection
                  </h3>
                  <p className="text-muted-foreground">
                    If there are no logs stored, there's no sensitive data that
                    could be exposed in the event of a security breach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Independent Audit"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Independently Audited
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We don't just claim to have a no-logs policy – we prove it.
                  Novix VPN has undergone rigorous independent security audits
                  to verify our no-logs claims.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Transparent Audit Reports</h4>
                      <p className="text-muted-foreground">
                        Our audit reports are publicly available, demonstrating
                        our commitment to transparency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Server className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">RAM-Only Servers</h4>
                      <p className="text-muted-foreground">
                        Our servers run on RAM only, ensuring all data is wiped
                        with every reboot.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Regular Security Assessments
                      </h4>
                      <p className="text-muted-foreground">
                        We conduct regular security assessments to ensure our
                        no-logs policy is properly implemented.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                What We Do Collect
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Complete transparency about the minimal information we need to
                provide our service.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Account Information
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We collect basic account information needed to provide our
                    service:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Email address (for account management and communication)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Payment information (processed securely by our payment
                        providers)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Anonymous Usage Statistics
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We collect some anonymous, aggregated statistics to maintain
                    service quality:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Server load information (to optimize server performance)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Aggregate connection success rates (not linked to
                        individual users)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center text-muted-foreground">
              <p>
                <strong>Important:</strong> None of this information can be used
                to identify or track your online activities. We never collect or
                store IP addresses, browsing history, or any data about what you
                do online.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Browse Truly Anonymously
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the internet with complete privacy and freedom.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Novix VPN
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
