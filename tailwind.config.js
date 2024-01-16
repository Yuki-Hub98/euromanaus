/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const  withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        white:"#FFFFFF"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: false,
    themes: {
      "purple-dark": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#1a1600",
          foreground: "#ffffff",
          primary: {
            50: "#6c5c09",
            100: "#83700f",
            200: "#a28d18",
            300: "#c2af23",
            400: "#e2c731",
            500: "#edd162",
            600: "#f6e382",
            700: "#fcf0ad",
            800: "#fdf8d5",
            900: "#fefeec",
            DEFAULT: "#edca62",
            foreground: "#ffffff",
          },
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    },
  }, { })],
}, withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});
