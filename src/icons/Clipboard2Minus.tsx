import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Clipboard2Minus = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="clipboard2-minus" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M5.5 8.5A.5.5 0 0 1 6 8h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Z"/>
  <path stroke="#000" strokeLinecap="round" d="M12 1.5h.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1H4"/>
  <path fillRule="evenodd" d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
</svg>
    </IconBase>
  );
});

Clipboard2Minus.displayName = 'Clipboard2Minus';

export default Clipboard2Minus;  
