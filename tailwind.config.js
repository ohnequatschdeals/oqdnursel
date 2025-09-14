/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-gradient-start": "#ec4899", // Pink
        "brand-gradient-mid1": "#a855f7", // Lila
        "brand-gradient-mid2": "#22d3ee", // Türkis
        "brand-gradient-mid3": "#3b82f6", // Blau
        "brand-gradient-end": "#1e3a8a", // Dunkelblau
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
