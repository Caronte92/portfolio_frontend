import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Text = styled.label`
  font-size: ${({ theme }) => theme.font.size.tag.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.tag.lineHeight};
  color: ${({ theme }) => theme.colors.accent.cyan};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.size.caption.fontSize};
    line-height: ${({ theme }) => theme.font.size.caption.lineHeight};
  }
`;

interface LabelProps {
  text: string;
}

function _Label({ ...props }: LabelProps) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
}

export const Label = React.memo(_Label);
