/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: '#5e6be3',
        SecondaryColor: '#7582F9',
        text: '#f9f9f9'
      },
      width: {
        '68': '17rem',
      },
      height: {
        '129': '33rem'
      }
    },
  },
  plugins: [],
}
