/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gaming-primary': '#FF0055',
        'gaming-secondary': '#00FF88',
        'gaming-dark': '#0A0A0A',
        'gaming-light': '#F0F0F0',
      },
      fontFamily: {
        'gaming': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
