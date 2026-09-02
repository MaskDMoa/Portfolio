import React from "react";
import { Project } from "@/data/projects";
import { ProjectSymbol3D } from "./ProjectSymbol3D";

interface FileCardProps {
  project: Project;
  index: number;
}

export const FileCard: React.FC<FileCardProps> = ({ project, index }) => {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-sm transition-all duration-300 relative h-full bg-[var(--surface)]"
      style={{ 
        background: project.color,
        boxShadow: "4px 4px 0px rgba(0,0,0,0.9)",
        border: "2px solid #000"
      }}
    >
      {/* 3D Background Symbol */}
      <ProjectSymbol3D symbol={project.symbol3d} />

      <div className="p-5 flex flex-col h-full gap-2 relative z-10 min-h-[220px] pointer-events-none">
        <span 
          className="text-xs font-bold tracking-widest opacity-50 mb-1"
          style={{ color: "rgba(0,0,0,0.8)" }}
        >
          {index.toString().padStart(2, '0')}
        </span>

        <div className="flex flex-col gap-0.5 mt-auto">
          <small className="text-xs font-bold uppercase tracking-widest opacity-70" style={{ color: "rgba(0,0,0,0.9)" }}>
            {project.type}
          </small>
          <h3 className="text-xl font-black tracking-tight text-black drop-shadow-md">
            {project.name}
          </h3>
        </div>
        
        <p className="text-sm mt-1 text-black/80 font-medium leading-relaxed drop-shadow-sm">
          {project.description}
        </p>
        
        {/* Enbelezado botão */}
        <div className="mt-4 flex pointer-events-auto">
            <a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors active:translate-y-0.5 active:translate-x-0.5 active:shadow-none shadow-[2px_2px_0px_#000]"
            >
              ABRIR <span className="text-lg leading-none mt-[-2px]">↗</span>
            </a>
        </div>
      </div>
    </div>
  );
};
