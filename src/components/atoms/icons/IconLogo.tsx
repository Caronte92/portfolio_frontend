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
          d="M22.5 17.1193L9.5 11.0333V8.05848L22.5 1.97247V4.86537L11.7973 9.50493L22.5 14.1991V17.1193Z"
          fill="#22D3EE"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 30.0275L22.5 24.0374V21.1094L9.5 15.1193V17.9666L20.2027 22.5331L9.5 27.1533V30.0275Z"
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
