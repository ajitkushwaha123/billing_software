const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}", flowbite.content()],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        txtArea: "#EFF1F9",
        foreground: "#6366F1",
        primary: "#6366F1",
        secondary: "#EEF0FA",
        txtPrimary: "#BEC0CA",
        txtGreen: "#519C66",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {},
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  darkMode: "class",
  plugins: [flowbite.plugin(), require("@tailwindcss/forms")],
};
