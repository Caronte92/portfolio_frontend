# DESIGN.md

> Design tokens, color palette, typography, and styling guidelines.
> Read in conjunction with [`AGENTS.md`](./AGENTS.md) and [`ARCHITECTURE.md`](./ARCHITECTURE.md).

---

## Design Overview

Dark theme portfolio with a purple/violet primary palette, neutral dark backgrounds, and a blue-green accent.
Based on a Lovable template with a custom color palette defined in OKLCH color space.

---

## Color Palette

All colors are defined in [OKLCH](https://oklch.com/) — a perceptually uniform color space that ensures consistent contrast and smooth gradients across the scale.

### Primary — Purple / Violet

Used for: CTAs, highlights, active states, gradient text, key interactive elements.

| Token         | Value                  |
| ------------- | ---------------------- |
| `primary.50`  | `oklch(0.98 0.01 308)` |
| `primary.100` | `oklch(0.90 0.06 307)` |
| `primary.200` | `oklch(0.83 0.11 306)` |
| `primary.300` | `oklch(0.72 0.18 306)` |
| `primary.400` | `oklch(0.63 0.23 304)` |
| `primary.500` | `oklch(0.54 0.25 293)` |
| `primary.600` | `oklch(0.49 0.24 293)` |
| `primary.700` | `oklch(0.43 0.21 293)` |
| `primary.800` | `oklch(0.38 0.18 294)` |
| `primary.900` | `oklch(0.29 0.14 303)` |
| `primary.950` | `oklch(0.28 0.14 291)` |

### Neutral — Dark grays with a subtle purple tint

Used for: backgrounds, surfaces, borders, muted text.

| Token         | Value                   |
| ------------- | ----------------------- |
| `neutral.50`  | `oklch(0.98 0.009 286)` |
| `neutral.100` | `oklch(0.91 0.02 286)`  |
| `neutral.200` | `oklch(0.82 0.03 286)`  |
| `neutral.300` | `oklch(0.74 0.03 286)`  |
| `neutral.400` | `oklch(0.64 0.05 285)`  |
| `neutral.500` | `oklch(0.49 0.04 285)`  |
| `neutral.600` | `oklch(0.30 0.05 283)`  |
| `neutral.700` | `oklch(0.23 0.04 283)`  |
| `neutral.800` | `oklch(0.19 0.02 284)`  |
| `neutral.900` | `oklch(0.17 0.02 284)`  |
| `neutral.950` | `oklch(0.14 0.02 284)`  |

### Accent — Blue-green / Teal

Used for: secondary highlights, section labels, skill tags, decorative elements.

| Token        | Value                  |
| ------------ | ---------------------- |
| `accent.50`  | `oklch(0.98 0.02 201)` |
| `accent.100` | `oklch(0.96 0.04 203)` |
| `accent.200` | `oklch(0.92 0.08 205)` |
| `accent.300` | `oklch(0.87 0.12 207)` |
| `accent.400` | `oklch(0.80 0.13 212)` |
| `accent.500` | `oklch(0.71 0.13 215)` |
| `accent.600` | `oklch(0.61 0.11 222)` |
| `accent.700` | `oklch(0.52 0.09 223)` |
| `accent.800` | `oklch(0.45 0.08 224)` |
| `accent.900` | `oklch(0.40 0.07 227)` |
| `accent.950` | `oklch(0.30 0.05 230)` |

---

## Semantic Color Usage

Rather than using raw palette tokens directly in components, prefer semantic aliases. These are also defined in `styles/theme.ts`.

| Semantic Token         | Maps to       | Usage                                     |
| ---------------------- | ------------- | ----------------------------------------- |
| `colors.background`    | `neutral.950` | Page background                           |
| `colors.surface`       | `neutral.900` | Cards, modals, navbar                     |
| `colors.surfaceHover`  | `neutral.800` | Hover state on cards                      |
| `colors.border`        | `neutral.700` | Dividers, card borders                    |
| `colors.textPrimary`   | `neutral.50`  | Headings, main text                       |
| `colors.textSecondary` | `neutral.300` | Body text, descriptions                   |
| `colors.textMuted`     | `neutral.500` | Labels, captions, metadata                |
| `colors.brand`         | `primary.500` | Primary CTA buttons, key highlights       |
| `colors.brandHover`    | `primary.400` | Hover state on brand elements             |
| `colors.brandSubtle`   | `primary.950` | Subtle backgrounds behind brand elements  |
| `colors.accentLabel`   | `accent.400`  | Section labels (e.g. "ABOUT", "PROJECTS") |
| `colors.accentText`    | `accent.300`  | Accent inline text                        |

---

## Typography

| Token                   | Value                       | Usage                    |
| ----------------------- | --------------------------- | ------------------------ |
| `font.family.sans`      | System font stack or custom | Body and UI text         |
| `font.family.mono`      | Monospace stack             | Code snippets, tech tags |
| `font.size.xs`          | `0.75rem`                   | Captions, metadata       |
| `font.size.sm`          | `0.875rem`                  | Secondary text, tags     |
| `font.size.base`        | `1rem`                      | Body text                |
| `font.size.lg`          | `1.125rem`                  | Subtitles                |
| `font.size.xl`          | `1.25rem`                   | Section subtitles        |
| `font.size.2xl`         | `1.5rem`                    | Section headings         |
| `font.size.3xl`         | `1.875rem`                  | Large headings           |
| `font.size.4xl`         | `2.25rem`                   | Hero subtitle            |
| `font.size.5xl`         | `3rem`                      | Hero title               |
| `font.size.6xl`         | `3.75rem`                   | Hero title (desktop)     |
| `font.weight.normal`    | `400`                       | Body                     |
| `font.weight.medium`    | `500`                       | UI labels                |
| `font.weight.semibold`  | `600`                       | Subheadings              |
| `font.weight.bold`      | `700`                       | Headings                 |
| `font.weight.extrabold` | `800`                       | Hero title               |

---

## Spacing Scale

Based on a `0.25rem` base unit. All values are in `rem` — never use `px` for spacing.

| Token        | Value     |
| ------------ | --------- |
| `spacing.1`  | `0.25rem` |
| `spacing.2`  | `0.5rem`  |
| `spacing.3`  | `0.75rem` |
| `spacing.4`  | `1rem`    |
| `spacing.6`  | `1.5rem`  |
| `spacing.8`  | `2rem`    |
| `spacing.12` | `3rem`    |
| `spacing.16` | `4rem`    |
| `spacing.24` | `6rem`    |
| `spacing.32` | `8rem`    |

---

## Breakpoints

Breakpoints are intentionally defined in `px`. Media queries respond to the viewport, not to the user's font size — using `rem` here would cause breakpoints to shift unexpectedly if the browser's base font size is changed.

| Token             | Value    | Target         |
| ----------------- | -------- | -------------- |
| `breakpoints.sm`  | `640px`  | Large phones   |
| `breakpoints.md`  | `768px`  | Tablets        |
| `breakpoints.lg`  | `1024px` | Small desktops |
| `breakpoints.xl`  | `1280px` | Desktops       |
| `breakpoints.2xl` | `1536px` | Large screens  |

Usage in Styled Components:

```ts
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[24]};
  }
`;
```

---

## theme.ts Reference

All tokens above are exported from `styles/theme.ts` and injected via Styled Components `ThemeProvider` in `app/layout.tsx`.

```ts
// styles/theme.ts (abbreviated)
export const theme = {
  colors: {
    primary: {
      50: 'oklch(0.98 0.01 308)',
      // ...
      500: 'oklch(0.54 0.25 293)',
      // ...
    },
    neutral: { ... },
    accent: { ... },
    // Semantic aliases
    background: 'oklch(0.14 0.02 284)',       // neutral.950
    surface: 'oklch(0.17 0.02 284)',           // neutral.900
    textPrimary: 'oklch(0.98 0.009 286)',      // neutral.50
    textSecondary: 'oklch(0.74 0.03 286)',     // neutral.300
    brand: 'oklch(0.54 0.25 293)',             // primary.500
    accentLabel: 'oklch(0.80 0.13 212)',       // accent.400
  },
  font: { ... },
  spacing: { ... },
  breakpoints: { ... },
};

export type Theme = typeof theme;
```

---

## Unit Rules

| Property                       | Unit                  | Reason                                           |
| ------------------------------ | --------------------- | ------------------------------------------------ |
| Font sizes                     | `rem`                 | Scales with the user's browser font preference   |
| Spacing (margin, padding, gap) | `rem`                 | Consistent relative sizing                       |
| Border radius                  | `rem`                 | Scales proportionally                            |
| Border width                   | `px`                  | Sub-pixel rendering, should stay sharp           |
| Breakpoints                    | `px`                  | Viewport-relative, must not shift with font size |
| Line height                    | unitless (e.g. `1.5`) | Relative to the element's own font size          |

> **Rule:** When in doubt, use `rem`. Only use `px` for properties that must remain visually fixed regardless of user settings.

---

## Styled Components Rules

- Always consume tokens via `theme`, never hardcode values.
- Use semantic tokens in components, raw palette tokens only in `theme.ts`.
- Keep styles co-located with the component in the same file.
- Use `ThemeProvider` at the root (`app/layout.tsx`) so all components have access.

```tsx
// ✅ Correct
const Label = styled.span`
  color: ${({ theme }) => theme.colors.accentLabel};
  font-size: ${({ theme }) => theme.font.size.sm};
`;

// ❌ Wrong
const Label = styled.span`
  color: oklch(0.80 0.13 212);
  font-size: 0.875rem;
`;
```
