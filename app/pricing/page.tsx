import { Tabs, TabsContent } from "@/components/ui/tabs";
import PricingCards from "@/components/pricing-cards";
import PromoBanner from "@/components/shared/promo-banner";
import VPNPromoBanner from "@/components/vpn-promo-banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Promo banner */}
        <PromoBanner />

        {/* Pricing Section */}
        <section id="pricing" className="bg-muted/50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works for you
              </p>
            </div>
            <Tabs defaultValue="monthly" className="w-full max-w-full mx-auto">
              <TabsContent value="monthly">
                <PricingCards />
              </TabsContent>
            </Tabs>

            {/* Novix VPN Info Section */}
            <div className="mt-16 max-w-3xl mx-auto text-center space-y-6 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Take Back Control of Your Digital Life with Novix VPN
              </h3>
              <p className="text-muted-foreground text-lg md:text-xl">
                The internet should feel like home — not like someone’s watching
                through the window. That’s where Novix steps in. A VPN that puts
                your privacy first without slowing you down.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl">
                Whether you’re working from a café, streaming shows under the
                covers, or just scrolling through your day, Novix keeps your
                connection private, secure, and effortlessly fast.
              </p>
              <div className="text-left bg-white dark:bg-gray-900 shadow-sm rounded-xl p-6 md:p-8 space-y-4 border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold">
                  Why real people choose Novix:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-base md:text-lg">
                  <li>
                    <strong>Fast when it matters.</strong> No more endless
                    loading circles. Just quick, smooth browsing and streaming.
                  </li>
                  <li>
                    <strong>Simple to set up.</strong> Whether you're tech-savvy
                    or not, Novix works right out of the box on all your
                    devices.
                  </li>
                  <li>
                    <strong>Security that sticks.</strong> With built-in ad
                    blocking and a kill switch for emergencies, your data stays
                    yours.
                  </li>
                  <li>
                    <strong>Plans that don’t play games.</strong> You get
                    premium protection without the premium price tag.
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground text-lg md:text-xl">
                No drama. No digital clutter. Just the freedom to use the
                internet the way it was meant to be — safe, open, and yours.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl">
                Pick a plan above and get started in minutes. Novix is ready
                when you are.
              </p>
            </div>
          </div>
        </section>

        {/* VPN Promo Banner */}
        <VPNPromoBanner />
      </main>
    </div>
  );
}
