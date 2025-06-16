"use client";

import { useEffect, useState } from "react";
import CountdownTimer from "./countdown-timer-com";
import { usePathname } from "next/navigation";

export default function CountdownTimerClient() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const restrictedPaths = [
    "/login",
    "/register",
    "/forgot-password",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];

  useEffect(() => {
    if (pathname && restrictedPaths.includes(pathname)) {
      setVisible(false); // 👈 hide component when route is restricted
      return;
    }

    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [pathname]); // 👈 re-run on route change

  return (
    <div
      className={`fixed bottom-0 left-0 z-50 transition-transform duration-500 transform ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <CountdownTimer />
    </div>
  );
}
