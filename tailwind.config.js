/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

       colors:{
            "neutral-50": "#f9f9f9",
            "linecolor":"#404040",
            "twitter-blue":"#1D9BF0",
            "signborder": "rgba(29, 155, 240, 0.24);",
            "Blue wash":"#75BEEF",
            "Button stroke":"#546A7A",
            "Searchbar fill":"#212327",
            "Card fill":"#16181C",
            "Success":"#00BE74",
            "Error":"#8B141A",
            "Neutral/100":"#F4F4F4",
            "Neutral/200":"#E4E4E4",
            "Neutral/300":"#D3D3D3",
            "Neutral/400":"#A2A2A2",
            "Neutral/500":"#737373",
            "Neutral/600":"#525252",
            "Neutral/700":"#404040",
            "Neutral/800":"#262626",
            "Neutral/900":"#171717",
            "Neutral/1000":"#FFFFFF",



             

       },

       fontFamily: {
        "inter":['"Inter"','sans-serif'],
         "rrr": ['" "', 'sans-serif'],
       

       
      

       },

       fontSize: {
        "2.5xl":"26px",
       },

       spacing:{
         "widthh":"344px",
         "linewidth": "155.5px",
         "imgwidth":"455px",
         "imgheight":"199px",
         "15px":"15px",
         "93px":"93px",
       },

       gap: {
        'gap100': '100px',
        "10px":"10px",
      },


       borderRadius: {
        "borderr":"65px",
        "9999PX":"9999PX",
        
       },
       backdropBlur: {
              "as":"23.668209075927734px",
       },

    },
  },
  plugins: [],
} 