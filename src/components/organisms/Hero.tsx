import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styled from 'styled-components';
import { ButtonLink } from '@/components/atoms';
import GitHubIcon from '@/components/atoms/icons/github.svg';
import LinkedInIcon from '@/components/atoms/icons/linkedin.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  max-width: 75rem;
  margin: 0 auto;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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
  gap: ${({ theme }) => theme.spacing[5]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60%;
    text-align: left;
  }
`;

const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.lineHeight.snug};
  color: ${({ theme }) => theme.font.colors.eyebrow};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size['4xl']};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  color: ${({ theme }) => theme.font.colors.title};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.font.colors.subtitle};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;

  & > a:first-child {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;

    & > a:first-child {
      width: auto;
    }
  }
`;

function _Hero() {
  const t = useTranslations('Hero');

  return (
    <Container>
      <InfoWrapper>
        <HeroWrapper>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <Title>{t('title')}</Title>
          <Subtitle>{t('subtitle')}</Subtitle>
          <CTAWrapper>
            <ButtonLink
              variant="primary"
              size="md"
              text={t('button_talk')}
              href="https://mail.google.com/mail/?view=cm&to=smitjavilada@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            />
            <ButtonsWrapper>
              <ButtonLink
                variant="ghost"
                size="md"
                text="Github"
                iconLeft={
                  <Image src={GitHubIcon} alt="GitHub" width={24} height={24} />
                }
                href="https://github.com/Caronte92/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              />
              <ButtonLink
                variant="ghost"
                size="md"
                text="Linkedin"
                iconLeft={
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                }
                href="https://www.linkedin.com/in/sergi-mitjavila-del-amo-788746110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              />
            </ButtonsWrapper>
          </CTAWrapper>
        </HeroWrapper>
        <HeroImage
          src="/hero/me.webp"
          alt="Hero illustration"
          width={261}
          height={405}
          priority
        />
      </InfoWrapper>
    </Container>
  );
}

export const Hero = React.memo(_Hero);
