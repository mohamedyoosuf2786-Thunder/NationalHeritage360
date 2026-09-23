/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#FDF6F3',
          100: '#FAEAE3',
          200: '#F5D3C4',
          300: '#EDAFA0',
          400: '#DF7B5E',
          500: '#C85A32',
          600: '#B04622',
          700: '#8E3417',
          800: '#732B14',
          900: '#5A2210',
        },
        saffron: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        sandstone: {
          50: '#FCFAF6',
          100: '#F7F3EB',
          200: '#EEE6D6',
          300: '#E0D2B8',
          400: '#CEB894',
          500: '#B89B6C',
          600: '#9C7E50',
          700: '#7A603C',
          800: '#5C472E',
          900: '#3D2F1F',
        },
        emeraldHeritage: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          500: '#10B981',
          700: '#047857',
          800: '#065F46',
          900: '#1E4B3E',
        },
        gold: {
          light: '#F8E7A2',
          DEFAULT: '#D4AF37',
          dark: '#997B1A',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'heritage': '0 10px 30px -10px rgba(200, 90, 50, 0.15)',
        'heritage-gold': '0 10px 30px -10px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
