'use client';

import React from 'react';
import { Header } from '@/components/organisms';
import { Page } from '../styles/home.styles';

function _Home() {
  return (
    <Page>
      <Header />
    </Page>
  );
}

const HomeMemo = React.memo(_Home);

export default function Home() {
  return <HomeMemo />;
}
