import type { Config } from "tailwindcss";

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
        headline: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
        label: ["var(--font-open-sans)", "sans-serif"],
      },
      borderRadius: {
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
