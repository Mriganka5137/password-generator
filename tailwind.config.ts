import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "hsl(var(--dark-grey))",
        "brand-grey": "hsl(var(--grey))",
        "almost-white": "hsl(var(--almost-white))",
        "very-dark-grey": "hsl(var(--very-dark-grey))",
        "neon-green": "hsl(var(--neon-green))",
        "brand-red": "hsl(var(--brand-red))",
        "brand-orange": "hsl(var(--brand-orange))",
        "brand-yellow": "hsl(var(--brand-yellow))",
      },
    },
  },
  plugins: [],
};
export default config;
