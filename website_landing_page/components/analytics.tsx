"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    if (navigator.doNotTrack === "1") {
      return;
    }

    navigator.sendBeacon?.(
      "/api/analytics",
      JSON.stringify({
        event: "page_view",
        path,
        timestamp: new Date().toISOString()
      })
    );
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsPageView />
    </Suspense>
  );
}
