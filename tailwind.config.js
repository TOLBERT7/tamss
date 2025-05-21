/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#4CAF50',
        'secondary-green': '#388E3C',
        'light-green': '#8BC34A',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg')",
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      height: {
        'carousel': '500px',
        'carousel-mobile': '300px',
      },
    },
  },
  plugins: [],
};