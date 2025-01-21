import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const UsbCFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-c-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default UsbCFill;
