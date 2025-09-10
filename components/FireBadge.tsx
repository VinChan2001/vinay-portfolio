"use client";

import { motion } from "framer-motion";

export default function FireBadge({ name, level }: { name: string; level: 1|2|3|4|5 }) {
  const pct = level * 20;
  const getFlameIntensity = () => {
    if (level >= 5) return { emoji: "🔥", glow: "drop-shadow(0 0 8px rgba(251,146,60,0.8))" };
    if (level >= 4) return { emoji: "🔥", glow: "drop-shadow(0 0 6px rgba(251,146,60,0.6))" };
    if (level >= 3) return { emoji: "💨", glow: "drop-shadow(0 0 4px rgba(59,130,246,0.4))" };
    return { emoji: "✨", glow: "drop-shadow(0 0 2px rgba(156,163,175,0.3))" };
  };
  
  const { emoji, glow } = getFlameIntensity();
  
  return (
    <motion.div 
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 hover:bg-white/80 dark:hover:bg-zinc-800/80 transition-all duration-300"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        borderColor: level >= 4 ? "rgba(251,146,60,0.5)" : "rgba(156,163,175,0.3)"
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: false }}
    >
      <motion.span
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {name}
      </motion.span>
      <div className="relative h-1.5 w-16 overflow-hidden rounded-full bg-zinc-200/60 dark:bg-zinc-700/60">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-500 to-rose-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: Math.random() * 0.2
          }}
          whileHover={{
            background: level >= 4 
              ? "linear-gradient(90deg, #f59e0b, #ef4444, #dc2626)"
              : "linear-gradient(90deg, #fb923c, #fbbf24, #f97316)",
            transition: { duration: 0.3 }
          }}
        />
        <motion.span
          className="absolute -top-2 text-[12px]"
          initial={{ left: 0, opacity: 0 }}
          whileInView={{ left: `${pct}%`, opacity: 1 }}
          viewport={{ amount: 0.3, once: false }}
          style={{ 
            transform: "translateX(-50%)",
            filter: glow
          }}
          animate={{
            y: [-1, -3, -1],
            rotate: [-2, 2, -2],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 1.5 + Math.random(),
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden
        >
          {emoji}
        </motion.span>
        
        {/* Sparkle effects for high-level skills */}
        {level >= 4 && (
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(251,146,60,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(251,146,60,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(251,146,60,0.3) 0%, transparent 50%)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}
      </div>
    </motion.div>
  );
}

