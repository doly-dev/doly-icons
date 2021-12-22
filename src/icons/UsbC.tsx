import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const UsbC = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="usb-c" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"/>
  <path d="M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3Zm3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4H3Z"/>
</svg>
    </IconBase>
  );
});

UsbC.displayName = 'UsbC';

export default UsbC;  
