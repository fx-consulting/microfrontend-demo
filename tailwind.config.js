const { DesignSystemPlugin } = require('@fx-consulting/design-system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@fx-consulting/design-system/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#0B362D',
        pastel: '#f6f7ef',
        text: '#1c3a13',
        'pastel-secondary': '#C2D0BF',
      },
    },
  },
  plugins: [DesignSystemPlugin],
};
