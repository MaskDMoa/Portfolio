"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function Taskbar() {
    const [time, setTime] = useState(new Date());
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <aside
            className="
        fixed z-50
        left-0 top-0 bottom-0
        w-14
        flex flex-col items-center
        justify-between
        py-4
        border-r
        bg-[var(--surface)]
        border-[var(--border)]
        
        max-sm:left-0
        max-sm:right-0
        max-sm:top-auto
        max-sm:bottom-0
        max-sm:w-full
        max-sm:h-14
        max-sm:flex-row
        max-sm:px-4
        max-sm:py-0
      "
        >
            <div
                className="
          flex flex-col items-center gap-4
          max-sm:flex-row
        "
            >
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    className="text-[var(--foreground)] hover:opacity-60 transition-opacity p-2 flex items-center justify-center"
                >
                    {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
            </div>

            <time
                suppressHydrationWarning
                className="
          text-[10px]
          font-bold
          tracking-widest
          text-[var(--foreground)]
          [writing-mode:vertical-rl]
          
          max-sm:[writing-mode:horizontal-tb]
        "
            >
                {formattedTime}
            </time>
        </aside>
    );
}