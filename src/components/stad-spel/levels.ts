import { Room, Mess, CleaningTool } from "./types";

/**
 * Create a mess with multi-pass cleaning support
 * @param id - Unique identifier
 * @param type - Type of mess
 * @param x - X position (percentage)
 * @param y - Y position (percentage)
 * @param size - Size (1-3, affects points and required passes)
 * @param requiredPasses - Number of clicks needed to clean (default: size + 1)
 */
function createMess(
  id: string,
  type: Mess["type"],
  x: number,
  y: number,
  size: number = 2,
  requiredPasses?: number
): Mess {
  const passes = requiredPasses ?? size + 1; // Larger messes need more passes
  return {
    id,
    type,
    x,
    y,
    size,
    cleaned: false,
    progress: 0,
    requiredPasses: passes,
    currentPasses: 0,
  };
}

/**
 * LEVEL CONFIGURATION GUIDE:
 * 
 * To adjust difficulty per level:
 * - Add more messes: increase array length
 * - Adjust requiredPasses: larger number = more clicks needed
 * - Adjust time thresholds: goldTime (⭐⭐⭐), silverTime (⭐⭐)
 * - Adjust mistake limits: maxMistakesForGold, maxMistakesForSilver
 * 
 * Star thresholds:
 * - ⭐⭐⭐: Complete under goldTime AND mistakes <= maxMistakesForGold
 * - ⭐⭐: Complete under silverTime AND mistakes <= maxMistakesForSilver
 * - ⭐: Otherwise (still completed, just slower/more mistakes)
 */
export const rooms: Room[] = [
  {
    id: 1,
    name: "Vardagsrum",
    description: "Städa bort damm, spindelväv och smuts",
    hint: "Börja med att torka bort fläckarna på bordet med svampen.",
    goldTime: 45, // ⭐⭐⭐ under 45 seconds
    silverTime: 70, // ⭐⭐ under 70 seconds
    maxMistakesForGold: 0,
    maxMistakesForSilver: 2,
    messes: [
      createMess("dust1", "dust", 15, 20, 1, 2),
      createMess("dust2", "dust", 65, 35, 2, 3),
      createMess("spiderweb1", "spiderweb", 80, 10, 2, 3),
      createMess("stain1", "stain", 45, 60, 1, 2),
      createMess("smudge1", "smudge", 30, 75, 1, 2),
      createMess("stain2", "stain", 55, 25, 1, 2),
    ],
  },
  {
    id: 2,
    name: "Kök",
    description: "Rengör diskbänk, spis och ytor",
    goldTime: 60,
    silverTime: 90,
    maxMistakesForGold: 1,
    maxMistakesForSilver: 3,
    messes: [
      createMess("stain2", "stain", 25, 30, 2, 3),
      createMess("stain3", "stain", 70, 25, 1, 2),
      createMess("smudge2", "smudge", 50, 50, 2, 3),
      createMess("dust3", "dust", 15, 70, 1, 2),
      createMess("trash1", "trash", 85, 80, 2, 2),
      createMess("stain4", "stain", 40, 15, 1, 2),
      createMess("smudge3", "smudge", 60, 65, 1, 2),
      createMess("stain5", "stain", 30, 50, 1, 2),
      createMess("dust4", "dust", 75, 40, 1, 2),
    ],
  },
  {
    id: 3,
    name: "Badrum",
    description: "Torka av speglar, kranar och ytor",
    goldTime: 75,
    silverTime: 110,
    maxMistakesForGold: 2,
    maxMistakesForSilver: 4,
    messes: [
      createMess("smudge3", "smudge", 30, 20, 2, 3),
      createMess("stain5", "stain", 60, 40, 2, 3),
      createMess("smudge4", "smudge", 75, 60, 1, 2),
      createMess("dust4", "dust", 20, 80, 1, 2),
      createMess("stain6", "stain", 50, 70, 1, 2),
      createMess("smudge5", "smudge", 85, 30, 1, 2),
      createMess("spiderweb2", "spiderweb", 10, 10, 1, 2),
      createMess("stain7", "stain", 40, 50, 1, 2),
      createMess("smudge6", "smudge", 65, 75, 1, 2),
      createMess("stain8", "stain", 25, 60, 1, 2),
    ],
  },
  {
    id: 4,
    name: "Sovrum",
    description: "Dammtorka och städa alla ytor",
    goldTime: 90,
    silverTime: 130,
    maxMistakesForGold: 2,
    maxMistakesForSilver: 5,
    messes: [
      createMess("dust5", "dust", 20, 25, 2, 3),
      createMess("dust6", "dust", 60, 40, 1, 2),
      createMess("spiderweb3", "spiderweb", 80, 15, 2, 3),
      createMess("smudge6", "smudge", 40, 60, 1, 2),
      createMess("dust7", "dust", 70, 75, 2, 3),
      createMess("spiderweb4", "spiderweb", 15, 85, 1, 2),
      createMess("dust8", "dust", 50, 30, 1, 2),
      createMess("stain7", "stain", 90, 50, 1, 2),
      createMess("dust9", "dust", 35, 70, 1, 2),
      createMess("smudge7", "smudge", 55, 20, 1, 2),
      createMess("stain9", "stain", 75, 55, 1, 2),
    ],
  },
  {
    id: 5,
    name: "Kök efter flytt",
    description: "Efter en flytt behövs extra noggrann städning",
    goldTime: 100,
    silverTime: 150,
    maxMistakesForGold: 3,
    maxMistakesForSilver: 6,
    messes: [
      createMess("stain10", "stain", 20, 25, 2, 3),
      createMess("stain11", "stain", 45, 30, 1, 2),
      createMess("stain12", "stain", 70, 20, 1, 2),
      createMess("smudge8", "smudge", 30, 50, 2, 3),
      createMess("smudge9", "smudge", 60, 55, 1, 2),
      createMess("dust10", "dust", 15, 70, 1, 2),
      createMess("dust11", "dust", 50, 75, 2, 3),
      createMess("trash2", "trash", 85, 80, 2, 2),
      createMess("trash3", "trash", 25, 85, 1, 2),
      createMess("stain13", "stain", 55, 15, 1, 2),
      createMess("smudge10", "smudge", 75, 45, 1, 2),
      createMess("dust12", "dust", 40, 60, 1, 2),
      createMess("stain14", "stain", 65, 65, 1, 2),
    ],
  },
];

export const cleaningTools: CleaningTool[] = [
  {
    id: "duster",
    name: "Dammtorkare",
    icon: "🧹",
    suitableFor: ["dust", "spiderweb"],
    color: "#1E5F99",
  },
  {
    id: "sponge",
    name: "Svamp",
    icon: "🧽",
    suitableFor: ["stain", "smudge"],
    color: "#22C55E",
  },
  {
    id: "trashbag",
    name: "Sopkorg",
    icon: "🗑️",
    suitableFor: ["trash"],
    color: "#F9A826",
  },
];

