module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    backgroundImage: {
      "news-1": "url('/src/assets/news-1.jpeg')",
      "news-2": "url('/src/assets/news-2.jpeg')",
      "news-3": "url('/src/assets/news-3.jpeg')",
    },
    extend: {},
    colors: {
      "button-bg": "#6CC551",
      "button-bg-hover": "#83F062",
      "list-bg": "#9edb8c",
      "news-section-bg": "#F5F6F6",
      "news-section-text": "#001630",
      "logo-color": "#3a3838",
      "nav-text-color": "#222222",
      "footer-bg": "#1E2833",
      "footer-text": "#E3E4E6",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  plugins: [require("flowbite/plugin"), require('@tailwindcss/forms')],
};
