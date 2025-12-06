"use client";

import { useState, useEffect, useCallback } from "react";
import { PlacedItem } from "./types";
import { levels, GRID_WIDTH, GRID_HEIGHT } from "./levels";
import { BoxGrid } from "./BoxGrid";
import { ItemDock } from "./ItemDock";
import { WinOverlay } from "./WinOverlay";
import { GameHud } from "./GameHud";
import { useSound } from "./useSound";

export function PackingGame() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
  const [isWin, setIsWin] = useState(false);
  const [moves, setMoves] = useState(0);
  const { playSound, isMuted, toggleMute } = useSound();

  const cellSize = 40; // pixels per grid cell

  // Initialize items from level
  const initializeItems = useCallback((levelIndex: number) => {
    const level = levels[levelIndex];
    const newItems: PlacedItem[] = level.items.map((item, index) => ({
      id: item.id,
      name: item.name,
      color: item.color,
      cells: item.cells,
      gridX: 0,
      gridY: 0,
      rotation: 0,
      placed: false,
      dockIndex: index,
    }));
    setItems(newItems);
    setIsWin(false);
    setMoves(0);
  }, []);

  useEffect(() => {
    initializeItems(currentLevel);
  }, [currentLevel, initializeItems]);

  // Calculate grid occupancy
  const calculateGridOccupancy = useCallback((): boolean[][] => {
    const occupancy: boolean[][] = Array(GRID_HEIGHT)
      .fill(null)
      .map(() => Array(GRID_WIDTH).fill(false));

    items.forEach((item) => {
      if (!item.placed) return;

      // Rotate cells
      const rotateCells = (cells: Array<[number, number]>, rotation: number): Array<[number, number]> => {
        if (rotation === 0) return cells;
        const times = rotation / 90;
        let rotated = [...cells];
        for (let i = 0; i < times; i++) {
          rotated = rotated.map(([x, y]) => [-y, x]);
          const minX = Math.min(...rotated.map(([x]) => x));
          const minY = Math.min(...rotated.map(([, y]) => y));
          rotated = rotated.map(([x, y]) => [x - minX, y - minY] as [number, number]);
        }
        return rotated;
      };

      const rotatedCells = rotateCells(item.cells, item.rotation);

      rotatedCells.forEach(([dx, dy]) => {
        const x = item.gridX + dx;
        const y = item.gridY + dy;
        if (x >= 0 && x < GRID_WIDTH && y >= 0 && y < GRID_HEIGHT) {
          occupancy[y][x] = true;
        }
      });
    });

    return occupancy;
  }, [items]);

  const gridOccupancy = calculateGridOccupancy();

  // Check if placement is valid
  const isValidPlacement = useCallback(
    (item: PlacedItem, gridX: number, gridY: number): boolean => {
      // Rotate cells
      const rotateCells = (cells: Array<[number, number]>, rotation: number): Array<[number, number]> => {
        if (rotation === 0) return cells;
        const times = rotation / 90;
        let rotated = [...cells];
        for (let i = 0; i < times; i++) {
          rotated = rotated.map(([x, y]) => [-y, x]);
          const minX = Math.min(...rotated.map(([x]) => x));
          const minY = Math.min(...rotated.map(([, y]) => y));
          rotated = rotated.map(([x, y]) => [x - minX, y - minY] as [number, number]);
        }
        return rotated;
      };

      const rotatedCells = rotateCells(item.cells, item.rotation);

      // Check all cells
      for (const [dx, dy] of rotatedCells) {
        const x = gridX + dx;
        const y = gridY + dy;

        // Check bounds
        if (x < 0 || x >= GRID_WIDTH || y < 0 || y >= GRID_HEIGHT) {
          return false;
        }

        // Check collision with other placed items
        const otherPlacedItems = items.filter((i) => i.placed && i.id !== item.id);
        for (const otherItem of otherPlacedItems) {
          const otherRotated = rotateCells(otherItem.cells, otherItem.rotation);
          const hasCollision = otherRotated.some(
            ([odx, ody]) => otherItem.gridX + odx === x && otherItem.gridY + ody === y
          );
          if (hasCollision) {
            return false;
          }
        }
      }

      return true;
    },
    [items]
  );

  // Handle drag start
  const handleDragStart = useCallback(
    (itemId: string) => {
      setDraggingItemId(itemId);
    },
    []
  );

  // Handle drag end
  const handleDragEnd = useCallback(
    (itemId: string, gridX: number, gridY: number) => {
      const item = items.find((i) => i.id === itemId);
      if (!item) {
        setDraggingItemId(null);
        setDragPosition(null);
        return;
      }

      // Clamp to grid bounds
      const clampedX = Math.max(0, Math.min(gridX, GRID_WIDTH - 1));
      const clampedY = Math.max(0, Math.min(gridY, GRID_HEIGHT - 1));

      // Check if item is being dragged over the grid
      const isOverGrid =
        clampedX >= 0 && clampedX < GRID_WIDTH && clampedY >= 0 && clampedY < GRID_HEIGHT;

      if (isOverGrid && isValidPlacement(item, clampedX, clampedY)) {
        setItems((prev) =>
          prev.map((i) =>
            i.id === itemId ? { ...i, gridX: clampedX, gridY: clampedY, placed: true } : i
          )
        );
        setMoves((prev) => prev + 1);
        playSound("place", { volume: 0.2 });
      } else {
        // Return to dock
        setItems((prev) =>
          prev.map((i) => (i.id === itemId ? { ...i, placed: false, gridX: 0, gridY: 0 } : i))
        );
        if (isOverGrid) {
          playSound("error", { volume: 0.15 });
        }
      }

      setDraggingItemId(null);
      setDragPosition(null);
    },
    [items, isValidPlacement, playSound]
  );

  // Handle rotation
  const handleRotate = useCallback(
    (itemId: string) => {
      setItems((prev) =>
        prev.map((i) => (i.id === itemId ? { ...i, rotation: (i.rotation + 90) % 360 } : i))
      );
    },
    []
  );

  // Global mouse/touch move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggingItemId) {
        setDragPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (draggingItemId && e.touches.length > 0) {
        const touch = e.touches[0];
        setDragPosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    const handleMouseUp = () => {
      if (draggingItemId) {
        setDraggingItemId(null);
        setDragPosition(null);
      }
    };

    const handleTouchEnd = () => {
      if (draggingItemId) {
        setDraggingItemId(null);
        setDragPosition(null);
      }
    };

    if (draggingItemId) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [draggingItemId]);

  // Check win condition
  useEffect(() => {
    const allPlaced = items.every((item) => item.placed);
    if (allPlaced && items.length > 0 && !isWin) {
      setIsWin(true);
      playSound("win", { volume: 0.3 });
    }
  }, [items, isWin, playSound]);

  // Calculate filled percentage
  const filledPercentage = Math.round(
    (items.filter((i) => i.placed).length / items.length) * 100
  );

  const handlePlayAgain = () => {
    initializeItems(currentLevel);
  };

  const handleNextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel((prev) => prev + 1);
    }
  };

  const draggingItem = draggingItemId ? items.find((i) => i.id === draggingItemId) : null;

  return (
    <div className="space-y-6">
      {/* Game HUD */}
      <GameHud
        currentLevel={currentLevel}
        totalLevels={levels.length}
        moves={moves}
        filledPercentage={filledPercentage}
        isMuted={isMuted}
        onToggleMute={toggleMute}
      />

      {/* Game Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] gap-6">
        {/* Left: Box Grid */}
        <div>
          <BoxGrid
            items={items}
            cellSize={cellSize}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onRotate={handleRotate}
            draggingItemId={draggingItemId}
            dragPosition={dragPosition}
            gridOccupancy={gridOccupancy}
            isValidPlacement={isValidPlacement}
            draggingItem={draggingItem}
          />
        </div>

        {/* Right: Item Dock */}
        <div>
          <ItemDock
            items={items}
            cellSize={cellSize}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onRotate={handleRotate}
            draggingItemId={draggingItemId}
            dragPosition={dragPosition}
            gridOccupancy={gridOccupancy}
          />
        </div>
      </div>

      {/* Win Overlay */}
      {isWin && (
        <WinOverlay
          onPlayAgain={handlePlayAgain}
          onNextLevel={handleNextLevel}
          hasNextLevel={currentLevel < levels.length - 1}
          moves={moves}
          levelNumber={currentLevel + 1}
        />
      )}
    </div>
  );
}
