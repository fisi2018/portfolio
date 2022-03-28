module.exports = {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        ldsroller:{
          '0%':{ transform: 'rotate(0deg)' },
          '100%':{ transform: 'rotate(360deg)' }
        },
        prysmo:{
          "0%":{['transform']:"translate(0,0)"},
          "15%":{['transform']:"translate(50%,-25%)"},
          
          "30%":{
            ['transform']:"translate(100%,0)"
          },
          "50%":{
            ['transform']:"translate(100%,50%)"
          },
          "65%":{
            ['transform']:"translate(50%,75%)"
          },
          "80%":{
            ['transform']:"translate(0,50%)"
          },
          "100%":{['transform']:"translate(0,0)"}
        },
        typing:{
          'from':{width:0}
        },
        blink:{
          '50%':{['border-color']:'black'}
        },
        blinkDark:{
          "50%":{['border-color']:'white'}
        }
      }
    },
  },
  plugins: [],
}
