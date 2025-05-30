"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PixelTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!(window as any).fbq) return;
    (window as any).fbq("track", "PageView");
  }, [pathname]);

  return null;
}
