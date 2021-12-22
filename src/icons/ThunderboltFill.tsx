import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ThunderboltFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="thunderbolt-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M1 3a1 1 0 0 0-1 1v7.293A1 1 0 0 0 .293 12L2 13.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293L15.707 12a1 1 0 0 0 .293-.707V4a1 1 0 0 0-1-1H1Zm2.5 3h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>
</svg>
    </IconBase>
  );
});

ThunderboltFill.displayName = 'ThunderboltFill';

export default ThunderboltFill;  
