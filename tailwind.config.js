/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      dropShadow: {
        'topbar': '0px 2px 4px rgba(0, 0, 0, 0.25)',
        'bottombar': '0px -2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    colors: {
      'darkblue': '#263238',
      'lightblue': '#E1FEFE',
      'ultradarkblue': '#1B2529',
      'transparentborder': '#0000001a',
      'graytext': '#5B6C6C'
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/dist/plugin.cjs")
  ],
}

