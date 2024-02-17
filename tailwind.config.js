/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,md}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-sans": ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
