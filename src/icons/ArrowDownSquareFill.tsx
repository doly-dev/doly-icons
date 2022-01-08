import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const ArrowDownSquareFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="arrow-down-square-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg>
    </IconBase>
  );
});

ArrowDownSquareFill.displayName = 'ArrowDownSquareFill';

export default ArrowDownSquareFill;  
