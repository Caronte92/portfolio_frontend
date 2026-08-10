'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { LetsTalk } from '@/components/sections/LetsTalk';
import { Page } from '../styles/home.styles';

function _Home() {
  return (
    <Page>
      <Hero />
      <LetsTalk />
    </Page>
  );
}

const HomeMemo = React.memo(_Home);

export default function Home() {
  return <HomeMemo />;
}
