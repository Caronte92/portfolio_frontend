import React from 'react';
import styled from 'styled-components';
import { TechBadge } from '@/components/atoms/TechBadge';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;
  width: fit-content;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bg.surface};
  border: 1px solid oklch(100% 0 0deg / 6.3%);
  border-radius: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.font.size.h4.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.h4.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StackPillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface TechCardProps {
  title: string;
  stackPills: string[];
}

function _TechCard({ ...props }: TechCardProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <StackPillsContainer>
        {props.stackPills.map((pill, index) => (
          <TechBadge text={pill} key={`${index}-${pill}`} />
        ))}
      </StackPillsContainer>
    </Container>
  );
}

export const TechCard = React.memo(_TechCard);
