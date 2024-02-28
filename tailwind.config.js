module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'jura': ['Jura', 'sans-serif'],
        'elsie': ['Elsie', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
        'sacramento' : ['Sacramento', 'cursive'],
        'dancing' : ['Dancing Script', 'cursive']	
      },
      colors: {
        'primary' : '#3B4D65',
      },
    },
  },
  plugins: [],
}
