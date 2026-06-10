# Senza Misura — Design System

## Philosophy

Il design system di Senza Misura è costruito su tre principi:

1. **Chiarezza prima di tutto** — Il contenuto è sacro. Il design deve scomparire.
2. **Eleganza senza ostentazione** — Raffinato, mai kitsch. Oro usato come accento, non come decorazione.
3. **Gerarchia tipografica** — La tipografia guida l'esperienza. Grassetto, dimensione e spaziatura comunicano prima dei colori.

---

## Color Palette

### Neutrals (Sottofondi e testo)

| Token | Hex | Uso |
|-------|-----|-----|
| `background` | `#FAFAF8` | Sfondo pagina |
| `surface` | `#FFFFFF` | Card, modali, aree elevate |
| `surface-elevated` | `#F5F5F3` | Hover stati, aree secondarie |
| `foreground` | `#1A1A1A` | Testo primario |
| `muted` | `#6B6B6B` | Testo secondario, label |
| `border` | `#E8E8E6` | Bordi, divisori |

### Accent (Oro — usato con parsimonia)

| Token | Hex | Uso |
|-------|-----|-----|
| `gold` | `#B8860B` | CTA primari, stati attivi, icona logo |
| `gold-light` | `#C8A96E` | Hover stato gold |
| `gold-muted` | `rgba(184, 134, 11, 0.12)` | Sfondo highlight, selezione |

### Overlay (Hero e modali)

| Token | Valore | Uso |
|-------|--------|-----|
| `overlay-dark` | `rgba(0, 0, 0, 0.45)` | Overlay immagini |
| `overlay-gradient` | `linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.55))` | Hero gradient |

### Semantico

| Token | Valore | Uso |
|-------|--------|-----|
| `text-inverse` | `#FFFFFF` | Testo su sfondi scuri (Hero) |
| `text-inverse-muted` | `rgba(255, 255, 255, 0.85)` | Testo secondario su sfondi scuri |
| `error` | `#B91C1C` | Errori (usato raramente) |

### Regole d'uso

- **Mai più di 2 colori per componente**: sfondo + testo, oppure sfondo + testo + accent.
- **Gold solo per**: CTA primari, stati attivi (paginazione corrente), icona logo, citazioni bibliche.
- **Niente gradienti dorati**, niente ombre colorate, niente effetti glow.

---

## Typography

### Font Stack

| Ruolo | Font | Fallback |
|-------|------|----------|
| Display / Titoli | Cormorant Garamond | Georgia, serif |
| Body / UI | Inter | system-ui, sans-serif |

### Scale

| Token | Mobile | Desktop | Line-height | Weight | Letter-spacing | Uso |
|-------|--------|---------|-------------|--------|----------------|-----|
| `display` | 42px | 80px | 1.05 | 600 | -0.02em | H1 Hero |
| `h1` | 32px | 48px | 1.1 | 600 | -0.01em | Sezione titoli |
| `h2` | 24px | 32px | 1.2 | 500 | 0 | Sotto-sezioni |
| `h3` | 18px | 20px | 1.3 | 500 | 0 | Card titoli |
| `body-lg` | 16px | 18px | 1.65 | 400 | 0 | Paragrafi corpo |
| `body` | 14px | 16px | 1.6 | 400 | 0 | Testo generico |
| `label` | 11px | 12px | 1.4 | 500 | 0.12em | Label, uppercase |
| `caption` | 12px | 13px | 1.5 | 400 | 0 | Metadata |

### Regole tipografiche

- **Mai più di 2 font per pagina**.
- **Display (Cormorant) solo per**: H1, citazioni bibliche, numeri grandi.
- **Inter per tutto il resto**: navigazione, body, bottoni, form.
- **Uppercase solo per**: label, tracking ampio (0.1–0.2em), font-size ≤ 12px.
- **Niente text-transform: uppercase su titoli > 20px**.

---

## Spacing Scale

Base: `4px`

| Token | Valore | Uso |
|-------|--------|-----|
| `space-1` | 4px | Icona padding interno |
| `space-2` | 8px | Gap piccolo tra elementi inline |
| `space-3` | 12px | Padding bottoni compatti |
| `space-4` | 16px | Padding card interno, gap tra elementi |
| `space-5` | 20px | Padding form input |
| `space-6` | 24px | Gap tra sezioni interne |
| `space-8` | 32px | Padding sezione interno |
| `space-10` | 40px | Gap tra blocchi |
| `space-12` | 48px | Padding verticale componenti |
| `space-16` | 64px | Gap tra sezioni |
| `space-20` | 80px | Padding verticale sezioni (mobile) |
| `space-28` | 112px | Padding verticale sezioni (desktop) |

### Layout

| Token | Valore | Uso |
|-------|--------|-----|
| `max-width` | 1200px | Container massimo |
| `content-width` | 680px | Testo leggibile (60–75 caratteri) |
| `px` | 24px / 32px | Padding orizzontale (mobile / desktop) |

### Regole

- **Spaziatura verticale tra sezioni**: minimo 80px mobile, 112px desktop.
- **Niente margin collapse accidentale**: usare padding su sezioni.
- **Gruppi interni**: 16–24px. Sezioni esterne: 80–112px.

---

## Border Radius

