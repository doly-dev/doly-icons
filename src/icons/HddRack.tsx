import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdd-rack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDVhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFNMyA0LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtMiA3YS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwbS0yLjUuNWEuNS41IDAgMSAwIDAtMSAuNS41IDAgMCAwIDAgMSIvPgogIDxwYXRoIGQ9Ik0yIDJhMiAyIDAgMCAwLTIgMnYxYTIgMiAwIDAgMCAyIDJoMXYySDJhMiAyIDAgMCAwLTIgMnYxYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMnYtMWEyIDIgMCAwIDAtMi0yaC0xVjdoMWEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMnptMTMgMnYxYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMWgxMmExIDEgMCAwIDEgMSAxbTAgN3YxYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xdi0xYTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMW0tMy00djJINFY3eiIvPgo8L3N2Zz4=)*/
const HddRack: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdd-rack"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-3-4v2H4V7z"/>
</svg>
      )}
    />
  );

export default HddRack;
