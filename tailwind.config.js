/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ['inter'],
        "Circular": ["Circular Std"]
      },
      colors: {
        "primary": "#5D50C6",
        "secondary": "#F85E9F",
        "orange": "#FF5722",  
        "grey": "#222831"
      }
    },
  },
  plugins: [],
}

