import React from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { HeaderSection } from '@/components/molecules/HeaderSection';
import { ProjectCard } from '@/components/organisms/ProjectCard';
import { SectionContainer } from '@/styles/home.styles';

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
    <SectionContainer id="projects">
      <HeaderSection title={t('title')} subtitle={t('subtitle')} />
      <ContentContainer>
        <ProjectCard
          headerImage="/projects/image_processor.webp"
          altImage={t('first_project_alt')}
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
