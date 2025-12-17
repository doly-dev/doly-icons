import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rss-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptMS41IDIuNWM1LjUyMyAwIDEwIDQuNDc3IDEwIDEwYTEgMSAwIDEgMS0yIDAgOCA4IDAgMCAwLTgtOCAxIDEgMCAwIDEgMC0ybTAgNGE2IDYgMCAwIDEgNiA2IDEgMSAwIDEgMS0yIDAgNCA0IDAgMCAwLTQtNCAxIDEgMCAwIDEgMC0ybS41IDdhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDMiLz4KPC9zdmc+)*/
const RssFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rss-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2m0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2m.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
      )}
    />
  );

export default RssFill;
