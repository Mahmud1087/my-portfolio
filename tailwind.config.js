/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato',
        lexend: 'Lexend',
        jolly: 'Jolly Lodger',
      },
    },
  },
  plugins: [],
};
