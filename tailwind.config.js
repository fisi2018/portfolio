module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        typing:{
          'from':{width:0}
        },
        blink:{
          '50%':{['border-color']:'black'}
        }
      }
    },
  },
  plugins: [],
}
