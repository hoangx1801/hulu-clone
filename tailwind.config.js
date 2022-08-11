
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      screen: {
        "3xl": "2000px"
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
