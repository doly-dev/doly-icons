import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Backpack4Fill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="backpack4-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v.5a.5.5 0 0 0 1 0V7h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2Zm1 2a1 1 0 0 0-2 0h2Zm-4 9v2h6v-2h-1v.5a.5.5 0 0 1-1 0V11H5Z"/>
  <path d="M14 7.599A2.986 2.986 0 0 1 12.5 8H9.415a1.5 1.5 0 0 1-2.83 0H3.5A2.986 2.986 0 0 1 2 7.599V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.599ZM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3Z"/>
</svg>
    </IconBase>
  );
});

Backpack4Fill.displayName = 'Backpack4Fill';

export default Backpack4Fill;  
