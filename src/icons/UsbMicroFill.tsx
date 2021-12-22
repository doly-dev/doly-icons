import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const UsbMicroFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="usb-micro-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M2.707 4A1 1 0 0 0 2 4.293L.293 6A1 1 0 0 0 0 6.707V11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.707A1 1 0 0 0 15.707 6L14 4.293A1 1 0 0 0 13.293 4H2.707ZM4.5 7h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>
</svg>
    </IconBase>
  );
});

UsbMicroFill.displayName = 'UsbMicroFill';

export default UsbMicroFill;  
