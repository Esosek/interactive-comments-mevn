/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'system-ui', 'sans-serif']
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      'blue-200': 'hsl(239, 57%, 85%)',
      'blue-500': 'hsl(238, 40%, 52%)',
      'blue-800': 'hsl(212, 24%, 26%)',
      'red-200': 'hsl(357, 100%, 86%)',
      'red-500': 'hsl(358, 79%, 66%)',
      'neutral-100': 'hsl(228, 33%, 97%)',
      'neutral-200': 'hsl(223, 19%, 93%)',
      'neutral-400': 'hsl(211, 10%, 45%)'
    },
    fontWeight: {
      normal: 400,
      semibold: 500,
      bold: 700
    },
    extend: {}
  },
  plugins: []
}
