/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#012340',
        secondary:'#5096F2',
        info: '#3873A6',
        white: '#FFFFFF',
        black: '#000000',
        green:'#252601'
      }
    },
  },
  plugins: [],
}