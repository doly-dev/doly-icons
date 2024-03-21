import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Modem = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="modem" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M5.5 1.5A1.5 1.5 0 0 1 7 0h2a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.404 1.497c.35.305.872.678 1.628 1.056A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.224-.947c.756-.378 1.277-.75 1.628-1.056A1.5 1.5 0 0 1 5.5 12.5zM7 1a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 9 1z"/>
  <path d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
    </IconBase>
  );
});

Modem.displayName = 'Modem';

export default Modem;  
