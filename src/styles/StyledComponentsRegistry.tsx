'use client';

import React, { useEffect, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

export default function StyledComponentsRegistry({ children }: IProps) {
  const [sheet] = useState(() => new ServerStyleSheet());
  const [isMounted, setIsMounted] = useState(false);

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) return <>{children}</>;

  return (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );
}
