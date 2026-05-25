import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#07070A",
        primary: "#7C5CFF",
        glow: "#A78BFA",
        text: "#E5E7EB"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        aurora: "0 0 80px rgba(124, 92, 255, 0.28)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.10), 0 24px 70px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(167,139,250,.12) 0 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
