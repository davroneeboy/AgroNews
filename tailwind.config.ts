import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        earth: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dfd0',
          300: '#d4c4a8',
          400: '#b8985c',
          500: '#9a7b4f',
          600: '#7d6342',
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
      },
      boxShadow: {
        'landing': '0 4px 6px -1px rgba(22, 101, 52, 0.08), 0 2px 4px -2px rgba(22, 101, 52, 0.05)',
        'landing-lg': '0 10px 15px -3px rgba(22, 101, 52, 0.1), 0 4px 6px -4px rgba(22, 101, 52, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config

