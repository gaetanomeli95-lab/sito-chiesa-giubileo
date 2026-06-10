# Audit Completo — Senza Misura

**Data**: 10 Giugno 2026 | **Benchmark**: Apple · Stripe · Linear · Notion · Framer · Airbnb

---

## 1. Current Architecture Analysis

### Stack
- **Next.js 14.2.3** + React 18 + Tailwind CSS 3.4.3 + TypeScript 5
- **SSG statico** — output: export
- **Fonts**: next/font (Inter, Cormorant Garamond) — ottimizzati

### Struttura
```
/                    → Homepage (unica pagina)
  ├── Navbar (CC)    ├── Hero (CC)     ├── Story (SC)
  ├── MaterialsSection (SC) → Materials (CC)
  ├── Mission (SC)   └── Footer (SC)
/api/materials       → API statica (JSON completo, inutilizzata)
/robots.ts           → Presente
/sitemap.ts          → Manca
```

### Dati
- `data-generated.ts`: 7.432 righe, 1.234 materiali hardcoded in TypeScript
- 7 categorie con mapping manuale
- Materiali audio/video hostati su `amcfan.org` (esterno)
- Immagini: 6 foto hero in `/public/hero/`

### Verdetto architettura
**Base solida** (Next.js App Router + SSG è la scelta corretta). **Problema critico**: architettura a **singola pagina** in un mondo che richiede deep linking. Non esistono `/predicazioni/2011`, `/musica/nome-canto`, `/materiali/[id]`. Questo è un limite fondamentale per SEO, condivisione, e scalabilità.

**Problema bundle**: `allMaterials` importato in Server Component e passato come prop a Client Component → **tutti i 1.234 materiali finiscono nel JS client-side** per hydration.

---

## 2. UX Weaknesses — 28/100

| # | Problema | Severità | Citation |
|---|----------|----------|----------|
| 1 | Hero = slideshow senza obiettivo | Critica | `@hero.tsx:16-24` — setInterval 6s, 6 immagini, nessuna interazione richiesta |
| 2 | Nessuna proposta di valore nei primi 5s | Critica | `@hero.tsx:54-59` — "Senza Misura" ma chi è Corrado? Perché restare? |
| 3 | CTA "Esplora materiali" = scroll link generico | Alta | `@hero.tsx:71-79` — link `#materiali`, non azione di conversione |
| 4 | Materials = tabella dati, non esperienza | Critica | `@materials.tsx:145-201` — grid 12 colonne, sembra admin panel |
| 5 | Decision paralysis: 1.234 elementi | Critica | `@materials.tsx:47` — nessuna cura editoriale, nessun "in evidenza" |
| 6 | 2 click per ascoltare (modale + play) | Alta | `@materials.tsx:178-185` → `@media-player.tsx:79-88` |
| 7 | Mission = testo senza azione | Alta | `@mission.tsx:16-27` — zero CTA dopo testo bellissimo |
| 8 | Footer = solo email | Media | `@footer.tsx:16-22` — nessun form, social, newsletter |
| 9 | Zero percorso di conversione | Critica | Flusso: Hero → scroll → Story → scroll → Table → scroll → Mission → scroll → Footer |
| 10 | Nessun social proof prominente | Alta | "80.000 download" sepolto nel testo di Story |

**Gap vs Top 1%**: L'utente arriva, vede uno slideshow, scorre, incontra una tabella Excel, scorre ancora, trova un testo bellissimo, e poi un footer con una email. Non c'è mai un momento in cui il sito **guida** l'utente a fare qualcosa.

---

## 3. UI Weaknesses — 42/100

| # | Problema | Severità | Citation |
|---|----------|----------|----------|
| 1 | Design system creato ma non applicato | Critica | `DESIGN_SYSTEM.md` + `components/ui/` esistono, ma Hero/Materials/Story usano classi inline |
| 2 | Glow oro sul CTA — viola design system | Alta | `@hero.tsx:73` — `hover:shadow-[0_0_40px_rgba(...)]` = kitsch |
| 3 | Font-size hardcoded ovunque | Media | `@story.tsx:18` — `text-[1.02rem]`, `@mission.tsx:17` — `text-[1.08rem]` |
| 4 | Radius incoerenti | Media | `rounded-full`, `rounded-xl`, `rounded-2xl`, `rounded-lg`, `rounded-md` mischiati |
| 5 | Shadow system ignorato | Media | Solo `shadow-2xl` hardcoded nel modale. Nessun uso dei token shadow |
| 6 | Materials come datatable | Critica | `@materials.tsx:146-151` — header "Tipo | Titolo | Categoria | Scarica" |
| 7 | Card/Button components inutilizzati | Alta | `components/ui/card.tsx`, `button.tsx`, `input.tsx` — nessuno li importa |
| 8 | Colori hardcoded in scrollbar | Bassa | `@globals.css:101-106` — `#D4D4D0`, `#B8B8B4` |

