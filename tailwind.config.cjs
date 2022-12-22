/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '0.9rem'
    },
    extend: {
      colors: {
        wsblue: {
          100: '#e9ecf4',
          200: '#d3d9e9',
          300: '#7c8cbc',
          400: '#5166a5',
          500: '#25408f',
          600: '#1e3372',
          700: '#162656',
          800: '#132048',
          900: '#0b132b'
        },
        wsgreen: {
          100: '#c6e6c8',
          200: '#b3deb6',
          300: '#8dce92',
          400: '#67bd6d',
          500: '#41ad49',
          600: '#348a3a',
          700: '#162656',
          800: '#27682c',
          900: '#1a451d'
        }
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%'
      },
      flexBasis: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%'
      },
      fontFamily: {
        body: ['Nunito']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
