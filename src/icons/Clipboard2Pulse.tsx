import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Clipboard2Pulse = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="clipboard2-pulse" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path stroke="#000" strokeLinecap="round" d="M12 1.5h.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1H4"/>
  <path fillRule="evenodd" d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
  <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M11.5 10.5H11l-1.5-5-1.5 7-1.5-5-1.5 3h-.5"/>
</svg>
    </IconBase>
  );
});

Clipboard2Pulse.displayName = 'Clipboard2Pulse';

export default Clipboard2Pulse;  
