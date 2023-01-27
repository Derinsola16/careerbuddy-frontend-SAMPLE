/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        albertSmall: ['Albert Small'],
        albert: ['Albert'],
        albertSemiBold: ['Albert Semi Bold'],
        albertBold: ['Albert Bold'],
        albertExtraBold: ['AlbertExtra'],
      },
      colors: {
        'brand-black': '#1A0004',
        'brand-primary': '#FF2449',
        'overlay': 'rgba(26, 0, 4, 0.7)',
        'brand-primary-light': '#FFFCF0',
        'brand-green': '#089115',
        'brand-spot': '#ECB20A',
        'brand-mail': '#EE9430',
        'brand-red': '#E51A3C',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
};
