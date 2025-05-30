"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MainNav from "./main-nav";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";
import UserProfile from "./shared/UserProfile";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function HeaderCom() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileNavOpen]);

  // Get initials for avatar fallback
  const { user, token, logout } = useAuth();
  const getInitials = () => {
    return user?.username?.substring(0, 2).toUpperCase() || "U";
  };

  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 delay-100 ${
          isScrolled
            ? "bg-white md:container md:top-2 shadow md:rounded-full  mx-auto mt-2 border border-[#E2E2E4]"
            : "border-b bg-white"
        } `}
      >
        <div className="flex w-full max-w-7xl h-16 mx-auto items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/novix-logo.webp"
                alt="Novix VPN Logo"
                width={180}
                height={58}
                className="rounded-md"
                draggable="false"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <MainNav />
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Product dropdown */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-2 bg-white px-4 py-2 text-sm font-medium text-black"
                id="dropdown-products"
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Products
                {dropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {dropdownOpen && (
                <div
                  className="absolute left-0 top-12 z-50 mt-2 w-72 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-products"
                >
                  <Link href="/">
                    <div className="hover:bg-gray-100 p-2 rounded-md ">
                      <Image
                        src="/novix-logo.webp"
                        height={0}
                        width={150}
                        alt=""
                        className="-ml-[1.5rem]"
                      />
                      <div className="text-sm -mt-[1.2rem]">
                        Online Safety and Information Privacy
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            {!token && (
              <Link
                href="/login"
                className="flex items-center justify-between py-3 border-b border-gray-100"
                onClick={() => setMobileNavOpen(false)}
              >
                <span className="text-sm">Log In</span>
              </Link>
            )}
            {/* Get Novix Button */}
            <Link href="/download">
              <Button className="rounded-full">Get Novix VPN</Button>
            </Link>
            {/* user profile section */}
            {token && <UserProfile />}
          </div>
        </div>
      </header>

      {/* Mobile Nav Menu - 3/2 Screen Overlay */}
      {mobileNavOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 z-50 bg-black/50"
            onClick={() => setMobileNavOpen(false)}
          ></div>

          {/* Menu Panel - 75% height */}
          <div className="md:hidden fixed inset-x-0 top-0 h-[75vh] z-50 bg-white flex flex-col shadow-lg rounded-b-xl overflow-hidden">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between py-4 pr-4 border-b">
              <Link href="/" onClick={() => setMobileNavOpen(false)}>
                <Image
                  src="/novix-logo.webp"
                  alt="Novix VPN Logo"
                  width={150}
                  height={48}
                  className="rounded-md"
                  draggable="false"
                />
              </Link>
              <button className="p-2" onClick={() => setMobileNavOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Content - remain unchanged */}
            <div className="flex-1 flex flex-col px-4 py-3 space-y-1 overflow-y-auto">
              {/* Menu Items */}
              <div>
                {/* Pricing */}
                <Link
                  href="/pricing"
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">Pricing</span>
                </Link>

                {/* Features */}
                <Link
                  href="/features"
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">Features</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </Link>

                {/* Download VPN */}
                <Link
                  href="/download"
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">Download VPN</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </Link>

                {/* Learn */}
                {/* <Link 
                  href="/learn" 
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">Learn</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </Link> */}

                {/* For Business */}
                {/* <Link 
                  href="/business" 
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">For Business</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </Link> */}

                {/* Support Center */}
                <Link
                  href="/contact"
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">Contact</span>
                </Link>

                {/* Products */}
                <Link
                  href="/blogs"
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">Blogs</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </Link>
                <Link
                  href="/faq"
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">FAQ</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </Link>
              </div>
              {/* Log In */}
              {!token ? (
                <Link
                  href="/login"
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="text-lg font-medium">Log In</span>
                </Link>
              ) : (
                <button
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  onClick={() => {
                    logout();
                    setMobileNavOpen(false);
                  }}
                >
                  <span className="text-lg font-medium">Log Out</span>
                </button>
              )}
              {/* User Profile for mobile */}
              {token && (
                <div className="flex items-center justify-center gap-3 mt-4 py-2">
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user?.username}
                    </p>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="mt-4 pt-2 pb-4">
                <Link href="/download" onClick={() => setMobileNavOpen(false)}>
                  <Button className="w-full py-4 text-base font-semibold rounded-full bg-red-500 hover:bg-red-600">
                    Get Novix VPN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
