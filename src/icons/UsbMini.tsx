import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-mini](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDhhLjUuNSAwIDAgMC0uNS41djFhLjUuNSAwIDAgMCAuNS41aDlhLjUuNSAwIDAgMCAuNS0uNXYtMWEuNS41IDAgMCAwLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0zIDNhMSAxIDAgMCAwLTEgMXYxLjI5M0wuMjkzIDdBMSAxIDAgMCAwIDAgNy43MDdWMTJhMSAxIDAgMCAwIDEgMWgxNGExIDEgMCAwIDAgMS0xVjcuNzA3QTEgMSAwIDAgMCAxNS43MDcgN0wxNCA1LjI5M1Y0YTEgMSAwIDAgMC0xLTF6bTAgMWgxMHYxLjI5M2ExIDEgMCAwIDAgLjI5My43MDdMMTUgNy43MDdWMTJIMVY3LjcwN0wyLjcwNyA2QTEgMSAwIDAgMCAzIDUuMjkzeiIvPgo8L3N2Zz4=)*/
const UsbMini: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-mini"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M3 3a1 1 0 0 0-1 1v1.293L.293 7A1 1 0 0 0 0 7.707V12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.707A1 1 0 0 0 15.707 7L14 5.293V4a1 1 0 0 0-1-1zm0 1h10v1.293a1 1 0 0 0 .293.707L15 7.707V12H1V7.707L2.707 6A1 1 0 0 0 3 5.293z"/>
</svg>
      )}
    />
  );

export default UsbMini;
