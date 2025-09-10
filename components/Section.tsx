"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Section({ id, children, className = "" }: { id?: string, children: ReactNode, className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
