import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const PentagonHalf = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="pentagon-half" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="m8 1.288 6.842 5.56L12.267 15H8V1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z"/>
</svg>
    </IconBase>
  );
});

PentagonHalf.displayName = 'PentagonHalf';

export default PentagonHalf;  
