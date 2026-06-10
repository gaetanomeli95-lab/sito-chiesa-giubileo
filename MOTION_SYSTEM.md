# Senza Misura — Motion Design System

**References**: Linear.app · Stripe.com · Apple.com  
**Engine**: Framer Motion  
**Philosophy**: Motion communicates meaning. Motion is never decoration.

---

## 1. Philosophy

### Motion communicates hierarchy
An element that fades up from below is more important than one that simply appears. An element that scales on hover is interactive. An element that pulses is loading.

### Motion is never decorative
If removing an animation does not change the user's understanding of the interface, the animation should not exist. Every animation must serve a purpose: reveal, guide, confirm, or comfort.

### Animations must improve understanding
- A fade-up tells the user "this is new"
- A scale-up tells the user "this is clickable"
- A skeleton tells the user "data is coming"
- A smooth transition tells the user "the page has changed"

---

## 2. Duration Tokens

| Token | Duration | Usage |
|-------|----------|-------|
| `instant` | 0ms | No transition (for reduced motion) |
| `fast` | 100ms | Micro-interactions: color change, opacity toggle, border color |
| `normal` | 200ms | Hover states, small transforms, icon rotation |
| `smooth` | 300ms | Standard transitions: card hover, button press, dropdown open |
| `reveal` | 500ms | Element entrance: fade-up, scale-in, slide-in |
| `dramatic` | 800ms | Hero reveals, section entrances, page transitions |
| `ambient` | 12000–20000ms | Continuous ambient motion: Ken Burns, scroll indicators |

**Rule**: Never exceed 1000ms for any discrete animation. Ambient loops may be longer.

---

## 3. Easing Tokens

