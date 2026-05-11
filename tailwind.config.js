/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F8F5EF',
          text: '#111111',
          muted: '#8C8478',
          gold: '#C8A96A',
          surface: '#FFFFFF',
          line: '#E8DDCC',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(17, 17, 17, 0.07)',
        card: '0 22px 60px rgba(17, 17, 17, 0.08)',
        float: '0 14px 30px rgba(17, 17, 17, 0.08)',
      },
      backgroundImage: {
        paper:
          'radial-gradient(circle at top, rgba(200, 169, 106, 0.10), transparent 28%), linear-gradient(180deg, #F8F5EF 0%, #F3EDE4 100%)',
      },
      letterSpacing: {
        luxe: '0.18em',
      },
    },
  },
  plugins: [],
};
