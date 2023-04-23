/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      TitleFont: ['"Oswald"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
