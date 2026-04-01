'use client';

import React from 'react';
import styled from 'styled-components';

type ButtonVariant = 'primary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface StyledProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}

const StyledAnchor = styled.a<StyledProps>`
  display: inline-flex;
  gap: ${({ theme, $size }) => theme.components.button.sizes[$size].gap};
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: ${({ theme, $size }) => {
    const s = theme.components.button.sizes[$size];
    return `${s.paddingY} ${s.paddingX}`;
  }};
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme, $size }) =>
    theme.components.button.sizes[$size].fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  color: ${({ theme, $variant }) =>
    theme.components.button.variants[$variant].color};
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  background: ${({ theme, $variant }) =>
    theme.components.button.variants[$variant].background};
  border: 1px solid
    ${({ theme, $variant }) =>
      theme.components.button.variants[$variant].borderColor};
  border-radius: 0.75rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  svg {
    width: ${({ theme, $size }) =>
      theme.components.button.sizes[$size].iconSize};
    height: ${({ theme, $size }) =>
      theme.components.button.sizes[$size].iconSize};
  }

  &:hover {
    color: ${({ theme, $variant }) =>
      theme.components.button.variants[$variant].hover.color ?? 'inherit'};
    background: ${({ theme, $variant }) =>
      theme.components.button.variants[$variant].hover.background ?? 'inherit'};
    border-color: ${({ theme, $variant }) =>
      theme.components.button.variants[$variant].hover.borderColor ??
      'inherit'};
  }

  &:active {
    color: ${({ theme, $variant }) =>
      theme.components.button.variants[$variant].active.color ?? 'inherit'};
    background: ${({ theme, $variant }) =>
      theme.components.button.variants[$variant].active.background ??
      'inherit'};
    border-color: ${({ theme, $variant }) =>
      theme.components.button.variants[$variant].active.borderColor ??
      'inherit'};
  }
`;

export interface ButtonLinkProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'children'
> {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href: string;
}

const _ButtonLink = ({
  text,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  href,
  ...rest
}: ButtonLinkProps) => {
  return (
    <StyledAnchor
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      href={href}
      {...rest}
    >
      {iconLeft}
      {text && text}
      {iconRight}
    </StyledAnchor>
  );
};

export const ButtonLink = React.memo(_ButtonLink);
