module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  theme: {
    extend: {
        colors: {
          'custom-black': '#0F0E0E',
          'cheese': '#F58840'
        },
        fontFamily: {
          'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
