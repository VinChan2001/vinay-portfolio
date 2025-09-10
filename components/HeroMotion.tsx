"use client";

import { useEffect } from "react";

// Updates CSS vars based on pointer position for a subtle parallax
export default function HeroMotion() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const x = (e.clientX - w / 2) / w; // -0.5..0.5
      const y = (e.clientY - h / 2) / h; // -0.5..0.5
      // small offsets to avoid motion sickness
      document.documentElement.style.setProperty("--mx", `${x * 18}px`);
      document.documentElement.style.setProperty("--my", `${y * 18}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}

