/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        // primary: "#FFFFFF",
        // secondary: "#BBC3D7",
        // dark: "#2D2A43",
      },
      fontFamily: {
        calistoga: ["Calistoga", ...defaultTheme.fontFamily.serif],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        "roboto-flex": ["Roboto Flex", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  prefix: "tw-",
  plugins: [require("@tailwindcss/forms")],
};
