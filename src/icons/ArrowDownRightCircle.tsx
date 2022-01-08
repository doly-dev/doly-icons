import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const ArrowDownRightCircle = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="arrow-down-right-circle" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
</svg>
    </IconBase>
  );
});

ArrowDownRightCircle.displayName = 'ArrowDownRightCircle';

export default ArrowDownRightCircle;  
