import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-beige": "#e4dacd",
        "brand-red": "#d91a2a",
        "brand-black": "#0a0a0a",
        "brand-white": "#ffffff",
      },
      fontFamily: {
        headline: ["Impact", "Haettenschweiler", "Arial Narrow", "sans-serif"],
        body: ["Arial", "Helvetica", "sans-serif"],
        label: ["Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: {
      },
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