**Gap vs Top 1%**: Stripe ha zero colori hardcoded. Linear ha zero classi arbitrarie. Apple ha zero incoerenze tra componenti. Questo progetto ha tutto il contrario — non perché manchi il design system, ma perché **non è stato applicato**.

---

## 4. Accessibility Issues — 74/100

| # | Problema | Severità | Citation |
|---|----------|----------|----------|
| 1 | Hero slideshow: nessun controllo pausa | Alta | `@hero.tsx:19-24` — **viola WCAG 2.2.2 Pause, Stop, Hide** |
| 2 | Tabella materials: header senza `scope` | Media | `@materials.tsx:146-150` — grid CSS, non tabella semantica |
| 3 | Contrasto overlay non verificato | Media | `@hero.tsx:45` — `black/20` centro gradiente, testo bianco sopra |
| 4 | Mobile menu: focus trap assente | Media | `@navbar.tsx:89-108` — focus può uscire dal menu aperto |
| 5 | Select senza `<label>` visibile | Media | `@materials.tsx:118-139` — dropdown senza label associata |
| 6 | Nessun `aria-current="page"` su navbar | Bassa | `@navbar.tsx:49-61` — nessuna indicazione pagina attiva |
| 7 | `prefers-reduced-motion` | ✅ OK | `@globals.css:110-119` — implementato |
| 8 | Focus trap modale, ESC, skip link | ✅ OK | `@media-player.tsx:21-58`, `@layout.tsx:83-85` |

---

## 5. Mobile Issues — 35/100

| # | Problema | Severità | Citation |
|---|----------|----------|----------|
| 1 | Tabella materials inusabile | Critica | `@materials.tsx:146-201` — `grid-cols-12` su 375px = colonne microscopiche |
| 2 | 6 immagini hero caricate tutte | Alta | `@hero.tsx:29-47` — tutte nel DOM, solo 1 visible |
| 3 | MediaPlayer modale su mobile | Media | `@media-player.tsx:122` — `max-w-4xl` stretto su 375px |
| 4 | Paginazione 25 pagine affollata | Media | `@materials.tsx:216-258` — 25 bottoni numerici |
| 5 | Story 2 colonne → stacked | ✅ OK | `@story.tsx:16` — corretto |
| 6 | Navbar h-16 mobile | ✅ OK | `@navbar.tsx:43` — OK |

**Il problema #1 rende il sito inusabile su telefono**. Una tabella a 12 colonne su schermo 375px è un'esperienza di scroll orizzontale continuo.

---

## 6. SEO Issues — 68/100

| # | Problema | Severità | Citation |
|---|----------|----------|----------|
| 1 | Una sola pagina indicizzabile | Critica | `@page.tsx` — solo `/`. Zero URL per categorie o materiali |
| 2 | Meta description generica | Alta | `@layout.tsx:26-27` — nessuna keyword specifica né CTA |
| 3 | Manca sitemap.xml | Alta | `@app/` — nessun `sitemap.ts` (file non esiste) |
| 4 | Titoli materiali = filename | Alta | `@data-generated.ts:12` — `2011.11.08_Fire_Generation...` non ottimizzato |
| 5 | Nessun breadcrumb | Media | Nessun schema né visivo |
| 6 | Link esterni a `amcfan.org` | Media | `@materials.tsx:188` — passano juice, nessun `nofollow` strategico |
| 7 | Structured data eccellente ma incompleta | Media | `@page.tsx:10-87` — manca `BreadcrumbList`, `VideoObject`, `AudioObject` |
| 8 | Open Graph image presente | ✅ OK | `@layout.tsx:47-54` — con metadataBase |
| 9 | Canonical URL | ✅ OK | `@layout.tsx:63-65` |
| 10 | `robots.ts` | ✅ OK | `@robots.ts:1-13` |

