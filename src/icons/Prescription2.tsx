import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Prescription2 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="prescription2" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2V6Z"/>
  <path fillRule="evenodd" d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1V1Zm2 3h8v10.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V4ZM3 3V1h10v2H3Z"/>
</svg>
    </IconBase>
  );
});

Prescription2.displayName = 'Prescription2';

export default Prescription2;  
