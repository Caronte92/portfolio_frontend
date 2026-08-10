import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Link } from '@/components/atoms/Link';
import { Tag } from '@/components/atoms/Tag';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
  max-width: 20rem;
  padding-bottom: 1.25rem;
  background: ${({ theme }) => theme.colors.bg.surface};
  border-radius: 0.75rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 180px;
  background: oklch(79.71% 0.1339 211.53deg / 8%);
  border-radius: 0.75rem 0.75rem 0 0;
`;

const HeaderImage = styled(Image)`
  align-self: stretch;
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
  padding: 0 1.25rem;
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
  linkText: string;
  linkHref: string;
}

function _ProjectCard({ ...props }: ProjectCardProps) {
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
        <TextWrapper>
          <ProjectTitle>{props.projectName}</ProjectTitle>
          <ProjectDescription>{props.projectDescription}</ProjectDescription>
        </TextWrapper>
        <TagsContainer>
          {props.techBadges &&
            props.techBadges.map((badge, index) => (
              <Tag key={index} text={badge} />
            ))}
        </TagsContainer>
        <Link text={props.linkText} href={props.linkHref} />
      </InfoContainer>
    </Container>
  );
}

export const ProjectCard = React.memo(_ProjectCard);
