'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* ===== CSS Reset (modern) ===== */

  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin and padding */
  * {
    padding: 0;
    margin: 0;
  }

  /* 3. Typographic tweaks */
  html {
    text-size-adjust: 100%;
  }

  /* 4. Body defaults — merged with global body styles */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--foreground);
    background: var(--background);
  }

  /* 5. Media elements defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 6. Inherit fonts for form elements */
  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  /* 7. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 8. Remove list styles */
  ol, ul {
    list-style: none;
  }

  /* 9. Remove link styles */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 10. Table reset */
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  /* ===== Custom Variables ===== */
  :root {
    --background: #fff;
    --foreground: #171717;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #0a0a0a;
      --foreground: #ededed;
    }
  }

  /* ===== Global Styles ===== */
  html, body {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    overflow-x: hidden;
    font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;
