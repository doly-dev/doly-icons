import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const SlashSquareFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="slash-square-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm9.354 5.354-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708"/>
</svg>
    </IconBase>
  );
});

SlashSquareFill.displayName = 'SlashSquareFill';

export default SlashSquareFill;  
