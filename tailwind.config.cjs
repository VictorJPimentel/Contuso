/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'main-page' : "url('./img/main_pg.jpg')",
      'main-page2' : "url('./img/main_pg2.jpg')",
    },
    extend: {
      fontFamily:{
        title : ['Montserrat Alternates','sans-serif'],
        text : ['Baloo Tamma 2', 'cursive']
      },
      fontSize: {
        'main-title' : '11rem',
        'main-mid' : '15rem'
      },
      colors : {
        primary : "#2F333B",
        secondary : "#BCBECD"
      },
    },
  },
  plugins: [],
}
