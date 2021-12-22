import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const UsbMiniFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="usb-mini-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M3 3a1 1 0 0 0-1 1v1.293L.293 7A1 1 0 0 0 0 7.707V12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.707A1 1 0 0 0 15.707 7L14 5.293V4a1 1 0 0 0-1-1H3Zm.5 5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>
</svg>
    </IconBase>
  );
});

UsbMiniFill.displayName = 'UsbMiniFill';

export default UsbMiniFill;  
