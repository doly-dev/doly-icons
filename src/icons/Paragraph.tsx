import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Paragraph = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="paragraph" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5"/>
</svg>
    </IconBase>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;  
