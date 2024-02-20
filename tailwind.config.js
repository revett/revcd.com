/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,md}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-sans": ["Work Sans", "sans-serif"],
        "custom-serif": ["Cardo", "serif"],
      },
    },
  },
  plugins: [],
};
