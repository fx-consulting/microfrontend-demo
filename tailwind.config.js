/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#0B362D',
        pastel: '#f6f7ef',
        text: '#1c3a13',
        pastelSecondary: '#EAF0CE',
      },
    },
  },
  plugins: [],
};
