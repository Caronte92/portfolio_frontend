'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '@/components/organisms';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

interface IBaseProps {
  hideHeader?: boolean;
  children: React.ReactNode;
}

export default function BaseLayout({ ...props }: IBaseProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!props.hideHeader && <Header />}
      {props.children}
    </ThemeProvider>
  );
}
