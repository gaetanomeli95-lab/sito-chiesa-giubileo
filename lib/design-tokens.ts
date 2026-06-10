/**
 * Senza Misura — Design Tokens
 *
 * Programmatic reference for the complete design system.
 * All values are mirrored in globals.css (CSS custom properties)
 * and tailwind.config.ts (Tailwind classes).
 */

/* ─── Colors ─── */
export const colors = {
  background: '#FAFAF8',
  surface: '#FFFFFF',
  surfaceElevated: '#F5F5F3',
  foreground: '#1A1A1A',
  muted: '#6B6B6B',
  border: '#E8E8E6',
  borderStrong: '#D4D4D0',
  inverse: '#FFFFFF',
  inverseMuted: 'rgba(255,255,255,0.75)',
  gold: '#B8860B',
  goldLight: '#C8A96E',
  goldMuted: 'rgba(184,134,11,0.12)',
  error: '#B91C1C',
  errorMuted: '#DC2626',
  success: '#15803D',
  info: '#0369A1',
} as const;

export const darkColors = {
  background: '#0C0C0C',
  surface: '#111111',
  surfaceElevated: '#1A1A1A',
  foreground: '#F2F0EB',
  muted: '#8A8A80',
  border: 'rgba(255,255,255,0.08)',
  borderStrong: 'rgba(255,255,255,0.12)',
  inverse: '#1A1A1A',
  inverseMuted: 'rgba(26,26,26,0.75)',
  gold: '#C8A96E',
  goldLight: '#E0C99A',
  goldMuted: 'rgba(200,169,110,0.12)',
  error: '#EF4444',
  errorMuted: '#F87171',
  success: '#22C55E',
  info: '#38BDF8',
} as const;

/* ─── Spacing ─── */
export const spacing = {
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
} as const;

/* ─── Typography ─── */
export const typography = {
  fontFamily: {
    sans: "'Inter', system-ui, sans-serif",
    serif: "'Cormorant Garamond', Georgia, serif",
  },
  size: {
    '2xs': '11px',
    xs: '13px',
    sm: '15px',
    base: '16px',
    lg: '18px',
    xl: '22px',
    '2xl': '28px',
    '3xl': '36px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '96px',
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.65,
  },
  letterSpacing: {
    tighter: '-0.03em',
    tight: '-0.02em',
    normal: '0',
    wide: '0.12em',
    wider: '0.16em',
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

/* ─── Border Radius ─── */
export const radius = {
  none: '0px',
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
} as const;

/* ─── Elevation (Shadows) ─── */
export const elevation = {
  none: 'none',
  sm: '0 1px 2px rgba(0,0,0,0.04)',
  md: '0 4px 12px rgba(0,0,0,0.06)',
  lg: '0 12px 40px rgba(0,0,0,0.08)',
  xl: '0 24px 64px rgba(0,0,0,0.12)',
  inner: 'inset 0 2px 4px rgba(0,0,0,0.04)',
} as const;

/* ─── Animation ─── */
export const animation = {
  duration: {
    instant: 0,
    fast: 150,
    base: 200,
    smooth: 300,
    reveal: 500,
    dramatic: 800,
    ambient: 12000,
  },
  easing: {
    smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
    easeOut: [0, 0, 0.2, 1] as [number, number, number, number],
    easeIn: [0.4, 0, 1, 1] as [number, number, number, number],
    easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

/* ─── Z-Index ─── */
export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  toast: 700,
  tooltip: 800,
} as const;

/* ─── Breakpoints (px) ─── */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/* ─── Grid ─── */
export const grid = {
  columns: 12,
  gap: '24px',
  margin: '24px',
} as const;

/* ─── Layout ─── */
export const layout = {
  maxWidth: '1200px',
  contentWidth: '680px',
  pagePadding: '24px',
} as const;

/* ─── Accessibility ─── */
export const a11y = {
  focusOutline: '2px solid var(--color-gold)',
  focusOffset: '2px',
  minTouchTarget: '44px',
  minContrastBody: 4.5,
  minContrastLarge: 3,
} as const;
