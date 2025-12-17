import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![battery-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiA2aDV2NEgyeiIvPgogIDxwYXRoIGQ9Ik0yIDRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDItMlY2YTIgMiAwIDAgMC0yLTJ6bTEwIDFhMSAxIDAgMCAxIDEgMXY0YTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjZhMSAxIDAgMCAxIDEtMXptNCAzYTEuNSAxLjUgMCAwIDEtMS41IDEuNXYtM0ExLjUgMS41IDAgMCAxIDE2IDgiLz4KPC9zdmc+)*/
const BatteryHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="battery-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 6h5v4H2z"/>
  <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
</svg>
      )}
    />
  );

export default BatteryHalf;
