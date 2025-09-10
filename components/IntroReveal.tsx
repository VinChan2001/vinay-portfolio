"use client";

import { useEffect, useState } from "react";

export default function IntroReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1300);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[60] pointer-events-none">
      <div className="intro-iris">
        <span className="intro-ring" />
        <span className="intro-ring intro-ring-2" />
        <span className="intro-ring intro-ring-3" />
      </div>
    </div>
  );
}
