import React from 'react';
import { IIconParams } from '@/lib/types/IIconParams';

const IconChevron = React.forwardRef<
  SVGSVGElement,
  IIconParams & { open?: boolean }
>(
  (
    {
      size = '16px',
      color,
      disableFill = false,
      removeInlineStyle = false,
      transform,
      style,
      className,
      stroke = 'currentColor',
      viewBox = '0 0 12 12',
      ariaLabel = 'chevron',
      open = false,
    },
    ref
  ) => {
    const mergedStyle: React.CSSProperties = {
      display: 'inline-block',
      fill: disableFill ? 'none' : (color ?? 'currentColor'),
      width: size,
      height: size,
      transform: open ? 'rotate(180deg)' : transform,
      ...style,
    };

    return (
      <svg
        ref={ref}
        role="img"
        aria-label={ariaLabel}
        className={className}
        data-testid="IconChevron"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        style={removeInlineStyle ? undefined : mergedStyle}
      >
        <path
          d="M3 4.5 L6 7.5 L9 4.5"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }
);

IconChevron.displayName = 'IconChevron';
export default React.memo(IconChevron);
