/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1658FF",
        secondary: "#97B3FB",
        blackOne: "#141414",
        blackTwo: "#4a4a4a",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display SC", "serif"],
      },
    },
  },
  plugins: [],
};
