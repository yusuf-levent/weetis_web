/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(244, 114, 182, 0.18), 0 22px 55px -22px rgba(192, 132, 252, 0.45)',
      },
      colors: {
        base: {
          950: '#07050f',
          900: '#120b1d',
          800: '#1c1330',
        },
      },
    },
  },
  plugins: [],
}

