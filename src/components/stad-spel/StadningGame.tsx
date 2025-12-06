"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { CleaningTool, Mess } from "./types";
import { rooms, cleaningTools } from "./levels";
import { CleaningRoom } from "./CleaningRoom";
import { ToolSelector } from "./ToolSelector";
import { StadGameHud } from "./StadGameHud";
import { StadWinOverlay } from "./StadWinOverlay";
import { useSound } from "../spel/useSound";

export function StadningGame() {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [selectedTool, setSelectedTool] = useState<CleaningTool | null>(null);
  const [cleanedMesses, setCleanedMesses] = useState<Set<string>>(new Set());
  const [messProgress, setMessProgress] = useState<Map<string, number>>(new Map());
  const [score, setScore] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const { playSound } = useSound();
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentRoom = rooms[currentRoomIndex];
  const totalMesses = currentRoom.messes.length;
  const cleanedCount = cleanedMesses.size;

  // Calculate task progress
  const taskProgress = {
    dust: {
      cleaned: currentRoom.messes.filter(
        (m) => m.type === "dust" && cleanedMesses.has(m.id)
      ).length,
      total: currentRoom.messes.filter((m) => m.type === "dust").length,
    },
    stain: {
      cleaned: currentRoom.messes.filter(
        (m) => m.type === "stain" && cleanedMesses.has(m.id)
      ).length,
      total: currentRoom.messes.filter((m) => m.type === "stain").length,
    },
    spiderweb: {
      cleaned: currentRoom.messes.filter(
        (m) => m.type === "spiderweb" && cleanedMesses.has(m.id)
      ).length,
      total: currentRoom.messes.filter((m) => m.type === "spiderweb").length,
    },
    trash: {
      cleaned: currentRoom.messes.filter(
        (m) => m.type === "trash" && cleanedMesses.has(m.id)
      ).length,
      total: currentRoom.messes.filter((m) => m.type === "trash").length,
    },
    smudge: {
      cleaned: currentRoom.messes.filter(
        (m) => m.type === "smudge" && cleanedMesses.has(m.id)
      ).length,
      total: currentRoom.messes.filter((m) => m.type === "smudge").length,
    },
  };

  // Timer
  useEffect(() => {
    if (gameStarted && !isWin) {
      timerIntervalRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [gameStarted, isWin]);

  // Initialize room
  const initializeRoom = useCallback((roomIndex: number) => {
    setCleanedMesses(new Set());
    setMessProgress(new Map());
    setSelectedTool(null);
    setIsWin(false);
    setScore(0);
    setTimeElapsed(0);
    setMistakes(0);
    setGameStarted(false);
  }, []);

  useEffect(() => {
    initializeRoom(currentRoomIndex);
  }, [currentRoomIndex, initializeRoom]);

  // Start game when first action is taken
  useEffect(() => {
    if (!gameStarted && selectedTool) {
      setGameStarted(true);
    }
  }, [selectedTool, gameStarted]);

  // Handle mess progress (multi-pass cleaning)
  const handleMessProgress = useCallback(
    (messId: string) => {
      if (cleanedMesses.has(messId)) return;

      const mess = currentRoom.messes.find((m) => m.id === messId);
      if (!mess || !selectedTool) return;

      // Check if tool is suitable
      if (!selectedTool.suitableFor.includes(mess.type)) {
        setMistakes((prev) => prev + 1);
        playSound("error", { volume: 0.15 });
        return;
      }

      // Increment progress
      setMessProgress((prev) => {
        const currentProgress = prev.get(messId) ?? 0;
        const progressPerClick = 100 / mess.requiredPasses;
        const newProgress = Math.min(100, currentProgress + progressPerClick);

        // If complete, mark as cleaned
        if (newProgress >= 100) {
          setCleanedMesses((prev) => new Set([...prev, messId]));
          const points = mess.size * 10;
          setScore((prev) => prev + points);
          playSound("place", { volume: 0.2 });
        } else {
          playSound("place", { volume: 0.1 });
        }

        return new Map(prev).set(messId, newProgress);
      });
    },
    [cleanedMesses, currentRoom.messes, selectedTool, playSound]
  );

  // Calculate performance stars
  const calculateStars = useCallback((): 1 | 2 | 3 => {
    const room = currentRoom;
    if (timeElapsed <= room.goldTime && mistakes <= room.maxMistakesForGold) {
      return 3;
    } else if (timeElapsed <= room.silverTime && mistakes <= room.maxMistakesForSilver) {
      return 2;
    } else {
      return 1;
    }
  }, [currentRoom, timeElapsed, mistakes]);

  // Check win condition
  useEffect(() => {
    if (cleanedCount === totalMesses && totalMesses > 0 && !isWin) {
      setIsWin(true);
      playSound("win", { volume: 0.3 });
    }
  }, [cleanedCount, totalMesses, isWin, playSound]);

  const handlePlayAgain = () => {
    initializeRoom(currentRoomIndex);
  };

  const handleNextRoom = () => {
    if (currentRoomIndex < rooms.length - 1) {
      setCurrentRoomIndex((prev) => prev + 1);
    }
  };

  // Auto-select first tool if none selected
  useEffect(() => {
    if (!selectedTool && cleaningTools.length > 0) {
      setSelectedTool(cleaningTools[0]);
    }
  }, [selectedTool]);

  const stars = isWin ? calculateStars() : 1;

  return (
    <div className="space-y-6">
      {/* Tutorial Hint for Level 1 */}
      {currentRoomIndex === 0 && !gameStarted && currentRoom.hint && (
        <div className="bg-[#E6F0FB] border border-[#1E5F99]/20 rounded-xl p-4 text-sm text-slate-700">
          <span className="font-medium text-[#1E5F99]">💡 Tips:</span> {currentRoom.hint}
        </div>
      )}

      {/* Game HUD */}
      <StadGameHud
        currentRoom={currentRoomIndex + 1}
        totalRooms={rooms.length}
        roomName={currentRoom.name}
        cleanedCount={cleanedCount}
        totalMesses={totalMesses}
        score={score}
        timeElapsed={timeElapsed}
        mistakes={mistakes}
        taskProgress={taskProgress}
      />

      {/* Room Info */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900">
          {currentRoom.name}
        </h2>
        <p className="text-slate-600">{currentRoom.description}</p>
      </div>

      {/* Game Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* Left: Room */}
        <div>
          <CleaningRoom
            room={currentRoom}
            selectedTool={selectedTool}
            onMessProgress={handleMessProgress}
            messProgress={messProgress}
            cleanedMesses={cleanedMesses}
          />
        </div>

        {/* Right: Tool Selector */}
        <div>
          <ToolSelector
            tools={cleaningTools}
            selectedTool={selectedTool}
            onSelectTool={setSelectedTool}
          />
        </div>
      </div>

      {/* Win Overlay */}
      {isWin && (
        <StadWinOverlay
          onPlayAgain={handlePlayAgain}
          onNextRoom={handleNextRoom}
          hasNextRoom={currentRoomIndex < rooms.length - 1}
          score={score}
          roomNumber={currentRoomIndex + 1}
          roomName={currentRoom.name}
          timeElapsed={timeElapsed}
          mistakes={mistakes}
          stars={stars}
        />
      )}
    </div>
  );
}
