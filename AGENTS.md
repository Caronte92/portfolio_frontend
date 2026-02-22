AGENTS.md

> Central reference for AI agents working on this codebase.
> Read this file first, then consult the linked documents as needed.

---

## Project Overview

Personal portfolio website for a Fullstack Developer with a Frontend focus.
Single-page application built with **Next.js (App Router)** and **Styled Components**.
Design based on a Lovable template with a custom color palette.

---

## Documentation Index

| Document                               | Purpose                                                   |
| -------------------------------------- | --------------------------------------------------------- |
| [`AGENTS.md`](./AGENTS.md)             | ← You are here. Central entry point for agents.           |
| [`ARCHITECTURE.md`](./ARCHITECTURE.md) | Folder structure, Next.js conventions, component patterns |
| [`DESIGN.md`](./DESIGN.md)             | Color tokens, typography, Styled Components guidelines    |

---

## Tech Stack

| Layer           | Technology           | Version   |
| --------------- | -------------------- | --------- |
| Framework       | Next.js (App Router) | `16.1.6`  |
| Language        | TypeScript           | `5.9.3`   |
| Styling         | Styled Components    | `6.3.9`   |
| i18n            | next-intl            | `4.8.3`   |
| Linting         | ESLint               | `9.39.2`  |
| Formatting      | Prettier             | `3.8.1`   |
| CSS Linting     | Stylelint            | `17.3.0`  |
| Git hooks       | Husky + lint-staged  | `9.1.7`   |
| Runtime         | Node.js              | `24.13.1` |
| Package manager | npm                  | `11.8.0`  |
| Deploy          | Vercel               | —         |

---

## Key Conventions

- **Single page**: All sections live in `app/page.tsx`. Do not create new routes unless explicitly asked.
- **Styled Components only**: Do not introduce Tailwind, CSS Modules, or inline styles. All styles go through Styled Components.
- **Design tokens**: Always use the color tokens defined in `DESIGN.md`. Never hardcode color values.
- **TypeScript**: All new files must be `.tsx` or `.ts`. Avoid `any`.
- **No external UI libraries**: Do not introduce component libraries (MUI, Chakra, shadcn, etc.) unless explicitly requested.

---

## What NOT to Touch

- `public/` — Static assets. Do not reorganize or rename files here without being asked.
- Color values — Never hardcode hex/oklch values directly. Use tokens from the theme.
- Section order — Do not reorder sections without explicit instruction.

---

## Agent Workflow

1. Read this file first.
2. Consult the relevant linked document for the task at hand.
3. Follow the conventions above strictly.
4. When in doubt about design decisions, refer to `DESIGN.md`.
5. When in doubt about structure, refer to `ARCHITECTURE.md`.