| Token | Curve | Usage | Reference |
|-------|-------|-------|-----------|
| `easeOut` | `cubic-bezier(0, 0, 0.2, 1)` | Exit animations, closing modals | Material Design |
| `easeIn` | `cubic-bezier(0.4, 0, 1, 1)` | Rarely used. Only for elements leaving the viewport | — |
| `easeInOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Symmetric transitions, toggle switches | Material Design |
| `smooth` | `cubic-bezier(0.16, 1, 0.3, 1)` | **Primary**. Reveals, fades, slides. Apple-style smooth deceleration | Apple |
| `spring` | `type: "spring", stiffness: 300, damping: 30` | Playful micro-interactions, not structural | Linear |
| `linear` | `linear` | Ambient loops: progress bars, scroll indicators, Ken Burns | — |

**Rule**: Use `smooth` for 90% of all animations. Use `spring` only for micro-interactions. Never use `spring` for page transitions or reveals.

---

## 4. Micro-interactions

### 4.1 Button Hover

**Primary Button (bg-gold)**
- Scale: 1.0 → 1.02
- Shadow: none → `shadow-md`
- Duration: 200ms
- Easing: `smooth`

**Ghost Button (border)**
- Border opacity: 0.2 → 0.4
- Background: transparent → `white/5`
- Duration: 200ms
- Easing: `smooth`

### 4.2 Card Hover

**Material Card**
- Transform: translateY(0) → translateY(-4px)
- Shadow: `shadow-sm` → `shadow-md`
- Thumbnail scale: 1.0 → 1.05 (overflow hidden)
- Duration: 300ms
- Easing: `smooth`

**Rule**: The thumbnail scales, the card lifts. Two separate transforms create depth.

### 4.3 Chip/Tag Hover

**Filter Chip**
- Background opacity: shifts
- Border: `border` → `gold/30`
- Duration: 150ms
- Easing: `easeOut`

### 4.4 Link Hover

**Text Link**
- Underline: width 0% → 100% (from left)
- Color: `muted` → `foreground`
- Duration: 200ms
- Easing: `easeOut`

### 4.5 Focus States

**All interactive elements**
- Outline: 2px solid `gold`
- Outline-offset: 2px
- No transition on outline (instant for accessibility)
- Duration: 0ms

### 4.6 Play Button Hover

**Circular play button on card**
- Scale: 1.0 → 1.1
- Background opacity: 0.9 → 1.0
- Duration: 200ms
- Easing: `spring` (light bounce)

### 4.7 Favorite Toggle

**Heart icon**
- Scale: 1.0 → 1.3 → 1.0 (pop)
- Fill: none → currentColor
- Duration: 300ms
- Easing: `spring` (stiffness: 400, damping: 15)

---

## 5. Hover States Summary

| Element | Property | From | To | Duration | Easing |
|---------|----------|------|-----|----------|--------|
| Primary button | scale | 1.0 | 1.02 | 200ms | smooth |
| Primary button | shadow | none | md | 200ms | smooth |
| Ghost button | border opacity | 0.2 | 0.4 | 200ms | smooth |
| Ghost button | bg | transparent | white/5 | 200ms | smooth |
| Card | translateY | 0 | -4px | 300ms | smooth |
| Card | shadow | sm | md | 300ms | smooth |
| Card thumbnail | scale | 1.0 | 1.05 | 400ms | smooth |
| Chip | border | border | gold/30 | 150ms | easeOut |
| Text link | underline width | 0% | 100% | 200ms | easeOut |
| Play button | scale | 1.0 | 1.1 | 200ms | spring |
| Favorite | scale | 1.0 | 1.3→1.0 | 300ms | spring |

---

## 6. Transitions

### 6.1 Page Entrance (Initial Load)

**Hero Section**
- Background image: opacity 0 → 1 (800ms, easeOut)
- Overline: opacity 0, y 20 → opacity 1, y 0 (500ms, smooth, delay 400ms)
- Title: opacity 0, y 30 → opacity 1, y 0 (700ms, smooth, delay 500ms)
- Subtitle: opacity 0, y 20 → opacity 1, y 0 (600ms, smooth, delay 700ms)
- Quote: opacity 0, y 20 → opacity 1, y 0 (600ms, smooth, delay 900ms)
- CTAs: opacity 0, y 15 → opacity 1, y 0 (500ms, smooth, delay 1100ms)
- Social proof: opacity 0, y 10 → opacity 1, y 0 (500ms, smooth, delay 1300ms)
- Scroll indicator: opacity 0 → 1 (1200ms, easeOut, delay 2200ms)

**Stagger rule**: 120ms between sibling elements. Never all at once.

### 6.2 Section Reveal (Scroll-triggered)

**Standard section reveal**
- Trigger: IntersectionObserver, threshold 0.1, rootMargin "0px 0px -60px 0px"
- Label: opacity 0, y 16 → opacity 1, y 0 (500ms, smooth)
- Heading: opacity 0, y 24 → opacity 1, y 0 (600ms, smooth, stagger 80ms)
- Body: opacity 0, y 20 → opacity 1, y 0 (700ms, smooth, stagger 80ms)
- Cards: opacity 0, y 28 → opacity 1, y 0 (600ms, smooth, stagger 40ms)

**Rule**: Elements within a section stagger. Sections do not wait for each other.

### 6.3 Filter Transition

**When search/filter changes**
- Old cards: opacity 1 → 0, scale 1 → 0.98 (200ms, easeIn)
- New cards: opacity 0 → 1, scale 0.98 → 1 (300ms, smooth, stagger 30ms)
- "No results" empty state: opacity 0, y 10 → opacity 1, y 0 (400ms, smooth)

### 6.4 Modal / Dialog

**MediaPlayer Open**
- Backdrop: opacity 0 → 1 (200ms, easeOut)
- Modal container: scale 0.95, opacity 0 → scale 1, opacity 1 (300ms, smooth)
- Content inside: staggerChildren 50ms

**MediaPlayer Close**
- Modal container: scale 1 → 0.97, opacity 1 → 0 (200ms, easeIn)
- Backdrop: opacity 1 → 0 (200ms, easeIn)
- Focus returns to trigger element

### 6.5 Navbar Scroll

**On scroll (scrollY > 40)**
- Background: transparent → bg-background/80
- Backdrop-filter: none → blur-xl
- Border: none → border-border
- Duration: 500ms
- Easing: smooth

---

## 7. Page Animations

### 7.1 Hero Parallax

**Background image**
- transform: translateY(0%) → translateY(25%) as user scrolls
- Scale: 1.0 → 1.06 (Ken Burns, 20s loop, linear)

**Content**
- transform: translateY(0%) → translateY(12%) as user scrolls
- Creates depth: image moves faster than text

**Overlay**
- opacity: 0.5 → 0.85 as user scrolls
- Darkens as content leaves

### 7.2 Scroll Indicator

**Pulse animation**
- scaleY: 0.5 → 1.0 → 0.5
- opacity: 0.4 → 0.8 → 0.4
- Duration: 2.4s, infinite, easeInOut

### 7.3 Card Grid Entrance

**On mount / filter change**
- Each card: opacity 0, y 20 → opacity 1, y 0
- Duration: 400ms
- Easing: smooth
- Stagger: 30ms per card

---

## 8. Loading States

### 8.1 Skeleton Cards

**Structure**: Exact same layout as final card, but with placeholder blocks.
- Thumbnail area: `bg-surface-elevated` with shimmer animation
- Title: 2 lines of `bg-surface-elevated`, 60% and 40% width
- Metadata: 1 line of `bg-surface-elevated`, 40% width
- CTA: small pill of `bg-surface-elevated`

**Shimmer animation**
- Background gradient sweeps left to right
- `linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)`
- translateX: -100% → 100%
- Duration: 1.5s, infinite, linear

### 8.2 Skeleton Rules

1. **Match the layout exactly** — A skeleton must have the same height, width, and structure as the final content. No generic spinners.
2. **Never show a spinner on a button** — Use a "loading" text state or disabled state with opacity.
3. **Stagger skeletons** — If showing 8 skeleton cards, stagger their shimmer by 100ms for a wave effect.
4. **Fade out skeleton, fade in content** — Skeleton opacity 1 → 0, content opacity 0 → 1. Simultaneous, 200ms.

---

## 9. Reduced Motion

### 9.1 `prefers-reduced-motion: reduce`

When the user has requested reduced motion:

- **Disable**: parallax, Ken Burns, scroll indicator pulse, card hover lift
- **Keep**: opacity fades (instant or 150ms max), focus outlines
- **Replace**: translateY animations with opacity-only
- **Disable**: stagger delays (all elements appear simultaneously)

### 9.2 Implementation

Use Framer Motion's `useReducedMotion()` hook:
```tsx
const prefersReducedMotion = useReducedMotion();
// All transforms become 0 or identity when reduced motion is preferred
```

---

## 10. Performance Rules

1. **Animate only `transform` and `opacity`** — Never animate `width`, `height`, `top`, `left`, `margin`, `padding`. These trigger layout recalculation.
2. **Use `will-change: transform` sparingly** — Only on elements that are actively animating. Remove after animation completes.
3. **Batch reads and writes** — Framer Motion handles this automatically.
4. **Avoid animating `box-shadow` directly** — Use a pseudo-element with `opacity` instead, or accept the compositor cost.
5. **Debounce scroll handlers** — Use `requestAnimationFrame` for scroll-linked animations.
6. **Lazy-load off-screen animations** — Use IntersectionObserver (Framer Motion's `whileInView`) to only animate visible elements.

---

## 11. Anti-patterns

| Anti-pattern | Why it's wrong | Correct approach |
|--------------|--------------|----------------|
| Bounce/spring on page transitions | Distracting, unprofessional | `smooth` easing, 500ms |
| Multiple elements animating simultaneously | Visual chaos | Stagger: 80–120ms between siblings |
| Animations longer than 1s | User feels stuck | Max 800ms for reveals |
| Parallax on mobile | Janky, battery drain | Disable parallax below 768px |
| Loading spinner for >3s | User thinks it's broken | Skeleton state matching final layout |
| Hover animations on touch devices | No hover on touch | Use `:active` or tap feedback instead |
| Decorative floating elements | No purpose | Remove them |

---

## 12. Implementation Checklist

- [ ] Motion tokens file (durations, easings as constants)
- [ ] FadeIn wrapper component (reusable, configurable)
- [ ] StaggerContainer component (parent for staggered children)
- [ ] ScaleOnHover component (for buttons and cards)
- [ ] SkeletonCard component (exact card layout, shimmer)
- [ ] useReducedMotion applied to all transforms
- [ ] All existing components updated with motion system
- [ ] No animation exceeds 1000ms
- [ ] Only transform/opacity animated
- [ ] prefers-reduced-motion respected globally
