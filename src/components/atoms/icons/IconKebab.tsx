import React from 'react';
import { IIconParams } from '@/lib/types/IIconParams';

const IconKebab = React.forwardRef<SVGSVGElement, IIconParams>(
  (
    {
      size = '24px',
      color,
      disableFill = false,
      removeInlineStyle = false,
      transform,
      style,
      className,
      stroke = 'currentColor',
      viewBox = '0 -960 960 960',
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
        data-testid="IconKebab"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        style={removeInlineStyle ? undefined : mergedStyle}
      >
        <path
          d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
          fill={disableFill ? 'none' : (color ?? stroke ?? 'currentColor')}
        />
      </svg>
    );
  }
);

IconKebab.displayName = 'IconKebab';
export default React.memo(IconKebab);
