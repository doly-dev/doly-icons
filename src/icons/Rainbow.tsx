import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rainbow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA0LjVhNyA3IDAgMCAwLTcgNyAuNS41IDAgMCAxLTEgMCA4IDggMCAxIDEgMTYgMCAuNS41IDAgMCAxLTEgMCA3IDcgMCAwIDAtNy03bTAgMmE1IDUgMCAwIDAtNSA1IC41LjUgMCAwIDEtMSAwIDYgNiAwIDEgMSAxMiAwIC41LjUgMCAwIDEtMSAwIDUgNSAwIDAgMC01LTVtMCAyYTMgMyAwIDAgMC0zIDMgLjUuNSAwIDAgMS0xIDAgNCA0IDAgMSAxIDggMCAuNS41IDAgMCAxLTEgMCAzIDMgMCAwIDAtMy0zbTAgMmExIDEgMCAwIDAtMSAxIC41LjUgMCAwIDEtMSAwIDIgMiAwIDEgMSA0IDAgLjUuNSAwIDAgMS0xIDAgMSAxIDAgMCAwLTEtMSIvPgo8L3N2Zz4=)*/
const Rainbow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rainbow"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 4.5a7 7 0 0 0-7 7 .5.5 0 0 1-1 0 8 8 0 1 1 16 0 .5.5 0 0 1-1 0 7 7 0 0 0-7-7m0 2a5 5 0 0 0-5 5 .5.5 0 0 1-1 0 6 6 0 1 1 12 0 .5.5 0 0 1-1 0 5 5 0 0 0-5-5m0 2a3 3 0 0 0-3 3 .5.5 0 0 1-1 0 4 4 0 1 1 8 0 .5.5 0 0 1-1 0 3 3 0 0 0-3-3m0 2a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 4 0 .5.5 0 0 1-1 0 1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default Rainbow;
