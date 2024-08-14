/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-orange': 'rgb(225, 85, 6)',
        'white': '#ffffff',
        'text-color': 'text-gray-600',
      },
    },
  },
  plugins: [],
}

