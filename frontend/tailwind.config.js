/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D3A6C',
        'primary-light': 'rgba(29, 58, 108, 0.6)',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      screens: {
        'xs': '600px', // Breakpoint personalizado para las cards
      },
    },
  },
  plugins: [],
}