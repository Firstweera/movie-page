/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: "Dosis, sans-serif",
        pacifico: "Pacifico, cursive",
      },
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        background: "#EEEEEE",
        text: "#00ADB5"
      },
    },
  },
  plugins: [],
};
