export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray:"rgb(103 108 114)"
      }
      
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

