import React from 'react';
import styled from 'styled-components';
import { Label } from '@/components/atoms/Label';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]};
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.font.size.display.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.display.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.size.h2.fontSize};
    line-height: ${({ theme }) => theme.font.size.h2.lineHeight};
  }
`;

const Underline = styled.div`
  width: 3.75rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colors.accent.cyan};
  border-radius: 0.125rem;
`;

interface HeaderSectionProps {
  title: string;
  subtitle: string;
}

function _HeaderSection({ ...props }: HeaderSectionProps) {
  return (
    <Container>
      <Label text={props.title} />
      <Title>{props.subtitle}</Title>
      <Underline />
    </Container>
  );
}

export const HeaderSection = React.memo(_HeaderSection);
