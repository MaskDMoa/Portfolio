import React from "react";

interface WindowFrameProps {
  title: string;
  children: React.ReactNode;
  accentColor?: string;
  className?: string;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ 
  title, 
  children, 
  accentColor = "#c9a84c",
  className = ""
}) => {
  return (
    <div 
      className={`flex flex-col overflow-hidden ${className}`}
      data-testid="window-frame"
      style={{ 
        background: "var(--surface)",
        border: "1px solid var(--border-strong)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
        borderRadius: "calc(16px * var(--corner-scale, 1))",
        "--corner-shape": "superellipse(3)",
        cornerShape: "superellipse(3)",
      } as React.CSSProperties}>
      {/* Window Header */}
      <header 
        className="flex items-center justify-between px-5 py-3"
        style={{ 
          borderBottom: "1px solid var(--border)",
          background: accentColor,
        }}
      >
        <span className="text-sm font-bold uppercase tracking-widest text-black/80">{title}</span>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 bg-black/25" />
          <span className="w-2.5 h-2.5 bg-black/15" />
          <span className="w-2.5 h-2.5 bg-black/25" />
        </div>
      </header>
      
      {/* Window Content */}
      <div className="p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};
