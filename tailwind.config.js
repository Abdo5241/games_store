/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./*.js",
    "./Home/*.html",
    "./Home/*.js",
    "./html/*.html",
    "./boxes/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./game-buy/*.html",
    "./game-buy/*.js",
    "./cart/*.html",
    "./cart/*.js",
    "./sidebar/*.html",
    "./sidebar/*.js",
    "./free-games/*.html",
    "./free-games/*.js",
    'node_modules/preline/dist/*.js',

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}