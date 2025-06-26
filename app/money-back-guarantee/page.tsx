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
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                48-Hour Money-Back Guarantee
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Try NovixVPN without worrying about commitment. If you’re not
                happy, just cancel your subscription and ask for a refund within
                48 hours—directly through the Google Play Store.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Clock className="h-6 w-6" />
                <span className="text-xl font-bold">
                  No questions asked. No hidden terms.
                </span>
              </div>
              <Link href="https://play.google.com/store/apps/details?id=com.novix.mobile">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Try Novix VPN Risk-Free
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                How It Works
              </h2>

              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 mt-1">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Subscribe via Google Play
                    </h3>
                    <p className="text-muted-foreground">
                      Download NovixVPN, pick any plan, and get full access for
                      48 hours. You’ll have the chance to explore every premium
                      feature—fast speeds, strong security, and smooth streaming
                      on all your devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 mt-1">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Use Everything, No Limits
                    </h3>
                    <p className="text-muted-foreground">
                      This isn't a demo or a cut-down version. You’ll get full
                      access to all the features our long-term users enjoy,
                      including high-speed servers, strong encryption, and 24/7
                      support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 mt-1">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Don’t Love It? Cancel and Refund
                    </h3>
                    <p className="text-muted-foreground">
                      If NovixVPN doesn’t feel right for you, request a refund
                      through your Google Play account within 48 hours. No
                      awkward conversations. No forms. Just a simple goodbye.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 mt-1">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Important: Cancel Through Google Play
                    </h3>
                    <p className="text-muted-foreground">
                      Uninstalling the app won’t cancel your subscription. To
                      avoid being charged, make sure you cancel directly in your
                      Google Play settings.
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
                    How long do I have to request a refund?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">
                      You’ve got 48 hours from the time you purchase to request
                      a refund through Google Play.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I ask NovixVPN for the refund directly?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      No, refunds are handled by Google Play. We don’t have
                      control over their decisions or timing.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I cancel my subscription?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Head to your Google Play account, find your subscriptions,
                      and cancel NovixVPN from there.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What if I miss the 48-hour mark?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      After 48 hours, refunds aren’t available. Google doesn’t
                      offer partial refunds for unused days.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Are there any restrictions?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      No hidden rules. If it’s within 48 hours and you request
                      it through Google Play, you’ll get your money back.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Need a Hand?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our support team is here 24/7. Whether you're stuck,
                      confused, or just want to double-check something—we’ve got
                      you.
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
              {/* <div className="grid gap-6 md:grid-cols-2"> */}
              <div className="">
                {/* <Card>
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
                </Card> */}

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Email Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Shoot us a message. We respond within 24 hours, often much
                      faster.
                    </p>
                    <Button variant="outline" className="mt-auto">
                      <a
                        href="mailto:novixvpn@gmail.com"
                        className="text-primary "
                      >
                        Email Us
                      </a>
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
                Give It a Go, No Strings Attached
              </h2>
              <p className="text-xl mb-8">
                Join the many users who trust NovixVPN every day. You’ve got 48
                hours to test it, try it, and decide if it’s right for you. If
                not, no worries—you’ll get your money back.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="https://play.google.com/store/apps/details?id=com.novix.mobile">
                  Get Started Today
                </Link>
              </Button>
              <p className="mt-4">
                No pressure. No small print. Just good service.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
