import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";
import HeroMotion from "@/components/HeroMotion";
import ParticleSystem from "@/components/ParticleSystem";
import LoadingAnimation from "@/components/LoadingAnimation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vinaychanamallu.com"),
  title: {
    default: "Vinay — Data Scientist / ML Engineer",
    template: "%s • Vinay"
  },
  description: "Professional portfolio by Venkata Chandrasekhar Vinay Chanamallu — full‑stack developer & ML engineer. Case studies, projects, and contact.",
  openGraph: {
    title: "Vinay — Data Scientist / ML Engineer",
    description: "Case studies that ship value. Clean code, clear UX, measurable impact.",
    url: "https://vinaychanamallu.com",
    siteName: "Vinay Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: `(function(){try{var m=localStorage.getItem('theme');if(m){document.documentElement.classList.toggle('dark', m==='dark')}}catch(e){}})();`}} />
      </head>
      <body className={`${inter.variable} body-gradient min-h-screen text-gray-900 antialiased selection:bg-gray-900 selection:text-white dark:bg-gray-900 dark:text-gray-100`}>
        {/* Loading animation */}
        <LoadingAnimation />
        {/* Global background + parallax controller */}
        <ParticleSystem />
        <BackgroundFX />
        <HeroMotion />
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
