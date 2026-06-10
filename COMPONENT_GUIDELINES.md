# Senza Misura — Component Guidelines

## Overview

This document defines how to build every UI component using the design system. It is the single source of truth for all visual decisions.

**References**: Apple Human Interface Guidelines · Stripe Elements · Linear Design System · Radix Primitives

---

## 1. Typography

### Scale

| Token | Size | Line-height | Tracking | Usage |
|-------|------|-------------|----------|-------|
| **text-2xs** | 11px | 1.4 | 0.16em | Labels, overlines, uppercase meta |
| **text-xs** | 13px | 1.5 | normal | Captions, small body, metadata |
| **text-sm** | 15px | 1.6 | normal | Default body text |
| **text-base** | 16px | 1.6 | normal | Standard body (desktop) |
| **text-lg** | 18px | 1.65 | normal | Lead paragraphs |
| **text-xl** | 22px | 1.3 | -0.01em | Small headings, card titles |
| **text-2xl** | 28px | 1.2 | normal | Sub-section headings |
| **text-3xl** | 36px | 1.1 | -0.01em | Section headings |
| **text-4xl** | 48px | 1.05 | -0.02em | Major headings |
| **text-5xl** | 64px | 1 | -0.02em | Hero headings |
| **text-6xl** | 96px | 0.95 | -0.03em | Display hero |

### Rules

1. **Font-family**: `font-sans` (Inter) for all UI text. `font-serif` (Cormorant) for display headings, blockquotes, and numbers.
2. **Uppercase only at text-2xs** with `tracking-wider`. Never on body text.
3. **Measure**: Body text max width is `max-w-content` (680px). Never let a paragraph span the full container.
4. **Hierarchy**: One `text-5xl` or larger per page. Maximum two `text-3xl` per section.
5. **Color**: `text-foreground` for primary. `text-muted` for secondary. `text-gold` for accent/emphasis.

### Example

```tsx
<h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground">
  Senza Misura
</h1>
<p className="text-sm text-muted leading-relaxed max-w-content">
  Predicazioni, musica e insegnamenti biblici gratuiti dal 2006.
</p>
<span className="text-2xs font-medium uppercase tracking-wider text-gold">
  Corrado Salmè — Ministero del Vangelo
</span>
```

---

## 2. Color Usage

### Semantic Mapping

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `bg-background` | `#FAFAF8` | `#0C0C0C` | Page background |
| `bg-surface` | `#FFFFFF` | `#111111` | Cards, panels, inputs |
| `bg-surface-elevated` | `#F5F5F3` | `#1A1A1A` | Hover states, subtle elevation |
| `text-foreground` | `#1A1A1A` | `#F2F0EB` | Primary text |
| `text-muted` | `#6B6B6B` | `#8A8A80` | Secondary text, captions |
| `text-gold` | `#B8860B` | `#C8A96E` | Accent, CTAs, links |
| `border-border` | `#E8E8E6` | `rgba(255,255,255,0.08)` | Card borders, dividers |
| `border-border-strong` | `#D4D4D0` | `rgba(255,255,255,0.12)` | Focus, emphasis borders |

### Rules

1. **Never use raw hex codes** in components. Always use semantic tokens.
2. **Gold is an accent only**. Maximum 10% of the viewport should be gold at any time.
3. **White (`bg-white`) is forbidden** on dark mode. Use `bg-surface` or `bg-surface-elevated`.
4. **Error, Success, Info**: reserved for form validation, status badges, and toast notifications.

---

## 3. Spacing

### Scale

All spacing is based on 4px. Use the Tailwind scale directly.

| Token | Value | Usage |
|-------|-------|-------|
| `p-1` / `gap-1` | 4px | Hairline gaps, icon padding |
| `p-2` / `gap-2` | 8px | Tight groups, inline gaps |
| `p-3` / `gap-3` | 12px | Button internal padding |
| `p-4` / `gap-4` | 16px | Card internal padding |
| `p-5` / `gap-5` | 20px | Component padding |
| `p-6` / `gap-6` | 24px | Section sub-grouping, grid gap |
| `p-8` / `gap-8` | 32px | Large component padding |
| `p-10` / `gap-10` | 40px | Card padding (generous) |
| `p-12` / `gap-12` | 48px | Section internal spacing |
| `p-16` / `gap-16` | 64px | Between major blocks |
| `p-20` / `gap-20` | 80px | Section vertical padding (mobile) |
| `p-24` / `gap-24` | 96px | Section vertical padding (tablet) |
| `p-32` / `gap-32` | 128px | Section vertical padding (desktop) |
| `p-40` / `gap-40` | 160px | Between major sections |

