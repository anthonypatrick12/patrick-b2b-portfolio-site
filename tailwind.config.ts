import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx,json}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-inter)"],
        body: ["var(--font-inter)"]
      },
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d6ebff",
          200: "#add7ff",
          300: "#7dbdff",
          400: "#4da0ff",
          500: "#1e82ff",
          600: "#1466db",
          700: "#104fb0",
          800: "#0d3b87",
          900: "#0b2f6a"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(30,130,255,0.35)"
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)"
      }
    },
  },
  plugins: [typography],
};
export default config;
