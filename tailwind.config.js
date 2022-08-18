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
          DEFAULT: '#9aa8e6',
          hover: '#af90e9',
        },
        light: '#caf0f8',
        dark: '#03045e',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
