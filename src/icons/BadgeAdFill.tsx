import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-ad-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuMzUgOC4zMzdjMC0uNjk5LS40Mi0xLjEzOC0xLjAwMS0xLjEzOC0uNTg0IDAtLjk1NC40NDQtLjk1NCAxLjIzOXYuNDUzYzAgLjguMzc0IDEuMjQ4Ljk3MiAxLjI0OC41ODggMCAuOTg0LS40NC45ODQtMS4yem0tNS40MTMuMjM3LS43MzQtMi40MjZINS4xNWwtLjczNCAyLjQyNmgxLjUyeiIvPgogIDxwYXRoIGQ9Ik0yIDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJ6bTYuMjA5IDYuMzJjMC0xLjI4LjY5NC0yLjA0NCAxLjc1My0yLjA0NC42NTUgMCAxLjE1Ni4yOTQgMS4zMzYuNzY5aC4wNTN2LTIuMzZoMS4xNlYxMWgtMS4xMzh2LS43NDdoLS4wNTdjLS4xNDUuNDc0LS42OS44MDQtMS4zNjcuODA0LTEuMDU1IDAtMS43NC0uNzY0LTEuNzQtMi4wNDN2LS42OTV6bS00LjA0IDEuMTM4TDMuNyAxMUgyLjVsMi4wMTMtNS45OTlINS45TDcuOTA1IDExSDYuNjQ0bC0uNDctMS41NDJINC4xN3oiLz4KPC9zdmc+)*/
const BadgeAdFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-ad-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.35 8.337c0-.699-.42-1.138-1.001-1.138-.584 0-.954.444-.954 1.239v.453c0 .8.374 1.248.972 1.248.588 0 .984-.44.984-1.2zm-5.413.237-.734-2.426H5.15l-.734 2.426h1.52z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6.209 6.32c0-1.28.694-2.044 1.753-2.044.655 0 1.156.294 1.336.769h.053v-2.36h1.16V11h-1.138v-.747h-.057c-.145.474-.69.804-1.367.804-1.055 0-1.74-.764-1.74-2.043v-.695zm-4.04 1.138L3.7 11H2.5l2.013-5.999H5.9L7.905 11H6.644l-.47-1.542H4.17z"/>
</svg>
      )}
    />
  );

export default BadgeAdFill;
