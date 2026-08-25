import React from 'react';
import { IIconParams } from '@/lib/types/IIconParams';

const IconClose = React.forwardRef<SVGSVGElement, IIconParams>(
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
      ariaLabel = 'Close',
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
        data-testid="IconClose"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        style={removeInlineStyle ? undefined : mergedStyle}
      >
        <path
          d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
          fill={disableFill ? 'none' : (color ?? stroke ?? 'currentColor')}
        />
      </svg>
    );
  }
);

IconClose.displayName = 'IconClose';
export default React.memo(IconClose);
