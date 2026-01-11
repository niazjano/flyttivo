# Guide: Adding More Levels to Packa Flyttivos kartong

## Overview

Levels are defined in `src/components/spel/levels.ts`. Each level contains a list of items (shapes) that players must pack into the box.

## Level Structure

```typescript
{
  id: number,           // Unique level ID (1, 2, 3, ...)
  name: string,         // Display name (e.g., "Nivå 1 - Enkel start")
  items: ItemShape[]    // Array of items to pack
}
```

## Item Shape Structure

```typescript
{
  id: string,           // Unique item ID (e.g., "boklada", "lampa")
  name: string,         // Display name (e.g., "Boklåda", "Lampa")
  color: string,        // Hex color (use Flyttivo palette)
  cells: Array<[number, number]>,  // Relative positions from anchor
  width: number,        // Width in grid cells
  height: number        // Height in grid cells
}
```

## Grid Size

- **Width**: 8 columns
- **Height**: 6 rows
- Total: 48 cells

## Color Palette (Flyttivo Brand)

- Primary Blue: `#1E5F99`
- Primary Dark: `#174A77`
- Primary Light: `#E6F0FB`
- Green: `#22C55E` (for växt/plants)
- Warm Yellow: `#F9A826` (for cushions, etc.)
- Neutral Gray: `#64748B`, `#94A3B8`

## Creating a New Level

### Example: Adding Level 5

```typescript
{
  id: 5,
  name: "Nivå 5 - Expert Plus",
  items: [
    {
      id: "langsak3",
      name: "Lång sak",
      color: "#1E5F99",
      cells: [[0, 0], [1, 0], [2, 0], [3, 0]],
      width: 4,
      height: 1,
    },
    {
      id: "skohylla4",
      name: "Skohylla",
      color: "#174A77",
      cells: [[0, 0], [1, 0], [0, 1]],
      width: 2,
      height: 2,
    },
    // ... more items
  ],
}
```

## Common Item Shapes

### Horizontal Bar (3x1)
```typescript
cells: [[0, 0], [1, 0], [2, 0]]
width: 3, height: 1
```

### Vertical Bar (1x3)
```typescript
cells: [[0, 0], [0, 1], [0, 2]]
width: 1, height: 3
```

### Square Block (2x2)
```typescript
cells: [[0, 0], [1, 0], [0, 1], [1, 1]]
width: 2, height: 2
```

### L-Shape
```typescript
cells: [[0, 0], [1, 0], [0, 1]]
width: 2, height: 2
```

### Single Cell (1x1)
```typescript
cells: [[0, 0]]
width: 1, height: 1
```

## Tips for Creating Levels

1. **Start Easy**: Level 1 should have 3-4 simple items
2. **Progressive Difficulty**: Each level should add more items or more complex shapes
3. **Total Cells**: Make sure all items' total cells don't exceed 48 (but should be close for challenge)
4. **Variety**: Mix different shapes and sizes
5. **Test**: Play through each level to ensure it's solvable

## Difficulty Guidelines

- **Easy (Level 1-2)**: 3-4 items, simple shapes
- **Medium (Level 3-4)**: 5-6 items, mix of shapes
- **Hard (Level 5+)**: 6-7 items, complex shapes, tight fit

## Example: Complete Level Definition

```typescript
{
  id: 5,
  name: "Nivå 5 - Mästare",
  items: [
    {
      id: "langsak3",
      name: "Lång sak",
      color: "#1E5F99",
      cells: [[0, 0], [1, 0], [2, 0], [3, 0]],
      width: 4,
      height: 1,
    },
    {
      id: "skohylla4",
      name: "Skohylla",
      color: "#174A77",
      cells: [[0, 0], [1, 0], [0, 1]],
      width: 2,
      height: 2,
    },
    {
      id: "lampa5",
      name: "Lampa",
      color: "#E6F0FB",
      cells: [[0, 0], [0, 1], [0, 2]],
      width: 1,
      height: 3,
    },
    {
      id: "vaxter5",
      name: "Växt",
      color: "#22C55E",
      cells: [[0, 0], [1, 0], [0, 1], [1, 1]],
      width: 2,
      height: 2,
    },
    {
      id: "kudde5",
      name: "Kudde",
      color: "#F9A826",
      cells: [[0, 0], [1, 0]],
      width: 2,
      height: 1,
    },
    {
      id: "liten4",
      name: "Liten sak",
      color: "#64748B",
      cells: [[0, 0]],
      width: 1,
      height: 1,
    },
    {
      id: "liten5",
      name: "Liten sak",
      color: "#94A3B8",
      cells: [[0, 0]],
      width: 1,
      height: 1,
    },
  ],
}
```

## Notes

- Items automatically rotate 90° when clicked
- Players can drag items from the dock into the box
- Items must fit within bounds and not overlap
- All items must be placed to win the level



