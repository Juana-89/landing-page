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
      },
      animation:{
        'slide-left': 'slide 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left-two': 'slide 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-buttons': 'slide 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes:{
       slide: {
                    '0%':{transform: 'translateX(-1000px)'},
                    '100%':{transform: 'translateX(0)'},
                  }

      }
    },
  },
  plugins: [],
}