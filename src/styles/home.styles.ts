'use client';

import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]};
  max-width: 90rem;

  /* prettier-ignore */
  padding: 5.4375rem ${({ theme }) => theme.spacing[24]} ${({ theme }) =>
    theme.spacing[24]};
  margin: 0 auto;
  font-family: 'Work Sans', sans-serif;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    /* prettier-ignore */
    padding: 6.4375rem ${({ theme }) => theme.spacing[4]} ${({ theme }) =>
      theme.spacing[24]};
  }
`;

export const PageTest = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]};
  max-width: 90rem;

  /* prettier-ignore */
  padding: ${({ theme }) => theme.spacing[64]} ${({ theme }) =>
    theme.spacing[80]};
  margin: 0 auto;
  font-family: 'Work Sans', sans-serif;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.primary};
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]};
  width: 100%;
  max-width: 75rem;
  margin: 5rem auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: auto;
    margin: 5rem 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[32]};
    margin: 3rem 1.25rem;
  }
`;
