# SEO Coherence — Backlog

Origen: revisión de coherencia entre el contenido SEO (metadata, sitemap, hreflang) y el contenido real del sitio. Comparativa completa disponible en el historial de la conversación; este documento recoge solo las tareas accionables.

## Prioridad Alta

### 1. ~~Añadir jerarquía de encabezados a Projects y TechStack~~ ✅ Resuelto

**Hecho:** `Title` en [HeaderSection.tsx](../src/components/molecules/HeaderSection.tsx) cambiado de `styled.span` a `styled.h2`. `Projects` y `TechStack` ya emiten un `<h2>` real.

### 1b. `LetsTalk` usa `<h3>` para su propio título de sección (nuevo)

**Problema:** Con `Projects`/`TechStack` ya en `<h2>`, `LetsTalk` sigue titulando su sección con `<h3>` ([LetsTalk.tsx:31](../src/components/sections/LetsTalk.tsx#L31)) — el mismo nivel que usa `ProjectCard` para tarjetas _anidadas dentro_ de la sección Projects. Un h3 de sección de nivel superior y un h3 de tarjeta interna quedan indistinguibles en el outline del documento.
**Acción:** Cambiar `Title` en [LetsTalk.tsx](../src/components/sections/LetsTalk.tsx) de `styled.h3` a `styled.h2`.
**Impacto:** Outline de encabezados consistente en toda la home (`h1` → `h2` por sección → `h3` para elementos internos).
**Esfuerzo:** XS

### 2. ~~Reconciliar el nav con las secciones reales de la página~~ ✅ Resuelto

**Decisión:** Opción (a) — no hay plan de construir "About" ni "Experience".
**Hecho:** Eliminadas las claves `nav_section_about` / `nav_section_experience` de los 3 locales, y las líneas correspondientes en el `<nav>` comentado de [Header.tsx](../src/components/organisms/Header.tsx). Se mantienen `nav_section_stack`, `nav_section_projects` y `nav_section_contact`, que sí mapean a secciones reales (TechStack, Projects, LetsTalk) por si se reactiva el nav más adelante.

## Prioridad Media

### 3. ~~Alt text descriptivo en la imagen de proyecto~~ ✅ Resuelto

**Hecho:** Añadida la clave `first_project_alt` (traducida en/es/cat) en `locales/*.json`, y `Projects.tsx` ahora usa `t('first_project_alt')` en vez del texto hardcodeado genérico.

## Prioridad Baja / Oportunidades

### 4. ~~Structured data (JSON-LD `Person`)~~ ✅ Resuelto

**Hecho:** Añadido `personSchema` (name, jobTitle, url, image, sameAs → GitHub/LinkedIn) y un `<script type="application/ld+json">` en [layout.tsx](../src/app/%5Blang%5D/layout.tsx), compartido entre los 3 locales.

### 5. ~~Twitter Card metadata~~ ❌ No aplica

No hay cuenta de X/Twitter asociada al portfolio — descartado.

---

## No requiere acción (verificado coherente)

- Title/description de metadata reflejan fielmente el contenido del Hero.
- hreflang, canonical y sitemap cubren correctamente los 3 locales (en/es/cat).
- `robots.txt` ya excluye `/*/test` (página de design system) del indexado.
