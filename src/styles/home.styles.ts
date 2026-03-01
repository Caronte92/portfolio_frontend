'use client';

import styled from 'styled-components';

export const Page = styled.div`
  --gray-rgb: 0, 0, 0;
  --gray-alpha-200: rgb(var(--gray-rgb), 0.08);
  --gray-alpha-100: rgb(var(--gray-rgb), 0.05);
  --button-primary-hover: #383838;
  --button-secondary-hover: #f2f2f2;

  display: grid;
  grid-template-rows: 20px 1fr 20px;
  gap: 64px;
  place-items: center center;
  min-height: 100svh;
  padding: 80px;
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;

  @media (prefers-color-scheme: dark) {
    --gray-rgb: 255, 255, 255;
    --gray-alpha-200: rgb(var(--gray-rgb), 0.145);
    --gray-alpha-100: rgb(var(--gray-rgb), 0.06);
    --button-primary-hover: #ccc;
    --button-secondary-hover: #1a1a1a;
  }

  @media (width <= 600px) {
    padding: 32px;
    padding-bottom: 80px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  grid-row-start: 2;
  gap: 32px;

  ol {
    padding-left: 0;
    margin: 0;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    list-style-position: inside;
  }

  li:not(:last-of-type) {
    margin-bottom: 8px;
  }

  code {
    padding: 2px 4px;
    font-family: inherit;
    font-weight: 600;
    background: var(--gray-alpha-100);
    border-radius: 4px;
  }

  @media (width <= 600px) {
    align-items: center;

    ol {
      text-align: center;
    }
  }
`;

export const Ctas = styled.div`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    appearance: none;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 128px;
    transition:
      background 0.2s,
      color 0.2s,
      border-color 0.2s;
  }

  @media (width <= 600px) {
    flex-direction: column;

    a {
      height: 40px;
      padding: 0 16px;
      font-size: 14px;
    }
  }
`;

export const PrimaryLink = styled.a`
  gap: 8px;
  color: var(--background);
  background: var(--foreground);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: var(--button-primary-hover);
      border-color: transparent;
    }
  }
`;

export const SecondaryLink = styled.a`
  min-width: 158px;
  border-color: var(--gray-alpha-200);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: var(--button-secondary-hover);
      border-color: transparent;
    }
  }

  @media (width <= 600px) {
    min-width: auto;
  }
`;

export const Logo = styled.div`
  @media (prefers-color-scheme: dark) {
    img {
      filter: invert();
    }
  }
`;