| Token | Valore | Uso |
|-------|--------|-----|
| `radius-sm` | 6px | Input, tag piccoli |
| `radius-md` | 10px | Bottoni, card interne |
| `radius-lg` | 16px | Card, modali |
| `radius-xl` | 24px | Container grandi, hero overlay |
| `radius-full` | 9999px | Pill bottoni, avatar |

### Regole

- **Card: 16px**. Modali: 16–24px. Bottoni: 10px (pill per CTA primari).
- **Niente bordi arrotondati su immagini fullscreen** (hero).

---

## Shadow System

| Token | Valore | Uso |
|-------|--------|-----|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | Card a riposo |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.06)` | Card hover, dropdown |
| `shadow-lg` | `0 12px 40px rgba(0,0,0,0.08)` | Modali, floating elements |
| `shadow-xl` | `0 24px 64px rgba(0,0,0,0.12)` | Solo modali importanti |

### Regole

- **Ombre nere, mai colorate**.
- **Opacità bassa (4–12%)** — sottili, quasi impercettibili.
- **Niente blur nelle ombre** (usa solo offset + spread per performance).

---

## Component Specs

### Button

**Primario (CTA)**
- Background: `gold`
- Text: `background` (bianco su oro)
- Padding: 12px 28px
- Radius: `radius-full` (pill)
- Font: `label` (11–12px, uppercase, tracking 0.08em)
- Hover: background `gold-light`, shadow `shadow-md`
- Focus: `outline: 2px solid gold, outline-offset: 2px`

**Secondario**
- Background: transparent
- Border: 1px solid `border`
- Text: `foreground`
- Padding: 12px 28px
- Radius: `radius-md`
- Hover: border `gold/40`, text `foreground`

**Tertiary (Link-style)**
- Background: transparent
- Text: `gold`
- No border
- Hover: underline
- Font: `body`, weight 500

### Card

- Background: `surface`
- Border: 1px solid `border`
- Radius: `radius-lg` (16px)
- Padding: `space-6` (24px)
- Shadow: `shadow-sm` (a riposo), `shadow-md` (hover)
- Transizione: `box-shadow 300ms ease, transform 300ms ease`
- Hover: translateY(-2px) + shadow-md

### Input / Search

- Background: `surface`
- Border: 1px solid `border`
- Radius: `radius-md` (10px)
- Padding: `space-3` (12px) `space-5` (20px)
- Font: `body` (14–16px)
- Placeholder: `muted`
- Focus: border `gold/40`, outline `gold`

### Modal / Dialog

- Background: `surface`
- Radius: `radius-lg` (16px) o `radius-xl` (24px)
- Shadow: `shadow-xl`
- Overlay: `overlay-dark` con `backdrop-blur-sm`
- Padding: `space-8` (32px)
- Max-width: 680px (testo) o 900px (media)

### Navbar

- Altezza: 64px mobile, 80px desktop
- Background: transparent → `background/80` + `backdrop-blur-xl` on scroll
- Border-bottom on scroll: 1px solid `border`
- Logo: icona `gold` + testo `foreground` (scrolled) / `white` (transparent)
- Link: `label` style, uppercase, tracking 0.12em
- Transizione: `background 500ms cubic-bezier(0.16, 1, 0.3, 1)`

### Pagination

- Numeri: `radius-md`, w-8 h-8
- Current: background `gold`, text `background`
- Default: border `border`, text `muted`
- Hover: border `gold/40`, text `foreground`
- Disabled: opacity 0.3, cursor not-allowed

---

## Motion

### Transizioni

| Token | Duration | Easing | Uso |
|-------|----------|--------|-----|
| `transition-fast` | 150ms | `ease-out` | Hover micro-interazioni |
| `transition-base` | 300ms | `ease` | Colori, opacità |
| `transition-smooth` | 500ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Transform, layout |

### Regole

- **Tutte le animazioni rispettano `prefers-reduced-motion`**.
- **Niente bounce, niente spring, niente effetti 3D**.
- **Fade + slight translateY (8–16px) per reveal**.
- **Durata massima: 500ms**.

---

## Iconography

- **Stile**: Stroke-based, 1.5px stroke width, 24×24px viewport.
- **Color**: Inherit `currentColor`.
- **Uso**: Solo dove il significato non è ovvio dal testo.
- **SVG inline**, nessuna libreria icon font (pesantezza).

---

## Responsive Breakpoints

| Token | Width | Uso |
|-------|-------|-----|
| `sm` | 640px | Tablet piccoli |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop largo |

### Mobile-first

- Base: mobile (< 640px)
- `md:` per tablet e desktop
- **Niente layout a 4 colonne su mobile** — max 1 colonna, poi 2, poi 3.

---

## Anti-pattern (Cosa NON fare)

- ❌ Gradienti dorati o rainbow
- ❌ Ombre colorate (ombra sempre nera con bassa opacità)
- ❌ Border-radius eccessivi (> 24px su elementi piccoli)
- ❌ Ombre con blur pesante (usare solo offset)
- ❌ Più di 2 font per pagina
- ❌ Uppercase su testo > 20px
- ❌ Testo centrato su più di 2 righe
- ❌ Background pattern, texture, immagini di sfondo su sezioni di testo
- ❌ Animazioni che non rispettano `prefers-reduced-motion`
- ❌ Colori hardcoded — usare sempre i token del design system
