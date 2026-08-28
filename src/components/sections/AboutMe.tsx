import React from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { HeaderSection } from '@/components/molecules/HeaderSection';
import { SectionContainer } from '@/styles/home.styles';

const MAIN_STACK = ['.NET Core', 'React.js', 'Next.js'] as const;

const AboutMeWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[80]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 35%;
  height: fit-content;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.bg.surface};
  border: 1px solid ${({ theme }) => theme.colors.accent.cyan};
  border-radius: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
    padding: 1.25rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]};
  width: 65%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.bodyLarge.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.bodyLarge.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: pre-line;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.font.size.body.fontSize};
    line-height: ${({ theme }) => theme.font.size.body.lineHeight};
  }
`;

const CodeBlock = styled.pre`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  font-family:
    'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  line-height: ${({ theme }) => theme.font.size.bodySmall.lineHeight};
  white-space: pre-wrap;
`;

const CodeLine = styled.span`
  padding-left: 1.25rem;
`;

const Punct = styled.span`
  color: ${({ theme }) => theme.colors.accent.purple};
`;

const CodeKey = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CodeString = styled.span`
  color: ${({ theme }) => theme.colors.accent.cyan};
`;

function StringArray({ items }: { items: readonly string[] }) {
  return (
    <>
      <Punct>[</Punct>
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <CodeString>&quot;{item}&quot;</CodeString>
          {index < items.length - 1 && <Punct>, </Punct>}
        </React.Fragment>
      ))}
      <Punct>]</Punct>
    </>
  );
}

function _AboutMe() {
  const t = useTranslations('AboutMe');

  return (
    <SectionContainer id="aboutMe">
      <HeaderSection title={t('title')} subtitle={t('subtitle')} />
      <AboutMeWrapper>
        <InfoContainer>
          <Description>{t('paragraph_1')}</Description>
          <Description>{t('paragraph_2')}</Description>
          <Description>{t('paragraph_3')}</Description>
          <Description>{t('paragraph_4')}</Description>
        </InfoContainer>
        <Card>
          <CodeBlock>
            <Punct>{'{'}</Punct>
            <CodeLine>
              <CodeKey>&quot;role&quot;</CodeKey>
              <Punct>: </Punct>
              <CodeString>&quot;{t('card_role_value')}&quot;</CodeString>
              <Punct>,</Punct>
            </CodeLine>
            <CodeLine>
              <CodeKey>&quot;focus&quot;</CodeKey>
              <Punct>: </Punct>
              <CodeString>&quot;{t('card_focus_value')}&quot;</CodeString>
              <Punct>,</Punct>
            </CodeLine>
            <CodeLine>
              <CodeKey>&quot;mainStack&quot;</CodeKey>
              <Punct>: </Punct>
              <StringArray items={MAIN_STACK} />
              <Punct>,</Punct>
            </CodeLine>
            <CodeLine>
              <CodeKey>&quot;loves&quot;</CodeKey>
              <Punct>: </Punct>
              <StringArray items={t.raw('card_loves')} />
            </CodeLine>
            <Punct>{'}'}</Punct>
          </CodeBlock>
        </Card>
      </AboutMeWrapper>
    </SectionContainer>
  );
}

export const AboutMe = React.memo(_AboutMe);
