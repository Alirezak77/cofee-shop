/** @type {import('tailwindcss').Config} */
module.exports= {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        "brown": {
          100 : "#ECE0D1",
          300 : "#DBC1AC",
          600 : "#967259",
          900 : "#634832"
        }
      },
      boxShadow:{
        "normal" : "0px 1px 10px rgba(0,0,0,0.05)"
      },
      borderRadius:{
        "4xl" : "2rem"
      },
      fontFamily:{
        "IranSans" : "IRANSans",
        "IranSansBold" : "IRANSans bold",
        "IransSansMedium" : "IRANSans medium",
        "LaleZar" : "laleZar",
      },
      letterSpacing:{
        "tightest" : "-0.065em"
      },

      container : {
        center : true,
        padding : {
          DEFAULT : '1rem',
          lg : '0.625rem'
        }
      }
    },
    screens :{
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024',
      'xl' : '1280px'
    }
  },
  plugins: [
      function({addVariant}){
        addVariant ('child' , '& > *');
        addVariant('child-hover' , '& > *:hover')

      }
  ],
}

