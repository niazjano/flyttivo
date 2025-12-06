"use client";

import { useState } from "react";
import { Mess, CleaningTool } from "./types";

interface CleaningRoomProps {
  room: {
    id: number;
    name: string;
    description: string;
    messes: Mess[];
  };
  selectedTool: CleaningTool | null;
  onMessProgress: (messId: string) => void;
  messProgress: Map<string, number>; // messId -> progress (0-100)
  cleanedMesses: Set<string>;
}

export function CleaningRoom({
  room,
  selectedTool,
  onMessProgress,
  messProgress,
  cleanedMesses,
}: CleaningRoomProps) {
  const [hoveredMess, setHoveredMess] = useState<string | null>(null);

  const getMessIcon = (type: Mess["type"]) => {
    switch (type) {
      case "dust":
        return "💨";
      case "stain":
        return "💧";
      case "spiderweb":
        return "🕸️";
      case "trash":
        return "🗑️";
      case "smudge":
        return "👆";
      default:
        return "❓";
    }
  };

  const getMessSize = (size: number) => {
    switch (size) {
      case 1:
        return "w-8 h-8 text-lg";
      case 2:
        return "w-12 h-12 text-2xl";
      case 3:
        return "w-16 h-16 text-3xl";
      default:
        return "w-12 h-12 text-2xl";
    }
  };

  const canCleanMess = (mess: Mess): boolean => {
    if (!selectedTool) return false;
    return selectedTool.suitableFor.includes(mess.type);
  };

  const handleMessClick = (mess: Mess) => {
    if (cleanedMesses.has(mess.id)) return;
    if (canCleanMess(mess)) {
      onMessProgress(mess.id);
    }
  };

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 rounded-2xl border-2 border-slate-200 shadow-lg overflow-hidden">
      {/* Room background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-slate-300 rounded"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-slate-300 rounded"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-slate-300 rounded-full"></div>
      </div>

      {/* Messes */}
      {room.messes.map((mess) => {
        const isCleaned = cleanedMesses.has(mess.id);
        const canClean = canCleanMess(mess);
        const isHovered = hoveredMess === mess.id;
        const progress = messProgress.get(mess.id) ?? 0;
        const opacity = isCleaned ? 0 : 1 - progress / 100;

        return (
          <button
            key={mess.id}
            onClick={() => handleMessClick(mess)}
            onMouseEnter={() => setHoveredMess(mess.id)}
            onMouseLeave={() => setHoveredMess(null)}
            className={`absolute transition-all duration-200 ${
              isCleaned
                ? "opacity-0 scale-0 pointer-events-none"
                : canClean
                ? "cursor-pointer hover:scale-110"
                : "cursor-not-allowed opacity-60"
            } ${isHovered && canClean ? "scale-110 z-10" : ""}`}
            style={{
              left: `${mess.x}%`,
              top: `${mess.y}%`,
              transform: `translate(-50%, -50%) ${isHovered && canClean ? "scale(1.1)" : ""}`,
              opacity: opacity,
            }}
            disabled={isCleaned || !canClean}
            aria-label={`Städa ${mess.type}`}
          >
            <div
              className={`${getMessSize(mess.size)} rounded-full flex items-center justify-center transition-all relative ${
                canClean
                  ? "bg-white/90 shadow-lg border-2 border-slate-300 hover:border-[#1E5F99] hover:shadow-xl"
                  : "bg-slate-200/80 border-2 border-slate-300"
              }`}
            >
              <span className={canClean && progress < 100 ? "animate-pulse" : ""}>
                {getMessIcon(mess.type)}
              </span>
              {/* Progress indicator */}
              {progress > 0 && progress < 100 && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#22C55E] transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
              {/* Checkmark when complete */}
              {progress >= 100 && !isCleaned && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
              )}
            </div>
            {isHovered && canClean && !isCleaned && (
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#1E5F99] text-white text-xs px-2 py-1 rounded-full shadow-lg">
                {progress > 0 && progress < 100
                  ? `Städa (${Math.round(progress)}%)`
                  : "Klicka för att städa"}
              </div>
            )}
          </button>
        );
      })}

      {/* Cleaning animation overlay */}
      {room.messes
        .filter((m) => cleanedMesses.has(m.id))
        .map((mess) => (
          <div
            key={`cleaned-${mess.id}`}
            className="absolute pointer-events-none animate-[fadeOut_0.5s_ease-out]"
            style={{
              left: `${mess.x}%`,
              top: `${mess.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="text-4xl">✨</div>
          </div>
        ))}
    </div>
  );
}
