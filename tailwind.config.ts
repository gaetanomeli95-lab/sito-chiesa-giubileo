import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ── Colors ── */
      colors: {
        background: '#FAFAF8',
        surface: '#FFFFFF',
        'surface-elevated': '#F5F5F3',
        foreground: '#1A1A1A',
        muted: '#6B6B6B',
        border: '#E8E8E6',
        'border-strong': '#D4D4D0',
        inverse: '#FFFFFF',
        'inverse-muted': 'rgba(255,255,255,0.75)',
        gold: {
          DEFAULT: '#B8860B',
          light: '#C8A96E',
          muted: 'rgba(184,134,11,0.12)',
        },
        error: {
          DEFAULT: '#B91C1C',
          muted: '#DC2626',
        },
        success: {
          DEFAULT: '#15803D',
        },
        info: {
          DEFAULT: '#0369A1',
        },
      },

      /* ── Typography ── */
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.16em' }],
        xs: ['13px', { lineHeight: '1.5' }],
        sm: ['15px', { lineHeight: '1.6' }],
        base: ['16px', { lineHeight: '1.6' }],
        lg: ['18px', { lineHeight: '1.65' }],
        xl: ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        '2xl': ['28px', { lineHeight: '1.2' }],
        '3xl': ['36px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        '4xl': ['48px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '5xl': ['64px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '6xl': ['96px', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },

      /* ── Spacing ── */
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '2px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
      },

      /* ── Border Radius ── */
      borderRadius: {
        none: '0px',
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },

      /* ── Elevation (Shadows) ── */
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 12px rgba(0,0,0,0.06)',
        lg: '0 12px 40px rgba(0,0,0,0.08)',
        xl: '0 24px 64px rgba(0,0,0,0.12)',
        inner: 'inset 0 2px 4px rgba(0,0,0,0.04)',
      },

      /* ── Line Height ── */
      lineHeight: {
        tight: '1.1',
        snug: '1.3',
        normal: '1.5',
        relaxed: '1.65',
      },

      /* ── Letter Spacing ── */
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.12em',
        wider: '0.16em',
      },

      /* ── Max Width ── */
      maxWidth: {
        'content': '680px',
        'page': '1200px',
      },

      /* ── Z-Index ── */
      zIndex: {
        base: '0',
        dropdown: '100',
        sticky: '200',
        fixed: '300',
        'modal-backdrop': '400',
        modal: '500',
        popover: '600',
        toast: '700',
        tooltip: '800',
      },

      /* ── Animation ── */
      transitionDuration: {
        '0': '0ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-out-custom': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-custom': 'cubic-bezier(0.4, 0, 1, 1)',
      },

      /* ── Keyframes ── */
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'scroll-line': 'scrollPulse 2.4s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s linear infinite',
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
          '0%,100%': { opacity: '0.4', transform: 'scaleY(0.5)' },
          '50%': { opacity: '0.8', transform: 'scaleY(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
