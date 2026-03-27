'use client';

import React from 'react';
import styled from 'styled-components';

type ButtonVariant = 'primary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface StyledProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
}

const StyledButton = styled.button<StyledProps>`
  display: inline-flex;
  gap: ${({ theme, $size }) => theme.components.button.sizes[$size].gap};
  align-items: center;
  justify-content: center;
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

    &::after {
      width: 100%;
    }
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

  ${({ theme, $variant }) =>
    $variant === 'link' &&
    `
      position: relative;
      padding-right: 0;
      padding-left: 0;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: ${theme.colors.brand};
        transition: width 0.3s ease;
      }
    `}
`;

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const _Button = ({
  text,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  href,
  target,
  rel,
  ...rest
}: ButtonProps) => {
  // Custom click handler to simulate anchor behavior if href is present
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (href) {
      e.preventDefault();
      window.open(
        href,
        target || '_blank',
        rel ? 'noopener,noreferrer' : undefined
      );
    }
    if (rest.onClick) {
      rest.onClick(e);
    }
  };
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      onClick={handleClick}
      {...rest}
      {...(href
        ? { 'data-href': href, 'data-target': target, 'data-rel': rel }
        : {})}
    >
      {iconLeft}
      {text && text}
      {iconRight}
    </StyledButton>
  );
};

export const Button = React.memo(_Button);
