import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070d18",
          900: "#0b1426",
          800: "#12203c",
          700: "#1b315c",
          600: "#274785",
        },
        teal: {
          400: "#3ad4e3",
          500: "#14b8c8",
          600: "#0e8f9c",
        },
        brass: {
          300: "#e8d5a3",
          400: "#d4b56a",
          500: "#c4a35a",
          600: "#9a7c38",
        },
        paper: "#f6f3ec",
        ink: "#121820",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 24px 60px -28px rgba(11, 20, 38, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
