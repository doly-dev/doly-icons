import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const CaretRightSquareFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="caret-right-square-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z"/>
</svg>
    </IconBase>
  );
});

CaretRightSquareFill.displayName = 'CaretRightSquareFill';

export default CaretRightSquareFill;  
