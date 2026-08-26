'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { LetsTalk } from '@/components/sections/LetsTalk';
import { Projects } from '@/components/sections/Projects';
import { TechStack } from '@/components/sections/TechStack';
import { Page } from '../styles/home.styles';

function _Home() {
  return (
    <Page>
      <Hero />
      <Projects />
      <TechStack />
      <LetsTalk />
    </Page>
  );
}

const HomeMemo = React.memo(_Home);

export default function Home() {
  return <HomeMemo />;
}
