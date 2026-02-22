'use client';

import React from 'react';
import styled from 'styled-components';

type PillVariant = 'solid' | 'subtle' | 'outline';
type PillSize = 'sm' | 'md' | 'lg';

interface StyledProps {
  $variant: PillVariant;
  $size: PillSize;
}

const StyledPill = styled.span<StyledProps>`
  display: inline-flex;
  gap: ${({ $size }) =>
    $size === 'sm' ? '0.25rem' : $size === 'lg' ? '0.5rem' : '0.375rem'};
  align-items: center;
  padding: ${({ $size }) =>
    $size === 'sm'
      ? '0.125rem 0.5rem'
      : $size === 'lg'
        ? '0.375rem 1rem'
        : '0.25rem 0.75rem'};
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme, $size }) =>
    $size === 'sm'
      ? theme.font.size.xs
      : $size === 'lg'
        ? theme.font.size.base
        : theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  color: ${({ theme, $variant }) =>
    $variant === 'solid'
      ? theme.colors.textPrimary
      : theme.colors.textSecondary};
  white-space: nowrap;
  user-select: none;
  background: ${({ theme, $variant }) =>
    $variant === 'solid'
      ? theme.colors.brand
      : $variant === 'subtle'
        ? theme.colors.brandSubtle
        : 'transparent'};
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === 'outline' ? theme.colors.border : 'transparent'};
  border-radius: 9999px;

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  children?: React.ReactNode;
  variant?: PillVariant;
  size?: PillSize;
}

const _Pill = ({
  label,
  children,
  variant = 'subtle',
  size = 'md',
  ...rest
}: PillProps) => {
  return (
    <StyledPill $variant={variant} $size={size} {...rest}>
      {children ?? label}
    </StyledPill>
  );
};

export const Pill = React.memo(_Pill);
