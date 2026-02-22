'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

interface IBaseProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: IBaseProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
