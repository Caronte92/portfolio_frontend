import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styled from 'styled-components';
import { SectionContainer } from '@/styles/home.styles';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HeroImage = styled(Image)`
  width: 10rem;
  height: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 12rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 16rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 20rem;
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[20]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`;

const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.bodySmall.lineHeight};
  color: ${({ theme }) => theme.colors.accent.cyan};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font.size.tag.fontSize};
    line-height: ${({ theme }) => theme.font.size.tag.lineHeight};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h1.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.h1.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font.size.h2.fontSize};
    line-height: ${({ theme }) => theme.font.size.h2.lineHeight};
  }
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.bodyLarge.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.bodyLarge.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font.size.body.fontSize};
    line-height: ${({ theme }) => theme.font.size.body.lineHeight};
  }
`;

function _Hero() {
  const t = useTranslations('Hero');

  return (
    <SectionContainer>
      <InfoWrapper>
        <HeroWrapper>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <Title>{t('title')}</Title>
          <Subtitle>{t('subtitle')}</Subtitle>
        </HeroWrapper>
        <HeroImage
          src="/hero/me.webp"
          alt="Hero illustration"
          width={261}
          height={405}
          priority
        />
      </InfoWrapper>
    </SectionContainer>
  );
}

export const Hero = React.memo(_Hero);
