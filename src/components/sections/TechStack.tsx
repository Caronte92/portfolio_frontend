import React from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { HeaderSection } from '@/components/molecules/HeaderSection';
import { TechCard } from '@/components/organisms/TechCard';
import { SectionContainer } from '@/styles/home.styles';

const CardsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

function _TechStack() {
  const t = useTranslations('TechStack');

  return (
    <SectionContainer id="stack">
      <HeaderSection title={t('title')} subtitle={t('subtitle')} />
      <CardsContainer>
        <TechCard
          title={'Frontend'}
          stackPills={[
            'React.js',
            'Next.js',
            'Typescript',
            'HTML',
            'CSS',
            'Styled Components',
            'SASS',
            'Linaria',
          ]}
        />
        <TechCard
          title={'Backend'}
          stackPills={[
            '.NET Core',
            'C#',
            'Entity Framework',
            'Unit Testing',
            'RES APIs',
            'GraphQL',
            'PostgreSQL',
            'MongoDB',
          ]}
        />
        <TechCard
          title={'Tools'}
          stackPills={[
            'Visual Studio Code',
            'GIT',
            'Docker',
            'Bitbucket',
            'Jira',
            'Github',
            'Slack',
            'Claude',
          ]}
        />
      </CardsContainer>
    </SectionContainer>
  );
}

export const TechStack = React.memo(_TechStack);
