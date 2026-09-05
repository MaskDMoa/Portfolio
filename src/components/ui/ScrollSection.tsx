"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variants?: Variants;
}

export function ScrollSection({ children, className, style, variants }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.3 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  if (isMobile) {
    return (
      <motion.section 
        ref={ref} 
        variants={variants} 
        className={className} 
        style={style}
        data-testid="scroll-section"
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section 
      ref={ref} 
      variants={variants} 
      className={className} 
      style={{ ...style, opacity, scale }}
      data-testid="scroll-section"
    >
      {children}
    </motion.section>
  );
}
