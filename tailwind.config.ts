// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oq: {
          pink: "#ec4899",
          violet: "#8b5cf6",
          turquoise: "#22d3ee",
          blue: "#3b82f6",
          dark: "#1e3a8a",
          bg: "#0E0F1A",
          bg2: "#0e0f1b",
          bg3: "#1a0e23",
          text: "#ffffff",
          muted: "#d1d5db",
        },
      },
      backgroundImage: {
        "oq-gradient":
          "linear-gradient(90deg,#ec4899,#8b5cf6,#22d3ee,#3b82f6,#1e3a8a)",
        "oq-section": "linear-gradient(180deg,#0e0f1b 0%,#1a0e23 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
