'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, fadeOnly, staggerContainer, staggerItem } from '@/lib/motion';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Single element fade-up reveal on scroll.
 * Uses Framer Motion's whileInView for GPU-accelerated scroll-triggered animation.
 */
export function SectionReveal({
  children,
  className = '',
  delay = 0,
  once = true,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? fadeOnly : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '0px 0px -60px 0px' }}
      transition={prefersReducedMotion ? undefined : { delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

interface SectionStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}

/**
 * Parent wrapper that staggers children animations on scroll.
 * Children must use `variants` with `staggerItem`.
 */
export function SectionStagger({
  children,
  className = '',
  stagger = 0.08,
  delay = 0,
  once = true,
}: SectionStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        prefersReducedMotion
          ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } }
          : staggerContainer(stagger, delay)
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '0px 0px -60px 0px' }}
    >
      {children}
    </motion.div>
  );
}

/** Use this inside SectionStagger for each child element */
export const sectionStaggerItem = staggerItem;

