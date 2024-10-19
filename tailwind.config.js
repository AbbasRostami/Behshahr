/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
  theme: {
    extend: {

      colors: {
        'TextGray': '#22445D', // Main Text
        'TextGreen': '#158B68',
        'TextWhite': '#FFFFFF',
        'PriceRed': '#E11818',
        'ProfileGray': '#6D6767',
        'ProfileBlue': '#086CB5',
        'BgGreen': '#5BE1B9'
      },
      // fontFamily: {
      //   sans: ['Graphik', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },

    


    },
  },
  plugins: [],
}

