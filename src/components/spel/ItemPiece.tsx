"use client";

import { useState, useRef } from "react";
import { PlacedItem } from "./types";

interface ItemPieceProps {
  item: PlacedItem;
  cellSize: number;
  onDragStart: (itemId: string) => void;
  onDragEnd: (itemId: string, gridX: number, gridY: number) => void;
  onRotate: (itemId: string) => void;
  isDragging: boolean;
  dragPosition: { x: number; y: number } | null;
  gridOccupancy: boolean[][];
}

export function ItemPiece({
  item,
  cellSize,
  onDragStart,
  onDragEnd,
  onRotate,
  isDragging,
  dragPosition,
  gridOccupancy,
}: ItemPieceProps) {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  // Rotate cells 90 degrees clockwise
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

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    onDragStart(item.id);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    onDragStart(item.id);
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent rotation on single click during drag
    if (isDragging) return;

    // On desktop, double-click to rotate
    if (e.detail === 2) {
      e.preventDefault();
      onRotate(item.id);
    }
  };

  const getItemWidth = () => {
    const maxX = Math.max(...rotatedCells.map(([x]) => x));
    return (maxX + 1) * cellSize;
  };

  const getItemHeight = () => {
    const maxY = Math.max(...rotatedCells.map(([, y]) => y));
    return (maxY + 1) * cellSize;
  };

  const style: React.CSSProperties = item.placed
    ? {
        position: "absolute",
        left: `${item.gridX * cellSize}px`,
        top: `${item.gridY * cellSize}px`,
        width: `${getItemWidth()}px`,
        height: `${getItemHeight()}px`,
        opacity: 1,
      }
    : isDragging && dragPosition
    ? {
        position: "fixed",
        left: `${dragPosition.x - getItemWidth() / 2}px`,
        top: `${dragPosition.y - getItemHeight() / 2}px`,
        width: `${getItemWidth()}px`,
        height: `${getItemHeight()}px`,
        zIndex: 1000,
        pointerEvents: "none",
        opacity: 0.9,
      }
    : {
        position: "relative",
        width: `${getItemWidth()}px`,
        height: `${getItemHeight()}px`,
      };

  return (
    <div
      ref={itemRef}
      style={style}
      className={`transition-all duration-200 ${
        item.placed
          ? ""
          : isDragging
          ? "scale-110 shadow-2xl"
          : isHovered
          ? "scale-105 shadow-md cursor-grab"
          : "cursor-grab hover:scale-105 hover:shadow-md"
      }`}
      onMouseDown={!item.placed ? handleMouseDown : undefined}
      onTouchStart={!item.placed ? handleTouchStart : undefined}
      onClick={!item.placed ? handleClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        {rotatedCells.map(([dx, dy], idx) => (
          <div
            key={idx}
            className="absolute border border-white/40 rounded-md"
            style={{
              left: `${dx * cellSize}px`,
              top: `${dy * cellSize}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: item.color,
              backgroundImage: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
            }}
          />
        ))}
      </div>
      {!item.placed && (
        <div className="absolute -top-6 left-0 text-xs font-medium text-slate-700 whitespace-nowrap">
          {item.name}
        </div>
      )}
    </div>
  );
}
