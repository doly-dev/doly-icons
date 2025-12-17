import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![menu-button-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBMS41IDEuNSAwIDAgMSAxLjUgMGgxM0ExLjUgMS41IDAgMCAxIDE2IDEuNXYyQTEuNSAxLjUgMCAwIDEgMTQuNSA1aC0xM0ExLjUgMS41IDAgMCAxIDAgMy41ek0xLjUgMWEuNS41IDAgMCAwLS41LjV2MmEuNS41IDAgMCAwIC41LjVoMTNhLjUuNSAwIDAgMCAuNS0uNXYtMmEuNS41IDAgMCAwLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0yIDIuNWEuNS41IDAgMCAxIC41LS41aDNhLjUuNSAwIDAgMSAwIDFoLTNhLjUuNSAwIDAgMS0uNS0uNW0xMC44MjMuMzIzLS4zOTYtLjM5NkEuMjUuMjUgMCAwIDEgMTIuNjA0IDJoLjc5MmEuMjUuMjUgMCAwIDEgLjE3Ny40MjdsLS4zOTYuMzk2YS4yNS4yNSAwIDAgMS0uMzU0IDBNMCA4YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY1YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0xIDN2MmExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LTJ6bTE0LTFWOGExIDEgMCAwIDAtMS0xSDJhMSAxIDAgMCAwLTEgMXYyek0yIDguNWEuNS41IDAgMCAxIC41LS41aDlhLjUuNSAwIDAgMSAwIDFoLTlhLjUuNSAwIDAgMS0uNS0uNW0wIDRhLjUuNSAwIDAgMSAuNS0uNWg2YS41LjUgMCAwIDEgMCAxaC02YS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const MenuButtonWide: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="menu-button-wide"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
  <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default MenuButtonWide;
