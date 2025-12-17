import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![card-heading](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQuNSAzYS41LjUgMCAwIDEgLjUuNXY5YS41LjUgMCAwIDEtLjUuNWgtMTNhLjUuNSAwIDAgMS0uNS0uNXYtOWEuNS41IDAgMCAxIC41LS41em0tMTMtMUExLjUgMS41IDAgMCAwIDAgMy41djlBMS41IDEuNSAwIDAgMCAxLjUgMTRoMTNhMS41IDEuNSAwIDAgMCAxLjUtMS41di05QTEuNSAxLjUgMCAwIDAgMTQuNSAyeiIvPgogIDxwYXRoIGQ9Ik0zIDguNWEuNS41IDAgMCAxIC41LS41aDlhLjUuNSAwIDAgMSAwIDFoLTlhLjUuNSAwIDAgMS0uNS0uNW0wIDJhLjUuNSAwIDAgMSAuNS0uNWg2YS41LjUgMCAwIDEgMCAxaC02YS41LjUgMCAwIDEtLjUtLjVtMC01YS41LjUgMCAwIDEgLjUtLjVoOWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTlhLjUuNSAwIDAgMS0uNS0uNXoiLz4KPC9zdmc+)*/
const CardHeading: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="card-heading"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default CardHeading;
