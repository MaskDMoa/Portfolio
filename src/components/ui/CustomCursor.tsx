"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export function CustomCursor() {
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']") || 
        target.closest("input") || 
        target.closest("select") || 
        target.closest("textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: cursorX,
        y: cursorY,
        // Offset specific to the SVG pointer tip
        translateX: isHovering ? "-12px" : "0px",
        translateY: isHovering ? "-12px" : "0px",
      }}
    >
      {!isHovering ? (
        /* Classic Aero Arrow SVG */
        <svg
          width="24"
          height="36"
          viewBox="0 0 24 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.5))" }}
        >
          <path
            d="M2.5 1.5L21.5 20.5H12.5L9.5 32.5L2.5 1.5Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        /* Precision Select Crosshair SVG */
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2V22M2 12H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
            style={{ filter: "drop-shadow(0px 0px 1px rgba(0,0,0,1))" }}
          />
        </svg>
      )}
    </motion.div>
  );
}
