import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const PeaceFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="peace-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M14 13.292A8 8 0 0 0 8.5.015v7.778zm-.708.708L8.5 9.206v6.778a7.97 7.97 0 0 0 4.792-1.986zM7.5 15.985V9.207L2.708 14A7.97 7.97 0 0 0 7.5 15.985M2 13.292A8 8 0 0 1 7.5.015v7.778z"/>
</svg>
    </IconBase>
  );
});

PeaceFill.displayName = 'PeaceFill';

export default PeaceFill;  
