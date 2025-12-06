"use client";

import { useRef, useState, useEffect } from "react";
import { ItemPiece } from "./ItemPiece";
import { PlacedItem } from "./types";
import { GRID_WIDTH, GRID_HEIGHT } from "./levels";

interface BoxGridProps {
  items: PlacedItem[];
  cellSize: number;
  onDragStart: (itemId: string) => void;
  onDragEnd: (itemId: string, gridX: number, gridY: number) => void;
  onRotate: (itemId: string) => void;
  draggingItemId: string | null;
  dragPosition: { x: number; y: number } | null;
  gridOccupancy: boolean[][];
  isValidPlacement: (item: PlacedItem, gridX: number, gridY: number) => boolean;
  draggingItem: PlacedItem | null;
}

export function BoxGrid({
  items,
  cellSize,
  onDragStart,
  onDragEnd,
  onRotate,
  draggingItemId,
  dragPosition,
  gridOccupancy,
  isValidPlacement,
  draggingItem,
}: BoxGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoverGridPos, setHoverGridPos] = useState<{ x: number; y: number } | null>(null);
  const [showInvalidFeedback, setShowInvalidFeedback] = useState(false);
  const [boxBounce, setBoxBounce] = useState(false);

  // Calculate ghost preview cells
  const getGhostCells = () => {
    if (!draggingItem || !hoverGridPos) return [];

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

    const rotatedCells = rotateCells(draggingItem.cells, draggingItem.rotation);
    return rotatedCells.map(([dx, dy]) => ({
      x: hoverGridPos.x + dx,
      y: hoverGridPos.y + dy,
    }));
  };

  const ghostCells = getGhostCells();
  const isGhostValid = draggingItem && hoverGridPos
    ? isValidPlacement(draggingItem, hoverGridPos.x, hoverGridPos.y)
    : false;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingItemId || !gridRef.current) return;

    const rect = gridRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const gridX = Math.floor(x / cellSize);
    const gridY = Math.floor(y / cellSize);

    if (gridX >= 0 && gridX < GRID_WIDTH && gridY >= 0 && gridY < GRID_HEIGHT) {
      setHoverGridPos({ x: gridX, y: gridY });
    } else {
      setHoverGridPos(null);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!draggingItemId || !gridRef.current) return;

    const rect = gridRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const gridX = Math.floor(x / cellSize);
    const gridY = Math.floor(y / cellSize);

    const wasValid = draggingItem && isValidPlacement(draggingItem, gridX, gridY);

    if (wasValid) {
      // Trigger box bounce animation
      setBoxBounce(true);
      setTimeout(() => setBoxBounce(false), 300);
    } else if (draggingItem) {
      // Show invalid feedback
      setShowInvalidFeedback(true);
      setTimeout(() => setShowInvalidFeedback(false), 1000);
    }

    onDragEnd(draggingItemId, gridX, gridY);
    setHoverGridPos(null);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!draggingItemId || !gridRef.current) return;

    const touch = e.changedTouches[0];
    const rect = gridRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const gridX = Math.floor(x / cellSize);
    const gridY = Math.floor(y / cellSize);

    const wasValid = draggingItem && isValidPlacement(draggingItem, gridX, gridY);

    if (wasValid) {
      setBoxBounce(true);
      setTimeout(() => setBoxBounce(false), 300);
    } else if (draggingItem) {
      setShowInvalidFeedback(true);
      setTimeout(() => setShowInvalidFeedback(false), 1000);
    }

    onDragEnd(draggingItemId, gridX, gridY);
    setHoverGridPos(null);
  };

  return (
    <div className="relative">
      <div className="text-sm font-medium text-slate-700 mb-2">
        Flyttivos kartong
      </div>
      <div
        ref={gridRef}
        className={`relative border border-amber-100/60 rounded-xl bg-[#F7F3EE] shadow-sm transition-transform duration-300 ${
          boxBounce ? "animate-[bounce_0.3s_ease-in-out]" : ""
        }`}
        style={{
          width: `${GRID_WIDTH * cellSize}px`,
          height: `${GRID_HEIGHT * cellSize}px`,
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
      >
        {/* Flyttivo branding overlay */}
        <div className="absolute top-2 left-2 text-[#1E5F99] text-xs font-semibold opacity-20 pointer-events-none">
          Flyttivo
        </div>

        {/* Grid cells */}
        {Array.from({ length: GRID_HEIGHT }).map((_, row) =>
          Array.from({ length: GRID_WIDTH }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute border border-slate-200/60"
              style={{
                left: `${col * cellSize}px`,
                top: `${row * cellSize}px`,
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                backgroundColor: gridOccupancy[row]?.[col] ? "transparent" : "#FAF8F5",
              }}
            />
          ))
        )}

        {/* Ghost preview */}
        {ghostCells.length > 0 && draggingItem && (
          <>
            {ghostCells.map((cell, idx) => {
              if (cell.x < 0 || cell.x >= GRID_WIDTH || cell.y < 0 || cell.y >= GRID_HEIGHT) {
                return null;
              }
              return (
                <div
                  key={`ghost-${idx}`}
                  className="absolute border-2 border-dashed transition-opacity"
                  style={{
                    left: `${cell.x * cellSize}px`,
                    top: `${cell.y * cellSize}px`,
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    backgroundColor: isGhostValid
                      ? `${draggingItem.color}60`
                      : "rgba(239, 68, 68, 0.3)",
                    borderColor: isGhostValid
                      ? draggingItem.color
                      : "rgba(239, 68, 68, 0.5)",
                    opacity: 0.7,
                  }}
                />
              );
            })}
          </>
        )}

        {/* Invalid feedback message */}
        {showInvalidFeedback && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-50 border border-red-200 rounded-lg px-3 py-1.5 text-xs text-red-700 font-medium animate-[fadeIn_0.2s_ease-in-out] z-50">
            Här får den inte plats.
          </div>
        )}

        {/* Placed items */}
        {items
          .filter((item) => item.placed)
          .map((item) => (
            <ItemPiece
              key={item.id}
              item={item}
              cellSize={cellSize}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onRotate={onRotate}
              isDragging={draggingItemId === item.id}
              dragPosition={draggingItemId === item.id ? dragPosition : null}
              gridOccupancy={gridOccupancy}
            />
          ))}
      </div>
    </div>
  );
}
