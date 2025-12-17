import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![p-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhtMTUgMEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTUuNSA0LjAwMmgyLjk2MkMxMC4wNDUgNC4wMDIgMTEgNS4xMDQgMTEgNi41ODZjMCAxLjQ5NC0uOTY3IDIuNTc4LTIuNTUgMi41NzhINi43ODRWMTJINS41em0yLjc3IDQuMDcyYy44OTMgMCAxLjQxOS0uNTQ1IDEuNDE5LTEuNDg4cy0uNTI2LTEuNDgyLTEuNDItMS40ODJINi43Nzh2Mi45N3oiLz4KPC9zdmc+)*/
const PCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="p-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z"/>
</svg>
      )}
    />
  );

export default PCircle;
