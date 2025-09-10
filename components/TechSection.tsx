"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiPython, SiR, SiMysql, SiJavascript, SiPandas, SiNumpy, SiScikitlearn,
  SiTensorflow, SiPytorch, SiDocker, SiKubernetes, SiFastapi, SiStreamlit,
  SiTableau, SiPlotly, SiMongodb, SiPostgresql, SiApachespark,
  SiJupyter, SiGit, SiGooglecloud, SiDatabricks, SiSnowflake, SiApacheairflow
} from "react-icons/si";
import { 
  Database, BarChart3, TestTube, Clock, Microscope, Target,
  Activity, Calculator, TrendingUp, Code2, Cloud, FileCode,
  Coffee, Zap, Settings, Eye, Video, Server, FileSpreadsheet
} from "lucide-react";

type Skill = { name: string; level: 1 | 2 | 3 | 4 | 5 };
type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
};


const getSkillIcon = (skillName: string) => {
  const iconMap: { [key: string]: React.ReactElement } = {
    "Python": <SiPython className="text-blue-500" />,
    "R": <SiR className="text-blue-600" />,
    "SQL": <SiMysql className="text-orange-500" />,
    "JavaScript": <SiJavascript className="text-yellow-500" />,
    "Pandas": <SiPandas className="text-purple-600" />,
    "NumPy": <SiNumpy className="text-blue-500" />,
    "scikit-learn": <SiScikitlearn className="text-orange-500" />,
    "SciPy": <Calculator className="text-blue-500" />,
    "Statsmodels": <TrendingUp className="text-green-500" />,
    "Statistical Modeling": <BarChart3 className="text-blue-500" />,
    "A/B Testing": <TestTube className="text-green-500" />,
    "Time Series": <Clock className="text-purple-500" />,
    "Hypothesis Testing": <Microscope className="text-blue-500" />,
    "Bayesian Methods": <Target className="text-red-500" />,
    "TensorFlow": <SiTensorflow className="text-orange-500" />,
    "PyTorch": <SiPytorch className="text-red-500" />,
    "XGBoost": <Activity className="text-green-500" />,
    "LightGBM": <Activity className="text-blue-500" />,
    "Transformers": <Activity className="text-purple-500" />,
    "Docker": <SiDocker className="text-blue-500" />,
    "Kubernetes": <SiKubernetes className="text-blue-600" />,
    "FastAPI": <SiFastapi className="text-green-500" />,
    "Streamlit": <SiStreamlit className="text-red-500" />,
    "Tableau": <SiTableau className="text-blue-600" />,
    "Power BI": <BarChart3 className="text-yellow-500" />,
    "Matplotlib": <BarChart3 className="text-blue-500" />,
    "Seaborn": <BarChart3 className="text-teal-500" />,
    "Plotly": <SiPlotly className="text-blue-500" />,
    "BigQuery": <SiGooglecloud className="text-blue-500" />,
    "Snowflake": <SiSnowflake className="text-blue-400" />,
    "PostgreSQL": <SiPostgresql className="text-blue-600" />,
    "Apache Spark": <SiApachespark className="text-orange-500" />,
    "MongoDB": <SiMongodb className="text-green-500" />,
    "Jupyter": <SiJupyter className="text-orange-500" />,
    "Git": <SiGit className="text-red-500" />,
    "VS Code": <FileCode className="text-blue-500" />,
    "MLflow": <Activity className="text-blue-500" />,
    "Airflow": <SiApacheairflow className="text-red-500" />,
    "AWS SageMaker": <Cloud className="text-orange-500" />,
    "Google Cloud AI": <SiGooglecloud className="text-blue-500" />,
    "Azure ML": <Cloud className="text-blue-500" />,
    "Databricks": <SiDatabricks className="text-red-500" />,
    "OpenAI API": <Activity className="text-green-500" />,
    "Java": <Coffee className="text-red-600" />,
    "C": <Code2 className="text-blue-600" />,
    "Keras": <Activity className="text-red-500" />,
    "CatBoost": <Activity className="text-purple-500" />,
    "ARIMA": <TrendingUp className="text-blue-500" />,
    "Prophet": <TrendingUp className="text-green-500" />,
    "MS SQL Server": <Server className="text-blue-600" />,
    "Oracle": <Database className="text-red-500" />,
    "Amazon Redshift": <Cloud className="text-red-600" />,
    "Microsoft Excel": <FileSpreadsheet className="text-green-600" />,
    "AWS S3": <Cloud className="text-orange-500" />,
    "AWS EC2": <Server className="text-orange-500" />,
    "AWS Lambda": <Zap className="text-orange-500" />,
    "AWS Redshift": <Cloud className="text-orange-600" />,
    "AWS RDS": <Database className="text-orange-500" />,
    "AWS Glue": <Settings className="text-orange-500" />,
    "CloudWatch": <Eye className="text-blue-500" />,
    "Jupyter Notebook": <SiJupyter className="text-orange-500" />,
    "OpenCV": <Eye className="text-blue-600" />,
    "MediaPipe": <Video className="text-green-500" />
  };
  
  return iconMap[skillName] || <Database className="text-gray-500" />;
};

