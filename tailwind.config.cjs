/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica'],
      },
      colors: {
        background: '#0B0E13',
      },
    },
  },
  plugins: [],
};
