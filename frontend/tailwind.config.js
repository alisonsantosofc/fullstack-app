/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          600: '#424249',
        },
        zinc: {
          750: '#202023',
        },
      },
    },
  },
  plugins: [],
};
