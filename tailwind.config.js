/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the extensions based on your project  
  ],  
  theme: {
    extend: {
      colors: {  
        'white-transparent': 'rgba(255, 255, 255, 0.96)',
        'main-pink': '#9925AA',
        'main-blue': '#090b86'
      },  
    },
  },
  plugins: [],
}

