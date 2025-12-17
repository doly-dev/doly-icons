import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hurricane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi45OTkgMi42QTUuNSA1LjUgMCAwIDEgMTUgNy41YS41LjUgMCAwIDAgMSAwIDYuNSA2LjUgMCAxIDAtMTMgMCA1IDUgMCAwIDAgNi4wMDEgNC45QTUuNSA1LjUgMCAwIDEgMSA3LjVhLjUuNSAwIDAgMC0xIDAgNi41IDYuNSAwIDEgMCAxMyAwIDUgNSAwIDAgMC02LjAwMS00LjlNMTAgNy41YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMCIvPgo8L3N2Zz4=)*/
const Hurricane: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hurricane"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6.001-4.9M10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg>
      )}
    />
  );

export default Hurricane;
