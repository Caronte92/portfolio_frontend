'use client';

import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  max-width: 90rem;
  min-height: 100vh;

  /* prettier-ignore */
  padding: 6.25rem ${({ theme }) => theme.spacing[8]} ${({ theme }) =>
    theme.spacing[8]};
  margin: 0 auto;
  font-family: 'Work Sans', sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.background};
`;
