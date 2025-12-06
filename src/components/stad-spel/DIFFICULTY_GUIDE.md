# Guide: Adjusting Difficulty in Städa Rummet

## Overview

The cleaning game difficulty is controlled in `src/components/stad-spel/levels.ts`. Each room has configurable parameters for challenge level.

## Key Difficulty Parameters

### 1. Number of Messes
**Location:** `messes` array in each room

**How to adjust:**
- Add more `createMess()` calls to increase mess count
- More messes = more clicks needed = longer time = harder

**Example:**
```typescript
messes: [
  createMess("dust1", "dust", 15, 20, 1, 2),
  createMess("dust2", "dust", 65, 35, 2, 3),
  // Add more here...
],
```

### 2. Required Passes per Mess
**Location:** Last parameter in `createMess()`

**How to adjust:**
- `createMess(id, type, x, y, size, requiredPasses)`
- Default: `size + 1` (small=2, medium=3, large=4)
- Increase `requiredPasses` to make individual messes harder

**Example:**
```typescript
// Easy: 2 clicks needed
createMess("dust1", "dust", 15, 20, 1, 2)

// Hard: 4 clicks needed
createMess("dust1", "dust", 15, 20, 1, 4)
```

### 3. Time Thresholds (Star Ratings)
**Location:** `goldTime` and `silverTime` in each room

**How to adjust:**
- `goldTime`: Time in seconds for ⭐⭐⭐ rating
- `silverTime`: Time in seconds for ⭐⭐ rating
- Lower times = harder to achieve stars

**Example:**
```typescript
{
  id: 1,
  goldTime: 45,    // ⭐⭐⭐ if completed in under 45 seconds
  silverTime: 70,  // ⭐⭐ if completed in under 70 seconds
  // ⭐ if over 70 seconds
}
```

### 4. Mistake Limits
**Location:** `maxMistakesForGold` and `maxMistakesForSilver`

**How to adjust:**
- `maxMistakesForGold`: Max mistakes allowed for ⭐⭐⭐
- `maxMistakesForSilver`: Max mistakes allowed for ⭐⭐
- Lower numbers = stricter requirements

**Example:**
```typescript
{
  maxMistakesForGold: 0,    // Perfect run needed for ⭐⭐⭐
  maxMistakesForSilver: 2,  // Max 2 mistakes for ⭐⭐
}
```

## Current Level Difficulty

### Level 1: Vardagsrum (Tutorial)
- **Messes:** 6 (easy)
- **Gold Time:** 45s
- **Silver Time:** 70s
- **Hint:** Shows tutorial text
- **Difficulty:** Easy (onboarding)

### Level 2: Kök
- **Messes:** 9 (medium)
- **Gold Time:** 60s
- **Silver Time:** 90s
- **Difficulty:** Medium

### Level 3: Badrum
- **Messes:** 10 (medium-hard)
- **Gold Time:** 75s
- **Silver Time:** 110s
- **Difficulty:** Medium-Hard

### Level 4: Sovrum
- **Messes:** 11 (hard)
- **Gold Time:** 90s
- **Silver Time:** 130s
- **Difficulty:** Hard

### Level 5: Kök efter flytt
- **Messes:** 13 (expert)
- **Gold Time:** 100s
- **Silver Time:** 150s
- **Difficulty:** Expert

## Adding a New Level

```typescript
{
  id: 6,
  name: "Efter renovering",
  description: "Extra mycket damm och smuts efter renovering",
  goldTime: 120,        // Adjust based on mess count
  silverTime: 180,      // ~1.5x goldTime
  maxMistakesForGold: 3,
  maxMistakesForSilver: 6,
  messes: [
    // Add 12-15 messes for expert level
    createMess("dust1", "dust", 20, 25, 2, 3),
    // ... more messes
  ],
}
```

## Balancing Tips

1. **Time vs Messes:** 
   - Rule of thumb: ~5-7 seconds per mess for gold time
   - More messes = proportionally increase time thresholds

2. **Required Passes:**
   - Small messes (size 1): 2 passes
   - Medium messes (size 2): 3 passes
   - Large messes (size 3): 4 passes
   - Can increase for extra challenge

3. **Mistake Limits:**
   - Gold: 0-2 mistakes (perfect or near-perfect)
   - Silver: 2-4 mistakes (good but not perfect)
   - More forgiving for later levels

4. **Progressive Difficulty:**
   - Each level should have 1-3 more messes than previous
   - Time thresholds should increase proportionally
   - Mistake limits can be slightly more forgiving on harder levels

## Mobile Considerations

- Mess hitboxes are automatically sized (w-8 to w-16)
- Touch targets are large enough for mobile
- Timer and mistake tracking work the same on mobile
- Consider slightly more forgiving times on mobile if needed (not implemented, but can be added)

