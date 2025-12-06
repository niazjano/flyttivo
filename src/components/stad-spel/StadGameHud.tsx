"use client";

interface StadGameHudProps {
  currentRoom: number;
  totalRooms: number;
  roomName: string;
  cleanedCount: number;
  totalMesses: number;
  score: number;
  timeElapsed: number; // seconds
  mistakes: number;
  taskProgress: {
    dust: { cleaned: number; total: number };
    stain: { cleaned: number; total: number };
    spiderweb: { cleaned: number; total: number };
    trash: { cleaned: number; total: number };
    smudge: { cleaned: number; total: number };
  };
}

export function StadGameHud({
  currentRoom,
  totalRooms,
  roomName,
  cleanedCount,
  totalMesses,
  score,
  timeElapsed,
  mistakes,
  taskProgress,
}: StadGameHudProps) {
  const progressPercentage = Math.round((cleanedCount / totalMesses) * 100);
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = Math.floor(timeElapsed % 60);
  const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const taskNames: Record<string, string> = {
    dust: "Dammsug damm",
    stain: "Torka fläckar",
    spiderweb: "Ta bort spindelväv",
    trash: "Plocka undan sopor",
    smudge: "Torka smuts",
  };

  const activeTasks = Object.entries(taskProgress).filter(
    ([_, progress]) => progress.total > 0
  );

  return (
    <div className="space-y-4">
      {/* Main HUD */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-full border border-slate-200 px-4 py-2 shadow-sm">
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
          <div>
            <span className="font-medium text-slate-700">Nivå:</span> {currentRoom} av {totalRooms} – {roomName}
          </div>
          <div>
            <span className="font-medium text-slate-700">Tid:</span> {timeString}
          </div>
          <div>
            <span className="font-medium text-slate-700">Städat:</span> {cleanedCount}/{totalMesses}
          </div>
          <div>
            <span className="font-medium text-slate-700">Misstag:</span> {mistakes}
          </div>
          <div>
            <span className="font-medium text-slate-700">Poäng:</span> {score}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#1E5F99] to-[#22C55E] transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-xs font-medium text-slate-600">{progressPercentage}%</span>
        </div>
      </div>

      {/* Task Progress */}
      {activeTasks.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm">
          <div className="text-xs font-medium text-slate-700 mb-2">Uppgifter:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {activeTasks.map(([type, progress]) => {
              const isComplete = progress.cleaned === progress.total;
              return (
                <div
                  key={type}
                  className="flex items-center justify-between text-xs"
                >
                  <span className={`${isComplete ? "text-[#22C55E] line-through" : "text-slate-600"}`}>
                    {taskNames[type]}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`font-medium ${isComplete ? "text-[#22C55E]" : "text-slate-700"}`}>
                      {progress.cleaned}/{progress.total}
                    </span>
                    {isComplete && <span className="text-[#22C55E]">✓</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
