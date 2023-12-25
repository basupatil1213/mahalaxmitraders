// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      height:{
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-10' : '10vh',
        'screen-20' : '20vh',
        'screen-30' : '30vh',
        'screen-40' : '40vh',
        'screen-50' : '50vh',
        'screen-60' : '60vh',
        'screen-70' : '70vh', 
        'screen-80' : '80vh',
        'screen-90' : '90vh',
      },
      gridTemplateColumns:{
        'navbar' : '5rem 1fr 2fr 1fr 5rem',
        'navbar-mobile' : '1fr 1fr 1fr',
        'navbar-tablet' : '5rem 1fr 1fr 1fr 5rem',
        'footer': '5rem 1fr 2fr 1fr 5rem',
        'footer-mobile': '1fr 1fr 1fr',
        'footer-tablet': '2.5rem 1fr 2fr 1fr 2.5rem',
      },
      gridTemplateRows:{
        'footer-mobile': 'fit-content fit-content fit-content', 
      },
      colors:{
        'primary' : "#000000",
        'secondary' : "#ffffff",
        'tertiary' : "#c9a067",
      },
      backgroundColor:{
        'primary' : "#000000",
        'secondary' : "#ffffff",
        'tertiary' : "#c9a067",
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Montserrat', 'sans-serif'],
        'tertiary': ['Sevillana', 'sans-serif'],
        'italic-ibm': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
