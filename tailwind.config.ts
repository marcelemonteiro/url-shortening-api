import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cyan: "#2acfcf",
      "dark-violet": "#3b3054",
      red: "	#f46262",
      white: "#fff",
      gray: "	#bfbfbf",
      "light-gray": "#eee",
      "grayish-violet": "#9e9aa7",
      "very-dark-blue": "#35323e",
      "very-dark-violet": "	#232127",
      black: "#000",
    },
    extend: {
      backgroundImage: {
        "shorten-mobile": "url('../public/images/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('../public/images/bg-shorten-desktop.svg')",
        "boost-mobile": "url('../public/images/bg-boost-mobile.svg')",
        "boost-desktop": "url('../public/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
export default config
