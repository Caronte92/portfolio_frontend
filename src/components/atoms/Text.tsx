'use client';

import React from 'react';
import styled from 'styled-components';
import type { ITheme } from '@/styles/theme';

type TextSize = keyof ITheme['font']['size'];
type TextWeight = keyof ITheme['font']['weight'];
type TextLineHeight = keyof ITheme['font']['lineHeight'];
// --- Paths válidos para colores del theme (autocompletado y chequeo de tipos seguro) ---
type TextColor =
  | 'main.primary'
  | 'accent.primary'
  | 'neutral.bg'
  | 'neutral.white'
  | 'neutral.black'
  | 'neutral.grey'
  | 'support.danger'
  | 'support.error'
  | 'support.warning'
  | 'support.success'
  | 'support.info';
type TextAlign = 'left' | 'center' | 'right';
type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface StyledProps {
  $size: TextSize;
  $weight: TextWeight;
  $lineHeight: TextLineHeight;
  $color: TextColor;
  $align?: TextAlign;
  $truncate?: boolean;
}

// Utilidad para resolver un path tipo 'main.primary' en el objeto de colores del theme
function getThemeColor(theme: any, path: string) {
  return path.split('.').reduce((acc, key) => acc?.[key], theme.colors);
}

const StyledText = styled.span<StyledProps>`
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme, $size }) => theme.font.size[$size]};
  font-weight: ${({ theme, $weight }) => theme.font.weight[$weight]};
  line-height: ${({ theme, $lineHeight }) =>
    theme.font.lineHeight[$lineHeight]};
  color: ${({ theme, $color }) => getThemeColor(theme, $color)};
  text-align: ${({ $align }) => $align ?? 'inherit'};

  ${({ $truncate }) =>
    $truncate &&
    `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export interface TextProps {
  children: React.ReactNode;
  as?: TextTag;
  size?: TextSize;
  weight?: TextWeight;
  lineHeight?: TextLineHeight;
  color?: TextColor;
  align?: TextAlign;
  truncate?: boolean;
  className?: string;
  id?: string;
}

const _Text = ({
  children,
  as = 'span',
  size = 'base',
  weight = 'normal',
  lineHeight = 'normal',
  color = 'main.primary',
  align,
  truncate,
  className,
  id,
}: TextProps) => (
  <StyledText
    as={as}
    $size={size}
    $weight={weight}
    $lineHeight={lineHeight}
    $color={color}
    $align={align}
    $truncate={truncate}
    className={className}
    id={id}
  >
    {children}
  </StyledText>
);

export const Text = React.memo(_Text);
