import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Toggle2Off = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="toggle2-off" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z"/>
  <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10"/>
</svg>
    </IconBase>
  );
});

Toggle2Off.displayName = 'Toggle2Off';

export default Toggle2Off;  
