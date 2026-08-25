import React from 'react';
import { IIconParams } from '@/lib/types/IIconParams';

const IconArrowRightAlt = React.forwardRef<SVGSVGElement, IIconParams>(
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
        data-testid="IconArrowRightAlt"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        style={removeInlineStyle ? undefined : mergedStyle}
      >
        <path
          d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"
          fill={disableFill ? 'none' : (color ?? stroke ?? 'currentColor')}
        />
      </svg>
    );
  }
);

IconArrowRightAlt.displayName = 'IconArrowRightAlt';
export default React.memo(IconArrowRightAlt);
