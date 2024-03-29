import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const UsbPlugFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="usb-plug-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6zM7 1v1h1V1zm2 0v1h1V1zM5.5 5a.5.5 0 0 0-.5.5v4.894a2 2 0 0 0 .336 1.11l.83 1.245c.544.816.834 1.774.834 2.754 0 .275.222.497.497.497h2.006a.497.497 0 0 0 .497-.497c0-.98.29-1.938.834-2.754l.83-1.245a2 2 0 0 0 .336-1.11V5.5a.5.5 0 0 0-.5-.5z"/>
</svg>
    </IconBase>
  );
});

UsbPlugFill.displayName = 'UsbPlugFill';

export default UsbPlugFill;  
