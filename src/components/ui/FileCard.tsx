import React from "react";
import { Project } from "@/data/projects";
import { ProjectSymbol3D } from "./ProjectSymbol3D";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import { FaShareAlt } from "react-icons/fa";

interface FileCardProps {
  project: Project;
  index: number;
}

// Intentional variation in border-radius to avoid uniform AI-template look
const CARD_RADII = ["0px", "2px", "0px", "3px", "0px", "1px"];
const CARD_SHADOWS = [
  "4px 4px 0px rgba(0,0,0,0.85)",
  "3px 5px 0px rgba(0,0,0,0.8)",
  "5px 3px 0px rgba(0,0,0,0.85)",
  "3px 4px 0px rgba(0,0,0,0.75)",
  "4px 3px 0px rgba(0,0,0,0.8)",
  "5px 5px 0px rgba(0,0,0,0.85)",
];

export const FileCard: React.FC<FileCardProps> = ({ project, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const vibrate = useHapticFeedback();
  const radiusIdx = (index - 1) % CARD_RADII.length;

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    vibrate(30);
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.name,
          text: project.description,
          url: project.link,
        });
      } catch (err) {
        console.error("Erro ao compartilhar", err);
      }
    } else {
      navigator.clipboard.writeText(project.link);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div
      className="group flex flex-col overflow-hidden transition-all duration-300 relative h-full"
      style={{ 
        background: project.color,
        boxShadow: CARD_SHADOWS[radiusIdx],
        border: "2px solid #000",
        outline: "1px solid rgba(0,0,0,0.3)",
        outlineOffset: "-8px",
        borderRadius: CARD_RADII[radiusIdx],
      }}
      onMouseEnter={() => {
        vibrate(15);
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <ProjectSymbol3D symbol={project.symbol3d} hovered={hovered} />

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
        
        <div className="mt-4 flex pointer-events-auto gap-2">
            <a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={() => vibrate(30)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors active:translate-y-0.5 active:translate-x-0.5 active:shadow-none shadow-[2px_2px_0px_#000]"
            >
              ABRIR <span className="text-lg leading-none mt-[-2px]">↗</span>
            </a>
            
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center w-9 h-9 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors active:translate-y-0.5 active:translate-x-0.5 active:shadow-none shadow-[2px_2px_0px_#000]"
              aria-label="Compartilhar projeto"
            >
              <FaShareAlt size={14} />
            </button>
        </div>
      </div>
    </div>
  );
};