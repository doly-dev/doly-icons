import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Shadows = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="shadows" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8 7a7 7 0 1 1 3.608-13H8a.5.5 0 0 0 0 1h4.899c.312.306.596.64.846 1H8a.5.5 0 0 0 0 1h6.326c.153.32.281.655.384 1H8a.5.5 0 0 0 0 1h6.93c.046.327.07.66.07 1H8a.5.5 0 0 0 0 1h6.93a6.953 6.953 0 0 1-.22 1H8a.5.5 0 0 0 0 1h6.326c-.166.35-.36.685-.58 1H8a.5.5 0 0 0 0 1h4.899a7.032 7.032 0 0 1-1.306 1.009A.503.503 0 0 0 11.5 14H8a.5.5 0 0 0 0 1Z"/>
</svg>
    </IconBase>
  );
});

Shadows.displayName = 'Shadows';

export default Shadows;  
