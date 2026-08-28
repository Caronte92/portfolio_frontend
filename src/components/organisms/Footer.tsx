import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 28px;
  border-top: 1px solid ${theme.components.header.scrolled.borderColor};
`;

const Text = styled.label`
  font-size: ${({ theme }) => theme.font.size.tag.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.tag.lineHeight};
  color: ${({ theme }) => theme.colors.text.muted};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.size.caption.fontSize};
    line-height: ${({ theme }) => theme.font.size.caption.lineHeight};
  }
`;

function _Footer() {
  return (
    <Container>
      <Text>© 2026 Sergi Mitjavila</Text>
      <Text>Next.js · TypeScript · Styled Components</Text>
    </Container>
  );
}

export const Footer = React.memo(_Footer);