**Gap SEO**: 1 pagina vs 100+ pagine indicizzabili. Ogni materiale singolo, ogni categoria, ogni anno dovrebbe avere una URL propria.

---

## 7. Performance Issues — 55/100

| # | Problema | Severità | Citation |
|---|----------|----------|----------|
| 1 | Bundle JS include 1.234 materiali | Critica | `@page.tsx:8` — `allMaterials` importato, passato a CC per hydration |
| 2 | 6 immagini hero in DOM | Alta | `@hero.tsx:29-47` — tutte caricate, 5 nascoste |
| 3 | Nessun code splitting MediaPlayer | Alta | `@materials.tsx:5` — import statico, finisce nel bundle principale |
| 4 | `next.config.mjs` vuoto | Alta | `@next.config.mjs:1-5` — zero ottimizzazioni |
| 5 | API route `/api/materials` inutile | Media | `@api/materials/route.ts:1-12` — serve JSON 1.234 elementi, nessuno lo usa |
| 6 | Data file monolitico 7.432 righe | Media | `@data-generated.ts` — cresce senza limite |
| 7 | Font `display: swap` | ✅ OK | `@layout.tsx:7-17` |
| 8 | Next.js Image con `fill`, `priority` | ✅ OK | `@hero.tsx:36-43` |

**Stima Lighthouse**: Performance 55-65. LCP ~2.5s, TBT ~200ms, CLS ~0.1.

---

## 8. Information Architecture Issues — 30/100

| # | Problema | Severità | Citation |
|---|----------|----------|----------|
| 1 | Monopagina per 1.234 materiali | Critica | `@page.tsx:99-104` — 1 sola pagina |
| 2 | Nessun URL semantico per materiali | Critica | URL esterne `amcfan.org/...`. Nessun permalink proprio |
| 3 | Navigazione solo anchor links | Alta | `@navbar.tsx:6-11` — `#storia`, `#materiali` = scroll, non routing |
| 4 | Search: text match client solo su titolo | Alta | `@materials.tsx:56-63` — nessun fuzzy search, stemming, indice |
| 5 | Nessun sistema di tag | Media | Materiali: type, title, url, category. Nessun tag, descrizione, data |
| 6 | Nessuna collezione curata | Alta | Top 10, "Più ascoltati", "Recenti" — zero |
| 7 | Titoli materiali = filename | Alta | `@data-generated.ts:12` — nessun campo `displayTitle` |
| 8 | Nessuna pagina About dedicata | Media | Story in homepage funziona ora, non scala |

---

## 9. Scalability Issues — 40/100

| # | Problema | Severità | Citation |
|---|----------|----------|----------|
| 1 | Data file unico monolitico | Critica | `@data-generated.ts` — 7.432 righe. A 5.000 materiali: 30.000+ righe |
| 2 | Nessun database/CMS | Critica | Tutto hardcoded in TS. Ogni update = build + deploy |
| 3 | API route serve JSON completo | Alta | `@api/materials/route.ts` — nessuna paginazione server-side |
| 4 | Nessun sistema di versionamento dati | Media | Nessun timestamp, schema evolution |
| 5 | Script di scraping non documentato | Media | `@scripts/parse-scraped.js` — input/output/frequenza sconosciuti |
| 6 | Nessun CDN configurato | Media | Materiali su `amcfan.org`, nessun controllo |
| 7 | Nessun monitoring/logging | Bassa | Nessun Sentry, Vercel Analytics, error tracking |

---

## Riassunto Punteggi

| Area | Score | Stato | Gap |
|------|-------|-------|-----|
| Information Architecture | 30 | 🔴 Critico | Enorme |
| UX | 28 | 🔴 Critico | Enorme |
| Mobile | 35 | 🔴 Critico | Grande |
| Scalability | 40 | 🔴 Basso | Grande |
| UI | 42 | 🔴 Basso | Grande |
| Performance | 55 | 🟡 Medio | Medio |
| SEO | 68 | 🟡 Medio | Medio |
| Accessibility | 74 | 🟡 Medio | Piccolo |
| Architecture Base | 80 | 🟢 Buono | Piccolo |

**Media ponderata**: ~48/100

---

## Prioritized Roadmap

