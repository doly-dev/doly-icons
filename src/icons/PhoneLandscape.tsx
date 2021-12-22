import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const PhoneLandscape = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="phone-landscape" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M1 4.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6z"/>
  <path d="M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
</svg>
    </IconBase>
  );
});

PhoneLandscape.displayName = 'PhoneLandscape';

export default PhoneLandscape;  
