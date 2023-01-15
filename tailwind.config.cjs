module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "burnt-sienna": "#DE6B48",
      },
      fontFamily: {
        "roboto-slab": ["Roboto Slab", "serif"],
      },
      height: {
        22: "5.5rem",
      },
      listStyleType: {
        dash: '"- "',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
