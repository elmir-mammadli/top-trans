/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    'node_modules/preline/dist/*.js',
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#F5D21B'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/images/main_bg.jpg')",
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}