const skillCategories = {
  ml: [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Python", level: 5 },
        { name: "SQL", level: 5 },
        { name: "Java", level: 4 },
        { name: "C", level: 3 },
        { name: "R", level: 2 },
      ]
    },
    {
      title: "ML Frameworks",
      icon: "🧠",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "scikit-learn", level: 5 },
        { name: "TensorFlow", level: 4 },
        { name: "Keras", level: 4 },
        { name: "XGBoost", level: 5 },
        { name: "LightGBM", level: 5 },
        { name: "CatBoost", level: 4 },
        { name: "ARIMA", level: 4 },
        { name: "Prophet", level: 4 },
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🚀",
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Git", level: 5 },
        { name: "Jupyter Notebook", level: 5 },
        { name: "OpenCV", level: 4 },
        { name: "MediaPipe", level: 3 },
      ]
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "AWS S3", level: 5 },
        { name: "AWS EC2", level: 4 },
        { name: "AWS Lambda", level: 4 },
        { name: "AWS Redshift", level: 4 },
        { name: "AWS RDS", level: 4 },
        { name: "AWS SageMaker", level: 4 },
        { name: "AWS Glue", level: 3 },
        { name: "CloudWatch", level: 4 },
      ]
    },
    {
      title: "Database Management",
      icon: "🗄️",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "PostgreSQL", level: 5 },
        { name: "MS SQL Server", level: 4 },
        { name: "Oracle", level: 3 },
        { name: "Amazon Redshift", level: 4 },
      ]
    },
    {
      title: "Data Visualization",
      icon: "📊",
      color: "from-teal-500 to-cyan-600",
      skills: [
        { name: "Tableau", level: 5 },
        { name: "Power BI", level: 4 },
        { name: "Microsoft Excel", level: 5 },
        { name: "Matplotlib", level: 4 },
        { name: "Seaborn", level: 4 },
      ]
    }
  ],
  ds: [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Python", level: 5 },
        { name: "SQL", level: 5 },
        { name: "R", level: 2 },
      ]
    },
    {
      title: "Data Science Libraries",
      icon: "📈",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Pandas", level: 5 },
        { name: "NumPy", level: 5 },
        { name: "scikit-learn", level: 5 },
        { name: "SciPy", level: 4 },
        { name: "Statsmodels", level: 4 },
      ]
    },
    {
      title: "Statistical Methods",
      icon: "🎯",
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Statistical Modeling", level: 5 },
        { name: "A/B Testing", level: 5 },
        { name: "Time Series", level: 4 },
        { name: "Hypothesis Testing", level: 5 },
        { name: "Bayesian Methods", level: 3 },
      ]
    },
    {
      title: "Visualization",
      icon: "📊",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Tableau", level: 5 },
        { name: "Power BI", level: 4 },
        { name: "Matplotlib", level: 5 },
        { name: "Seaborn", level: 5 },
        { name: "Plotly", level: 4 },
      ]
    },
    {
      title: "Data Platforms",
      icon: "🏗️",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "BigQuery", level: 4 },
        { name: "Snowflake", level: 4 },
        { name: "PostgreSQL", level: 5 },
        { name: "Apache Spark", level: 4 },
      ]
    },
    {
      title: "Tools & Environment",
      icon: "🔧",
      color: "from-teal-500 to-cyan-600",
      skills: [
        { name: "Jupyter", level: 5 },
        { name: "Git", level: 5 },
        { name: "Docker", level: 4 },
        { name: "VS Code", level: 5 },
      ]
    }
  ]
};

