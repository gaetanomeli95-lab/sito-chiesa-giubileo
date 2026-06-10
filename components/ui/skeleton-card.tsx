'use client';

import { motion } from 'framer-motion';
import { cardItem } from '@/lib/motion';

interface SkeletonCardProps {
  count?: number;
  className?: string;
}

/** A single skeleton card matching MaterialCard layout exactly */
function SkeletonCardItem({ index }: { index: number }) {
  return (
    <motion.div
      variants={cardItem}
      className="bg-surface border border-border rounded-lg overflow-hidden"
      aria-hidden="true"
    >
      {/* Thumbnail area */}
      <div className="relative aspect-[4/3] bg-surface-elevated overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-shimmer" />
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-surface-elevated rounded w-[85%]" />
        <div className="h-4 bg-surface-elevated rounded w-[60%]" />
        <div className="h-3 bg-surface-elevated rounded w-[40%]" />
        <div className="pt-1 flex items-center justify-between">
          <div className="h-3 bg-surface-elevated rounded w-16" />
          <div className="h-3 bg-surface-elevated rounded w-8" />
        </div>
      </div>
    </motion.div>
  );
}

/** Grid of skeleton cards with staggered shimmer */
export function SkeletonGrid({ count = 8, className = '' }: SkeletonCardProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCardItem key={i} index={i} />
      ))}
    </div>
  );
}
