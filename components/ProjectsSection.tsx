"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { 
  ExternalLink, Github, TrendingUp, 
  Target, Database, BarChart3 
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  metrics: string;
  tech: string[];
  github?: string;
  category: "ml" | "data";
};

const projects: Project[] = [
  {
    title: "Time-Series Energy Forecasting",
    description: "Time series forecasting model for India's energy consumption using advanced ML techniques and statistical methods.",
    metrics: "Python • Jupyter • ML • Time Series",
    tech: ["Python", "Jupyter", "ML", "Forecasting"],
    github: "https://github.com/VinChan2001/Time-series-forecasting-of-energy-in-India",
    category: "ml"
  },
  {
    title: "LLM 101: Bytes to GPT", 
    description: "Educational project building a tiny GPT model from scratch. Learn LLMs through tokenization, bigram models, and baby transformers.",
    metrics: "Python • PyTorch • Transformers • Educational",
    tech: ["Python", "PyTorch", "Transformers", "LLM"],
    github: "https://github.com/VinChan2001/llm-101-bytes-to-gpt",
    category: "ml"
  },
  {
    title: "Doodle Digit App",
    description: "Interactive handwritten digit recognition using k-NN classifier on 8x8 pixel images with Gradio web interface.",
    metrics: "Python • scikit-learn • Gradio • Interactive",
    tech: ["Python", "scikit-learn", "Gradio", "ML"],
    github: "https://github.com/VinChan2001/doodle-digit-app",
    category: "ml"
  },
  {
    title: "Flight Delay Prediction Pipeline", 
    description: "End-to-end ML pipeline for predicting flight delays with feature engineering and model optimization.",
    metrics: "Python • ML • Pipeline • Prediction",
    tech: ["Python", "ML", "Pipeline", "Jupyter"],
    github: "https://github.com/VinChan2001/Flight-Delay-Prediction-Pipeline",
    category: "ml"
  },
  {
    title: "Airbnb High-Booking Prediction",
    description: "Predictive model for identifying high-booking rate Airbnb listings using ensemble methods and feature engineering.",
    metrics: "Python • ML • Ensemble • Feature Engineering",
    tech: ["Python", "ML", "Ensemble", "Jupyter"],
    github: "https://github.com/VinChan2001/Predicting-High-Booking-Rate-Airbnb-Listings",
    category: "ml"
  },
  {
    title: "LSTM Action Recognition",
    description: "Deep learning model using LSTM networks for human action recognition from video sequences.",
    metrics: "Python • LSTM • Deep Learning • Computer Vision",
    tech: ["Python", "LSTM", "Deep Learning", "CV"],
    github: "https://github.com/VinChan2001/LSTM_action_recognition",
    category: "ml"
  },
  {
    title: "Crash Duration Prediction",
    description: "Predictive modeling system for estimating crash durations using machine learning techniques.",
    metrics: "Python • ML • Predictive Modeling • Analysis",
    tech: ["Python", "ML", "Analysis", "Jupyter"],
    github: "https://github.com/VinChan2001/Crash-Duration-Prediction",
    category: "ml"
  },
  {
    title: "Amtrak Performance Analysis",
    description: "SQL-based analysis project examining Amtrak's operational performance and service metrics.",
    metrics: "SQL • Data Analysis • Performance • Transportation",
    tech: ["SQL", "Analysis", "Data", "Transportation"],
    github: "https://github.com/VinChan2001/Amtrak-Performance",
    category: "data"
  }
];

export default function ProjectsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ml": return <Target className="w-3 h-3" />;
      case "data": return <BarChart3 className="w-3 h-3" />;
      default: return <Database className="w-3 h-3" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ml": return "from-blue-500 to-purple-600";
      case "data": return "from-emerald-500 to-teal-600";  
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="relative w-full py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <Reveal>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
              Projects
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            A few case studies that show how I design, build, and ship.
          </p>
        </Reveal>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.1 + index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-600"
                style={{
                  background: `linear-gradient(135deg, ${
                    index % 6 === 0 ? '#fafafa to #ffffff' :
                    index % 6 === 1 ? '#f0f9ff to #ffffff' :
                    index % 6 === 2 ? '#f0fdf4 to #ffffff' :
                    index % 6 === 3 ? '#fef7f0 to #ffffff' :
                    index % 6 === 4 ? '#fdf4ff to #ffffff' :
                    '#fff7ed to #ffffff'
                  })`,
                }}
              >
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white font-bold text-lg shadow-sm ${
                      index % 6 === 0 ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                      index % 6 === 1 ? 'bg-gradient-to-br from-cyan-500 to-blue-600' :
                      index % 6 === 2 ? 'bg-gradient-to-br from-emerald-500 to-green-600' :
                      index % 6 === 3 ? 'bg-gradient-to-br from-orange-500 to-amber-600' :
                      index % 6 === 4 ? 'bg-gradient-to-br from-purple-500 to-violet-600' :
                      'bg-gradient-to-br from-rose-500 to-pink-600'
                    }`}>
                      {project.title.charAt(0)}
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                      index % 6 === 0 ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                      index % 6 === 1 ? 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300' :
                      index % 6 === 2 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' :
                      index % 6 === 3 ? 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                      index % 6 === 4 ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                      'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'
                    }`}>
                      {getCategoryIcon(project.category)}
                      <span className="text-xs font-semibold">
                        {project.category === 'ml' ? 'ML/AI' : 'Data'}
                      </span>
                    </div>
                  </div>
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      index % 6 === 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                      index % 6 === 1 ? 'bg-cyan-600 hover:bg-cyan-700 text-white' :
                      index % 6 === 2 ? 'bg-emerald-600 hover:bg-emerald-700 text-white' :
                      index % 6 === 3 ? 'bg-orange-600 hover:bg-orange-700 text-white' :
                      index % 6 === 4 ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                      'bg-rose-600 hover:bg-rose-700 text-white'
                    }`}
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                    <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

    </div>
  );
}