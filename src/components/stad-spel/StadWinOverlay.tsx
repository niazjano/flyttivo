"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

interface StadWinOverlayProps {
  onPlayAgain: () => void;
  onNextRoom: () => void;
  hasNextRoom: boolean;
  score: number;
  roomNumber: number;
  roomName: string;
  timeElapsed: number;
  mistakes: number;
  stars: 1 | 2 | 3;
}

export function StadWinOverlay({
  onPlayAgain,
  onNextRoom,
  hasNextRoom,
  score,
  roomNumber,
  roomName,
  timeElapsed,
  mistakes,
  stars,
}: StadWinOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const minutes = Math.floor(timeElapsed / 60);
  const seconds = Math.floor(timeElapsed % 60);
  const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const getStarText = () => {
    switch (stars) {
      case 3:
        return "⭐⭐⭐ – Flyttivo-nivå!";
      case 2:
        return "⭐⭐ – Snyggt jobbat!";
      case 1:
        return "⭐ – Rent blev det, men vårt team är lite snabbare 😉";
    }
  };

  const getFeedbackText = () => {
    if (stars === 3 && mistakes === 0) {
      return "Otroligt! Du städade snabbare och noggrannare än de flesta – Flyttivo-nivå!";
    } else if (stars === 3) {
      return "Otroligt! Du städade snabbare än de flesta – Flyttivo-nivå!";
    } else if (stars === 2) {
      return "Snyggt jobbat! Rummet är rent och fint.";
    } else {
      return "Rent blev det – men du fick kämpa lite. Tur att vårt team gör det här varje dag 😉.";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="mb-4 text-5xl animate-bounce">✨</div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          Perfekt städat!
        </h2>
        <p className="text-slate-600 mb-4">
          {roomName} är nu skinande ren – precis som ett Flyttivo-team skulle
          göra det.
        </p>

        {/* Performance Stats */}
        <div className="bg-slate-50 rounded-xl p-4 mb-4 space-y-2">
          <div className="text-2xl font-bold text-slate-900 mb-2">
            {getStarText()}
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs text-slate-600">
            <div>
              <div className="font-medium text-slate-700">Tid</div>
              <div>{timeString}</div>
            </div>
            <div>
              <div className="font-medium text-slate-700">Misstag</div>
              <div>
                {mistakes === 0 ? (
                  <span className="text-[#22C55E] font-semibold">Felfri!</span>
                ) : (
                  mistakes
                )}
              </div>
            </div>
            <div>
              <div className="font-medium text-slate-700">Poäng</div>
              <div>{score}</div>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-6">{getFeedbackText()}</p>

        <div className="flex flex-col gap-3">
          {hasNextRoom && (
            <Button variant="primary" onClick={onNextRoom}>
              Nästa rum
            </Button>
          )}
          <Button variant="ghost" onClick={onPlayAgain}>
            {hasNextRoom ? "Städa om rummet" : "Spela igen"}
          </Button>
        </div>
      </div>
    </div>
  );
}
