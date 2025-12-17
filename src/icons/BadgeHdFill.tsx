import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-hd-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuNTMgNS45NjhoLS44NDN2NC4wNmguODQzYzEuMTE3IDAgMS42MjItLjY2NyAxLjYyMi0yLjAyIDAtMS4zNTQtLjUxLTIuMDQtMS42MjItMi4wNCIvPgogIDxwYXRoIGQ9Ik0yIDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJ6bTUuMzk2IDMuMDAxVjExSDYuMjA5VjguNDNIMy42ODdWMTFIMi41VjUuMDAxaDEuMTg3djIuNDRoMi41MjJWNWgxLjE4N3pNOC41IDExVjUuMDAxaDIuMTg4YzEuODI0IDAgMi42ODUgMS4wOSAyLjY4NSAyLjk4NEMxMy4zNzMgOS44OTMgMTIuNSAxMSAxMC42OSAxMXoiLz4KPC9zdmc+)*/
const BadgeHdFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-hd-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.53 5.968h-.843v4.06h.843c1.117 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm5.396 3.001V11H6.209V8.43H3.687V11H2.5V5.001h1.187v2.44h2.522V5h1.187zM8.5 11V5.001h2.188c1.824 0 2.685 1.09 2.685 2.984C13.373 9.893 12.5 11 10.69 11z"/>
</svg>
      )}
    />
  );

export default BadgeHdFill;
