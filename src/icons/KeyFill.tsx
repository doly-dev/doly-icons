import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![key-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDExLjVhMy41IDMuNSAwIDEgMSAzLjE2My01SDE0TDE1LjUgOCAxNCA5LjVsLTEtMS0xIDEtMS0xLTEgMS0xLTEtMSAxSDYuNjYzYTMuNSAzLjUgMCAwIDEtMy4xNjMgMk0yLjUgOWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDIiLz4KPC9zdmc+)*/
const KeyFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="key-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
      )}
    />
  );

export default KeyFill;
