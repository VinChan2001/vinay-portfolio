"use client";

import { useState } from "react";

const items = [
  {
    k: "analytics",
    label: "Analytics",
    text:
      "UMD Business Analytics — I enjoy turning messy, high‑volume data into useful signals and experiments.",
  },
  {
    k: "ml",
    label: "ML",
    text:
      "Gradient boosting, SHAP, time‑series, a bit of deep learning — with a focus on reliability in prod.",
  },
  {
    k: "beyond",
    label: "Beyond work",
    text:
      "I like building dashboards, shipping side projects on GitHub, and learning by sharing what I build.",
  },
];

export default function AboutFacts() {
  const [active, setActive] = useState(items[0].k);
  const current = items.find((i) => i.k === active)!;

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <button
            key={i.k}
            onClick={() => setActive(i.k)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition dark:border-zinc-700 ${
              active === i.k ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "hover:bg-zinc-50 dark:hover:bg-zinc-800"
            }`}
          >
            {i.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{current.text}</p>
    </div>
  );
}

