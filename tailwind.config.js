/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A365D',
        secondary: '#2F855A',
        accent: '#ECC94B',
      }
    },
  },
  plugins: [],
}
