import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  padding: 0.375rem 0.875rem;
  background: oklch(79.71% 0.1339 211.53deg / 6%);
  border: 1px solid oklch(79.71% 0.1339 211.53deg / 15%);
  border-radius: 62.4375rem;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.tag.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.tag.lineHeight};
  color: ${({ theme }) => theme.colors.accent.cyan};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.size.caption.fontSize};
    line-height: ${({ theme }) => theme.font.size.caption.lineHeight};
  }
`;

interface TechBadgeProps {
  text: string;
}

function _TechBadge({ ...props }: TechBadgeProps) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
}

export const TechBadge = React.memo(_TechBadge);
