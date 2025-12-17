import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![google](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuNTQ1IDYuNTU4YTkuNCA5LjQgMCAwIDEgLjEzOSAxLjYyNmMwIDIuNDM0LS44NyA0LjQ5Mi0yLjM4NCA1Ljg4NWguMDAyQzExLjk3OCAxNS4yOTIgMTAuMTU4IDE2IDggMTZBOCA4IDAgMSAxIDggMGE3LjcgNy43IDAgMCAxIDUuMzUyIDIuMDgybC0yLjI4NCAyLjI4NEE0LjM1IDQuMzUgMCAwIDAgOCAzLjE2NmMtMi4wODcgMC0zLjg2IDEuNDA4LTQuNDkyIDMuMzA0YTQuOCA0LjggMCAwIDAgMCAzLjA2M2guMDAzYy42MzUgMS44OTMgMi40MDUgMy4zMDEgNC40OTIgMy4zMDEgMS4wNzggMCAyLjAwNC0uMjc2IDIuNzIyLS43NjRoLS4wMDNhMy43IDMuNyAwIDAgMCAxLjU5OS0yLjQzMUg4di0zLjA4eiIvPgo8L3N2Zz4=)*/
const Google: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="google"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>
      )}
    />
  );

export default Google;
