"use client";

import { useCallback } from "react";
import { useIsMobile } from "./useIsMobile";

export function useHapticFeedback() {
  const isMobile = useIsMobile();

  const vibrate = useCallback((pattern: number | number[] = 50) => {
    if (isMobile && typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(pattern);
    }
  }, [isMobile]);

  return vibrate;
}
