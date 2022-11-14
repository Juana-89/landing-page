/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#012340",
        secondary: "#5096F2",
        info: "#3873A6",
        white: "#FFFFFF",
        black: "#000000",
        green: "#252601",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(90deg, #5191fa 1%, rgba(81, 145, 250, 0) 75%), url('https://images.pexels.com/photos/3059092/pexels-photo-3059092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        "cover":"cover",
        "contain":"contain",
        "mix-blend-mode": "multiply",
      },
      animation: {
        "slide-left":
          "slideLeft 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-left-two":
          "slideLeft 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-buttons":
          "slideLeft 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-center":
          "slideCenter 4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        slideLeft: {
          "0%": { opacity: '0', transform: "translateX(-1000px)" },
          "100%": { opacity: '1',transform: "translateX(0)" },
        },
        slideCenter: {
          "0%": { opacity: '0', transform: "translateZ(-1400px)" },
          "100%": { opacity: '1', transform: "translateZ(0)" },
        },
      },
    },
  },
  plugins: [],
};
