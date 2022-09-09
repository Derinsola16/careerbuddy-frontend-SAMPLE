/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        albert: ['Albert'],
        albertBold: ['Albert Bold'],
        albertMedium: ['Albert Bold'],
      },
      colors: {
        'brand-black': '#1A0004',
        'brand-primary': '#FF2449',
        'brand-green': '#089115',
      },
    },
  },
  plugins: [],
};
