'use client';

import React from 'react';
import BaseLayout from '@/layouts/base';
import { Page } from '../styles/home.styles';

function _Home() {
  return <Page></Page>;
}

const HomeMemo = React.memo(_Home);

export default function Home() {
  return (
    <BaseLayout>
      <HomeMemo />
    </BaseLayout>
  );
}
