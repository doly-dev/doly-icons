import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![r-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhtMTUgMEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTUuNSA0LjAwMmgzLjExYzEuNzEgMCAyLjc0MS45NzMgMi43NDEgMi40NiAwIDEuMTM4LS42NjcgMS45NC0xLjQ5NSAyLjI0TDExLjUgMTJIOS45OEw4LjUyIDguOTI0SDYuODM2VjEySDUuNXptMS4zMzUgMS4wOXYyLjc3N2gxLjU0OWMuOTk1IDAgMS41NzMtLjQ2MyAxLjU3My0xLjM2IDAtLjkxMy0uNTk2LTEuNDE3LTEuNTM3LTEuNDE3eiIvPgo8L3N2Zz4=)*/
const RCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="r-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417z"/>
</svg>
      )}
    />
  );

export default RCircle;
