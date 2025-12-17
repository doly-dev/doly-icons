import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![card-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQuNSAzYS41LjUgMCAwIDEgLjUuNXY5YS41LjUgMCAwIDEtLjUuNWgtMTNhLjUuNSAwIDAgMS0uNS0uNXYtOWEuNS41IDAgMCAxIC41LS41em0tMTMtMUExLjUgMS41IDAgMCAwIDAgMy41djlBMS41IDEuNSAwIDAgMCAxLjUgMTRoMTNhMS41IDEuNSAwIDAgMCAxLjUtMS41di05QTEuNSAxLjUgMCAwIDAgMTQuNSAyeiIvPgogIDxwYXRoIGQ9Ik01IDhhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgMCAxaC03QS41LjUgMCAwIDEgNSA4bTAtMi41YS41LjUgMCAwIDEgLjUtLjVoN2EuNS41IDAgMCAxIDAgMWgtN2EuNS41IDAgMCAxLS41LS41bTAgNWEuNS41IDAgMCAxIC41LS41aDdhLjUuNSAwIDAgMSAwIDFoLTdhLjUuNSAwIDAgMS0uNS0uNW0tMS01YS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwTTQgOGEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG0wIDIuNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMCIvPgo8L3N2Zz4=)*/
const CardList: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="card-list"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
      )}
    />
  );

export default CardList;
