'use client';

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import type { MaterialItem } from '@/lib/data-generated';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { cleanTitle, getCategoryLabel, getCategoryGradient } from '@/lib/material-utils';
import { MaterialCard } from './material-card';

/* ── Types ── */
interface MaterialsProps {
  initialMaterials: MaterialItem[];
  initialCategories: string[];
}

const ITEMS_PER_BATCH = 30;

const typeFilters = [
  { key: 'all', label: 'Tutti' },
  { key: 'audio', label: 'Audio' },
  { key: 'video', label: 'Video' },
  { key: 'pdf', label: 'PDF' },
  { key: 'doc', label: 'Documenti' },
];

/* ── Component ── */
export function Materials({ initialMaterials, initialCategories }: MaterialsProps) {
  const [allMaterials] = useState<MaterialItem[]>(initialMaterials);
  const [categories] = useState<string[]>(initialCategories);

  /* Search & filters */
  const [searchRaw, setSearchRaw] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeType, setActiveType] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);

  /* LocalStorage */
  const [favorites, setFavorites] = useLocalStorage<MaterialItem[]>('sm-favorites', []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage<MaterialItem[]>('sm-recent', []);
  const searchRef = useRef<HTMLInputElement>(null);

  /* Debounce search */
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchRaw.trim()), 200);
    return () => clearTimeout(t);
  }, [searchRaw]);

  /* Reset visible count on filter change */
  useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH);
  }, [debouncedSearch, activeCategory, activeType]);

  /* Keyboard shortcuts */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to focus search (avoids hijacking browser '/' find)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape' && searchRaw) {
        setSearchRaw('');
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [searchRaw]);

  /* Filter logic */
  const filtered = useMemo(() => {
    return allMaterials.filter((item) => {
      const searchMatch =
        !debouncedSearch ||
        cleanTitle(item.title).toLowerCase().includes(debouncedSearch.toLowerCase());
      const catMatch = activeCategory === 'all' || item.category === activeCategory;
      const typeMatch = activeType === 'all' || item.type === activeType;
      return searchMatch && catMatch && typeMatch;
    });
  }, [allMaterials, debouncedSearch, activeCategory, activeType]);

  const visibleMaterials = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const hasMore = visibleCount < filtered.length;

  /* Featured selection: one per major category */
  const featured = useMemo(() => {
    const majorCats = ['Musica', 'Predicazioni_2011', 'Libri', 'Fire_Generation_-_Insegnamenti_2011_2012', 'Produzioni_Speciali'];
    const picks: MaterialItem[] = [];
    for (const cat of majorCats) {
      const found = allMaterials.find((m) => m.category === cat);
      if (found) picks.push(found);
    }
    return picks.slice(0, 5);
  }, [allMaterials]);

  /* Category counts for browse cards */
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of allMaterials) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, [allMaterials]);

  /* Derived lists */
  const isSearching = debouncedSearch.length > 0;
  const hasFavorites = favorites.length > 0;
  const hasRecent = recentlyViewed.length > 0;

  /* Handlers */
  const toggleFavorite = useCallback(
    (item: MaterialItem) => {
      setFavorites((prev) => {
        const exists = prev.some((f) => f.url === item.url);
        if (exists) return prev.filter((f) => f.url !== item.url);
        return [...prev, item];
      });
    },
    [setFavorites]
  );

  const isFavorite = useCallback(
    (item: MaterialItem) => favorites.some((f) => f.url === item.url),
    [favorites]
  );

  const handleView = useCallback(
    (item: MaterialItem) => {
      /* Add to recently viewed (dedupe + limit 10) */
      setRecentlyViewed((prev) => {
        const next = prev.filter((r) => r.url !== item.url);
        return [item, ...next].slice(0, 10);
      });
    },
    [setRecentlyViewed]
  );

  const loadMore = useCallback(() => {
    setVisibleCount((c) => c + ITEMS_PER_BATCH);
  }, []);

  /* ── Render ── */
  return (
    <section id="materiali" className="relative py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-12 md:mb-16">
          <span className="block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-gold mb-3">
            Gratuitamente avete ricevuto, gratuitamente date
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-tight text-foreground mb-3">
            La raccolta
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
            Più di mille materiali — prediche, musica, insegnamenti — condivisi senza misura dal 2006.
          </p>
        </div>

        {/* ── Inizia da qui ── */}
        {!isSearching && (
          <div className="mb-14">
            <div className="flex items-baseline justify-between mb-5">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                Inizia da qui
              </h3>
              <span className="text-[11px] text-muted">Scelti dalla raccolta</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.slice(0, 4).map((item, i) => (
                <MaterialCard
                  key={item.url}
                  item={item}
                  isFavorite={isFavorite(item)}
                  onToggleFavorite={toggleFavorite}
                  onPlay={handlePlay}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Esplora per categoria ── */}
        {!isSearching && (
          <div className="mb-14">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-5">
              Esplora per categoria
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {categories.map((cat) => {
                const count = categoryCounts[cat] || 0;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      document.getElementById('materiali-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`group relative overflow-hidden rounded-xl p-5 text-left transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${getCategoryGradient(cat)}`}
                    aria-label={`${getCategoryLabel(cat)}, ${count} materiali`}
                  >
                    <div className="relative z-10">
                      <p className="text-[13px] font-semibold text-foreground group-hover:text-gold transition-colors">
                        {getCategoryLabel(cat)}
                      </p>
                      <p className="text-[11px] text-muted mt-1">
                        {count} {count === 1 ? 'materiale' : 'materiali'}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-foreground/[0.02] group-hover:bg-foreground/[0.04] transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Search & Filters ── */}
        <div className="mb-10 md:mb-14 space-y-5">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <label htmlFor="material-search" className="sr-only">
              Cerca materiali
            </label>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={searchRef}
                id="material-search"
                type="text"
                value={searchRaw}
                onChange={(e) => setSearchRaw(e.target.value)}
                placeholder="Cerca predicazioni, canti, insegnamenti..."
                className="w-full pl-11 pr-4 py-3.5 rounded-md bg-surface border border-border text-foreground placeholder:text-muted text-sm focus:border-gold/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors"
              />
              {searchRaw && (
                <button
                  onClick={() => setSearchRaw('')}
                  aria-label="Cancella ricerca"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground p-1"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              )}
            </div>
            <p className="mt-2 text-[11px] text-muted text-center">
              Premi <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border text-[10px] font-mono">Ctrl+K</kbd> per cercare · <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border text-[10px] font-mono">Esc</kbd> per chiudere
            </p>
          </div>

          {/* Category chips */}
          <div
            className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
            aria-label="Filtri per categoria"
          >
            <button
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
              className={`shrink-0 px-4 py-2 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                activeCategory === 'all'
                  ? 'bg-gold text-background'
                  : 'bg-surface border border-border text-muted hover:text-foreground hover:border-gold/30'
              }`}
            >
              Tutti
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`shrink-0 px-4 py-2 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  activeCategory === cat
                    ? 'bg-gold text-background'
                    : 'bg-surface border border-border text-muted hover:text-foreground hover:border-gold/30'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Type chips */}
          <div
            className="flex gap-2 flex-wrap"
            aria-label="Filtri per tipo"
          >
            {typeFilters.map((tf) => (
              <button
                key={tf.key}
                onClick={() => setActiveType(tf.key)}
                aria-pressed={activeType === tf.key}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  activeType === tf.key
                    ? 'bg-foreground text-background'
                    : 'bg-surface border border-border text-muted hover:text-foreground hover:border-foreground/20'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Continue Listening / Recently Viewed ── */}
        {!isSearching && hasRecent && (
          <div className="mb-14">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-5">
              Continua ad ascoltare
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-3 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
              {recentlyViewed.map((item) => (
                <div key={item.url} className="shrink-0 w-[260px]">
                  <MaterialCard
                    item={item}
                    isFavorite={isFavorite(item)}
                    onToggleFavorite={toggleFavorite}
                    onPlay={handlePlay}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Favorites ── */}
        {!isSearching && hasFavorites && (
          <div className="mb-14">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-5">
              I tuoi preferiti
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {favorites.slice(0, 4).map((item, i) => (
                <MaterialCard
                  key={item.url}
                  item={item}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                  onPlay={handlePlay}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Featured ── */}
        {!isSearching && (
          <div className="mb-14">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-5">
              In evidenza
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {featured.map((item, i) => (
                <MaterialCard
                  key={item.url}
                  item={item}
                  isFavorite={isFavorite(item)}
                  onToggleFavorite={toggleFavorite}
                  onPlay={handlePlay}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Results anchor ── */}
        <div id="materiali-results" className="scroll-mt-24" />

        {/* Active filter header */}
        {(activeCategory !== 'all' || activeType !== 'all' || debouncedSearch) && (
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
              {debouncedSearch
                ? `Risultati per "${debouncedSearch}"`
                : activeCategory !== 'all'
                ? getCategoryLabel(activeCategory)
                : typeFilters.find(t => t.key === activeType)?.label}
            </h3>
            <span className="text-[11px] text-muted">
              {filtered.length} {filtered.length === 1 ? 'materiale' : 'materiali'}
            </span>
            <button
              onClick={() => {
                setSearchRaw('');
                setActiveCategory('all');
                setActiveType('all');
              }}
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-[11px] text-muted hover:text-foreground hover:border-gold/30 transition-all"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              Reset filtri
            </button>
          </div>
        )}

        {/* ── Results ── */}
        {visibleMaterials.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-surface-elevated flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </div>
            <p className="text-foreground font-medium mb-1">Nessun risultato trovato</p>
            <p className="text-muted text-sm mb-6">
              Prova con un termine diverso o esplora le categorie sopra.
            </p>
            <button
              onClick={() => {
                setSearchRaw('');
                setActiveCategory('all');
                setActiveType('all');
              }}
              className="px-5 py-2.5 rounded-full bg-gold text-background text-[11px] font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Mostra tutti i materiali
            </button>
          </div>
        ) : (
          <>
            {/* When no category filter: group by category */}
            {activeCategory === 'all' && !debouncedSearch ? (
              <div className="space-y-14">
                {categories.map((cat) => {
                  const catItems = allMaterials.filter(m => m.category === cat);
                  if (catItems.length === 0) return null;
                  const visibleCatItems = catItems.slice(0, 4);
                  return (
                    <div key={cat}>
                      <div className="flex items-baseline justify-between mb-5">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                          {getCategoryLabel(cat)}
                        </h3>
                        <button
                          onClick={() => {
                            setActiveCategory(cat);
                            document.getElementById('materiali-results')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-[11px] text-muted hover:text-gold transition-colors"
                        >
                          Vedi tutti ({catItems.length})
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {visibleCatItems.map((item, i) => (
                          <MaterialCard
                            key={item.url}
                            item={item}
                            isFavorite={isFavorite(item)}
                            onToggleFavorite={toggleFavorite}
                            onPlay={handlePlay}
                            index={i}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* When filtered: flat grid */
              <>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                  role="list"
                  aria-label="Lista materiali"
                >
                  {visibleMaterials.map((item, i) => (
                    <div key={item.url} role="listitem">
                      <MaterialCard
                        item={item}
                        isFavorite={isFavorite(item)}
                        onToggleFavorite={toggleFavorite}
                        onPlay={handlePlay}
                        index={i}
                      />
                    </div>
                  ))}
                </div>

                {hasMore && (
                  <div className="mt-10 text-center">
                    <button
                      onClick={loadMore}
                      className="px-7 py-3 rounded-full border border-border text-muted text-[11px] font-medium uppercase tracking-wider hover:border-gold/30 hover:text-foreground transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      Carica altri materiali
                    </button>
                    <p className="mt-3 text-[11px] text-muted">
                      Mostrati {visibleMaterials.length} di {filtered.length}
                    </p>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* aria-live per screen reader */}
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {filtered.length} materiali trovati
        </div>
      </div>

      {/* Media Player Modal */}
      {playingMedia && (
        <MediaPlayer
          url={playingMedia.url}
          type={playingMedia.type}
          title={playingMedia.title}
          onClose={() => setPlayingMedia(null)}
        />
      )}
    </section>
  );
}
