import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![android](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi43NiAzLjA2MWEuNS41IDAgMCAxIC42NzkuMmwxLjI4MyAyLjM1MkE4LjkgOC45IDAgMCAxIDggNWE4LjkgOC45IDAgMCAxIDMuMjc4LjYxM2wxLjI4My0yLjM1MmEuNS41IDAgMSAxIC44NzguNDc4bC0xLjI1MiAyLjI5NUMxNC40NzUgNy4yNjYgMTYgOS40NzcgMTYgMTJIMGMwLTIuNTIzIDEuNTI1LTQuNzM0IDMuODEzLTUuOTY2TDIuNTYgMy43NGEuNS41IDAgMCAxIC4yLS42NzhaTTUgMTBhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAybTYgMGExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDIiLz4KPC9zdmc+)*/
const Android: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="android"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.9 8.9 0 0 1 8 5a8.9 8.9 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
      )}
    />
  );

export default Android;
