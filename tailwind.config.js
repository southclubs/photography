/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,css}",
    "./public/**/*.{html,js,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'Inter',
          'sans-serif'
  
        ],
        
        'icon': [
          'Material Symbols Outlined'
        ]
      },
    },
  },
  plugins: [],
}

