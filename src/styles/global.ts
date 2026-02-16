'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Variables CSS */
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

  /* Reset y box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* HTML y Body */
  html, body {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
  }

  /* Body específico */
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--foreground);
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Enlaces */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Form elements */
  button, input, textarea, select {
    font: inherit;
  }

  /* Media elements */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    
    body {
      color: var(--foreground);
      background: var(--background);
    }
  }
`;
