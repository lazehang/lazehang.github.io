---
version: alpha
name: lazehang-portfolio
description: >
  Hiring portfolio for Mangal Hang Limbu (lazehang) — full-stack developer in Hong Kong.
  Visual system adapted from quiet-instrument (design-taste-frontend) plus structure from
  Vercel- and Cal-inspired DESIGN.md references (awesome-design-md / VoltAgent, MIT).
  No trademarks, proprietary fonts, or third-party logos beyond vendored Simple Icons for
  named skills. Open face: Poppins (Google Fonts).
colors:
  ground: "#ffffff"
  surface: "#f2f2f2"
  surface-2: "#e8e8e8"
  ink: "#0a0a0a"
  muted: "#6b6b6b"
  field-1: "#000000"
  field-1-ink: "#ffffff"
  accent: "#d92b21"
  accent-ink: "#ffffff"
  focus: "#0a0a0a"
typography:
  family: "Poppins, system-ui, sans-serif"
  display:
    size: "clamp(2.5rem, 5.5vw, 4.5rem)"
    weight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  h2:
    size: "clamp(1.5rem, 2.2vw, 2rem)"
    weight: 600
    lineHeight: 1.15
  body:
    size: "1.125rem"
    weight: 400
    lineHeight: 1.5
  small:
    size: "0.9375rem"
    weight: 400
    lineHeight: 1.5
  caption:
    size: "0.875rem"
    weight: 500
    lineHeight: 1.4
rounded:
  control: "6px"
  media: "12px"
  chip: "9999px"
spacing:
  page-margin: "clamp(1.25rem, 4vw, 2rem)"
  section: "clamp(6rem, 12vw, 8.75rem)"
  column: "32rem"
---

# DESIGN.md — lazehang.com portfolio

Upstream learning refs (adapt, do not clone): **Vercel** and **Cal.com** analyses from [VoltAgent/awesome-design-md](https://github.com/voltagent/awesome-design-md) (MIT). Composition direction: **quiet-instrument** (design-taste-frontend).

## Overview

A hiring one-pager that whispers craft instead of shouting product marketing. White ground, near-black ink, one black primary CTA, Poppins only. The B&W headshot is the primary photograph; stacks are real Simple Icons used as calibrated marks (mono → brand on hover/focus). Surfaces separate by **tone steps**, never gradients, rest shadows, or indigo/violet “assistant” accents.

**Key characteristics**

- Quiet column (~512px) left-of-centre on desktop; headshot answers the opposite side of the hero grid.
- Black filled CTA (`field-1`); secondary actions are ink text links.
- Work as a **ledger**, not a 2-up card grid.
- Stacks as grouped two-ended rows on a flat `surface` band, with optional group filter.
- Closing CTA is a plain sentence + one button on empty ground.
- Footer is a single quiet line.

## Colors

| Role | Hex | Use |
| --- | --- | --- |
| `ground` | `#ffffff` | Page background |
| `surface` | `#f2f2f2` | Stacks band, headshot tone frame, soft panels |
| `surface-2` | `#e8e8e8` | Chip fill / stronger tone step |
| `ink` | `#0a0a0a` | Headings, body, links, focus ring |
| `muted` | `#6b6b6b` | Meta dates, inactive ledger siblings, captions |
| `field-1` | `#000000` | Primary button fill |
| `field-1-ink` | `#ffffff` | Primary button label |
| `accent` | `#d92b21` | At most one UI chrome use per screen (e.g. active stack filter) — not body links |
| Skill brand | Simple Icons hex | Hover/focus fill on skill SVGs only |

**Do not use:** mesh/gold→indigo gradients, `#3730a3` / violet link colour, cream+terracotta pairs, rest-state drop shadows, hairline rules as section dividers.

## Typography

- **One family:** Poppins 400 / 600 (optional 500). No monospace outside real `<code>`.
- Display ≤ **two lines** at every breakpoint; tracking slightly negative.
- Body ≥ 16px (prefer 18px); captions ≥ 14px (never &lt; 13px).
- Sentence case everywhere; no tiny uppercase tracked labels.

## Layout

- Equal outer margins; max content width ~1024–1120px wrapper OK if column geometry inside stays quiet.
- Section vertical gap ~96–140px.
- Neighbouring sections must differ: hero split ≠ work ledger ≠ stacks surface band ≠ empty CTA ≠ quiet footer.
- Phone: stack hero media above type; ledger full-bleed within margins; filter chips wrap with 44px targets.

## Elevation

| Level | Treatment |
| --- | --- |
| 0 | Flat `ground` |
| 1 | `surface` fill (tone step) |
| 2 | `surface-2` fill |
| Float | Shadows **only** on true overlays (none expected on this page) |

No inset hairline rings for “card” chrome. No stacked marketing shadows.

## Components

### Nav

Wordmark + 3 links. Height ~56–64px. Ink links, underline on hover. Focus ring 2px ink.

### Headshot frame

Photo on `surface` pad 10–14px; radius 12px; grayscale; no blur; no gradient ring.

### Button primary

`field-1` fill, 6px radius, ≥44px tall, pad ~12×24. Hover darken flatly. No shadow.

### Button / link secondary

Ink text; underline hover; same focus ring.

### SkillChip

Pill; logo 16–20px `aria-hidden` + visible label; mono default; brand on hover/focus-visible; text fallback when no icon.

### Work ledger entry

Name · kind · dates on one line; bullets; chips. Space between entries, not borders.

### Stack group filter

Text controls; active gets `accent` underline or `surface-2` fill (pick one pattern site-wide). Hash fallbacks `#stacks-frontend` etc.

### Closing CTA

No bordered panel. Sentence + Email me (+ Resume link).

### Footer

One line: identity · LinkedIn · GitHub · year · image credits if any.

## Imagery

1. Own headshot (required).
2. Optional credited Hong Kong harbour/street stills (CC BY / BY-SA) — atmosphere only; never presented as project screenshots.
3. Optional stacks mood JPG under flat surface (drop if contrast fails).
4. OG share image already in static.

## Accessibility

- Visible focus on every control.
- Colour contrast ≥ 4.5:1 for text (`ink`/`muted` on `ground`/`surface`).
- `prefers-reduced-motion`: no travel; keep opacity snaps.
- Logos never logo-only; decorative SVGs `aria-hidden`.

## Do

- Keep hiring facts exact (GEMGEM through October 2026, etc.).
- Keep `/stacks` → `/#stacks`.
- Prefer scale and full content over ornament after removing PR #4 chrome.

## Don’t

- Invent metrics, quotes, logos, or project screenshots.
- Reintroduce gradients, rest shadows, indigo primary, glass nav, or icon-feature card grids.
- Ship proprietary third-party brand fonts or trademarked wordmarks as site chrome.

## Adaptation notes

| Source | Kept | Discarded |
| --- | --- | --- |
| Vercel DESIGN.md | Ink/canvas roles, black CTA, sentence-case display, calm section rhythm | Mesh gradients, mono eyebrows, elevation shadow stacks, Geist |
| Cal DESIGN.md | White SaaS calm, soft surface fills, category-tab → stack filter idea, dark footer optional | Cal Sans requirement, blue accent, pastel badges, product-mockup card grids |
| quiet-instrument sheet | Column restraint, ledger + two-ended list + plain CTA + quiet footer, signal palette roles | Midline film hero; two-doors hero; hover project photo preview without assets |
