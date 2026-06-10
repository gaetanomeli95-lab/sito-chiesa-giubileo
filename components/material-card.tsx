'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { MaterialItem } from '@/lib/data-generated';
import {
  cleanTitle,
  parseDate,
  formatDate,
  getCategoryLabel,
  getCategoryGradient,
  getWixUrl,
} from '@/lib/material-utils';
import { cardItem, cardHover, playButtonHover, thumbnailHover } from '@/lib/motion';

interface MaterialCardProps {
  item: MaterialItem;
  isFavorite: boolean;
  onToggleFavorite: (item: MaterialItem) => void;
  index?: number;
}

const typeIcons: Record<string, React.ReactNode> = {
  audio: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
  ),
  video: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
  ),
  pdf: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
  ),
  doc: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
  ),
};

export function MaterialCard({
  item,
  isFavorite,
  onToggleFavorite,
  index = 0,
}: MaterialCardProps) {
  const title = cleanTitle(item.title);
  const date = parseDate(item.title);
  const dateStr = formatDate(date);
  const categoryLabel = getCategoryLabel(item.category);
  const gradient = getCategoryGradient(item.category);
  const wixUrl = getWixUrl(item.category);
  const isMedia = item.type === 'audio' || item.type === 'video';

  return (
    <motion.article
      variants={cardItem}
      whileHover={cardHover}
      className="group relative flex flex-col bg-surface border border-border rounded-lg overflow-hidden focus-within:shadow-md"
      style={{ '--stagger-delay': `${index * 30}ms` } as React.CSSProperties}
    >
      {/* ── Thumbnail area ── */}
      <div className={`relative aspect-[4/3] ${gradient} flex items-center justify-center overflow-hidden`}>
        {/* Type icon with thumbnail zoom on hover */}
        <motion.div
          className="text-white/30"
          whileHover={thumbnailHover}
        >
          {typeIcons[item.type]}
        </motion.div>

        {/* Hover overlay — external link to Wix */}
        {isMedia && (
          <a
            href={wixUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apri ${title} su SenzaMisura`}
            className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <span className="w-14 h-14 rounded-full bg-gold/90 text-background flex items-center justify-center hover:bg-gold">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="7,4 19,12 7,20" />
              </svg>
            </span>
          </a>
        )}

        {/* Type badge */}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-medium uppercase tracking-wider text-white/80">
          {item.type === 'audio' && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5,3 19,12 5,21"/></svg>
          )}
          {item.type === 'video' && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5,3 19,12 5,21"/></svg>
          )}
          {item.type === 'pdf' && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
          )}
          {item.type === 'doc' && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
          )}
          {item.type.toUpperCase()}
        </span>

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(item);
          }}
          aria-label={isFavorite ? `Rimuovi ${title} dai preferiti` : `Aggiungi ${title} ai preferiti`}
          aria-pressed={isFavorite}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-gold hover:bg-black/60 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 flex flex-col p-4">
        <h3
          className="text-sm font-medium text-foreground leading-snug mb-1 line-clamp-2"
          title={title}
        >
          {title}
        </h3>
        <p className="text-[11px] text-muted mb-3">
          {categoryLabel}
          {dateStr && ` · ${dateStr}`}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2">
          {isMedia ? (
            <a
              href={wixUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-gold hover:text-gold-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              {item.type === 'audio' ? 'Ascolta' : 'Guarda'}
            </a>
          ) : (
            <a
              href={wixUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-gold hover:text-gold-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
              Apri su SenzaMisura
            </a>
          )}

          {/* External link icon */}
          <a
            href={wixUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apri ${title} in una nuova scheda`}
            className="text-muted hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
