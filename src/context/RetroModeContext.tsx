"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type RetroModeContextType = {
  isRetroOn: boolean;
  toggleRetro: () => void;
};

const RetroModeContext = createContext<RetroModeContextType | undefined>(undefined);

export function RetroModeProvider({ children }: { children: ReactNode }) {
  const [isRetroOn, setIsRetroOn] = useState(false);

  const toggleRetro = () => setIsRetroOn((prev) => !prev);

  return (
    <RetroModeContext.Provider value={{ isRetroOn, toggleRetro }}>
      {children}
    </RetroModeContext.Provider>
  );
}

export function useRetroMode() {
  const context = useContext(RetroModeContext);
  if (!context) {
    throw new Error("useRetroMode deve ser usado dentro de um RetroModeProvider");
  }
  return context;
}