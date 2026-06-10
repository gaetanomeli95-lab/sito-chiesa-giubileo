'use client';

import { useState, useMemo } from 'react';
import { SectionReveal } from './ui/section-reveal';
import { allMaterials, materialsByCategory } from '@/lib/data-generated';

const icons: Record<string, React.ReactNode> = {
  audio: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  video: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
  ),
  pdf: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
  ),
  doc: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
  ),
};

const categoryLabels: Record<string, string> = {
  'Predicazioni_2011': 'Predicazioni 2011',
  'Predicazioni_2012': 'Predicazioni 2012',
  'Predicazioni_2013': 'Predicazioni 2013',
  'Musica': 'Musica',
  'Libri': 'Libri',
  'Produzioni_Speciali': 'Produzioni Speciali',
  'Fire_Generation_-_Insegnamenti_2011_2012': 'Fire Generation',
  'Lezioni_iChurch': 'Lezioni iChurch',
};

export function Materials() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const categories = Object.keys(materialsByCategory);

  const filteredMaterials = useMemo(() => {
    return allMaterials.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesType = selectedType === 'all' || item.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [search, selectedCategory, selectedType]);

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
          <p className="text-muted mt-4">{allMaterials.length} risorse disponibili</p>
        </SectionReveal>

        {/* Search and Filters */}
        <SectionReveal delay={100} className="mb-10 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Cerca materiale..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-surface border border-border text-foreground text-sm focus:outline-none focus:border-gold/50 transition-colors"
            >
              <option value="all">Tutte le categorie</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{categoryLabels[cat] || cat}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg bg-surface border border-border text-foreground text-sm focus:outline-none focus:border-gold/50 transition-colors"
            >
              <option value="all">Tutti i tipi</option>
              <option value="audio">Audio (MP3)</option>
              <option value="video">Video (AVI)</option>
              <option value="pdf">Documenti (PDF)</option>
              <option value="doc">Documenti (DOC)</option>
            </select>
          </div>
        </SectionReveal>

        {/* Results */}
        <SectionReveal delay={200}>
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border text-[12px] font-semibold uppercase tracking-wider text-muted">
              <div className="col-span-1">Tipo</div>
              <div className="col-span-6 md:col-span-7">Titolo</div>
              <div className="col-span-3 md:col-span-2">Categoria</div>
              <div className="col-span-2 md:col-span-2 text-right">Scarica</div>
            </div>

            <div className="divide-y divide-border max-h-[600px] overflow-y-auto">
              {filteredMaterials.length === 0 ? (
                <div className="px-6 py-12 text-center text-muted">
                  Nessun risultato trovato
                </div>
              ) : (
                filteredMaterials.map((item, i) => (
                  <div
                    key={`${item.category}-${i}`}
                    className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-surface/50 transition-colors"
                  >
                    <div className="col-span-1 text-gold">
                      {icons[item.type]}
                    </div>
                    <div className="col-span-6 md:col-span-7">
                      <p className="text-[14px] text-foreground truncate" title={item.title}>
                        {item.title.replace(/%5E/g, '^').replace(/%C3%A9/g, 'é').replace(/%C3%A8/g, 'è').replace(/%C3%B2/g, 'ò')}
                      </p>
                    </div>
                    <div className="col-span-3 md:col-span-2">
                      <span className="text-[12px] text-muted">
                        {categoryLabels[item.category] || item.category}
                      </span>
                    </div>
                    <div className="col-span-2 md:col-span-2 text-right">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
                      >
                        {item.type.toUpperCase()}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {filteredMaterials.length > 0 && (
            <p className="text-center text-[12px] text-muted mt-4">
              Mostrati {filteredMaterials.length} di {allMaterials.length} materiali
            </p>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
