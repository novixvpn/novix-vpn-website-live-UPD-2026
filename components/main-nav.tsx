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

export default function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/why-novix-vpn"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 text-white hover:scale-105 transition-all ease-in-out duration-100"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Why Novix VPN?
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Discover what makes Novix VPN the best choice for your
                      online privacy and security.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-accent p-2 hover:scale-105 transition-all ease-in-out duration-100 rounded">
                <Link href="/what-is-vpn" className="nav-link">
                  <div className="text-sm font-medium">What is a VPN?</div>
                  <p className="text-sm text-muted-foreground">
                    Learn how VPNs protect your online privacy and security.
                  </p>
                </Link>
              </li>
              <li className="hover:bg-accent p-2 hover:scale-105 transition-all ease-in-out duration-100 rounded">
                <Link href="/no-user-tracking" className="nav-link">
                  <div className="text-sm font-medium">No User Tracking</div>
                  <p className="text-sm text-muted-foreground">
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
          <NavigationMenuContent className="bg-popover">
            <ul className="grid gap-3 p-4 md:grid-cols-2 md:w-[500px] lg:w-[600px]">
              <li className="hover:bg-accent p-2 hover:scale-105 transition-all ease-in-out duration-100 rounded">
                <Link href="/features" className="nav-link">
                  <div className="text-sm font-medium">All Features</div>
                  <p className="text-sm text-muted-foreground">
                    Explore all the powerful features of Novix VPN.
                  </p>
                </Link>
              </li>
              <li className="hover:bg-accent p-2 hover:scale-105 transition-all ease-in-out duration-100 rounded">
                <Link href="/high-speed-vpn" className="nav-link">
                  <div className="text-sm font-medium">High-Speed VPN</div>
                  <p className="text-sm text-muted-foreground">
                    Experience lightning-fast speeds without compromising
                    security.
                  </p>
                </Link>
              </li>
              <li className="hover:bg-accent p-2 hover:scale-105 transition-all ease-in-out duration-100 rounded">
                <Link href="/vpn-servers" className="nav-link">
                  <div className="text-sm font-medium">VPN Servers</div>
                  <p className="text-sm text-muted-foreground">
                    Servers available worldwide for unrestricted global access.
                  </p>
                </Link>
              </li>
              <li className="hover:bg-accent p-2 hover:scale-105 transition-all ease-in-out duration-100 rounded">
                <Link href="/money-back-guarantee" className="nav-link">
                  <div className="text-sm font-medium">
                    Money-Back Guarantee
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Try Novix VPN risk-free with our 48 hours money-back
                    guarantee.
                  </p>
                </Link>
              </li>
              <li className="hover:bg-accent p-2 hover:scale-105 transition-all ease-in-out duration-100 rounded">
                <Link href="/how-to-delete-account" className="nav-link">
                  <div className="text-sm font-medium">
                    How To Delete My Novix Vpn Account
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Follow these steps to delete your Novix VPN account.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/download" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
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
        <NavigationMenuItem>
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              FAQ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
