---
version: alpha
name: lazehang-portfolio
status: FINAL Stage 1b — tokens from Grok Bot capture pack + open-design-artifact.css; light companion invert
description: >
  Hiring portfolio for Mangal Hang Limbu (lazehang). Visual SoT: Open Design artifact
  (dark) + dual theme (light companion). Supersedes quiet-instrument-as-primary (PR #5).
  Inter only (GT Walsheim named in artifact but not loaded — do not ship unlicensed files).
  Taste: legal equivalents (no radial glows, no glass blur, no rest shadows); page accent #0099ff.
colors:
  dark-bg: "#05070d"
  dark-surface: "#0e121b"
  dark-surface-lift: "#151b28"
  dark-fg: "#ffffff"
  dark-fg-2: "#c5cad6"
  dark-accent: "#0099ff"
  dark-accent-cyan: "#22d3ee"
  dark-accent-violet: "#a78bfa"
  light-bg: "#f4f6f9"
  light-surface: "#ffffff"
  light-surface-lift: "#e8ecf3"
  light-fg: "#0a0c10"
  light-fg-2: "#3a4050"
  light-muted: "#5c6578"
  light-accent: "#0099ff"
typography:
  family: "Inter, system-ui, sans-serif"
  display:
    size: "clamp(48px, 9vw, 85px)"
    weight: 500
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  h2:
    size: "clamp(36px, 5vw, 62px)"
    weight: 500
    lineHeight: 0.95
    letterSpacing: "-0.05em"
  body:
    size: "15px"
    weight: 400
    lineHeight: 1.3
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  pill: "9999px"
spacing:
  container-max: "1320px"
  gutter-desktop: "48px"
  section-y-desktop: "128px"
  nav-h: "64px"
theme:
  default: "prefers-color-scheme"
  persistenceKey: "lazehang-theme"
  attribute: "data-theme"
---

# DESIGN.md — lazehang.com portfolio (Open Design dual theme)

> **Supersession:** Replaces quiet-instrument **light-only** DESIGN.md as the product visual system. Open Design artifact + capture pack are SoT for composition and dark tokens. Quiet-instrument anti-slop (no gradients, rest shadows, glass, indigo/violet *page* primary, tiny tracked eyebrows) still governs **legal equivalents**.  
> **Fonts:** Artifact names GT Walsheim / Azeret Mono but loads **Inter** only — ship **Inter 400–700** alone (max one face). Do not vendor unlicensed GT Walsheim/Azeret.

**Artifact:** https://open-design.app/artifact/1c136747-5c6d-48c8-ada5-8f0cf33894c9/b237c671-ca30-4c5f-824e-64c5435ddc42  
**Pack:** `/workspace/portfolio-open-design-CAPTURE-PACK.md`, `/workspace/open-design-artifact.css`

## Overview

Dark-first hiring one-pager with a light companion theme. Large Inter display name, B&W headshot with “Based in Hong Kong”, work as meta+media case cards, signature stack + filterable mosaic, display-scale closing CTA. Page accent `#0099ff`. Surfaces via tone steps; sticky flat nav; pill CTAs.

## Colors

### Dark (artifact FINAL)

| Role | Value | Use |
| --- | --- | --- |
| `bg` | `#05070d` | Page / theme-color |
| `surface` | `#0e121b` | Cards, portrait pad, tiles context |
| `surface-lift` | `#151b28` | Hover / secondary control fill |
| `fg` | `#ffffff` | Headings, primary text |
| `fg-2` | `#c5cad6` | Lead / secondary body |
| `muted` | `rgba(255,255,255,.72)` | Secondary (verify contrast) |
| `meta` | `rgba(255,255,255,.5)` | Captions; bump to muted if &lt;4.5:1 |
| `border` | `rgba(0,153,255,.28)` | Accent-tinted edge |
| `border-soft` | `rgba(255,255,255,.1)` | Soft edge / footer rule |
| `accent` | `#0099ff` | Links, focus, UNDONE case, filters |
| `accent-cyan` | `#22d3ee` | GEMGEM case only |
| `accent-violet` | `#a78bfa` | ItineraryEdge case optional only |
| Primary CTA | `#fff` / `#000` | Email me |

### Light (companion FINAL — pack invert)

| Role | Value |
| --- | --- |
| `bg` | `#f4f6f9` |
| `surface` | `#ffffff` |
| `surface-lift` | `#e8ecf3` |
| `fg` | `#0a0c10` |
| `fg-2` | `#3a4050` |
| `muted` | `#5c6578` |
| `meta` | `#6b7385` |
| `border` / `border-soft` | blue 35% / ink 10% |
| Accents | keep `#0099ff`; deepen cyan/violet if used on light |
| Primary CTA | `#0a0c10` / `#ffffff` |

**Do not use:** multi-radial hero glows, backdrop-blur glass, rest-state shadow stacks, glow hovers, violet as global link/accent, 11px uppercase tracked eyebrows, red `#d92b21` as brand (superseded), Poppins as primary.

## Typography

- **Inter only** (display + body). Weight 500 for display/h2; 400 body; 500–600 UI.
- Scale: 12 / 14 / 15 / 18 / 22 / 32 / 62 / 110 with h1 `clamp(48px, 9vw, 85px)` lh 0.9 tracking -0.05em.
- Sentence case; no tiny tracked caps; no monospace chrome.

## Layout

- Container max 1320px; gutters 48 / 32 / 24; nav 64 sticky flat.
- Section padding 128 / 88 / 68.
- Hero min-height `100svh - nav`; 2-col from 900px ~1.15 / 0.85.
- Work cases: 11rem meta + main from 768px; radius 20.
- Stacks mosaic: `auto-fill minmax(112px, 1fr)`.
- Radii: 8 / 12 / 20 / pill.

## Elevation (legal)

| Level | Treatment |
| --- | --- |
| 0 | Flat `bg` |
| 1 | `surface` |
| 2 | `surface-lift` |
| Edge | `border` / `border-soft` or 4px case accent bar |
| Float | Shadows only on true overlays (none on page chrome) |

## Theme behaviour

`prefers-color-scheme` default → `localStorage["lazehang-theme"]` override → `html[data-theme]`. FOUC inline script. Update `theme-color`. `prefers-reduced-motion` disables travel. Toggle in nav.

## Components

### Nav

Wordmark · Work · Stacks · Resume pill (flat lift) · theme toggle. Sticky flat; no blur.

### Headshot

**Headshot:** HQ rembg RGBA cutout (`profile-pic.png`, ~800), grayscale asset, no CSS mask; sits on soft token hero gradient (`--hero-gradient`: surface→ground, both themes). Theme toggle: ink on surface-lift chip + border-soft, visible in light and dark. Display ~300px mobile / ~480px desktop; caption “Based in Hong Kong” in `--muted`; no glass, rest shadow, or glow.

### Buttons

Pill. Primary = field-1. Secondary = surface-lift + border-soft. No frosted blur.

### Work case

Meta (dates, role, side project) + media (owned 16:9 or tone pad) + title + bullets + chips. Case accent per project sparingly. Hover: surface-lift + flat edge.

### Signature / mosaic / filters

Signature strip + mosaic tiles; filters with pressed inversion. **Mono → brand** on logo hover/focus (product lock).

### Closing / footer

Display-scale closing sentence + two buttons. Footer split: identity © 2026 · links.

## Imagery

1. Owned headshot required.  
2. Work media only if already owned in repo — else tone pad.  
3. No fabricated campaign/jewelry/watch shots as proof.  
4. OG unchanged.

## Accessibility

Visible focus (accent ring); contrast ≥4.5:1 both themes; keyboard toggle; `aria-hidden` on decorative SVGs; reduced motion.

## Content locks

GEMGEM through October 2026; mailto:lazehang@gmail.com; headshot-primary; stacks on home; `/stacks` → `/#stacks`; no fabricated claims; no DNS; Gatsby 5 / React 18 / Tailwind 3 / yarn.

## Adaptation notes

| Source | Kept | Discarded / legalized |
| --- | --- | --- |
| Open Design artifact | Composition, dark tokens, Inter, blue accent, cases, signature+mosaic, CTA/footer | Radial glows, glass blur, rest shadows, glow hover, tracked eyebrow, unloaded GT/Azeret files, unowned work bitmaps |
| Capture-pack light invert | Near-white page, white cards, near-black text, flipped primary | Hero glows on light |
| quiet-instrument PR #5 | IA, content locks, mono→brand chips, headshot-primary | Light-only red Poppins system as primary direction |

## Don’t

- Ship GT Walsheim / Azeret without license.  
- Reintroduce decorative/mesh/glow gradients, glass, rest shadows, violet page primary (**exception:** soft hero `--hero-gradient` tone-step per Stage 1b HQ polish).  
- Invent project screenshots or metrics.  
- Major stack upgrades.
