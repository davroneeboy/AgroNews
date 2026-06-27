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
        green: {
          900: '#0c3a1f',
          800: '#13502c',
          700: '#1b6b3a',
          600: '#2e8b57',
          500: '#3a9d63',
        },
        lime: {
          DEFAULT: '#84cc16',
          600: '#65a30d',
        },
        gold: {
          DEFAULT: '#b08d2f',
          light: '#c9a84c',
        },
        paper: {
          DEFAULT: '#f5f7f2',
          2: '#ebf0e8',
        },
        ink: '#16241b',
        muted: '#5d6c61',
        line: '#dde4dc',
        // keep old tokens working
        primary: {
          50: '#f0f7f3',
          100: '#d9ebe1',
          200: '#b3d7c3',
          300: '#7dba9a',
          400: '#4a9b72',
          500: '#2e8b57',
          600: '#1b6b3a',
          700: '#13502c',
          800: '#0c3a1f',
          900: '#081f14',
          950: '#051209',
        },
        accent: {
          50: '#fdf8eb',
          100: '#f9ecc8',
          200: '#f2d88f',
          300: '#e8be52',
          400: '#c9a84c',
          500: '#b08d2f',
          600: '#8d7126',
        },
        sage: {
          50: '#f5f7f2',
          100: '#ebf0e8',
          200: '#dde4dc',
          300: '#c8d4c2',
        },
        earth: {
          50: '#f5f7f2',
          100: '#ebf0e8',
          200: '#dde4dc',
          300: '#c8d4c2',
        },
        slate: {
          800: '#16241b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Spectral', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Public Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Space Grotesk', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06)',
        'card-hover': '0 16px 40px rgba(12,58,31,0.10)',
        'header': '0 1px 0 rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
export default config
