/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#fbaf85',
          200: '#D87D4A',
        },
        secondary: '#101010',
        tertiary: '#F1F1F1',
        background: '#FAFAFA',
      },
      fontFamily: {
        body: ['Manrope'],
      },
      boxShadow: {
        button: 'inset 0 0 0 1px black',
      },
    },
  },
  plugins: [],
}
