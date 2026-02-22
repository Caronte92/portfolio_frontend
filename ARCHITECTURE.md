ARCHITECTURE.md

> Folder structure, conventions, and architectural decisions for this project.
> Read in conjunction with [`AGENTS.md`](./AGENTS.md).

---

## Folder Structure

```
/
├── app/
│   ├── layout.tsx          # Global layout: fonts, metadata, Styled Components provider
│   ├── page.tsx            # Main page: assembles all organisms in order
│   └── globals.css         # Minimal global resets only (no utility classes)
│
├── components/
│   ├── atoms/              # Smallest indivisible UI elements
│   ├── molecules/          # Combinations of atoms with a single responsibility
│   └── organisms/          # Complex sections, assembled from atoms and molecules
│
├── styles/
│   ├── theme.ts            # Design tokens: colors, spacing, typography, breakpoints
│   └── GlobalStyle.ts      # Styled Components global styles
│
├── lib/                    # Utility functions and helpers
├── types/                  # Shared TypeScript types and interfaces
├── public/                 # Static assets (images, fonts, icons)
│
├── AGENTS.md
├── ARCHITECTURE.md
├── DESIGN.md
├── SECTIONS.md
└── package.json
```

---

## Atomic Design (Simplified)

This project uses a 3-level Atomic Design structure. No `templates/` or `pages/` layer — Next.js App Router handles that via `layout.tsx` and `page.tsx`.

### Atoms `/components/atoms/`

The smallest, most reusable UI elements. They have no dependencies on other components.

Examples:

- `Button.tsx`
- `Tag.tsx`
- `Badge.tsx`
- `Typography.tsx`
- `Icon.tsx`

### Molecules `/components/molecules/`

Combinations of atoms that serve a single, specific purpose.

Examples:

- `ProjectCard.tsx` — image + title + description + tags + links
- `TechBadge.tsx` — icon + label
- `SocialLink.tsx` — icon + anchor atom
- `NavLink.tsx` — styled anchor with active state

### Organisms `/components/organisms/`

Full sections of the page. They are self-contained and imported directly into `page.tsx`.

Examples:

- `Navbar.tsx`
- `HeroSection.tsx`
- `AboutSection.tsx`
- `SkillsSection.tsx`
- `ProjectsSection.tsx`
- `ExperienceSection.tsx`
- `ContactSection.tsx`
- `Footer.tsx`

---

## App Router Conventions

- `app/layout.tsx` is the only place for global providers (e.g. Styled Components `ThemeProvider`).
- `app/page.tsx` imports organisms and composes the single page. It contains no logic, only layout.
- All components are **Client Components** by default (`'use client'`) since Styled Components requires it.
- Do not create additional routes unless explicitly requested.

---

## Component Conventions

- One component per file.
- File name matches the component name in PascalCase: `ProjectCard.tsx`.
- Each component file contains the component and its Styled Components in the same file.
- Styled Components are declared first, then the props interface, then the component.
- Export components as **named exports**, not default exports.

### Atoms, Molecules and Organisms

```tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  // ...
`;

interface ComponentNameProps {
}

const _ComponentName = ({ ...props }: ComponentNameProps) => (


);

export const ComponentName = React.memo(_ComponentName);
```

### app/page.tsx

`page.tsx` uses a wrapper pattern to allow injecting `BaseLayout` or global providers if needed, without touching the internal component logic.

```tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  // ...
`;

interface PageProps {
}

function _Page({ ...props }: PageProps) {
  return (


  );
}

const PageMemo = React.memo(_Page);

export default function Page(props: PageProps) {
  return (

  );
}
```

---

## Theme & Tokens

- All design tokens live in `styles/theme.ts` and are consumed via Styled Components `ThemeProvider`.
- Never hardcode color values, font sizes, or spacing. Always reference the theme.
- See [`DESIGN.md`](./DESIGN.md) for the full token reference.

```tsx
// ✅ Correct
const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary[500]};
`;

// ❌ Wrong
const StyledButton = styled.button`
  background: oklch(0.54 0.25 293);
`;
```

---

## Styling Rules

- **Styled Components only.** No Tailwind, CSS Modules, or inline styles.
- Global styles (resets, font-face) go in `styles/GlobalStyle.ts`.
- `app/globals.css` is kept minimal — only resets that cannot be done with Styled Components.
- Responsive styles use breakpoints from the theme, not hardcoded values.

---

## TypeScript Rules

- All files must be `.tsx` or `.ts`. No `.js` or `.jsx`.
- Avoid `any`. Use `unknown` and narrow types explicitly.
- Shared types go in `types/`. Component-specific types stay in the component file.