export default function TechSection() {
  const [mode, setMode] = useState<"ml" | "ds">("ml");
  const currentCategories = skillCategories[mode];

  const getFlameIntensity = (level: number) => {
    if (level >= 5) return { emoji: "🔥", glow: "drop-shadow(0 0 8px rgba(251,146,60,0.8))" };
    if (level >= 4) return { emoji: "🔥", glow: "drop-shadow(0 0 6px rgba(251,146,60,0.6))" };
    if (level >= 3) return { emoji: "💨", glow: "drop-shadow(0 0 4px rgba(59,130,246,0.4))" };
    return { emoji: "✨", glow: "drop-shadow(0 0 2px rgba(156,163,175,0.3))" };
  };

  const getHottestSkillInCategory = (skills: { name: string; level: number; }[]) => {
    return skills.reduce((hottest, current) => 
      current.level > hottest.level ? current : hottest
    );
  };

  return (
    <div className="relative w-full py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700 ring-1 ring-teal-200 dark:bg-teal-500/10 dark:text-teal-400 dark:ring-teal-500/20 mb-6">
            <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            Skills
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl mb-6">
            <motion.span 
              className="bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent dark:from-slate-100 dark:via-indigo-200 dark:to-purple-200"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              My Tech Stack
            </motion.span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
            Expertise across {mode === 'ml' ? 'machine learning engineering and deployment' : 'data science and analytics'} technologies
          </p>
        </Reveal>

        {/* Mode Toggle */}
        <Reveal delay={0.3}>
          <motion.div 
            className="inline-flex items-center rounded-2xl bg-white/90 p-2 shadow-xl ring-1 ring-gray-200 dark:bg-gray-800/90 dark:ring-gray-700"
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              onClick={() => setMode('ml')}
              className={`px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                mode === 'ml' 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' 
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🤖 ML Engineer
            </motion.button>
            
            <motion.button
              onClick={() => setMode('ds')}
              className={`px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                mode === 'ds' 
                ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg' 
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📊 Data Scientist
            </motion.button>
          </motion.div>
        </Reveal>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
          {currentCategories.map((category, categoryIndex) => {
            const hottestSkill = getHottestSkillInCategory(category.skills);
            
            return (
              <Reveal key={`${mode}-${category.title}`} delay={0.1 + categoryIndex * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: categoryIndex * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 backdrop-blur-sm border border-white/40 dark:border-gray-600/40 hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] w-full max-w-sm shadow-lg"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div 
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color} shadow-md`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-lg">{category.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => {
                      const { emoji, glow } = getFlameIntensity(skill.level);
                      const pct = skill.level * 20;
                      const isHottest = skill.name === hottestSkill.name && skill.level >= 5;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          whileInView={isHottest ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.4 + categoryIndex * 0.15 + skillIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          className="group px-3 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-600/90 hover:shadow-sm border border-transparent hover:border-white/60 dark:hover:border-gray-500/60"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{getSkillIcon(skill.name)}</span>
                              <h4 className="text-sm font-semibold transition-colors text-slate-700 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white">
                                {skill.name}
                              </h4>
                            </div>
                            {/* Router-style Signal Dots */}
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((dotLevel) => {
                                const isActive = skill.level >= dotLevel;
                                
                                const getDotStyle = () => {
                                  if (!isActive) return 'bg-gray-400 dark:bg-gray-500';
                                  
                                  switch (dotLevel) {
                                    case 1: return 'bg-gradient-to-t from-green-400 to-green-500 shadow-sm shadow-green-400/30';
                                    case 2: return 'bg-gradient-to-t from-yellow-400 to-yellow-500 shadow-sm shadow-yellow-400/40';
                                    case 3: return 'bg-gradient-to-t from-orange-400 to-orange-500 shadow-md shadow-orange-400/50';
                                    case 4: return 'bg-gradient-to-t from-red-400 to-red-500 shadow-md shadow-red-400/60';
                                    case 5: return 'bg-gradient-to-t from-purple-500 to-pink-500 shadow-lg shadow-purple-400/70 animate-pulse';
                                    default: return 'bg-orange-400';
                                  }
                                };
                                
                                return (
                                  <motion.div
                                    key={dotLevel}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ 
                                      scale: isActive ? 1 : 0.6, 
                                      opacity: isActive ? 1 : 0.3 
                                    }}
                                    transition={{ 
                                      duration: 0.3,
                                      delay: 0.6 + categoryIndex * 0.15 + skillIndex * 0.05 + dotLevel * 0.1,
                                      type: "spring",
                                      stiffness: 200
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${getDotStyle()}`}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* CTA Button to Projects */}
      <Reveal delay={0.5}>
        <div className="mt-12 flex justify-center">
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Projects</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
        </div>
      </Reveal>
    </div>
  );
}