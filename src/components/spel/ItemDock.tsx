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
    <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
      {/* Header */}
      <p className="text-xs font-medium text-slate-500 mb-3 uppercase tracking-[0.18em]">
        Dra in sakerna här
      </p>

      {/* Desktop: Vertical scrollable container */}
      {/* Mobile: Horizontal scrollable container */}
      {unplacedItems.length === 0 ? (
        <div className="text-sm text-slate-500 italic py-8 text-center">
          Alla saker är packade!
        </div>
      ) : (
        <>
          {/* Desktop: Vertical scroll */}
          <div className="hidden md:block">
            <div className="space-y-3 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
              {unplacedItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex-shrink-0 p-3 bg-slate-50 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
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
          </div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory">
              {unplacedItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex-shrink-0 w-[140px] p-3 bg-slate-50 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow snap-start"
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
          </div>
        </>
      )}
    </div>
  );
}
