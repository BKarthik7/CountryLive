/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,tsx,ts,jsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redprimary: "#db393c",
      },
      spacing: {
        '2': '0.5rem',
      }
    },
  },
  plugins: [],
}

