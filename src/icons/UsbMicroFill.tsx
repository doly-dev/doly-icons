import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-micro-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi43MDcgNEExIDEgMCAwIDAgMiA0LjI5M0wuMjkzIDZBMSAxIDAgMCAwIDAgNi43MDdWMTFhMSAxIDAgMCAwIDEgMWgxNGExIDEgMCAwIDAgMS0xVjYuNzA3QTEgMSAwIDAgMCAxNS43MDcgNkwxNCA0LjI5M0ExIDEgMCAwIDAgMTMuMjkzIDR6TTQuNSA3aDdhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC03YS41LjUgMCAwIDEtLjUtLjV2LTFhLjUuNSAwIDAgMSAuNS0uNSIvPgo8L3N2Zz4=)*/
const UsbMicroFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-micro-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.707 4A1 1 0 0 0 2 4.293L.293 6A1 1 0 0 0 0 6.707V11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.707A1 1 0 0 0 15.707 6L14 4.293A1 1 0 0 0 13.293 4zM4.5 7h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default UsbMicroFill;
