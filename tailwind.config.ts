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
        colors: {
            'theme-orange': 'rgb(225, 85, 6)',
            'theme-orange-light': 'rgb(229, 115, 65)',
            'theme-orange-super-light': 'rgb(255, 218, 202)',
            'white': '#ffffff',
            'text-color': 'text-gray-600',
            'midnight-purple': '#3634a3'
          },
    },
  },
  plugins: [],
};
export default config;
