import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.25rem 0.625rem;
  background: oklch(100% 0 0deg / 6%);
  border-radius: 0.375rem;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.font.size.tag.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.tag.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

interface TagProps {
  text: string;
}

function _Tag({ ...props }: TagProps) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
}

export const Tag = React.memo(_Tag);
