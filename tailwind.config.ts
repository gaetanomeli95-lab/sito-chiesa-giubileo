import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        surface: '#FFFFFF',
        'surface-elevated': '#F5F5F3',
        border: 'rgba(0,0,0,0.08)',
        'border-strong': 'rgba(0,0,0,0.12)',
        foreground: '#1A1A1A',
        muted: '#6B6B6B',
        'muted-light': '#8A8A8A',
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A830',
          dark: '#8B6914',
          muted: 'rgba(184,134,11,0.10)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 1s cubic-bezier(0.16,1,0.3,1) forwards',
        'scroll-line': 'scrollPulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollPulse: {
          '0%,100%': { opacity: '0.3', transform: 'scaleY(0.6)' },
          '50%': { opacity: '1', transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
