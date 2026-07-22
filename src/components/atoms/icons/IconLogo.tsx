import React from 'react';
import { IIconParams } from '@/lib/types/IIconParams';

const IconLogo = React.forwardRef<SVGSVGElement, IIconParams>(
  (
    {
      size = '32px',
      color,
      disableFill = false,
      removeInlineStyle = false,
      transform,
      style,
      className,
      stroke = 'none',
      viewBox = '0 0 32 32',
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
        <path
          d="M22.5 17.12L9.5 11.03V8.06L22.5 1.97V4.87L11.8 9.5L22.5 14.2V17.12Z"
          fill="#22D3EE"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 30.03L22.5 24.04V21.11L9.5 15.12V17.97L20.2 22.53L9.5 27.15V30.03Z"
          fill="#22D3EE"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

IconLogo.displayName = 'IconLogo';
export default React.memo(IconLogo);
