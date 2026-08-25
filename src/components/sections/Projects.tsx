import React from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { Label } from '@/components/atoms/Label';
import { ProjectCard } from '@/components/organisms/ProjectCard';
import { SectionContainer } from '@/styles/home.styles';

const Header = styled.div`
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

const ContentContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[24]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

function _Projects() {
  const t = useTranslations('Projects');

  return (
    <SectionContainer>
      <Header>
        <Label text={t('title')} />
        <Title>{t('subtitle')}</Title>
        <Underline />
      </Header>
      <ContentContainer>
        <ProjectCard
          headerImage="/projects/image_processor.webp"
          altImage={'image project capture'}
          projectName={'Image Processor'}
          projectDescription={t('first_project_description')}
          techBadges={['Next.js', 'Typescript']}
          linkHref={
            'https://image-processor-frontend-prra.vercel.app/cat/image-converter'
          }
        />
      </ContentContainer>
    </SectionContainer>
  );
}

export const Projects = React.memo(_Projects);
