/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        // 'black-500': '#282c34',
        'black-white': '#00000066',
        'white-gray': '#F5F6FC',
      },
      backgroundImage: {
        'home': 'url(images/home.jpeg)',
      },
      fontFamily: {
        'dm-serif-display': ['DM Serif Display', 'serif'],
        'dm-serif-text':['DM Serif Text', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'serif']
      }
    }
  },
  plugins: [],
}

