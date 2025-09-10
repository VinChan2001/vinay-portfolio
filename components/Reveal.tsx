"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
  delay?: number; // seconds
  y?: number; // translateY px
}>;

export default function Reveal({ children, className, delay = 0, y = 24 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ amount: 0.35, once: false }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

