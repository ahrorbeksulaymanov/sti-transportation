/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      orange: "#EE3532",
      orange_hover: "#cb2c29"
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1300px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1365px',
    },
  },
  plugins: [],
}
