'use client';

import { useState } from 'react';
import { SectionReveal } from './ui/section-reveal';
import { categories, albums, books } from '@/lib/data';

const icons: Record<string, React.ReactNode> = {
  predicazioni: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  musica: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
  ),
  libri: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
  ),
  produzioni: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
  ),
  fire: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
  ),
  scuola: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
  ),
  ichurch: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
  ),
};

function getIcon(id: string) {
  if (id.includes('predicazioni')) return icons.predicazioni;
  if (id.includes('musica')) return icons.musica;
  if (id.includes('libri')) return icons.libri;
  if (id.includes('produzioni')) return icons.produzioni;
  if (id.includes('fire')) return icons.fire;
  if (id.includes('scuola')) return icons.scuola;
  return icons.ichurch;
}

export function Materials() {
  const [tab, setTab] = useState<'categories' | 'music' | 'books'>('categories');

  return (
    <section id="materiali" className="relative py-28 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-16 md:mb-20">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Gratuitamente avete ricevuto, gratuitamente date
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-foreground">
            Materiali
          </h2>
        </SectionReveal>

        {/* Tabs */}
        <SectionReveal delay={100} className="flex justify-center gap-2 mb-14">
          {[
            { key: 'categories' as const, label: 'Categorie' },
            { key: 'music' as const, label: 'Musica' },
            { key: 'books' as const, label: 'Libri' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border ${
                tab === t.key
                  ? 'bg-gold text-background border-gold'
                  : 'bg-transparent text-muted border-border hover:border-border-strong hover:text-foreground'
              }`}
            >
              {t.label}
            </button>
          ))}
        </SectionReveal>

        {tab === 'categories' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <SectionReveal key={cat.id} delay={i * 60}>
                <a
                  href={cat.href}
                  className="group relative flex flex-col p-7 md:p-8 rounded-2xl bg-surface border border-border transition-all duration-500 hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  <div className="mb-5 w-11 h-11 flex items-center justify-center rounded-[10px] bg-gold-muted/60 text-gold border border-gold/10 transition-all duration-500 group-hover:bg-gold/10 group-hover:border-gold/20">
                    {getIcon(cat.id)}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{cat.label}</h3>
                  <p className="text-[14px] leading-relaxed text-muted flex-grow">{cat.description}</p>
                  <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold transition-all duration-300 group-hover:translate-x-1">
                    Scopri →
                  </span>
                </a>
              </SectionReveal>
            ))}
          </div>
        )}

        {tab === 'music' && (
          <div className="space-y-10">
            {albums.map((album, i) => (
              <SectionReveal key={`${album.title}-${album.year}`} delay={i * 80}>
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-border">
                    <h3 className="font-serif text-xl font-semibold text-foreground">{album.title}</h3>
                    <span className="text-[13px] text-muted font-medium">{album.year}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                    {album.tracks.map((track, j) => (
                      <div key={j} className="flex items-center justify-between gap-3 py-2">
                        <span className="text-[14px] text-muted truncate">{track.title}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href={track.mp3}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
                            title="Ascolta / Scarica MP3"
                          >
                            MP3
                          </a>
                          {track.doc && (
                            <a
                              href={track.doc}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-semibold uppercase tracking-wider text-muted hover:text-foreground transition-colors"
                              title="Testo e accordi"
                            >
                              Doc
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        )}

        {tab === 'books' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map((book, i) => (
              <SectionReveal key={book.title} delay={i * 80}>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full p-7 rounded-2xl bg-surface border border-border transition-all duration-500 hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                >
                  <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-[10px] bg-gold-muted/60 text-gold border border-gold/10">
                    {icons.libri}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1 leading-snug">{book.title}</h3>
                  <p className="text-[13px] text-muted mb-5">{book.description}</p>
                  <span className="mt-auto text-[11px] font-semibold uppercase tracking-[0.1em] text-gold transition-all duration-300 group-hover:translate-x-1">
                    Scarica PDF →
                  </span>
                </a>
              </SectionReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
