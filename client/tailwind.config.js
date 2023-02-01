module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
     colors: {
      'mainBackground': '#E1E1E1',
      'gold': '#EEBF63',
      'white': '#f1f1f1',
      'metal': '#565584',
      'text-color': '#828282',
      'text-color-2': '#2F2F2F',
      'text-color-3': '#151517',
      'text-color-4': '#1C1C1C',
      'section-1-bg': '#E9E9E9',
      'section-4-bg': '#6FC2C5',
      'plus-color': '#8ED2A9',
      'about-page-border': '#E1E1E1',
      'about-page-map': '#90C0E9',
      'nav-bg': '#CCEA8D',
     },
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('flowbite/plugin')
   ],
 }