### Rules

1. **Vertical rhythm**: Minimum 80px between sections on mobile, 128–160px on desktop.
2. **Proximity**: Related elements are close (8–16px). Unrelated elements are far (64–128px).
3. **Asymmetric**: Text-heavy sections need more left padding. Image sections can be full-bleed.
4. **Safe zones**: No text or interactive elements within 24px of the viewport edge on mobile.

### Example

```tsx
<section className="py-20 md:py-32 px-6 lg:px-8">
  <div className="max-w-page mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {/* ... */}
    </div>
  </div>
</section>
```

---

## 4. Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-none` | 0px | Divider lines, hairline rules |
| `rounded-sm` | 6px | Small tags, badges, inline pills |
| `rounded-md` | 10px | Inputs, small buttons, dropdowns |
| `rounded-lg` | 16px | Cards, modals, panels |
| `rounded-xl` | 24px | Large cards, feature blocks |
| `rounded-full` | 9999px | Circular buttons, avatars, pills |

### Rules

1. **Consistency within a component**: All corners of a card use the same radius. Never mix.
2. **Buttons**: `rounded-full` for primary CTAs. `rounded-md` for standard buttons.
3. **Inputs**: `rounded-md` for text inputs. `rounded-full` for search bars.
4. **No arbitrary values**: Never use `rounded-[13px]`. Use the token scale.

---

## 5. Elevation (Shadows)

| Token | Shadow | Usage |
|-------|--------|-------|
| `shadow-none` | none | Flat cards, clean sections |
| `shadow-sm` | 0 1px 2px rgba(0,0,0,0.04) | Subtle depth, tags, badges |
| `shadow-md` | 0 4px 12px rgba(0,0,0,0.06) | Cards at rest, dropdowns |
| `shadow-lg` | 0 12px 40px rgba(0,0,0,0.08) | Elevated cards, modals |
| `shadow-xl` | 0 24px 64px rgba(0,0,0,0.12) | Dialogs, popovers |
| `shadow-inner` | inset 0 2px 4px rgba(0,0,0,0.04) | Pressed states |

### Rules

1. **Shadows imply elevation**. A card with `shadow-md` is higher than one with `shadow-sm`.
2. **Hover elevation**: Cards at `shadow-sm` lift to `shadow-md` on hover.
3. **No colored shadows**: Never use `shadow-gold` or `shadow-[0_0_40px_rgba(...)]`.
4. **Dark mode**: Shadows are automatically darker and more visible.

---

## 6. Grid System

### Configuration

- **Columns**: 12
- **Gap**: 24px (`gap-6`)
- **Margin**: 24px (`px-6`) mobile, 32px (`px-8`) desktop
- **Max width**: 1200px (`max-w-page`)

### Responsive Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| `sm` | ≥ 640px | 2 columns where applicable |
| `md` | ≥ 768px | 2–3 columns |
| `lg` | ≥ 1024px | 3–4 columns |
| `xl` | ≥ 1280px | 4 columns, full spacing |
| `2xl` | ≥ 1536px | 4–5 columns |

### Example

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {items.map((item) => (
    <Card key={item.id} item={item} />
  ))}
</div>
```

---

## 7. Buttons

### Variants

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| **Primary** | `bg-gold` | `text-background` | none | `bg-gold-light` + `shadow-md` |
| **Secondary** | `bg-surface` | `text-foreground` | `border-border` | `border-gold/30` + `bg-surface-elevated` |
| **Ghost** | transparent | `text-muted` | none | `text-foreground` |
| **Danger** | `bg-error` | `text-inverse` | none | `bg-error-muted` |

### Sizes

| Size | Padding | Font | Radius |
|------|---------|------|--------|
| **sm** | px-4 py-2 | text-2xs | rounded-full |
| **md** | px-6 py-3 | text-xs | rounded-full |
| **lg** | px-7 py-3.5 | text-sm | rounded-full |

### Rules

1. **Uppercase + tracking**: All buttons use `uppercase tracking-wider`.
2. **Icon gap**: 8px (`gap-2`) between icon and text.
3. **Focus**: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold`
4. **Disabled**: `opacity-50 cursor-not-allowed pointer-events-none`
5. **Loading**: Show a text label change ("Caricamento...") instead of a spinner.

