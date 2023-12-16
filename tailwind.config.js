/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Source Code Pro", "monospace"],
        sans: ["Afacad", "sans-serif"],
      },
    },
  },
  plugins: [],
}
