import Link from "next/link";

export const metadata = {
  title: "Grid‑Scale Energy Forecasting — Case Study"
};

export default function EnergyCase() {
  return (
    <article className="prose mx-auto py-12">
      <Link href="/" className="link mb-6 inline-block">← Back</Link>
      <h1 className="text-3xl font-bold tracking-tight">Grid‑Scale Energy Forecasting</h1>
      <p><strong>Role:</strong> Lead ML Engineer · <strong>Stack:</strong> Python, XGBoost/LightGBM/CatBoost, Optuna, SHAP, Next.js</p>
      <h2>Problem</h2>
      <p>National grid needed hourly demand forecasts with explanations reliable enough for scheduling and comms.</p>
      <h2>Approach</h2>
      <ul>
        <li>Leakage‑safe time‑series features (lags, rollings, Fourier, anomaly flags)</li>
        <li>Chronological splits; Optuna‑tuned gradient boosting ensemble</li>
        <li>Explainability with SHAP (global + local), stakeholder‑friendly visuals</li>
      </ul>
      <h2>Impact</h2>
      <ul>
        <li>RMSE ≈ 2,954 MW (R² ≈ 0.977) on 2017–2024 data</li>
        <li>Surfaced weekend late‑morning deviations, improved scheduling calls</li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li><a className="link" href="https://github.com/your-github/energy-forecasting" target="_blank">Repository</a></li>
        <li><a className="link" href="https://example.com/ieee-paper" target="_blank">IEEE CICT 2025 (paper)</a></li>
      </ul>
    </article>
  )
}