### Example

```tsx
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-background text-xs font-semibold uppercase tracking-wider hover:bg-gold-light hover:shadow-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
  <PlayIcon className="w-4 h-4" />
  Ascolta ora
</button>
```

---

## 8. Cards

### Structure

```
┌─────────────────────────────┐
│  Thumbnail (aspect-[4/3])   │
│  · Type badge (top-left)    │
│  · Favorite (top-right)   │
│  · Play overlay (hover)    │
├─────────────────────────────┤
│  Title (text-sm, 2 lines)  │
│  Metadata (text-2xs, muted)  │
├─────────────────────────────┤
│  CTA · External link        │
└─────────────────────────────┘
```

### Styling

- Background: `bg-surface`
- Border: `border border-border`
- Radius: `rounded-lg`
- Padding: `p-4` (content area)
- Hover: `hover:-translate-y-1 hover:shadow-md transition-all duration-300`

### Rules

1. **Thumbnails**: Use gradient backgrounds per category. No images for abstract content.
2. **Overflow hidden**: Always on the thumbnail container for zoom effects.
3. **Line clamp**: Titles max 2 lines (`line-clamp-2`).
4. **Focus**: Entire card is not focusable. Only interactive elements inside are.

---

## 9. Inputs

### Text Input

```tsx
<input
  type="text"
  className="w-full px-4 py-3 rounded-md bg-surface border border-border text-foreground placeholder:text-muted text-sm focus:border-gold/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors"
  placeholder="Cerca..."
/>
```

### Rules

1. **Background**: `bg-surface` (not transparent).
2. **Border**: `border-border` at rest. `border-gold/40` on focus.
3. **Placeholder**: `placeholder:text-muted`.
4. **Error**: `border-error` + `text-error` below the input.
5. **Label**: Always use a visible `<label>` or `aria-label`.
6. **Disabled**: `opacity-50 cursor-not-allowed bg-surface-elevated`.

---

## 10. Modals / Dialogs

### Structure

```
┌──────────────────────────────────┐
│  Backdrop (bg-black/60, blur)    │
│  ┌────────────────────────────┐  │
│  │  Header · Close X          │  │
│  ├────────────────────────────┤  │
│  │  Content                   │  │
│  ├────────────────────────────┤  │
│  │  Footer · Actions          │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

### Styling

- Backdrop: `fixed inset-0 z-modal-backdrop bg-black/60 backdrop-blur-sm`
- Container: `bg-surface rounded-xl shadow-xl max-w-2xl w-full`
- Padding: `p-6`
- Focus trap: Required. First focusable element auto-focused.
- Escape: Closes modal. Focus returns to trigger.

---

## 11. Accessibility Standards

### WCAG 2.2 AA Compliance

| Criterion | Requirement | Implementation |
|-----------|-------------|---------------|
| **1.4.3 Contrast** | 4.5:1 normal text, 3:1 large text | All tokens verified against APCA |
| **1.4.11 Non-text Contrast** | 3:1 UI components | Focus outlines, borders meet 3:1 |
| **2.4.7 Focus Visible** | Visible focus indicator | `*:focus-visible` with 2px gold outline |
| **2.1.1 Keyboard** | All functions via keyboard | Tab navigation, Escape closes modals |
| **2.4.3 Focus Order** | Logical tab order | DOM order = visual order |
| **2.5.5 Target Size** | Minimum 44×44px touch targets | Buttons, links, chips all ≥ 44px |
| **2.3.3 Animation** | Respect reduced motion | `prefers-reduced-motion` disables transforms |
| **2.4.6 Headings** | Descriptive headings | One H1 per page, logical hierarchy |
| **4.1.2 Name/Role/Value** | ARIA labels on interactive elements | All icon-only buttons have `aria-label` |

### Minimum Implementation Checklist

- [ ] Focus visible on all interactive elements
- [ ] Color contrast ≥ 4.5:1 for body text
- [ ] Touch targets ≥ 44×44px
- [ ] Reduced motion respected (`prefers-reduced-motion`)
- [ ] Screen reader labels on all icon-only buttons
- [ ] Logical heading hierarchy (H1 → H2 → H3)
- [ ] Skip link present
- [ ] Keyboard navigation functional

---

## 12. Dark Mode Standards

### Philosophy

Dark mode is not "light mode inverted." It is a reimagined palette that preserves hierarchy, warmth, and legibility.

### Rules

1. **Backgrounds**: Never pure black (`#000000`). Use `#0C0C0C` for background, `#111111` for surface.
2. **Text**: Never pure white (`#FFFFFF`). Use `#F2F0EB` (warm off-white) for foreground.
3. **Borders**: Use `rgba(255,255,255,0.08)` — visible but subtle.
4. **Gold**: Lighten to `#C8A96E` for better contrast on dark backgrounds.
5. **Shadows**: Increase opacity. Shadows are invisible on near-black unless stronger.
6. **Images**: Add `brightness-90` filter to photographs so they don't burn eyes.
7. **Scrollbars**: Use `border-radius-full` with semi-transparent thumbs.

