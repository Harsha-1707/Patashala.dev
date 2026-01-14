/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        comic: {
          red: '#ff6b6b',
          teal: '#4ecdc4',
          yellow: '#ffe66d',
          dark: '#2d2d2d',
          cream: '#fef9f3',
          'cream-dark': '#f0e6d6',
        },
        // Keep brand colors for backward compatibility
        brand: {
          purple: '#6366F1',
          'purple-dark': '#4F46E5',
          teal: '#14B8A6',
          'teal-dark': '#0D9488',
          orange: '#F97316',
          'orange-dark': '#EA580C',
          yellow: '#FBBF24',
          pink: '#EC4899',
          'neutral-dark': '#1F2937',
          'neutral-mid': '#6B7280',
          'neutral-light': '#F9FAFB',
        }
      },
      fontFamily: {
        display: ['Permanent Marker', 'cursive'],
        body: ['Caveat', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'sketch-draw': 'sketchDraw 3s ease-out forwards',
        'underline-draw': 'underlineDraw 2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'pattern-move': 'patternMove 20s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(10deg)' },
        },
        sketchDraw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        underlineDraw: {
          from: { width: '0' },
          to: { width: '80%' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        patternMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
