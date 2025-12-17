import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-micro](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDdhLjUuNSAwIDAgMC0uNS41djFhLjUuNSAwIDAgMCAuNS41aDdhLjUuNSAwIDAgMCAuNS0uNXYtMWEuNS41IDAgMCAwLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0yLjcwNyA0QTEgMSAwIDAgMCAyIDQuMjkzTC4yOTMgNkExIDEgMCAwIDAgMCA2LjcwN1YxMWExIDEgMCAwIDAgMSAxaDE0YTEgMSAwIDAgMCAxLTFWNi43MDdBMSAxIDAgMCAwIDE1LjcwNyA2TDE0IDQuMjkzQTEgMSAwIDAgMCAxMy4yOTMgNHptMCAxaDEwLjU4NkwxNSA2LjcwN1YxMUgxVjYuNzA3eiIvPgo8L3N2Zz4=)*/
const UsbMicro: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-micro"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M2.707 4A1 1 0 0 0 2 4.293L.293 6A1 1 0 0 0 0 6.707V11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.707A1 1 0 0 0 15.707 6L14 4.293A1 1 0 0 0 13.293 4zm0 1h10.586L15 6.707V11H1V6.707z"/>
</svg>
      )}
    />
  );

export default UsbMicro;
