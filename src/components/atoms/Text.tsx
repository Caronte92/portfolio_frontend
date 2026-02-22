'use client';

import React from 'react';
import styled from 'styled-components';
import type { ITheme } from '@/styles/theme';

type TextSize = keyof ITheme['font']['size'];
type TextWeight = keyof ITheme['font']['weight'];
type TextLineHeight = keyof ITheme['font']['lineHeight'];
type TextColor = keyof {
  [K in keyof ITheme['colors'] as ITheme['colors'][K] extends string
    ? K
    : never]: true;
};
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

const StyledText = styled.span<StyledProps>`
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme, $size }) => theme.font.size[$size]};
  font-weight: ${({ theme, $weight }) => theme.font.weight[$weight]};
  line-height: ${({ theme, $lineHeight }) =>
    theme.font.lineHeight[$lineHeight]};
  color: ${({ theme, $color }) => theme.colors[$color] as string};
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
  color = 'textPrimary',
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
