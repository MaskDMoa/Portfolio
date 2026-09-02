"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRetroMode } from "@/context/RetroModeContext";

export function RetroComputer() {
  const { isRetroOn, toggleRetro } = useRetroMode();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ perspective: 900 }} className="select-none">
      <motion.div
        onClick={toggleRetro}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
              <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="2" fill="black" opacity="0.5" />
            </pattern>
            <clipPath id="screenClip">
              <rect x="36" y="30" width="108" height="74" rx="3" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}