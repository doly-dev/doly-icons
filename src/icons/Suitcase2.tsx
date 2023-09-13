import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Suitcase2 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="suitcase2" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M6.5 0a.5.5 0 0 0-.5.5V3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 1.031 1.75A1.003 1.003 0 0 0 5 16a1 1 0 0 0 1-1h4a1 1 0 1 0 1.969-.25A2 2 0 0 0 13 13V5a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-.5-.5h-3ZM9 3H7V1h2v2Zm3 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h8v6ZM5 4h6a1 1 0 0 1 1 1v1H4V5a1 1 0 0 1 1-1Z"/>
</svg>
    </IconBase>
  );
});

Suitcase2.displayName = 'Suitcase2';

export default Suitcase2;  
