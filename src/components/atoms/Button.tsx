'use client';

import React from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';

type ButtonVariant = 'primary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export const ButtonType = {
  primary: {
    neutral: {
      background: colors.accent.cyan,
      color: colors.text.dark,
      border: colors.accent.cyan,
    },
    hover: {
      background: `oklch(0.7214 0.1251 215.32)`,
      color: colors.text.dark,
      border: `oklch(0.7214 0.1251 215.32)`,
    },
    focus: {
      background: `oklch(0.7971 0.1339 211.53)`,
      color: colors.text.muted,
      border: `oklch(0.7971 0.1339 211.53)`,
    },
    active: {
      background: `oklch(0.6465 0.1148 218.71)`,
      color: colors.text.muted,
      border: `oklch(0.6465 0.1148 218.71)`,
    },
    disabled: {
      background: colors.accent.cyan,
      color: colors.text.dark,
      border: colors.accent.cyan,
    },
  },
  ghost: {
    neutral: {
      background: 'transparent',
      color: colors.text.primary,
      border: 'oklch(1 0 0 / 15%)',
    },
    hover: {
      background: 'oklch(1 0 0 / 7.8%)',
      color: colors.text.primary,
      border: `oklch(1 0 0 / 35%)`,
    },
    focus: {
      background: 'oklch(1 0 0 / 25%)',
      color: colors.text.primary,
      border: 'oklch(1 0 0 / 50%)',
    },
    active: {
      background: 'oklch(1 0 0 / 15%)',
      color: colors.text.primary,
      border: 'oklch(1 0 0 / 40%)',
    },
    disabled: {
      background: 'transparent',
      color: colors.text.muted,
      border: 'oklch(1 0 0 / 10%)',
    },
  },
  link: {
    neutral: {
      background: 'transparent',
      color: colors.text.primary,
      border: 'transparent',
    },
    hover: {
      background: 'transparent',
      color: colors.text.secondary,
      border: 'transparent',
    },
    focus: {
      background: 'transparent',
      color: colors.text.secondary,
      border: 'transparent',
    },
    active: {
      background: 'transparent',
      color: colors.text.secondary,
      border: 'transparent',
    },
    disabled: {
      background: 'transparent',
      color: colors.text.muted,
      border: 'transparent',
    },
  },
};

interface StyledProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}

const StyledButton = styled.button<StyledProps>`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  /* prettier-ignore */
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) =>
    theme.spacing[24]};
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.bodySmall.lineHeight};
  color: ${({ $variant }) => ButtonType[$variant].neutral.color};
  white-space: nowrap;
  cursor: pointer;
  background: ${({ $variant }) => ButtonType[$variant].neutral.background};
  border: 1px solid ${({ $variant }) => ButtonType[$variant].neutral.border};
  border-radius: 0.75rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  svg {
    width: ${({ theme, $size }) => theme.icons[$size]};
    height: ${({ theme, $size }) => theme.icons[$size]};
  }

  &:hover {
    color: ${({ $variant }) => ButtonType[$variant].hover.color};
    background: ${({ $variant }) => ButtonType[$variant].hover.background};
    border-color: ${({ $variant }) => ButtonType[$variant].hover.border};

    &::after {
      width: 100%;
    }
  }

  &:focus-visible {
    color: ${({ $variant }) => ButtonType[$variant].focus.color};
    background: ${({ $variant }) => ButtonType[$variant].focus.background};
    border-color: ${({ $variant }) => ButtonType[$variant].focus.border};
  }

  &:active {
    color: ${({ $variant }) => ButtonType[$variant].active.color};
    background: ${({ $variant }) => ButtonType[$variant].active.background};
    border-color: ${({ $variant }) => ButtonType[$variant].active.border};
  }

  &:disabled {
    color: ${({ $variant }) => ButtonType[$variant].disabled.color};
    cursor: not-allowed;
    background: ${({ $variant }) => ButtonType[$variant].disabled.background};
    border-color: ${({ $variant }) => ButtonType[$variant].disabled.border};
    opacity: 0.4;
  }
`;

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const _Button = ({
  text,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
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
      $fullWidth={fullWidth}
      onClick={handleClick}
      disabled={disabled}
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
