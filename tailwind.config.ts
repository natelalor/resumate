import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        boxShadow: {
            'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
            'custom-heavy': '0 0px 30px rgba(0, 0, 0, 0.15)',
        }
    },
  },
  plugins: [],
};
export default config;
