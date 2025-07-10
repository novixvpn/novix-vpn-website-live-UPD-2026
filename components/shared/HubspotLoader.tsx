"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function HubspotLoader() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  const excludedRoutes = [
    "/terms-of-service",
    "/privacy-policy",
    "/cookie-policy",
  ];

  useEffect(() => {
    const isExcluded = excludedRoutes.includes(pathname);

    // moving FROM an excluded page TO an included page
    if (excludedRoutes.includes(previousPath.current) && !isExcluded) {
      window.location.reload(); // force hard reload to reinit hubspot
    }

    previousPath.current = pathname;

    if (isExcluded) {
      // remove script + hubspot elements
      const hubspotScript = document.querySelector(
        'script[src*="hs-scripts.com"]'
      );
      if (hubspotScript) hubspotScript.remove();

      const hubspotIframe = document.querySelector("iframe[src*='hubspot']");
      if (hubspotIframe) hubspotIframe.remove();

      const hubspotDiv = document.getElementById(
        "hubspot-conversations-iframe"
      );
      if (hubspotDiv) hubspotDiv.remove();

      return;
    }

    // add hubspot if not excluded
    const existing = document.querySelector('script[src*="hs-scripts.com"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "//js-na2.hs-scripts.com/242560734.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [pathname]);

  return null;
}
