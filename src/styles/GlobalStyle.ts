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
    line-height: ${({ theme }) => theme.font.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.neutral.white};
    background: ${({ theme }) => theme.colors.neutral.bg};
  }

  /* 5. Media elements defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* 6. Inherit fonts for form elements */
  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  /* 7. Button reset */
  button {
    appearance: none;
    cursor: pointer;
    background: none;
    border: none;
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

  /* ===== Global Styles ===== */
  html, body {
    width: 100%;
    max-width: 100vw;
    min-height: 100%;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.family.sans};
    color-scheme: dark;
  }
`;
