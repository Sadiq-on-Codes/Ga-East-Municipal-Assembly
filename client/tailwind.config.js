/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    backgroundImage: {
      'news-1': "url('/src/assets/news-1.jpeg')",
      'news-2': "url('/src/assets/news-2.jpeg')",
      'news-3': "url('/src/assets/news-3.jpeg')",
    },
    extend: {},
    colors: {
      'button-bg': '#6CC551',
      'news-section-bg': '#F5F6F6',
      'news-section-text': '#001630',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}