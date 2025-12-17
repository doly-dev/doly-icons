import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-haze2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDJhNSA1IDAgMCAxIDQuOTA1IDQuMDI3QTMgMyAwIDAgMSAxMyAxMkgzLjVBMy41IDMuNSAwIDAgMSAuMDM1IDlINS41YS41LjUgMCAwIDAgMC0xSC4wMzVhMy41IDMuNSAwIDAgMSAzLjg3MS0yLjk3N0E1IDUgMCAwIDEgOC41IDJtLTYgOGEuNS41IDAgMCAwIDAgMWg5YS41LjUgMCAwIDAgMC0xek0wIDEzLjVhLjUuNSAwIDAgMSAuNS0uNWg5YS41LjUgMCAwIDEgMCAxaC05YS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const CloudHaze2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-haze2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 2a5 5 0 0 1 4.905 4.027A3 3 0 0 1 13 12H3.5A3.5 3.5 0 0 1 .035 9H5.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 3.871-2.977A5 5 0 0 1 8.5 2m-6 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM0 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default CloudHaze2Fill;
