/** @type {import('tailwindcss').Config} */

const colorVariants = {
 darkGray:"#717171",
 darkRed:"#CE0000",
 lightAsh:"#EDEDED",
 lightGray: "#F7F7F7",
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mooli: ['var(--font-Mooli)'],
        mulish: ['var(--font-mulish)'],
        playfairDisplay: ['var(--font-playfairDisplay)'],
        spaceGrotesk: ['var(--font-spaceGrotesk)']
      },
      colors: {
        ...colorVariants
      },
      screens: {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '992px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      },
      borderRadius: {
        'sm+': '5px',
      },
      fontSize:{
        'xl+':'22px',
      },
      height: {
        '2x': '2px',
      }
    },
  },
  plugins: [],
};