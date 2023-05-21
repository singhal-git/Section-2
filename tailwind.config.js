/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      custom: ['Labil', 'sans-serif']
    },
    extend: {
      colors: {
        blueBlue: "#A594FD",
        lameWhite: "#adadad",
        lameBlack: "#2f2f2f"
      }
    }

  },
  plugins: [],
}

