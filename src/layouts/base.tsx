'use client';

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

interface IBaseProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
  children: React.ReactNode;
}

const Shell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

const Content = styled.main`
  flex: 1;
`;

export default function BaseLayout({ ...props }: IBaseProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Shell>
        {!props.hideHeader && <Header />}
        <Content>{props.children}</Content>
        {!props.hideFooter && <Footer />}
      </Shell>
    </ThemeProvider>
  );
}
