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
    <div className={`flex flex-col overflow-hidden rounded-sm ${className}`}
      style={{ 
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)"
      }}>
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
          <span className="w-3 h-3 rounded-full bg-black/20" />
          <span className="w-3 h-3 rounded-full bg-black/20" />
          <span className="w-3 h-3 rounded-full bg-black/20" />
        </div>
      </header>
      
      {/* Window Content */}
      <div className="p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};