### Fase 0 — Foundation (Week 1)
**Goal**: correggere i blocker che impediscono qualsiasi progresso.

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 0.1 | Applicare design system a tutti i componenti | Alto | Medio |
| 0.2 | Rimuovere valori hardcoded, usare token Tailwind/CSS | Alto | Medio |
| 0.3 | Sostituire tabella materials con card grid responsive | Critico | Alto |
| 0.4 | Hero: 1 immagine sola, rimuovere slideshow | Alto | Basso |
| 0.5 | Rimuovere glow oro dal CTA Hero | Basso | Basso |
| 0.6 | Aggiungere `label` visibili ai selettori materials | Medio | Basso |
| 0.7 | Verificare contrasto overlay hero (WCAG) | Medio | Basso |

### Fase 1 — User Experience (Week 2)
**Goal**: trasformare da archivio a esperienza editoriale.

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 1.1 | Hero: aggiungere value proposition + 2 CTA (Ascolta ora / Esplora) | Critico | Medio |
| 1.2 | Sezione "In evidenza": 5 materiali curated con card | Critico | Alto |
| 1.3 | Sezione "Chi è Corrado Salmè": foto + bio + testimonianza | Alto | Medio |
| 1.4 | Sezione "Testimonianze": 3 card social proof | Alto | Medio |
| 1.5 | Materials: filtri sticky, search con autocomplete | Medio | Alto |
| 1.6 | Mission: aggiungere CTA form contatto | Medio | Medio |
| 1.7 | Footer: newsletter signup + social links | Medio | Medio |

### Fase 2 — Architecture & Performance (Week 3)
**Goal**: rendere il sito scalabile e veloce.

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 2.1 | Creare pagine dinamiche `/materiali/[category]/[slug]` | Critico | Alto |
| 2.2 | Generare `sitemap.ts` dinamico con tutte le URL | Alto | Basso |
| 2.3 | Implementare dynamic import per MediaPlayer | Alto | Basso |
| 2.4 | Aggiungere metadata unico per ogni pagina | Alto | Medio |
| 2.5 | Sostituire data file TS con JSON + fetch (o DB headless) | Critico | Alto |
| 2.6 | Configurare `next.config.mjs` con headers, redirects, images | Medio | Basso |
| 2.7 | Aggiungere breadcrumb schema + visivo | Medio | Medio |

### Fase 3 — Conversion & Engagement (Week 4)
**Goal**: aumentare ascolti, visualizzazioni, contatti.

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 3.1 | Sticky player bottom bar (non modale) | Critico | Alto |
| 3.2 | Autoplay audio dopo apertura (con fallback) | Alto | Medio |
| 3.3 | "Continua ad ascoltare" con countdown | Alto | Medio |
| 3.4 | Form contatto inline nella sezione Mission | Medio | Medio |
| 3.5 | Pulsanti condivisione (WhatsApp, Telegram, Email) | Medio | Medio |
| 3.6 | Newsletter signup nella homepage | Medio | Medio |
| 3.7 | "Materiali correlati" dopo ogni ascolto | Medio | Medio |

### Fase 4 — Polish & Monitoring (Week 5)
**Goal**: raggiungere Lighthouse 95+ e world-class quality.

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 4.1 | Ottimizzare LCP: preconnect, preload hero image | Medio | Basso |
| 4.2 | Aggiungere `aria-live` per hero slideshow pause | Medio | Basso |
| 4.3 | Focus trap nel mobile menu | Medio | Basso |
| 4.4 | Aggiungere Vercel Analytics / Web Vitals | Medio | Basso |
| 4.5 | Aggiungere Sentry per error tracking | Medio | Basso |
| 4.6 | Test end-to-end con Playwright | Medio | Alto |
| 4.7 | Audit finale Lighthouse + axe | Medio | Medio |

---

## Conclusione

**Il sito ha un'ottima base tecnica** (Next.js 14, SSG, font ottimizzati, structured data) ma **soffre di presentazione povera** e **esperienza non guidata**.

Il contenuto è il punto di forza assoluto: 1.234 materiali unici, storia autentica, testimonianze commoventi, citazioni bibliche potenti. Ma questo contenuto è **sepolto** sotto una tabella dati e uno slideshow generico.

**Per entrare nel top 1%**: non serve più tecnologia. Serve **cura editoriale** (cosa mostrare), **guida utente** (come scoprire), e **conversion path** (cosa fare dopo).

La trasformazione è fattibile in 4-5 settimane di lavoro concentrato.
