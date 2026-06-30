import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    extend: {
      colors: {
        bgPrimary: '#1b1b1b',
        bgSecondary: '#4a4a4a',
        muted: '#8a8a8a',
        accent: '#d6d2c4',
        textPrimary: '#faf7f0',
        highlight: '#B38B59',
        highlightDeep: '#8C6A43',
        highlightSoft: '#C19A6B'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 28px 60px rgba(0, 0, 0, 0.28)',
        lift: '0 18px 30px rgba(0, 0, 0, 0.18)'
      }
    }
  },
  plugins: []
} satisfies Config;
