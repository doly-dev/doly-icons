import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![door-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDEwYy0uMjc2IDAtLjUtLjQ0OC0uNS0xcy4yMjQtMSAuNS0xIC41LjQ0OC41IDEtLjIyNCAxLS41IDEiLz4KICA8cGF0aCBkPSJNMTAuODI4LjEyMkEuNS41IDAgMCAxIDExIC41VjFoLjVBMS41IDEuNSAwIDAgMSAxMyAyLjVWMTVoMS41YS41LjUgMCAwIDEgMCAxaC0xM2EuNS41IDAgMCAxIDAtMUgzVjEuNWEuNS41IDAgMCAxIC40My0uNDk1bDctMWEuNS41IDAgMCAxIC4zOTguMTE3TTExLjUgMkgxMXYxM2gxVjIuNWEuNS41IDAgMCAwLS41LS41TTQgMS45MzRWMTVoNlYxLjA3N3oiLz4KPC9zdmc+)*/
const DoorOpen: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="door-open"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
  <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
</svg>
      )}
    />
  );

export default DoorOpen;
