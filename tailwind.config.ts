import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-hero": "#0E0F1A",
        "brand-textlight": "#ffffff",
        "brand-pink": "#ec4899",
        "brand-purple": "#8b5cf6",
        "brand-cyan": "#22d3ee",
        "brand-blue": "#3b82f6",
        "brand-darkblue": "#1e3a8a",
      },
    },
  },
  plugins: [],
};
export default config;
