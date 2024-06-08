import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-roboto)", "sans-serif"],
    },
    spacing: {
      "1": "20px",
      "2": "30px",
      "3": "36px",
    },
    fontSize: {
      xl: "5.625rem",
      lg: "2.5rem",
      md: "1.75rem",
      base: "1.125rem",
      sm: "1rem",
      xs: "0.625rem",
    },
    colors: {
      green: "#0B3B3C",
      olive: "#A5B8A0",
      lightOlive: "#E8EFE9",
      crimson: "#7E0707",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
export default config;
