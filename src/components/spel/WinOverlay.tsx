"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

interface WinOverlayProps {
  onPlayAgain: () => void;
  onNextLevel: () => void;
  hasNextLevel: boolean;
  moves: number;
  levelNumber: number;
}

export function WinOverlay({
  onPlayAgain,
  onNextLevel,
  hasNextLevel,
  moves,
  levelNumber,
}: WinOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="mb-4 text-5xl animate-bounce">🎉</div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          Bra packat!
        </h2>
        <p className="text-slate-600 mb-2">
          Du fick in allt i Flyttivos kartong utan problem – precis som ett riktigt
          Flyttivo-team.
        </p>
        <div className="text-sm text-slate-500 mb-6">
          Nivå {levelNumber} klar med {moves} drag
        </div>
        <div className="flex flex-col gap-3">
          {hasNextLevel && (
            <Button variant="primary" onClick={onNextLevel}>
              Nästa nivå
            </Button>
          )}
          <Button variant="ghost" onClick={onPlayAgain}>
            {hasNextLevel ? "Spela om nivån" : "Spela igen"}
          </Button>
        </div>
      </div>
    </div>
  );
}
