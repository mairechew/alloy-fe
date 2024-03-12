import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09063B', 
        secondary: '#F6460B',
        white: '#FFFFFF',
        highlight: '#C5D8F8',
        indigo: '#09063B', // intentionally duplicative for future proofing with theming
        fire: '#F6460B', // intentionally duplicative for future proofing with theming
        fireHover: '#d53f06',
        offWhite: '#F5F0E9'
      },
      fontFamily: {
        'sans': ['var(--font-open-sans)'],
        'sb-empire': ['var(--font-sang-bleu-empire)'],
        'sb-kingdom': ['var(--font-sang-bleu-kingdom)']
      }
    },
  },
  plugins: [],
};
export default config;
