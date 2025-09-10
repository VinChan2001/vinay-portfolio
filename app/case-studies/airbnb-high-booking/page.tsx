import Link from "next/link";

export const metadata = {
  title: "Airbnb High‑Booking Model — Case Study"
};

export default function AirbnbCase() {
  return (
    <article className="prose mx-auto py-12">
      <Link href="/" className="link mb-6 inline-block">← Back</Link>
      <h1 className="text-3xl font-bold tracking-tight">Airbnb High‑Booking Model</h1>
      <p><strong>Role:</strong> ML Engineer · <strong>Stack:</strong> Python, XGBoost/CatBoost, SHAP, Next.js</p>
      <h2>Problem</h2>
      <p>Identify listings likely to achieve high booking rates to optimize pricing and promos.</p>
      <h2>Approach</h2>
      <ul>
        <li>Extensive categorical & text encodings, amenities parsing</li>
        <li>Location clustering (KMeans), stacked ensemble, calibration</li>
        <li>Global & local SHAP explanations for levers</li>
      </ul>
      <h2>Impact</h2>
      <ul>
        <li>Leaderboard AUC ≈ 0.9166</li>
        <li>Interpretable drivers (host responsiveness, amenities groups, location clusters)</li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li><a className="link" href="https://github.com/your-github/airbnb-ml" target="_blank">Repository</a></li>
      </ul>
    </article>
  )
}
