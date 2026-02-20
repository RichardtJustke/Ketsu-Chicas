/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alabaster': '#FAFAFA',
        'white-alabaster': '#FAFAFA',
        'shark': '#1F2021',
        'dove-gray': '#707070',
        'wild-sand': '#F7F7F7',
        'crusta': '#C97E2B',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'abel': ['Abel', 'sans-serif'],
        'onest': ['Onest', 'sans-serif'],
      },
      borderRadius: {
        '40': '40px',
        '30': '30px',
        '24': '24px',
        '22': '22px',
        '20': '20px',
        '18': '18px',
        '14': '14px',
        '99': '99px',
      },
    },
  },
  plugins: [],
}
