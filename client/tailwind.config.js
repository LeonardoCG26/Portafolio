/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'portfolio-primary': '#3B82F6', // Personaliza tu color principal
      }
    },
  },
  plugins: [],
}