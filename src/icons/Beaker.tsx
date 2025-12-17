import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![beaker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41IDNhLjUuNSAwIDAgMCAwIDFIMTNWM3ptMiAyYS41LjUgMCAwIDAgMCAxSDEzVjV6bS0yIDJhLjUuNSAwIDAgMCAwIDFIMTNWN3ptMiAyYS41LjUgMCAwIDAgMCAxSDEzVjl6bS0yIDJhLjUuNSAwIDAgMCAwIDFIMTN2LTF6bTIgMmEuNS41IDAgMCAwIDAgMUgxM3YtMXoiLz4KICA8cGF0aCBkPSJNLjUgMGEuNS41IDAgMCAwLS4zNTQuODU0bC4xMjIuMTJBMi41IDIuNSAwIDAgMSAxIDIuNzQ0VjE0YTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDItMlYyLjc0M2EyLjUgMi41IDAgMCAxIC43MzItMS43NjhsLjEyMi0uMTIxQS41LjUgMCAwIDAgMTUuNSAwek0yIDIuNzQzQTMuNSAzLjUgMCAwIDAgMS41MzUgMWgxMi45M0EzLjUgMy41IDAgMCAwIDE0IDIuNzQzVjE0YTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xeiIvPgo8L3N2Zz4=)*/
const Beaker: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="beaker"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.5 3a.5.5 0 0 0 0 1H13V3zm2 2a.5.5 0 0 0 0 1H13V5zm-2 2a.5.5 0 0 0 0 1H13V7zm2 2a.5.5 0 0 0 0 1H13V9zm-2 2a.5.5 0 0 0 0 1H13v-1zm2 2a.5.5 0 0 0 0 1H13v-1z"/>
  <path d="M.5 0a.5.5 0 0 0-.354.854l.122.12A2.5 2.5 0 0 1 1 2.744V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2.743a2.5 2.5 0 0 1 .732-1.768l.122-.121A.5.5 0 0 0 15.5 0zM2 2.743A3.5 3.5 0 0 0 1.535 1h12.93A3.5 3.5 0 0 0 14 2.743V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default Beaker;
