import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fefdf8",
          100: "#fdf9ed",
          200: "#f8f0d6",
          300: "#f0e3b5",
          400: "#e6cf89",
          500: "#d4b05e",
        },
        olive: {
          50: "#f4f6f0",
          100: "#e5eadb",
          200: "#c9d4b7",
          300: "#a4b88a",
          400: "#7d9a5e",
          500: "#5c7a3e",
          600: "#4a6232",
          700: "#3a4e28",
          800: "#2e3e20",
          900: "#1e2b14",
        },
        gold: {
          300: "#e8c97a",
          400: "#d4a843",
          500: "#b8860b",
          600: "#9a6f09",
        },
        bark: {
          300: "#c4a882",
          400: "#a8845a",
          500: "#7d5c3a",
          600: "#5c3f24",
          700: "#3d2810",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
