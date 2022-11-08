/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F2D25',
        secondary: '#008060',
        white: '#FFFFFF',
        black: '#0000',
        info:'#95BF47'
      }
    },
  },
  plugins: [],
}