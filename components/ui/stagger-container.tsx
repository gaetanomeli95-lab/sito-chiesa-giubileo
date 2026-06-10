'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerContainer, fadeOnly } from '@/lib/motion';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}

/**
 * Parent wrapper that staggers children animations.
 * Children should use `variants` matching the parent's `visible`/`hidden` states.
 */
export function StaggerContainer({
  children,
  className = '',
  stagger = 0.08,
  delay = 0,
  once = true,
}: StaggerContainerProps) {
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
