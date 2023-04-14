/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'newBlack': '#2F353E',
        'newGrey': '#6C757D',
        'darkBlue': "#2F2695",
        'lightBlue': '#2E23AD'
      },
      fontFamily: {
        sans: ["Rubik", "Tajawal"],
        messiri: ["El Messiri"],
        cursive: ["Oxanium"]
      },
    },
  },
  plugins: [],
}
