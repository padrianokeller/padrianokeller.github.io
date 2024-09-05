/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pkBgFirst: '#f2f2f2',
        pkBgSecond: '#ffffff',
        pkBgDarkFirst: '#010409',
        pkBgDarkSecond: '#0d1117',
        pkBgDarkThird: '#21262d',
        pkWhite: '#e6edf3',
        pkBlue: '#1f71eb',
        pkGreen: '#39d353',
        pkOrange: '#f78166',
        pkGray: {
          border: {
            'light': '#d1d5db',
            'dark': '#30363d',
          },
          '50': '#30363d',
          '200': '#8d96a0'
        },
      },
    },
  },
  plugins: [],
}