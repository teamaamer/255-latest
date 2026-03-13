import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: { max: "809px" },
      tablet: { min: "810px", max: "1199px" },
      desktop: { min: "1200px" },
      sm: "640px",
      md: "810px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        accent: "var(--color-accent)",
        "gray-1": "var(--color-dark-gray)",
        "gray-2": "var(--color-gray)",
        "gray-3": "var(--color-silver)",
        "gray-4": "var(--color-border)",
        "light-bg": "var(--color-light-gray)",
        "orange-secondary": "var(--color-orange-secondary)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        "inter-display": ["var(--font-inter)", "Inter", "sans-serif"],
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      animation: {
        "ticker": "ticker 30s linear infinite",
        "spin-slow": "spin 15s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
