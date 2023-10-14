/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins']
      },
      boxShadow:{
        '3xl':'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      }
    },
  },
  plugins: [],
}

