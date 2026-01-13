/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 0.6s ease-in-out',
        'rotate-subtle': 'rotate-subtle 0.3s ease-out',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'rotate-subtle': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(5deg)' },
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
