/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito',"sans-serif"],
      }
  },
  },
  plugins: [],
}