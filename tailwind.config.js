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
  plugins: [nextui({ addCommonColors: true})],
}, withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});
