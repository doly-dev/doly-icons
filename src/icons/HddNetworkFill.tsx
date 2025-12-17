import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdd-network-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2MWEyIDIgMCAwIDAgMiAyaDUuNXYzQTEuNSAxLjUgMCAwIDAgNiAxMS41SC41YS41LjUgMCAwIDAgMCAxSDZBMS41IDEuNSAwIDAgMCA3LjUgMTRoMWExLjUgMS41IDAgMCAwIDEuNS0xLjVoNS41YS41LjUgMCAwIDAgMC0xSDEwQTEuNSAxLjUgMCAwIDAgOC41IDEwVjdIMTRhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJ6bS41IDNhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFtMiAwYS41LjUgMCAxIDEgMC0xIC41LjUgMCAwIDEgMCAxIi8+Cjwvc3ZnPg==)*/
const HddNetworkFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdd-network-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5.5v3A1.5 1.5 0 0 0 6 11.5H.5a.5.5 0 0 0 0 1H6A1.5 1.5 0 0 0 7.5 14h1a1.5 1.5 0 0 0 1.5-1.5h5.5a.5.5 0 0 0 0-1H10A1.5 1.5 0 0 0 8.5 10V7H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
</svg>
      )}
    />
  );

export default HddNetworkFill;
