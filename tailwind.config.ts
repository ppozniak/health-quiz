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
      "0": "0",
      "1": "10px",
      "2": "20px",
      "3": "30px",
      "4": "36px",
      "5": "70px",
    },
    fontSize: {
      xl: ["5.625rem", "1"],
      lg: ["2.5rem", "1.1"],
      md: ["1.75rem", "1.2"],
      base: "1.125rem",
      sm: "1rem",
      xs: "0.625rem",
    },
    colors: {
      green: "#0B3B3C",
      olive: "#A5B8A0",
      blueSmoke: "#6D8A83",
      lightOlive: "#E8EFE9",
      crimson: "#7E0707",
      crimsonDark: "#710606",
      white: "#fff",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
export default config;
