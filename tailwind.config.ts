import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1220",
          950: "#08101D",
          900: "#0B1220",
          800: "#121A2C",
        },
        cream: "#F5F1E8",
        brass: {
          DEFAULT: "#C9A45C",
          400: "#D8B875",
          500: "#C9A45C",
          600: "#B08C48",
        },
        muted: "#68717D",
        line: "#DCD7CC",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 24px 60px -28px rgba(11, 18, 32, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
