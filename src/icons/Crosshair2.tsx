import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Crosshair2 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="crosshair2" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M8 0a.5.5 0 0 1 .5.5v.518A7.001 7.001 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7.001 7.001 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7.001 7.001 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7.001 7.001 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0Zm-.5 2.02A6.001 6.001 0 0 0 2.02 7.5h1.005A5.002 5.002 0 0 1 7.5 3.025V2.02Zm1 1.005A5.002 5.002 0 0 1 12.975 7.5h1.005A6.001 6.001 0 0 0 8.5 2.02v1.005ZM12.975 8.5A5.002 5.002 0 0 1 8.5 12.975v1.005a6.002 6.002 0 0 0 5.48-5.48h-1.005ZM7.5 12.975A5.002 5.002 0 0 1 3.025 8.5H2.02a6.001 6.001 0 0 0 5.48 5.48v-1.005ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/>
</svg>
    </IconBase>
  );
});

Crosshair2.displayName = 'Crosshair2';

export default Crosshair2;  
