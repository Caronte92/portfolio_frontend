import React from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { Text } from '@/components/atoms';
import { theme } from '@/styles/theme';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 28px;
  border-top: 1px solid ${theme.components.header.scrolled.borderColor};
`;

function _Footer() {
  const t = useTranslations('Footer');

  return (
    <Container>
      <Text size="sm" color="neutral.grey">
        © 2026 Sergi Mitjavila
      </Text>
      <Text size="sm">{t('built_with')}</Text>
    </Container>
  );
}

export const Footer = React.memo(_Footer);
