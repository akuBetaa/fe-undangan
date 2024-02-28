module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jura': ['Jura', 'sans-serif'],
        'elsie': ['Elsie', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
        'sacramento' : ['sacramento', 'cursive'],
      },
      colors: {
        'primary' : '#3B4D65',
      },
    },
  },
  plugins: [],
}
