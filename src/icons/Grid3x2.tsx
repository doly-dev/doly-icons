import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Grid3x2 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="grid-3x2" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5zM1.5 3a.5.5 0 0 0-.5.5V7h4V3zM5 8H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4V8zm4-1V3H6v4zm1 1v4h3.5a.5.5 0 0 0 .5-.5V8zm0-1h4V3.5a.5.5 0 0 0-.5-.5H11z"/>
</svg>
    </IconBase>
  );
});

Grid3x2.displayName = 'Grid3x2';

export default Grid3x2;  
