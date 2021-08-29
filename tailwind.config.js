module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGrey: "#202026",
      },
    },
  },
  variants: {
    extend: {
      translate: ["active", "group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
