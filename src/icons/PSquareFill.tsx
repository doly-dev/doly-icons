import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![p-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4yNyA4LjA3NGMuODkzIDAgMS40MTktLjU0NSAxLjQxOS0xLjQ4OHMtLjUyNi0xLjQ4Mi0xLjQyLTEuNDgySDYuNzc4djIuOTd6Ii8+CiAgPHBhdGggZD0iTTIgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6bTMuNSA0LjAwMmgyLjk2MkMxMC4wNDUgNC4wMDIgMTEgNS4xMDQgMTEgNi41ODZjMCAxLjQ5NC0uOTY3IDIuNTc4LTIuNTUgMi41NzhINi43ODRWMTJINS41eiIvPgo8L3N2Zz4=)*/
const PSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="p-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.27 8.074c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5z"/>
</svg>
      )}
    />
  );

export default PSquareFill;
