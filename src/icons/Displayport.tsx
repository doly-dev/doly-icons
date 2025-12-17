import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![displayport](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDdhLjUuNSAwIDAgMC0uNS41djFhLjUuNSAwIDAgMCAxIDBWOGgxMHYuNWEuNS41IDAgMCAwIDEgMHYtMWEuNS41IDAgMCAwLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0xIDVhMSAxIDAgMCAwLTEgMXYzLjE5MWExIDEgMCAwIDAgLjU1My44OTRsMS42MTguODFhMSAxIDAgMCAwIC40NDcuMTA1SDE1YTEgMSAwIDAgMCAxLTFWNmExIDEgMCAwIDAtMS0xem0wIDFoMTR2NEgyLjYxOEwxIDkuMTkxeiIvPgo8L3N2Zz4=)*/
const Displayport: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="displayport"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V8h10v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h14v4H2.618L1 9.191z"/>
</svg>
      )}
    />
  );

export default Displayport;
