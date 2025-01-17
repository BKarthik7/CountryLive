/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,tsx,ts,jsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redprimary: "#db393c",
      },
      fontFamily: {
        Medium: 'BricolageGrotesque_28pt-Medium',
        Regular: 'BricolageGrotesque_28pt-Regular',
        SemiBold: 'BricolageGrotesque_28pt-SemiBold',
      },
    },
  },
  plugins: [],
}

