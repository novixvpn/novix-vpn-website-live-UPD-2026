"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import posthog from "posthog-js";

export default function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                    href="/why-novix-vpn"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Why Novix VPN?
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Discover what makes Novix VPN the best choice for your
                      online privacy and security.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <Link
                  href="/what-is-vpn"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    What is a VPN?
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Learn how VPNs protect your online privacy and security.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/no-user-tracking"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    No User Tracking
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Our strict no-logs policy ensures your online activities
                    remain private.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li>
                <Link
                  href="/features"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    All Features
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Explore all the powerful features of Novix VPN.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/high-speed-vpn"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    High-Speed VPN
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Experience lightning-fast speeds without compromising
                    security.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/vpn-servers"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    VPN Servers
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Our global network of high-speed servers in 90+ countries.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/money-back-guarantee"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    Money-Back Guarantee
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Try Novix VPN risk-free with our 30-day money-back
                    guarantee.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#pricing" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#download" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
              onClick={() =>
                posthog.capture("clicked get novix", { location: "header" })
              }
            >
              Download
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
