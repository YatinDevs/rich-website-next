"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Wait for GTM to fully load
    const trackPageView = () => {
      if (!window.dataLayer) {
        console.warn("GTM dataLayer not available");
        return;
      }

      const url =
        pathname + (searchParams.toString() ? `?${searchParams}` : "");

      window.dataLayer.push({
        event: "page_view",
        page_title: document.title,
        page_location: window.location.href,
        page_path: url,
      });

      console.log("Tracked:", url);
    };

    // Initial tracking
    trackPageView();

    // Create manual route change handler
    const handleRouteChange = () => {
      setTimeout(trackPageView, 100); // Small delay to ensure new page is loaded
    };

    // Listen to Next.js route changes
    window.addEventListener("routeChangeComplete", handleRouteChange);

    return () => {
      window.removeEventListener("routeChangeComplete", handleRouteChange);
    };
  }, [pathname, searchParams]);

  return null;
}
