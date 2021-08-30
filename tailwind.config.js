module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGrey: {
          darkest: "#26262d",
          darkest04: "rgba(38, 38, 45, 0.4)",
          darkest02: "rgba(38, 38, 45, 0.2)",
          DEFAULT: "#202026",
        },

        // bgGrey: {
        //   dark: '#3c4858',
        //   DEFAULT: '#c0ccda',
        //   light: '#e0e6ed',
        //   lightest: '#f9fafc',
        // }
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {
      translate: ["active", "group-hover"],
      display: ["group-hover"],
      aspectRatio: ["responsive", "hover"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
