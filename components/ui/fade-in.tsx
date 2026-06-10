'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUpVariant, fadeOnly } from '@/lib/motion';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Reusable fade-up animation wrapper.
 * Respects `prefers-reduced-motion` by falling back to opacity-only.
 */
export function FadeIn({
  children,
  className = '',
  delay = 0,
  distance = 24,
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? fadeOnly
    : fadeUpVariant(distance, duration);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '0px 0px -60px 0px' }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              delay,
              duration,
              ease: [0.16, 1, 0.3, 1] as const,
            }
      }
    >
      {children}
    </motion.div>
  );
}
