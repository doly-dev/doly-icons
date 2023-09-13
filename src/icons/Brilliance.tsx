import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Brilliance = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="brilliance" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 0 0 7 3.5 3.5 0 1 1 0 7 7 7 0 0 1-7-7Z"/>
</svg>
    </IconBase>
  );
});

Brilliance.displayName = 'Brilliance';

export default Brilliance;  
