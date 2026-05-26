/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cream: '#FAF8F5',
        stone: {
          50: '#FAFAF9',
          100: '#F5F4F0',
          200: '#E8E5DF',
          300: '#D4CFC6',
          400: '#B8B0A4',
          500: '#9A9088',
          600: '#7A7068',
          700: '#5C5450',
          800: '#3E3A38',
          900: '#201E1C',
        },
        gold: {
          400: '#C9A96E',
          500: '#B8934A',
          600: '#A07830',
        },
      },
      spacing: {
        'section-sm': '48px',
        'section-md': '64px',
        'section-lg': '80px',
        'section-xl': '120px',
      },
    },
  },
  plugins: [],
};
