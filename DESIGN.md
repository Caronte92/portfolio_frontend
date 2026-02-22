DESIGN.md

> Design tokens and component styling guidelines.
> Source of truth: `src/styles/theme.ts`

---

## Color Palettes

Three palettes with 11 steps each (50–950), defined in **oklch**.

| Palette     | Hue range | Role                          |
| ----------- | --------- | ----------------------------- |
| **primary** | 291–308   | Brand, CTAs, interactive      |
| **neutral** | 283–286   | Backgrounds, text, borders    |
| **accent**  | 201–230   | Labels, highlights, secondary |

### Semantic Aliases

| Token           | Resolves to    | Usage                     |
| --------------- | -------------- | ------------------------- |
| `background`    | `neutral[950]` | Page background           |
| `surface`       | `neutral[900]` | Card / section background |
| `surfaceHover`  | `neutral[800]` | Hovered surface           |
| `border`        | `neutral[700]` | Default borders           |
| `textPrimary`   | `neutral[50]`  | Main body text            |
| `textSecondary` | `neutral[300]` | Supporting text           |
| `textMuted`     | `neutral[500]` | Disabled / placeholder    |
| `brand`         | `primary[500]` | Primary brand color       |
| `brandHover`    | `primary[400]` | Brand hover state         |
| `brandSubtle`   | `primary[950]` | Subtle brand background   |
| `accentLabel`   | `accent[400]`  | Labels, tags              |
| `accentText`    | `accent[300]`  | Accent inline text        |

---

## Typography

| Token  | Family                   | Sizes                    |
| ------ | ------------------------ | ------------------------ |
| `sans` | Work Sans, system-ui     | xs sm base lg xl 2xl–6xl |
| `mono` | Cascadia Code, Fira Code | —                        |

**Weights:** normal (400), medium (500), semibold (600), bold (700), extrabold (800)
**Line-heights:** tight (1.1), snug (1.3), normal (1.5), relaxed (1.75)

---

## Spacing Scale

| Key | Value   |
| --- | ------- |
| 1   | 0.25rem |
| 2   | 0.5rem  |
| 3   | 0.75rem |
| 4   | 1rem    |
| 6   | 1.5rem  |
| 8   | 2rem    |
| 12  | 3rem    |
| 16  | 4rem    |
| 24  | 6rem    |
| 32  | 8rem    |

---

## Breakpoints

| Key | Value  |
| --- | ------ |
| sm  | 640px  |
| md  | 768px  |
| lg  | 1024px |
| xl  | 1280px |
| 2xl | 1536px |

---

## Component Styling

Two types of CSS values in every component:

- **Fixed** — values that never change across variants or sizes (e.g. `border-radius`, `cursor`, `transition`). These live directly in the styled component.
- **Variable** — values that depend on the current variant, size, or state (e.g. colors, padding, font-size). These come from `theme.components.<component>` so they can be adjusted from a single place.

The theme is the source of truth for anything that varies; the component is the source of truth for anything that stays constant.

---

## Rules for Agents

1. **Never hardcode** color values (hex, oklch) in components. Always reference the theme.
2. **Fixed properties** (same across all variants/sizes) go directly in the styled component.
3. **Variable properties** (change per variant/size/state) go in `theme.components.<component>`.
4. Use semantic aliases (`brand`, `surface`, etc.) when possible; palette steps only when no alias exists.
5. **No inline styles** in production components. Styled Components only.
6. When adding a new component, decide which properties are fixed and which are variable before writing any styles.
7. When adding a new component token, update this document with its variant/size table.
8. **Follow best practices** of each language/technology as closely as possible: idiomatic TypeScript (strict types, no `any`, proper generics), semantic HTML (`<button>`, `<nav>`, `<section>`, etc.), accessible markup (ARIA attributes, keyboard navigation), CSS logical properties when applicable, and React patterns (memoization, proper hook dependencies, single responsibility).
