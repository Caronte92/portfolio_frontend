import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styled from 'styled-components';
import { Link } from '@/components/atoms/Link';
import { Tag } from '@/components/atoms/Tag';
import { IconArrowRightAlt } from '@/components/atoms/icons';

const Container = styled.div`
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.spacing[32]};
  background: ${({ theme }) => theme.colors.bg.surface};
  border-radius: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[16]};
    max-width: 21.5rem;
    padding: 0 0 1.25rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 21.5rem;
  height: 100%;
  padding: 1rem;
  background: oklch(79.71% 0.1339 211.53deg / 8%);
  border-radius: 0.75rem 0 0 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 180px;
    padding: 0.5rem;
    border-radius: 0.75rem 0.75rem 0 0;
  }
`;

const HeaderImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.45rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
  justify-content: space-between;
  height: stretch;
  padding: 1.25rem 6rem 1.25rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.25rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.h4.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.h4.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.size.h3.fontSize};
    line-height: ${({ theme }) => theme.font.size.h3.lineHeight};
  }
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.bodySmall.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const TagsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
`;

interface ProjectCardProps {
  headerImage: string;
  altImage: string;
  projectName: string;
  projectDescription: string;
  techBadges: string[];
  linkHref: string;
}

function _ProjectCard({ ...props }: ProjectCardProps) {
  const t = useTranslations('ProjectCard');

  return (
    <Container>
      <ImageContainer>
        {props.headerImage && (
          <HeaderImage
            src={props.headerImage}
            alt={props.altImage}
            width={480}
            height={270}
          />
        )}
      </ImageContainer>
      <InfoContainer>
        <Wrapper>
          <TextWrapper>
            <ProjectTitle>{props.projectName}</ProjectTitle>
            <ProjectDescription>{props.projectDescription}</ProjectDescription>
          </TextWrapper>
        </Wrapper>
        <Wrapper>
          <TagsContainer>
            {props.techBadges &&
              props.techBadges.map((badge, index) => (
                <Tag key={index} text={badge} />
              ))}
          </TagsContainer>
          <Link
            text={t('link_text')}
            href={props.linkHref}
            target="_blank"
            iconRight={<IconArrowRightAlt />}
          />
        </Wrapper>
      </InfoContainer>
    </Container>
  );
}

export const ProjectCard = React.memo(_ProjectCard);
