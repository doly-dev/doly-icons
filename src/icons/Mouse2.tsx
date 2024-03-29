import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Mouse2 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="mouse2" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154M12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188z"/>
</svg>
    </IconBase>
  );
});

Mouse2.displayName = 'Mouse2';

export default Mouse2;  
