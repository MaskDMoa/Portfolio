import React from "react";
import { Project } from "@/data/projects";

interface FileCardProps {
  project: Project;
  index: number;
}

export const FileCard: React.FC<FileCardProps> = ({ project, index }) => {
  return (
    <a 
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-sm transition-all duration-300 cursor-pointer"
      style={{ 
        background: project.color,
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      <div className="p-5 flex flex-col h-full gap-2 relative min-h-[180px]">
        <span 
          className="text-xs font-bold tracking-widest opacity-50 mb-1"
          style={{ color: "rgba(0,0,0,0.6)" }}
        >
          {index.toString().padStart(2, '0')}
        </span>

        <div className="flex flex-col gap-0.5 z-10 mt-auto">
          <small className="text-xs font-bold uppercase tracking-widest opacity-60" style={{ color: "rgba(0,0,0,0.7)" }}>
            {project.type}
          </small>
          <h3 className="text-xl font-black tracking-tight text-black/90">
            {project.name}
          </h3>
        </div>
        
        <p className="text-sm mt-1 z-10 text-black/60 leading-relaxed">
          {project.description}
        </p>
        
        <b className="mt-3 inline-block text-sm font-bold text-black/50 group-hover:text-black/80 transition-colors">
          ABRIR ↗
        </b>
      </div>
    </a>
  );
};
