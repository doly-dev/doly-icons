import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![octagon-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuMTA3IDBhLjUuNSAwIDAgMSAuMzUzLjE0Nmw0LjM5NCA0LjM5NGEuNS41IDAgMCAxIC4xNDYuMzUzdjYuMjE0YS41LjUgMCAwIDEtLjE0Ni4zNTNsLTQuMzk0IDQuMzk0YS41LjUgMCAwIDEtLjM1My4xNDZINC44OTNhLjUuNSAwIDAgMS0uMzUzLS4xNDZMLjE0NiAxMS40NkEuNS41IDAgMCAxIDAgMTEuMTA3VjQuODkzYS41LjUgMCAwIDEgLjE0Ni0uMzUzTDQuNTQuMTQ2QS41LjUgMCAwIDEgNC44OTMgMHoiLz4KPC9zdmc+)*/
const OctagonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="octagon-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.107 0a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146A.5.5 0 0 1 4.893 0z"/>
</svg>
      )}
    />
  );

export default OctagonFill;
