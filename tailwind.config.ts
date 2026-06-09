import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C0C0C',
        surface: '#111111',
        'surface-elevated': '#161616',
        border: 'rgba(255,255,255,0.06)',
        'border-strong': 'rgba(255,255,255,0.10)',
        foreground: '#F2F0EB',
        muted: '#8A8A80',
        'muted-light': '#A0A098',
        gold: {
          DEFAULT: '#C8A96E',
          light: '#E0C99A',
          dark: '#8B7340',
          muted: 'rgba(200,169,110,0.08)',
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
