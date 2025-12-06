"use client";

import { CleaningTool } from "./types";

interface ToolSelectorProps {
  tools: CleaningTool[];
  selectedTool: CleaningTool | null;
  onSelectTool: (tool: CleaningTool) => void;
}

export function ToolSelector({
  tools,
  selectedTool,
  onSelectTool,
}: ToolSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-slate-700 mb-3">
        Välj städon
      </div>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => {
          const isSelected = selectedTool?.id === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => onSelectTool(tool)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? "bg-[#1E5F99] text-white border-[#1E5F99] shadow-lg scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:border-[#1E5F99]/50 hover:shadow-md"
              }`}
            >
              <span className="text-2xl">{tool.icon}</span>
              <span className="text-sm font-medium">{tool.name}</span>
            </button>
          );
        })}
      </div>
      {selectedTool && (
        <div className="mt-3 p-3 bg-[#E6F0FB] rounded-lg border border-[#1E5F99]/20">
          <p className="text-xs text-slate-600">
            <span className="font-medium text-[#1E5F99]">{selectedTool.name}</span> passar för:{" "}
            {selectedTool.suitableFor
              .map((type) => {
                const names: Record<string, string> = {
                  dust: "damm",
                  stain: "fläckar",
                  spiderweb: "spindelväv",
                  trash: "sopor",
                  smudge: "smuts",
                };
                return names[type] || type;
              })
              .join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

