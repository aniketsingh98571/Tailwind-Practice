/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'background':'#1F1E1B',
      'active':'#C3F72B',
      'white':'#FFFFFF',
      'black':'#000000',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      bronson: ["Bronson-Black"],
      "mono-regular":['SometypeMono-Regular'],
      "mono-italic":['SometypeMono-Italic']
    },
    extend: {
        width: {
          'page-width': '80%',
        }
    },
  },
  plugins: [],
}

