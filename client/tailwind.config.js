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
      'mce': "url('/src/assets/mce.svg')",
      'mcd': "url('/src/assets/mcd.svg')",
      'engineer': "url('/src/assets/engineer.svg')",
      'header-1': "url('/src/assets/header-1.jpg')",
      'header-2': "url('/src/assets/header-2.jpg')",
      'header-3': "url('/src/assets/header-3.jpg')",
      'header-4': "url('/src/assets/header-4.jpg')",
      'header-5': "url('/src/assets/header-5.jpg')",
    },
    extend: {},
    colors: {
      'button-bg': '#6CC551',
      'button-bg-hover': '#83F062',
      'news-section-bg': '#F5F6F6',
      'news-section-text': '#001630',
      'logo-color': '#3a3838',
      'nav-text-color': '#222222',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      'logo-text': ['Signika Negative', 'sans-serif'],
      'news-heading': ['PT Sans', 'sans-serif']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}