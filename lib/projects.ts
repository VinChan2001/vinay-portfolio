export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "energy-forecasting",
    title: "Grid‑Scale Energy Forecasting",
    blurb: "Leakage‑safe time‑series pipeline (64K rows), Optuna‑tuned gradient boosting ensemble, SHAP insights & decision support dashboards.",
    tags: ["Next.js", "Python", "XGBoost", "SHAP", "Vercel"],
    links: [{ label: "Case Study", href: "/case-studies/energy-forecasting" }]
  },
  {
    slug: "flight-delays",
    title: "U.S. Flight Delay Prediction",
    blurb: "3.6M flights with weather enrichment, robust CV, feature importance, and deployment‑ready API design.",
    tags: ["Next.js", "XGBoost", "Pipelines", "Cloud"],
    links: [{ label: "Case Study", href: "/case-studies/flight-delays" }]
  },
  {
    slug: "airbnb-high-booking",
    title: "Airbnb High‑Booking Model",
    blurb: "Stacked XGBoost+CatBoost+NN ensemble (1,200+ features) with calibration and SHAP explainability.",
    tags: ["ML", "CatBoost", "Calibration", "SHAP"],
    links: [{ label: "Case Study", href: "/case-studies/airbnb-high-booking" }]
  }
];
