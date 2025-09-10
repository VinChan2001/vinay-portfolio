"use client";

import { motion } from "framer-motion";
import SmoothAnchor from "@/components/SmoothAnchor";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function HeroContent() {
  return (
    <motion.div
      className="relative mx-auto max-w-6xl px-6 py-32 text-center sm:py-40 md:py-48"
      variants={container}
      initial="hidden"
      animate="visible"
    >

      {/* Status badge */}
      <motion.div variants={item} className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/30">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
          Available for opportunities
        </span>
      </motion.div>

      {/* Name with gradient */}
      <motion.h1
        variants={item}
        className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:400%_400%]">
          Vinay
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent animate-gradient bg-[length:400%_400%]">
          Chanamallu
        </span>
      </motion.h1>

      {/* Role with emphasis */}
      <motion.div variants={item} className="mt-8 mb-6">
        <p className="text-2xl font-bold text-gray-600 dark:text-gray-300 sm:text-3xl">
          Data Scientist & ML Engineer
        </p>
        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </motion.div>

      {/* Enhanced description */}
      <motion.p variants={item} className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
        I transform data into intelligent solutions through end-to-end ML pipelines, <span className="font-semibold text-gray-900 dark:text-white">advanced feature engineering</span>, and <span className="font-semibold text-gray-900 dark:text-white">production-ready models</span> that deliver measurable business impact.
      </motion.p>

      {/* Redesigned CTA Buttons */}
      <motion.div variants={item} className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <SmoothAnchor
          href="#about"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl magnetic ripple-effect animate-gradient glow-animation"
        >
          <span className="relative z-10">Discover My Story</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </SmoothAnchor>
        
        <div className="flex gap-3">
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 magnetic hover:shadow-lg"
          >
            <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-chanamallu/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 magnetic hover:shadow-lg"
          >
            <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
            LinkedIn
          </a>
          <a
            href="https://github.com/VinChan2001"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-gray-800 hover:text-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:border-white dark:hover:text-white magnetic hover:shadow-lg shake"
          >
            <Github className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180" />
            GitHub
          </a>
        </div>
      </motion.div>

    </motion.div>
  );
}