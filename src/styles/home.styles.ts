'use client';

import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 90rem;

  /* prettier-ignore */
  padding: 10.4375rem ${({ theme }) => theme.spacing[6]} ${({ theme }) =>
    theme.spacing[6]};
  margin: 0 auto;
  font-family: 'Work Sans', sans-serif;
  color: ${({ theme }) => theme.colors.neutral.white};
  background: ${({ theme }) => theme.colors.neutral.bg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    /* prettier-ignore */
    padding: 6.4375rem ${({ theme }) => theme.spacing[4]} ${({ theme }) =>
      theme.spacing[6]};
  }
`;
