import React from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { Button } from '@/components/atoms';
import { IconGitHub } from '@/components/atoms/icons';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  justify-content: space-between;
  height: 80dvh;
`;

const HeroWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 68px 0 0;
  background-image:
    linear-gradient(
      ${({ theme }) => theme.colors.border.replace(')', ' / 0.3)')} 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.border.replace(')', ' / 0.3)')} 1px,
      transparent 1px
    );
  background-size: 64px 64px;
  mask-image: radial-gradient(
    ellipse 60% 60% at 50% 50%,
    black 40%,
    transparent 100%
  );
`;

const HeroGlow = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 100%;
  height: 75%;
  pointer-events: none;
  background: ${({ theme }) =>
    theme.colors.primary[500].replace(')', ' / 0.05)')};
  border-radius: 50%;
  filter: blur(120px);
  transform: translateX(-50%);
`;

const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.lineHeight.snug};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size['4xl']};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  color: ${({ theme }) => theme.colors.primary[50]};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const ButtonsWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  margin: 0 auto;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};
`;

function _Hero() {
  const t = useTranslations('Hero');

  return (
    <Container>
      <HeroBackground />
      <HeroGlow />
      <HeroWrapper>
        <Eyebrow>{t('eyebrow')}</Eyebrow>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
      </HeroWrapper>
      <ButtonsWrapper>
        <Button text={t('button_work')} variant="primary" size="lg" />
        <Button text={t('button_talk')} variant="ghost" size="lg" />
      </ButtonsWrapper>
      <IconsWrapper>
        <SocialLinksWrapper>
          <IconGitHub />
          <IconGitHub />
          <IconGitHub />
        </SocialLinksWrapper>
      </IconsWrapper>
    </Container>
  );
}

export const Hero = React.memo(_Hero);
