"use client";

import { ItemPiece } from "./ItemPiece";
import { PlacedItem } from "./types";

interface ItemDockProps {
  items: PlacedItem[];
  cellSize: number;
  onDragStart: (itemId: string) => void;
  onDragEnd: (itemId: string, gridX: number, gridY: number) => void;
  onRotate: (itemId: string) => void;
  draggingItemId: string | null;
  dragPosition: { x: number; y: number } | null;
  gridOccupancy: boolean[][];
}

export function ItemDock({
  items,
  cellSize,
  onDragStart,
  onDragEnd,
  onRotate,
  draggingItemId,
  dragPosition,
  gridOccupancy,
}: ItemDockProps) {
  const unplacedItems = items.filter((item) => !item.placed);

  return (
    <div className="space-y-4">
      <div className="text-sm font-medium text-slate-700 mb-2">
        Dra in sakerna här
      </div>
      {/* Desktop: vertical stack, Mobile: horizontal scroll */}
      <div className="md:space-y-4 md:max-h-[500px] md:overflow-y-auto md:pr-2">
        {unplacedItems.length === 0 ? (
          <div className="text-sm text-slate-500 italic">
            Alla saker är packade!
          </div>
        ) : (
          <div className="flex md:flex-col gap-4 overflow-x-auto pb-2 md:overflow-x-visible md:pb-0">
            {unplacedItems.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 p-3 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Rotate button - top right */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRotate(item.id);
                  }}
                  className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 hover:bg-sky-50 text-slate-600 hover:text-[#1E5F99] shadow-sm transition-all z-10"
                  aria-label="Rotera"
                  title="Rotera"
                >
                  <span className="text-sm">↻</span>
                </button>
                <ItemPiece
                  item={item}
                  cellSize={cellSize}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onRotate={onRotate}
                  isDragging={draggingItemId === item.id}
                  dragPosition={draggingItemId === item.id ? dragPosition : null}
                  gridOccupancy={gridOccupancy}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
