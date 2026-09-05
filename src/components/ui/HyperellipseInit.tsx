"use client";

import { useEffect } from "react";
import { registerHyperellipse } from "hyperellipse";

export function HyperellipseInit() {
  useEffect(() => {
    const controller = registerHyperellipse();
    
    return () => {
      // Optional: controller.destroy() se quisermos limpar, mas para layout global não precisa.
    };
  }, []);

  return null;
}
