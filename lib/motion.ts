import type { Transition, Variants } from 'framer-motion';

/* ─── Duration Tokens (ms) ─── */
export const DURATIONS = {
  instant: 0,
  fast: 0.1,
  normal: 0.2,
  smooth: 0.3,
  reveal: 0.5,
  dramatic: 0.8,
  ambient: 12,
} as const;

/* ─── Easing Tokens ─── */
export const EASINGS = {
  easeOut: [0, 0, 0.2, 1] as [number, number, number, number],
  easeIn: [0.4, 0, 1, 1] as [number, number, number, number],
  easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
  spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
  springTight: { type: 'spring' as const, stiffness: 400, damping: 15 },
  linear: 'linear' as const,
} as const;

/* ─── Standard Transition Presets ─── */
export const transitions = {
  fast: { duration: DURATIONS.fast, ease: EASINGS.easeOut },
  normal: { duration: DURATIONS.normal, ease: EASINGS.smooth },
  smooth: { duration: DURATIONS.smooth, ease: EASINGS.smooth },
  reveal: { duration: DURATIONS.reveal, ease: EASINGS.smooth },
  dramatic: { duration: DURATIONS.dramatic, ease: EASINGS.smooth },
  spring: EASINGS.spring,
  springTight: EASINGS.springTight,
} as const;

/* ─── Reusable Variants ─── */

/** Fade + slide up (primary entrance) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.reveal,
  },
};

/** Fade + slide up with custom distance */
export function fadeUpVariant(distance = 24, duration: number = DURATIONS.reveal): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASINGS.smooth },
    },
  };
}

/** Simple fade (for reduced-motion) */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.smooth, ease: EASINGS.easeOut },
  },
};

/** Scale in (for modals, dialogs) */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.smooth, ease: EASINGS.smooth },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: DURATIONS.fast, ease: EASINGS.easeIn },
  },
};

/** Backdrop fade */
export const backdropFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATIONS.normal, ease: EASINGS.easeOut } },
  exit: { opacity: 0, transition: { duration: DURATIONS.fast, ease: EASINGS.easeIn } },
};

/** Stagger container (parent) */
export function staggerContainer(
  staggerChildren = 0.08,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

/** Stagger item (child) */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.reveal, ease: EASINGS.smooth },
  },
};

/** Card grid item (shorter stagger, smaller distance) */
export const cardItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATIONS.smooth, ease: EASINGS.smooth },
  },
};

/** Slide in from right (for side panels) */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.reveal, ease: EASINGS.smooth },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: DURATIONS.fast, ease: EASINGS.easeIn },
  },
};

/** Hero text stagger (larger delays for dramatic effect) */
export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

/** Hero fade up (slightly larger distance) */
export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASINGS.smooth },
  },
};

/* ─── Hover Presets ─── */

/** Card hover (lift + shadow) */
export const cardHover = {
  y: -4,
  transition: transitions.smooth,
};

/** Button hover (subtle scale) */
export const buttonHover = {
  scale: 1.02,
  transition: { duration: DURATIONS.normal, ease: EASINGS.smooth },
};

/** Play button hover (slightly larger scale) */
export const playButtonHover = {
  scale: 1.1,
  transition: EASINGS.spring,
};

/** Thumbnail hover (zoom) */
export const thumbnailHover = {
  scale: 1.05,
  transition: { duration: 0.4, ease: EASINGS.smooth },
};

/** Favorite toggle (pop) */
export const favoriteToggle = {
  scale: [1, 1.3, 1],
  transition: { duration: 0.3, ease: EASINGS.springTight },
};

/* ─── Ambient Animations ─── */

/** Scroll indicator pulse */
export const scrollPulse = {
  scaleY: [0.5, 1, 0.5],
  opacity: [0.4, 0.8, 0.4],
  transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const },
};

/** Ken Burns (slow zoom) */
export const kenBurns = {
  scale: [1, 1.06, 1],
  transition: { duration: 20, ease: 'linear' as const, repeat: Infinity, repeatType: 'reverse' as const },
};

/* ─── Skeleton Shimmer ─── */
export const shimmer = {
  x: ['-100%', '100%'],
  transition: { duration: 1.5, repeat: Infinity, ease: 'linear' as const },
};
