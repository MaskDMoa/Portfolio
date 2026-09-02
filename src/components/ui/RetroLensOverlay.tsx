"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRetroMode } from "@/context/RetroModeContext";

export function RetroLensOverlay() {
  const { isRetroOn } = useRetroMode();

  return (
    <AnimatePresence>
      {isRetroOn && (
        <motion.div
          key="retro-lens"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 pointer-events-none z-[9999]"
        >
          {/* Flash de "ligar" a TV */}
          <motion.div
            initial={{ opacity: 1, scaleY: 0.02 }}
            animate={{ opacity: 0, scaleY: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 bg-white"
          />

          {/* Scanlines por cima do site inteiro */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 1px, transparent 1px, transparent 3px)",
              mixBlendMode: "multiply",
            }}
          />

          {/* Vinheta */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
            }}
          />

          {/* Tint fósforo esverdeado */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(80, 255, 130, 0.05)", mixBlendMode: "overlay" }}
          />

          {/* Flicker sutil contínuo */}
          <motion.div
            className="absolute inset-0 bg-white"
            animate={{ opacity: [0, 0.03, 0, 0.02, 0] }}
            transition={{ duration: 0.25, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}