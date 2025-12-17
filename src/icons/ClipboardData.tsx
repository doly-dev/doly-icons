import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard-data](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAxMWExIDEgMCAxIDEgMiAwdjFhMSAxIDAgMSAxLTIgMHptNi00YTEgMSAwIDEgMSAyIDB2NWExIDEgMCAxIDEtMiAwek03IDlhMSAxIDAgMCAxIDIgMHYzYTEgMSAwIDEgMS0yIDB6Ii8+CiAgPHBhdGggZD0iTTQgMS41SDNhMiAyIDAgMCAwLTIgMlYxNGEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJWMy41YTIgMiAwIDAgMC0yLTJoLTF2MWgxYTEgMSAwIDAgMSAxIDFWMTRhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTFWMy41YTEgMSAwIDAgMSAxLTFoMXoiLz4KICA8cGF0aCBkPSJNOS41IDFhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC0zYS41LjUgMCAwIDEtLjUtLjV2LTFhLjUuNSAwIDAgMSAuNS0uNXptLTMtMUExLjUgMS41IDAgMCAwIDUgMS41djFBMS41IDEuNSAwIDAgMCA2LjUgNGgzQTEuNSAxLjUgMCAwIDAgMTEgMi41di0xQTEuNSAxLjUgMCAwIDAgOS41IDB6Ii8+Cjwvc3ZnPg==)*/
const ClipboardData: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard-data"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
</svg>
      )}
    />
  );

export default ClipboardData;
