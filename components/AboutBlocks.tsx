"use client";

import Reveal from "@/components/Reveal";

const TOOLBOX: Record<string, string[]> = {
  "Programming": ["Python", "SQL", "Java", "C"],
  "Databases": ["PostgreSQL", "MS SQL Server", "Oracle", "Redshift"],
  "ML / Modeling": [
    "scikit-learn",
    "XGBoost",
    "LightGBM",
    "CatBoost",
    "ARIMA/Prophet",
    "TensorFlow",
    "Keras",
    "LSTMs",
    "SHAP",
    "Optuna"
  ],
  "Cloud": ["AWS S3", "EC2", "Lambda", "Redshift", "SageMaker", "Glue", "CloudWatch"],
  "Analytics / Viz": ["Tableau", "Power BI", "Excel", "Matplotlib", "Seaborn"],
  "Tools": ["Git", "Jupyter", "OpenCV", "MediaPipe"]
};

export default function AboutBlocks() {
  return (
    <div className="mt-8 space-y-8">
      <Reveal>
        <div>
          <h3 className="text-base font-semibold">Focus Areas</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Production ML systems: data pipelines, feature engineering, model training and serving.</li>
            <li>Time-series forecasting and experimentation; gradient boosting ensembles with explainability.</li>
            <li>Monitoring, evaluation, and pragmatic MLOps for measurable business impact.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div>
          <h3 className="text-base font-semibold">Recent Highlights</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>IEEE CICT 2025 paper on electricity demand forecasting with SHAP‑backed insights.</li>
            <li>EPAM: built ETL/ML pipelines on AWS; improved conversions and reduced downtime.</li>
            <li>Projects: flight delay prediction, Airbnb booking rate classification, anomaly detection with LSTMs.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          <h3 className="text-base font-semibold">Toolbox</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {Object.entries(TOOLBOX).map(([group, items]) => (
              <div key={group} className="rounded-2xl border bg-white/5 p-4 dark:border-zinc-800 dark:bg-zinc-900/30">
                <p className="text-xs font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">{group}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="badge">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

