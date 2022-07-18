import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const PCircleFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="p-circle-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.5 4.002V12h1.283V9.164h1.668C10.033 9.164 11 8.08 11 6.586c0-1.482-.955-2.584-2.538-2.584H5.5Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z"/>
</svg>
    </IconBase>
  );
});

PCircleFill.displayName = 'PCircleFill';

export default PCircleFill;  
