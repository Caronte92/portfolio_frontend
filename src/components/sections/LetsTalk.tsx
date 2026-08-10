import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/atoms/Button';
import { IconGitHub, IconLinkedinLogo } from '@/components/atoms/icons';
import { SectionContainer } from '@/styles/home.styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.bg.surface};
  border: 1px solid ${({ theme }) => theme.colors.accent.cyan};
  border-radius: 1.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.display.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.display.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.body.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.body.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CTAsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

function _LetsTalk() {
  return (
    <SectionContainer>
      <Container>
        <InfoContainer>
          <Title>Let's Work Together</Title>
          <SubTitle>
            I'm always open to discussing new projects, clean architecture
            consulting, or full-time opportunities. Drop me a line!
          </SubTitle>
        </InfoContainer>
        <CTAsContainer>
          <Button
            text="smitjavilada@gmail.com"
            href="https://mail.google.com/mail/?view=cm&to=smitjavilada@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Button
            text="Github"
            variant="ghost"
            iconLeft={<IconGitHub size="24px" />}
            href="https://github.com/Caronte92/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          />
          <Button
            text="Linkedin"
            variant="ghost"
            iconLeft={<IconLinkedinLogo size="24px" />}
            href="https://www.linkedin.com/in/sergi-mitjavila"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          />
        </CTAsContainer>
      </Container>
    </SectionContainer>
  );
}

export const LetsTalk = React.memo(_LetsTalk);
