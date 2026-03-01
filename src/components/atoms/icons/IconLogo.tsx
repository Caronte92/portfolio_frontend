import React from 'react';
import { IIconParams } from '@/lib/types/IIconParams';

const IconLogo = React.forwardRef<SVGSVGElement, IIconParams>(
  (
    {
      size = '90px',
      color,
      disableFill = true,
      removeInlineStyle = false,
      transform,
      style,
      className,
      viewBox = '0 0 80 80',
      ariaLabel = 'icon',
    },
    ref
  ) => {
    const mergedStyle: React.CSSProperties = {
      display: 'inline-block',
      fill: disableFill ? 'none' : (color ?? 'currentColor'),
      width: size,
      height: size,
      transform,
      ...style,
    };

    return (
      <svg
        ref={ref}
        role="img"
        aria-label={ariaLabel}
        className={className}
        data-testid="IconLogo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        style={removeInlineStyle ? undefined : mergedStyle}
      >
        <defs>
          <linearGradient
            id="gGlow2"
            x1="0"
            y1="0"
            x2="80"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M28 4 L52 4 L76 28 L76 52 L52 76 L28 76 L4 52 L4 28 Z"
          fill="rgba(124,58,237,0.12)"
          stroke="url(#gGlow2)"
          strokeWidth="1.5"
        />
        <path
          d="M30 12 L50 12 L68 30 L68 50 L50 68 L30 68 L12 50 L12 30 Z"
          fill="none"
          stroke="url(#gGlow2)"
          strokeWidth="0.7"
          opacity="0.35"
        />
        <circle cx="28" cy="4" r="2.5" fill="#a855f7" filter="url(#glow2)" />
        <circle cx="52" cy="4" r="2.5" fill="#22d3ee" filter="url(#glow2)" />
        <circle cx="76" cy="28" r="2.5" fill="#a855f7" filter="url(#glow2)" />
        <circle cx="76" cy="52" r="2.5" fill="#22d3ee" filter="url(#glow2)" />
        <circle cx="52" cy="76" r="2.5" fill="#a855f7" filter="url(#glow2)" />
        <circle cx="28" cy="76" r="2.5" fill="#22d3ee" filter="url(#glow2)" />
        <circle cx="4" cy="52" r="2.5" fill="#a855f7" filter="url(#glow2)" />
        <circle cx="4" cy="28" r="2.5" fill="#22d3ee" filter="url(#glow2)" />
        <path
          d="M29 28 L51 28"
          stroke="url(#gGlow2)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glow2)"
        />
        <path
          d="M29 28 L29 40"
          stroke="url(#gGlow2)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glow2)"
        />
        <path
          d="M29 40 L51 40"
          stroke="url(#gGlow2)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glow2)"
        />
        <path
          d="M51 40 L51 52"
          stroke="url(#gGlow2)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glow2)"
        />
        <path
          d="M29 52 L51 52"
          stroke="url(#gGlow2)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glow2)"
        />
        <circle cx="54" cy="25" r="3.5" fill="#e9d5ff" filter="url(#glow2)" />
      </svg>
    );
  }
);

IconLogo.displayName = 'IconLogo';
export default React.memo(IconLogo);
