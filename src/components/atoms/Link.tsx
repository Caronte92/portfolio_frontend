'use client';

import React from 'react';
import styled from 'styled-components';

type LinkVariant = 'primary' | 'muted';

interface StyledProps {
  $variant: LinkVariant;
}

const StyledLink = styled.a<StyledProps>`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.bodySmall.lineHeight};
  color: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.colors.main.primary
      : theme.colors.neutral.grey};
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme, $variant }) =>
      $variant === 'primary'
        ? theme.colors.main.hover
        : theme.colors.neutral.white};
    text-decoration: underline;
  }

  svg {
    width: 1em;
    height: 1em;
  }
`;

export interface LinkProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'children'
> {
  text: string;
  href: string;
  variant?: LinkVariant;
  iconRight?: React.ReactNode;
}

const _Link = ({
  text,
  href,
  variant = 'primary',
  iconRight,
  ...rest
}: LinkProps) => (
  <StyledLink $variant={variant} href={href} {...rest}>
    {text}
    {iconRight}
  </StyledLink>
);

export const Link = React.memo(_Link);
