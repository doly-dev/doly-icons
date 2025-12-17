import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cassette-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDJBMS41IDEuNSAwIDAgMCAwIDMuNXY5QTEuNSAxLjUgMCAwIDAgMS41IDE0aC4xOTFsMS44NjItMy43MjRBLjUuNSAwIDAgMSA0IDEwaDhhLjUuNSAwIDAgMSAuNDQ3LjI3NkwxNC4zMSAxNGguMTkxYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtOUExLjUgMS41IDAgMCAwIDE0LjUgMnpNNCA3YTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMm04IDBhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyTTYgNmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMkg3YTEgMSAwIDAgMS0xLTEiLz4KICA8cGF0aCBkPSJtMTMuMTkxIDE0LTEuNS0zSDQuMzA5bC0xLjUgM3oiLz4KPC9zdmc+)*/
const CassetteFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cassette-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h.191l1.862-3.724A.5.5 0 0 1 4 10h8a.5.5 0 0 1 .447.276L14.31 14h.191a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zM4 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6 6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1"/>
  <path d="m13.191 14-1.5-3H4.309l-1.5 3z"/>
</svg>
      )}
    />
  );

export default CassetteFill;
