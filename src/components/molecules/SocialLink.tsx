import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[12]}
    ${({ theme }) => theme.spacing[16]};
  border: 1px solid #ffffff26;
  border-radius: 62.4375rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.font.size.caption.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.caption.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
    line-height: ${({ theme }) => theme.font.size.bodySmall.lineHeight};
  }
`;

interface SocialLinkProps {
  icon: React.ReactNode;
  text: string;
}

function _SocialLink({ ...props }: SocialLinkProps) {
  return (
    <Container>
      {props.icon && <IconContainer>{props.icon}</IconContainer>}
      <Text>{props.text}</Text>
    </Container>
  );
}

export const SocialLink = React.memo(_SocialLink);
