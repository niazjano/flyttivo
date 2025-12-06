"use client";

interface GameHudProps {
  currentLevel: number;
  totalLevels: number;
  moves: number;
  filledPercentage: number;
  isMuted: boolean;
  onToggleMute: () => void;
}

export function GameHud({
  currentLevel,
  totalLevels,
  moves,
  filledPercentage,
  isMuted,
  onToggleMute,
}: GameHudProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-full border border-slate-200 px-4 py-2 shadow-sm">
      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
        <div>
          <span className="font-medium text-slate-700">Nivå:</span> {currentLevel + 1} av {totalLevels}
        </div>
        <div>
          <span className="font-medium text-slate-700">Drag:</span> {moves}
        </div>
        <div>
          <span className="font-medium text-slate-700">Packat:</span> {filledPercentage}%
        </div>
      </div>
      <button
        onClick={onToggleMute}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        aria-label={isMuted ? "Aktivera ljud" : "Stäng av ljud"}
        title={isMuted ? "Aktivera ljud" : "Stäng av ljud"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}

