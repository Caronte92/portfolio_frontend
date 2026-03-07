import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.lineHeight.snug};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size['3xl']};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  color: ${({ theme }) => theme.colors.primary[50]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font.size['4xl']};
  }
`;

const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

interface TitleSubtitleEyebrowProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

function _TitleSubtitleEyebrow({ ...props }: TitleSubtitleEyebrowProps) {
  return (
    <Container>
      {props.eyebrow && <Eyebrow>{props.eyebrow}</Eyebrow>}
      <Title>{props.title}</Title>
      {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
    </Container>
  );
}

export const TitleSubtitleEyebrow = React.memo(_TitleSubtitleEyebrow);
