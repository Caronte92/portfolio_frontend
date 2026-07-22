'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function StyledComponentsRegistry({ children }: IProps) {
  const [sheet] = useState(() => new ServerStyleSheet());
  const isClient = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (isClient) return <>{children}</>;

  return (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );
}
