export interface GridCell {
  x: number;
  y: number;
  occupied: boolean;
  itemId?: string;
}

export interface ItemShape {
  id: string;
  name: string;
  color: string;
  cells: Array<[number, number]>; // Relative positions from anchor
  width: number;
  height: number;
}

export interface PlacedItem {
  id: string;
  name: string;
  color: string;
  cells: Array<[number, number]>;
  gridX: number;
  gridY: number;
  rotation: number;
  placed: boolean;
  dockIndex: number;
}

export interface Level {
  id: number;
  name: string;
  items: ItemShape[];
}

