import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![octagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41NC4xNDZBLjUuNSAwIDAgMSA0Ljg5MyAwaDYuMjE0YS41LjUgMCAwIDEgLjM1My4xNDZsNC4zOTQgNC4zOTRhLjUuNSAwIDAgMSAuMTQ2LjM1M3Y2LjIxNGEuNS41IDAgMCAxLS4xNDYuMzUzbC00LjM5NCA0LjM5NGEuNS41IDAgMCAxLS4zNTMuMTQ2SDQuODkzYS41LjUgMCAwIDEtLjM1My0uMTQ2TC4xNDYgMTEuNDZBLjUuNSAwIDAgMSAwIDExLjEwN1Y0Ljg5M2EuNS41IDAgMCAxIC4xNDYtLjM1M3pNNS4xIDEgMSA1LjF2NS44TDUuMSAxNWg1LjhsNC4xLTQuMVY1LjFMMTAuOSAxeiIvPgo8L3N2Zz4=)*/
const Octagon: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="octagon"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
</svg>
      )}
    />
  );

export default Octagon;
