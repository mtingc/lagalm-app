/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*{html,js}'],
  content: [],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
      span: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#00b4d8',
        secondary: '#0077b6',
        tertiary: '#90e0ef',
        accent: {
          DEFAULT: '#0092bc',
          hover: '#45bed7',
        },
        light: '#caf0f8',
        dark: '#03045e',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
