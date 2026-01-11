"use client";

import { useState, useCallback, useRef } from "react";

interface SoundOptions {
  volume?: number;
}

export function useSound() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());

  const playSound = useCallback(
    (soundName: string, options: SoundOptions = {}) => {
      if (isMuted) return;

      try {
        let audio = audioRefs.current.get(soundName);
        
        if (!audio) {
          // Try to load the sound file
          audio = new Audio(`/sounds/${soundName}.mp3`);
          audio.volume = options.volume ?? 0.3;
          audioRefs.current.set(soundName, audio);
        }

        // Reset and play
        audio.currentTime = 0;
        audio.volume = options.volume ?? 0.3;
        audio.play().catch(() => {
          // Silently fail if audio can't play (e.g., user hasn't interacted)
        });
      } catch (error) {
        // Silently fail if sound files don't exist
      }
    },
    [isMuted]
  );

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return {
    playSound,
    isMuted,
    toggleMute,
  };
}



