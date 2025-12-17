import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sticky](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDFBMS41IDEuNSAwIDAgMCAxIDIuNXYxMUExLjUgMS41IDAgMCAwIDIuNSAxNWg2LjA4NmExLjUgMS41IDAgMCAwIDEuMDYtLjQ0bDQuOTE1LTQuOTE0QTEuNSAxLjUgMCAwIDAgMTUgOC41ODZWMi41QTEuNSAxLjUgMCAwIDAgMTMuNSAxek0yIDIuNWEuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgLjUuNVY4SDkuNUExLjUgMS41IDAgMCAwIDggOS41VjE0SDIuNWEuNS41IDAgMCAxLS41LS41em03IDExLjI5M1Y5LjVhLjUuNSAwIDAgMSAuNS0uNWg0LjI5M3oiLz4KPC9zdmc+)*/
const Sticky: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sticky"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z"/>
</svg>
      )}
    />
  );

export default Sticky;
