import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Easel3 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="easel3" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M8.5 13.134V12h5a1.5 1.5 0 0 0 1.5-1.5V2h.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H1v8.5A1.5 1.5 0 0 0 2.5 12h5v1.134a1 1 0 1 0 1 0ZM2 2v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2H2Z"/>
</svg>
    </IconBase>
  );
});

Easel3.displayName = 'Easel3';

export default Easel3;  
