"use client";

import React from "react";

type Props = React.PropsWithChildren<{
  href: string;
  className?: string;
  durationMs?: number;
  offset?: number; // pixels to offset for sticky header
}>;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function SmoothAnchor({ href, className, children, durationMs = 1600, offset = 96 }: Props) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return; // only intercept in-page anchors
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();

    const startY = window.scrollY || window.pageYOffset;
    const rect = el.getBoundingClientRect();
    const targetY = Math.max(0, Math.min(
      rect.top + startY - offset,
      document.documentElement.scrollHeight - window.innerHeight
    ));
    const delta = targetY - startY;

    const start = performance.now();
    function step(now: number) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeInOutCubic(t);
      window.scrollTo({ top: startY + delta * eased, behavior: "auto" });
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