### Implementation

Dark mode is automatic via `prefers-color-scheme: dark` in `globals.css`. No toggle required.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0C0C0C;
    --color-surface: #111111;
    /* ... */
  }
}
```

---

## 13. Anti-patterns

| Anti-pattern | Why | Correct |
|--------------|-----|---------|
| `text-[15px]` | Hardcoded, breaks scale | `text-sm` |
| `p-[17px]` | Arbitrary, inconsistent | `p-4` (16px) or `p-5` (20px) |
| `rounded-[13px]` | Not in token scale | `rounded-md` (10px) or `rounded-lg` (16px) |
| `shadow-[0_0_40px_rgba(...)]` | Colored glow, decorative | `shadow-lg` |
| `bg-white` | Breaks dark mode | `bg-surface` |
| `text-gray-500` | Raw Tailwind color, not semantic | `text-muted` |
| `border-gray-200` | Raw Tailwind color | `border-border` |
| `animate-bounce` | Decorative, distracting | No animation, or subtle fade |
| `!important` in classes | Overrides cascade | Restructure specificity |
| Arbitrary values in clamp | `text-[clamp(...)]` | Use Tailwind `text-4xl` etc. |

---

## 14. Usage Examples

### Hero Section

```tsx
<section className="relative h-[100dvh] overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <Image src="/hero.jpg" fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/45" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
  </div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
    <div className="max-w-[52rem] text-center">
      <p className="text-2xs font-medium uppercase tracking-wider text-gold mb-5">
        Corrado Salmè — Ministero del Vangelo
      </p>
      <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-tight text-white mb-5">
        Senza Misura
      </h1>
      <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
        Predicazioni, musica e insegnamenti biblici gratuiti dal 2006
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#materiali" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-background text-xs font-semibold uppercase tracking-wider hover:bg-gold-light hover:shadow-lg transition-all duration-200">
          Ascolta ora
        </a>
        <a href="#materiali" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/80 text-xs font-medium uppercase tracking-wider hover:border-white/40 hover:text-white transition-all duration-200">
          Esplora i materiali
        </a>
      </div>
    </div>
  </div>
</section>
```

### Card Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
  {items.map((item) => (
    <article
      key={item.id}
      className="group flex flex-col bg-surface border border-border rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-900/25 to-amber-950/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayIcon className="w-6 h-6 text-white/30" />
        </div>
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-sm font-medium text-foreground leading-snug mb-1 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-2xs text-muted mb-3">{item.category}</p>
        <div className="mt-auto">
          <button className="text-2xs font-medium uppercase tracking-wider text-gold hover:text-gold-light transition-colors">
            Ascolta
          </button>
        </div>
      </div>
    </article>
  ))}
</div>
```

### Section Layout

```tsx
<section className="py-20 md:py-32 bg-surface border-y border-border">
  <div className="max-w-page mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="block text-2xs font-medium uppercase tracking-wider text-gold mb-3">
        2006 — Oggi
      </span>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        La nostra storia
      </h2>
    </div>
    <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-content mx-auto">
      {/* ... */}
    </div>
  </div>
</section>
```

---

*This document is a living contract. No code should be written that contradicts these guidelines.*
