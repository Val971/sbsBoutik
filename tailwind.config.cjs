/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark-red':'#780000',
      'light-red':'#C1121F',
      'white-cream':'#FDF0D5',
      'dark-blue':'#003049',
      'light-blue':'#669BBC',
      'light-dark':'#263238',
      'light-gray':'#676F73',
      'white': '#ffffff',
    },
    extend: {
      backgroundImage: {
        'action-section': "url('src/assets/furnitures2.png')",
      },
      boxShadow: {
        'card': '0 10px 35px rgba(0, 0, 0, 0.05)',
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
        wiggle: 'wiggle 200ms ease-in-out',
        fadeInUp02:'fadeInUp 1s ease-in-out',
        fadeInUp04:'fadeInUp 2s ease-in-out',
        fadeInUp06:'fadeInUp 3s ease-in-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        fadeInUp:{
          '0%':{ opacity:0, transform:'translateY(20px)'},
          '100%':{ opacity:1, transform:'translateY(0)'}
        }
        
      })
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
