/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,tsx,ts,jsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E465E",
      }
    },
  },
  plugins: [],
}

