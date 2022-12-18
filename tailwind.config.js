/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#F79918',
        'primary-light':'#F5F0E9',
        'secondary':'#10495C'
      }
    },
  },
  plugins: [],
}
