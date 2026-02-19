'use client';

import React from 'react';
import Header from '@/components/organism/Header';
import { Footer, Page } from '../styles/home.styles';

function _Home() {
  return (
    <Page>
      <Header />

      <Footer />
    </Page>
  );
}

const HomeMemo = React.memo(_Home);

export default function Home() {
  return <HomeMemo />;
}
