module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bgblue': '#081229', // Define your custom RGB color here
      },
    },
    fontFamily: {
      'sans': ['Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue'],
      'serif': ['ui-serif', 'Georgia']
    }
  },
  
  variants: {},
  plugins: [],
}
