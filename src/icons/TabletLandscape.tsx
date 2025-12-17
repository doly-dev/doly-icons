import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tablet-landscape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA0YTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xem0tMSA4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJIMmEyIDIgMCAwIDAtMiAyeiIvPgogIDxwYXRoIGQ9Ik0xNCA4YTEgMSAwIDEgMC0yIDAgMSAxIDAgMCAwIDIgMCIvPgo8L3N2Zz4=)*/
const TabletLandscape: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tablet-landscape"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2z"/>
  <path d="M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
</svg>
      )}
    />
  );

export default TabletLandscape;
