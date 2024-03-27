/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const  withMT = require("@material-tailwind/react/utils/withMT");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
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
				background:{
					page:'#0000008e',
					component:'#1e1e1f',
					table:'#d4d4d8'
				},
			},
			keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 2s linear infinite', // Aqui você pode ajustar a duração da animação
      },
		},
	},
	darkMode: "class",
	plugins: [nextui(({
		prefix: "euromanaus",
		addCommonColors: true,
		layout: {
			spacingUnit: 4, // in px
			disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
			dividerWeight: "1px", // h-divider the default height applied to the divider component
			fontSize: {
				tiny: "0.75rem", // text-tiny
				small: "0.875rem", // text-small
				medium: "1rem", // text-medium
				large: "1.125rem", // text-large
			},
			lineHeight: {
				tiny: "1rem", // text-tiny
				small: "1.25rem", // text-small
				medium: "1.5rem", // text-medium
				large: "1.75rem", // text-large
			},
			radius: {
				small: "8px", // rounded-small
				medium: "12px", // rounded-medium
				large: "14px", // rounded-large
			},
			borderWidth: {
				small: "1px", // border-small
				medium: "2px", // border-medium (default)
				large: "3px", // border-large
			},
		},
		themes: {
			light: {
				layout: {
					hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
					boxShadow: {
						// shadow-small
						small:
							"0px 0px 5px 0px rgb(0 0 0 / 0.2), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.7)",
						// shadow-medium
						medium:
							"0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
						// shadow-large
						large:
							"0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
					},
				},
				colors: {
					white: "#FFFFFF",
					black: "#000000",
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
					focus: "#FCF0AD",
				},
			},
			dark: {
				layout: {
					hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
					boxShadow: {
						// shadow-small
						small:
							"0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
						// shadow-medium
						medium:
							"0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
						// shadow-large
						large:
							"0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
					},
				},
			},
		},
	}), { }), addVariablesForColors],
}, withMT({
	content: [],
	theme: {
		extend: {},
	},
	plugins: [],
});

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}