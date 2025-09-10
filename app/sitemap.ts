import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://your-domain.com'
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/case-studies/energy-forecasting`, lastModified: new Date() },
    { url: `${base}/case-studies/flight-delays`, lastModified: new Date() },
    { url: `${base}/case-studies/airbnb-high-booking`, lastModified: new Date() },
  ]
}
