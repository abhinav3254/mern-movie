/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        auth: '#3786be'
      },
      fontFamily: {
        Ubuntu: ["Ubuntu"]
      }
    },
  },
  plugins: [],
}