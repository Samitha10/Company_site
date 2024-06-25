/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     
      'base-gray':'#444445',
      'blue-bg' :'#00003C',
      'purple-bg':'#1b033a',
      'gray-1':'#29293F',
      'gray-2'  :'#424263',
      'gray-3'  :'#8888a5',
      'gray-4'  :'#e6e6ec',
      'gray-5'  :'#d9d9d9',
      'gray-6'  :'#f2f2f5',
      'purple-1':'#4B3A98',
      'purple-2':'#8A78D8',
      'purple-3':'#B6AAEC',
      'green-1' :'#23AE2C',
      'green-2' :'#4EC656',
      'green-3' :'#80EE87',
      'blue-1'  :'#0F85EC',
      'blue-2'  :'#53A4EB',
      'blue-3'  :'#93C8F5',
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
      },
      backgroundImage: {
        'hero-home': "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='4096' height='2160' preserveAspectRatio='none' viewBox='0 0 4096 2160'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1024%26quot%3b)' fill='none'%3e%3cpath d='M4326.86 853.14C3823.52 858.79 3406.7 1428.99 2393.26 1414.74 1379.82 1400.49 1103.84-235.72 459.66-363.84' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M4827.48 762.74C4339.85 779.29 3966.66 1549.67 3037.42 1540.34 2108.19 1531.01 1861.85-95.19 1247.37-237.16' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M4486.85 884.75C3999.74 918.46 3689.35 1873.36 2792.79 1856.75 1896.23 1840.14 1742.78-61.74 1098.73-292.57' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M4470.47 759.49C4169.41 757.76 3883.66 489.49 3296.85 489.49 2710.04 489.49 2725.45 762.99 2123.23 759.49 1521.01 755.99 1304.28-13.83 949.61-52.06' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M4237.75 508.44C3951.16 517.94 3740.64 971.8 3184.24 962.04 2627.85 952.28 2509.51-101.4 2130.74-209.4' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1024'%3e%3crect width='4096' height='2160' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}