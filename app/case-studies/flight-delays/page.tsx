import Link from "next/link";

export const metadata = {
  title: "U.S. Flight Delay Prediction — Case Study"
};

export default function FlightCase() {
  return (
    <article className="prose mx-auto py-12">
      <Link href="/" className="link mb-6 inline-block">← Back</Link>
      <h1 className="text-3xl font-bold tracking-tight">U.S. Flight Delay Prediction</h1>
      <p><strong>Role:</strong> ML Engineer · <strong>Stack:</strong> Python, XGBoost, Feature Engineering, Next.js</p>
      <h2>Problem</h2>
      <p>Predict departure delays with enough lead time to adjust gate ops and crew scheduling.</p>
      <h2>Approach</h2>
      <ul>
        <li>Enriched BTS flight data with Visual Crossing hourly weather</li>
        <li>Cyclical time encodings, careful leakage checks, robust CV</li>
        <li>Model cards + feature importance plots for interpretability</li>
      </ul>
      <h2>Impact</h2>
      <ul>
        <li>Actionable probability thresholds for ops dashboards</li>
        <li>API-ready design for near‑real‑time scoring</li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li><a className="link" href="https://github.com/your-github/flight-delay-ml" target="_blank">Repository</a></li>
      </ul>
    </article>
  )
}
