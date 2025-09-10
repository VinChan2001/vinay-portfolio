import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(0,0,0,0.2)"
      }
    }
  },
  plugins: []
}
export default config;
