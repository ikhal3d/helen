import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F9F4EC',
          200: '#F2E9D8',
          300: '#E9DBC0',
        },
        nude: {
          50: '#F8EFE5',
          100: '#EFE0CB',
          200: '#E2C9A8',
          300: '#C9A77F',
        },
        gold: {
          50: '#FBF5E5',
          100: '#F2E1B0',
          200: '#E5C779',
          300: '#D4AE5A',
          400: '#C4983F',
          500: '#B0822C',
          600: '#8E6622',
          700: '#6C4D19',
        },
        sage: {
          50: '#F4F6F0',
          100: '#E2E8D6',
          200: '#C8D3B2',
          300: '#A5B587',
          400: '#83965F',
          500: '#647445',
          600: '#4D5934',
        },
        forest: {
          50: '#F0F2EC',
          100: '#D6DCC8',
          200: '#A6B295',
          300: '#6F7E5F',
          400: '#4F5C42',
          500: '#34402A',
          600: '#1F2818',
        },
        ink: {
          50: '#F4F1ED',
          100: '#D7CFC4',
          200: '#9A8E7E',
          300: '#5E5446',
          400: '#3A3328',
          500: '#1F1B14',
          600: '#100E0A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      letterSpacing: {
        'widest-2': '0.3em',
        'widest-3': '0.45em',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #E5C779 0%, #D4AE5A 35%, #B0822C 70%, #D4AE5A 100%)',
        'gold-shine':
          'linear-gradient(110deg, transparent 30%, rgba(229,199,121,0.55) 50%, transparent 70%)',
        'cream-radial':
          'radial-gradient(ellipse at top, #FDFBF7 0%, #F2E9D8 60%, #E9DBC0 100%)',
        'forest-radial':
          'radial-gradient(ellipse at top, #34402A 0%, #1F2818 70%, #100E0A 100%)',
        'nude-fade':
          'linear-gradient(180deg, #FDFBF7 0%, #F9F4EC 35%, #EFE0CB 100%)',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(176, 130, 44, 0.18)',
        luxe: '0 30px 60px -30px rgba(31, 27, 20, 0.35)',
        gold: '0 14px 40px -10px rgba(212, 174, 90, 0.5)',
        'inner-luxe': 'inset 0 0 80px rgba(229, 199, 121, 0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out both',
        'fade-up': 'fadeUp 1s ease-out both',
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        shine: 'shine 3.5s linear infinite',
        sway: 'sway 9s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        drift: 'drift 18s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(4deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(40px, -30px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
