"use client";

import { useState, useEffect } from "react";

export function useIsMobile() {
  // default to false (desktop-first) to avoid hydration mismatch affecting Playwright checks
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      // Use standard md breakpoint from tailwind (768px)
      const isNarrowScreen = window.innerWidth < 768;
      
      // It's mobile if it's a narrow screen (more reliable in headless tests)
      setIsMobile(isNarrowScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
