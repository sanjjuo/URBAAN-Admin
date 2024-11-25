/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Merriweather', 'sans-serif'],
      },
      colors: {
        primary: "#C21E56",
        secondary: "#202224",
        tertiary: "#F5F6FA",
        quaternary: "#F1F4F9",
        buttonBg: "#4880FF",
        ratingBg: "#FFCA28",
        deleteBg: "#F44336",
        editBg: "#E2EBF8",
        pendingBg: "#6777EE",
        processingBg: "#FFA425",
        cancelBg: "#FB544B",
        shippedBg: "#66BB6A",
        deliveredBg: "#38BAF4",
        O1: "#8280FF",
        O2: "#FEC53D",
        O3: "#4AD991",
        O4: "#F93C65"
      },
    },
  },
  plugins: [],
});

