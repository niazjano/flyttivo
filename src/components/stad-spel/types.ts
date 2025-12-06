export interface Mess {
  id: string;
  type: "dust" | "stain" | "spiderweb" | "trash" | "smudge";
  x: number; // percentage
  y: number; // percentage
  size: number; // 1-3 (small, medium, large)
  cleaned: boolean;
  progress: number; // 0-100 for multi-pass cleaning
  requiredPasses: number; // how many clicks/passes needed to clean
  currentPasses: number; // current progress
}

export interface Room {
  id: number;
  name: string;
  description: string;
  messes: Mess[];
  timeLimit?: number; // seconds, optional
  // Performance thresholds (in seconds)
  goldTime: number; // ⭐⭐⭐ threshold
  silverTime: number; // ⭐⭐ threshold
  // Max mistakes for each star level
  maxMistakesForGold: number;
  maxMistakesForSilver: number;
  hint?: string; // Tutorial hint for level 1
}

export interface CleaningTool {
  id: string;
  name: string;
  icon: string;
  suitableFor: Mess["type"][];
  color: string;
}

