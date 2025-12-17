import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-c](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDcuNWEuNS41IDAgMCAwIDAgMWg5YS41LjUgMCAwIDAgMC0xeiIvPgogIDxwYXRoIGQ9Ik0wIDhhMyAzIDAgMCAxIDMtM2gxMGEzIDMgMCAxIDEgMCA2SDNhMyAzIDAgMCAxLTMtM20zLTJhMiAyIDAgMSAwIDAgNGgxMGEyIDIgMCAxIDAgMC00eiIvPgo8L3N2Zz4=)*/
const UsbC: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-c"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
  <path d="M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4z"/>
</svg>
      )}
    />
  );

export default UsbC;
