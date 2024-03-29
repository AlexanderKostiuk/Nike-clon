/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gris: '#f5f5f5',
        negroNike: '#111111',
        grisOscuro: '#585858'
      },
    },

    screens: {
      'mobile': '420px',
      // => @media (min-width:420px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      'desktop-lg' : '1410px'
      // => @media (min-width: 1410px) { ... }
  
    },
  plugins: [],
}}