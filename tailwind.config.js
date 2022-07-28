/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-red": "#D90429",
        "secondary-red": "#EF233C",
        "light-red": "#FF3456",
        "primary-gray": "#2b2d42",
        "secondary-gray": "#8d99ae",
        "light-gray": "#edf2f4",

        "primary-yellow": "#ffbe0b",

        "primary-orange": "#fb5607",

        "dark-blue" : "#1d3557"

      }
    },
  },
  plugins: [],
}
