/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#012340",
        secondary: "#5096F2",
        title:"#0B315E",
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
        "hover-710": "linear-gradient(to right, #5191fa 1%, #0B315E, 50%)"
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
        "shake-horizontal":
          "shakeHorizontal 5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
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
        shakeHorizontal: {
          "0%": { transform:"translateX(0)",   transform: "translateX(0)" },
          "100%": { transform:"translateX(0)",   transform: "translateX(0)" },
          "10%": { transform: "translateX(-10px)" },
          "30%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(-10px)" },
          "70%": { transform: "translateX(-10px)" },
          "20%": { transform: "translateX(10px)" },
          "40%": { transform: "translateX(10px)" },
          "60%": { transform: "translateX(10px)" },
          "80%": { transform: "translateX(8px)"},
          "90%": { transform: "translateX(-8px)"}

        }
      },
      maxWidth: {
        "1/2": "170px"
      },
      boxShadow: {
        "bx-sc": "0 0 20px 0 rgba(0,0,0,0.2)"
      }
    
  }    
  },
  plugins: [],
}
