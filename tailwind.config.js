/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,md}"],
  theme: {
    extend: {
      fontFamily: {
        "pt-sans": ["PT Sans", "sans-serif"],
        "pt-serif": ["PT Serif", "serif"],
        "pt-mono": ["PT Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
