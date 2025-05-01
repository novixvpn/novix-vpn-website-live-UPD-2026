"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MainNav from "./main-nav"; // Assuming MainNav component exists

export default function HeaderCom() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b  ${
        isScrolled
          ? "w-full lg:max-w-[1440px] mx-auto px-10 md:mt-5 top-0 lg:top-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 lg:rounded-full "
          : ""
      }`}
    >
      <div
        className={`flex h-16 items-center justify-between py-4 transition-all duration-300 ${
          isScrolled ? "container-compact mx-auto" : "container"
        }`}
      >
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
        <nav className="hidden md:flex items-center gap-6">
          <MainNav />
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline hidden md:block"
          >
            Log in
          </Link>
          <Button>Get Novix VPN</Button>
        </div>
      </div>
    </header>
  );
}
