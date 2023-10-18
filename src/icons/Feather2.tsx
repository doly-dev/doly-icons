import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Feather2 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="feather2" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M7.5 1.063v9.556L6 8.819V3a2 2 0 0 1 1.5-1.937ZM8 0a3 3 0 0 0-3 3v6a.5.5 0 0 0 .116.32L7.5 12.181V15.5a.5.5 0 0 0 1 0v-3.319l2.384-2.86A.5.5 0 0 0 11 9V3a3 3 0 0 0-3-3Zm.5 1.063A2 2 0 0 1 10 3v.293l-1.5 1.5v-3.73ZM10 4.707V8.82l-1.5 1.8V6.207l1.5-1.5Z"/>
</svg>
    </IconBase>
  );
});

Feather2.displayName = 'Feather2';

export default Feather2;  