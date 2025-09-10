"use client";

import Reveal from "@/components/Reveal";

type SkillsMap = Record<string, { items: string[]; color: string; icon: string }>;

const SKILLS: SkillsMap = {
  "Programming": {
    items: ["Python", "SQL", "TypeScript", "JavaScript", "R"],
    color: "from-emerald-500 to-green-600",
    icon: "💻"
  },
  "Machine Learning": {
    items: ["scikit-learn", "XGBoost", "LightGBM", "CatBoost", "TensorFlow", "Keras", "PyTorch", "SHAP", "Optuna"],
    color: "from-blue-500 to-indigo-600",
    icon: "🤖"
  },
  "Data Engineering": {
    items: ["Pandas", "NumPy", "Apache Spark", "Airflow", "MLflow", "DBT", "FastAPI", "Kafka"],
    color: "from-purple-500 to-violet-600",
    icon: "⚙️"
  },
  "Cloud & Infrastructure": {
    items: ["AWS S3", "AWS Lambda", "Redshift", "Docker", "Kubernetes", "Git", "CI/CD"],
    color: "from-orange-500 to-red-600",
    icon: "☁️"
  },
  "Analytics & Visualization": {
    items: ["Tableau", "Plotly", "Matplotlib", "Seaborn", "Streamlit", "Power BI", "D3.js"],
    color: "from-pink-500 to-rose-600",
    icon: "📊"
  }
};

export default function SkillsGrid() {
  return (
    <div className="relative mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
      <Reveal className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700 ring-1 ring-teal-200 dark:bg-teal-500/10 dark:text-teal-400 dark:ring-teal-500/20 mb-6 magnetic">
          <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></div>
          Technical Skills
        </div>
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mb-6">
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
            Technology
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Arsenal
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          End-to-end ML toolkit from data ingestion to production deployment.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {Object.entries(SKILLS).map(([category, { items, color, icon }], idx) => (
          <Reveal key={category} delay={0.1 + idx * 0.1}>
            <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 p-6 shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 magnetic hover:shadow-2xl transition-all duration-500">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${color} text-white shadow-lg`}>
                  <span className="text-lg">{icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {items.length} tools
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2">
                {items.map((skill, skillIdx) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-center rounded-lg bg-gray-50/80 dark:bg-gray-700/50 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-600/50 transition-colors cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}