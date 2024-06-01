/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-bg' :'#00003C',
      'gray-1'  :'#7f7f9d',
      'gray-2'  :'#bfbfce',
      'gray-3'  :'#e6e6ec',
      'gray-4'  :'#f2f2f5',
      'purple-1':'#afa1eb',
      'purple-2':'#d6cff4',
      'purple-3':'#ebe7fa',
      'green-1' :'#bff6c2',
      'green-2' :'#bff6c2',
      'green-3' :'#dffae1',
      'blue-1'  :'#3da5ff',
      'blue-1'  :'#00003C',
      'blue-1'  :'#cee8ff',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'], 
      roboto: ['Roboto', 'sans-serif'],  
      lato: ['Lato', 'sans-serif'],      
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}