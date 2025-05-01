import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  Clock,
  Shield,
  CreditCard,
  HelpCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";

export default function MoneyBackGuarantee() {
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
                30-Day Money-Back Guarantee
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Try Novix VPN risk-free. If you're not completely satisfied,
                we'll give you a full refund.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Clock className="h-6 w-6" />
                <span className="text-xl font-bold">
                  No questions asked. No hidden terms.
                </span>
              </div>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Try Novix VPN Risk-Free
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                How Our Money-Back Guarantee Works
              </h2>

              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 mt-1">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Try Novix VPN for 30 Days
                    </h3>
                    <p className="text-muted-foreground">
                      Sign up for any Novix VPN plan and use all our premium
                      features for a full 30 days. Test our speed, security, and
                      streaming capabilities on all your devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 mt-1">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Enjoy Complete Protection
                    </h3>
                    <p className="text-muted-foreground">
                      During your trial period, you'll have full access to all
                      features, including our high-speed servers, military-grade
                      encryption, and 24/7 customer support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 mt-1">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Not Satisfied? No Problem
                    </h3>
                    <p className="text-muted-foreground">
                      If you're not completely satisfied with Novix VPN for any
                      reason, simply contact our customer support team within 30
                      days of your purchase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 mt-1">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Get a Full Refund
                    </h3>
                    <p className="text-muted-foreground">
                      We'll process your refund right away, no questions asked.
                      Your money will be back in your account within 5-10
                      business days, depending on your payment method.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How do I request a refund?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">
                      Requesting a refund is simple. You can:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Contact our 24/7 live chat support on our website</li>
                      <li>Email us at support@novixvpn.com</li>
                      <li>Submit a request through your account dashboard</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Our support team will process your refund request
                      immediately, no questions asked.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Are there any conditions to the money-back guarantee?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our money-back guarantee is truly no-questions-asked. The
                      only condition is that you request your refund within 30
                      days of your initial purchase. This applies to all
                      subscription plans, including monthly, yearly, and
                      multi-year plans.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How long does it take to get my refund?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We process all refund requests immediately. However, the
                      time it takes for the money to appear in your account
                      depends on your payment method:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                      <li>Credit/debit cards: 5-10 business days</li>
                      <li>PayPal: 1-3 business days</li>
                      <li>Cryptocurrency: 1-5 business days</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I get a refund if I purchased through the App Store or
                    Google Play?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      For purchases made through the App Store or Google Play,
                      refunds need to be requested directly through Apple or
                      Google, as they manage the payment processing. However,
                      our support team can guide you through the process if
                      needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    What happens to my data after I cancel?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We have a strict no-logs policy, so we don't store any
                      information about your online activities. When you cancel
                      your subscription, your account information is deleted
                      from our systems within 30 days, in accordance with our
                      privacy policy.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Can I try Novix VPN again after getting a refund?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, you're welcome to try Novix VPN again in the future.
                      However, please note that the money-back guarantee is
                      available once per customer. If you've previously received
                      a refund, subsequent subscriptions will not be eligible
                      for the 30-day money-back guarantee.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our customer support team is available 24/7 to help you with any
                questions or concerns.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Live Chat Support
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant help from our friendly support team, available
                      24/7.
                    </p>
                    <Button className="mt-auto">Chat Now</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Email Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Send us an email and we'll get back to you within 24
                      hours.
                    </p>
                    <Button variant="outline" className="mt-auto">
                      Email Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Ready to Try Novix VPN Risk-Free?
              </h2>
              <p className="text-xl mb-8">
                Join millions of satisfied users who trust Novix VPN for their
                online privacy and security.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Started Today
              </Button>
              <p className="mt-4">
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
