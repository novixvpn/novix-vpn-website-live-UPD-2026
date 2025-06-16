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

// Metadata for the page
export const metadata = {
  title: "Novix VPN: No Logs, No Tracking, Maximum Privacy Protection",
  description:
    "Experience complete privacy with Novix VPN. No logs, no user tracking, secure SSL/TLS encryption, and advanced WireGuard protocol for ultimate protection.",
};

export default function NoUserTracking() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                No User Tracking Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                At Novix VPN, we prioritize your privacy and security above all
                else
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Eye className="h-6 w-6" />
                <span className="text-xl font-bold">
                  Nothing Tracked. Nothing Stored. Nothing Shared.
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
                  Your Privacy is Non-Negotiable
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We don't monitor your browsing, connection time, or travel
                  location. Just genuine, uncompromised privacy; no logs, no
                  records, no fine print.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We don't watch, record, or remember a thing. What you do is
                  yours; always.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Your Browsing History</h4>
                      <p className="text-muted-foreground">
                        We don't track the websites you visit or your online
                        activities, ensuring your privacy remains intact.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium"> Your IP Address</h4>
                      <p className="text-muted-foreground">
                        Your real IP address is never stored or tracked,
                        protecting your anonymity every step of the way.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Your Connection Timestamps
                      </h4>
                      <p className="text-muted-foreground">
                        We don't record when you connect or disconnect,
                        guaranteeing your browsing habits stay private.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Your Bandwidth Usage</h4>
                      <p className="text-muted-foreground">
                        We don't monitor or store your data usage, so you can
                        browse without concern for how much data you're
                        consuming.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/Your-Privacy-is-Non-Negotiable.webp"
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
                Why Choosing a No-Logs VPN Is a Non-Negotiable
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding Why Only a True No-Logs VPN Can Safeguard Your
                Privacy
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Invisible to Watchful Eyes
                  </h3>
                  <p className="text-muted-foreground">
                    When your VPN keeps no logs, there's nothing to expose, no
                    records to trace, no activity to reveal. Governments, ISPs,
                    or anyone else can knock, but there's simply nothing to
                    give. Your privacy stays yours untouchable and unseen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Anonymity That Leaves No Shadow
                  </h3>
                  <p className="text-muted-foreground">
                    A true no-logs VPN doesn't just protect your data, it erases
                    the very idea that you were ever there. No names, no
                    timestamps, no trace. Not even the VPN knows who you are,
                    and that's exactly how it should be.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No Logs, No Leaks</h3>
                  <p className="text-muted-foreground">
                    In a world where breaches are inevitable, a no-logs policy
                    means there's nothing to steal. No stored data means hackers
                    walk away empty-handed, because your information was never
                    there to begin with.
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
                  src="/No-User-Tracking-No-Logs.webp"
                  alt="Independent Audit"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  No User Tracking, No Logs
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your online activities are not tracked or monitored because of
                  our no-tracking policy. Your privacy is protected, and you
                  have complete anonymity.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Secure Connection via SSL and TLS
                      </h4>
                      <p className="text-muted-foreground">
                        No third party can intercept your personal information
                        or data because of our VPN using SSL, TLS protocols.
                        These high-security measures ensure your data is
                        confidential and unreadable.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Server className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">WireGuard Protocol</h4>
                      <p className="text-muted-foreground">
                        The very modern VPN protocol, WireGuard, enables you to
                        enjoy high connection speeds without sacrificing your
                        privacy. Since WireGuard is programmed to limit the data
                        that can be stored, the chances of your activity being
                        traced or recorded back to you are less than zero.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      Protection Against OSWAP Vulnerabilities
                      <h4 className="font-medium"></h4>
                      <p className="text-muted-foreground">
                        These risk management measures safeguard your
                        information from being exposed or hacked. Your
                        information cannot be taken advantage of giving active
                        security to your online activity from being exposed to
                        vulnerabilities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Regular Security Assessments
                      </h4>
                      <p className="text-muted-foreground">
                        We perform regular security assessments to identify and
                        resolve potential vulnerabilities, ensuring our privacy
                        and security measures are always up-to-date and
                        effective.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Minimal Information Collection
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We only collect information that's strictly necessary for your
                account to function
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Basic Account Information
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    To give you the best possible service, we only collect
                    minimum information necessary for your experience:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Email address: Only used for account management and
                        informing you about important news.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Payment details: Processed securely by trusted partners,
                        so you can have an uninterrupted, secure transaction
                        experience without worry.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Anonymous Usage Insights
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We gather anonymized a data to enhance your experience while
                    preserving your privacy:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Server load data: Enables us to optimize performance and
                        offer seamless connections, so you always receive a fast
                        and stable service
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Connection success rates: Provides us with valuable
                        insights into overall service quality, so we can
                        continually get better, but never monitor individual
                        users.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center text-muted-foreground">
              <p>
                Don't worry, everything we gather is unable to be used to trace
                or identify your online activity. We never log IP addresses,
                browser history, or any information about what you do online.
                Your privacy is never compromised, ever
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
              <Link href={"/download"} className="nav-link">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Novix VPN
                </Button>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                48-hours money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
