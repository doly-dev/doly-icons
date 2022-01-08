import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const EggFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="egg-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z"/>
</svg>
    </IconBase>
  );
});

EggFill.displayName = 'EggFill';

export default EggFill;  
