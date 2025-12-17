import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![palette2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAuNUEuNS41IDAgMCAxIC41IDBoNWEuNS41IDAgMCAxIC41LjV2NS4yNzdsNC4xNDctNC4xMzFhLjUuNSAwIDAgMSAuNzA3IDBsMy41MzUgMy41MzZhLjUuNSAwIDAgMSAwIC43MDhMMTAuMjYxIDEwSDE1LjVhLjUuNSAwIDAgMSAuNS41djVhLjUuNSAwIDAgMS0uNS41SDNhMyAzIDAgMCAxLTIuMTIxLS44NzlBMyAzIDAgMCAxIDAgMTMuMDQ0bTYtLjIxIDcuMzI4LTcuMy0yLjgyOS0yLjgyOEw2IDcuMTg4ek00LjUgMTNhMS41IDEuNSAwIDEgMC0zIDAgMS41IDEuNSAwIDAgMCAzIDBNMTUgMTV2LTRIOS4yNThsLTQuMDE1IDR6TTAgLjV2MTIuNDk1em0wIDEyLjQ5NVYxM3oiLz4KPC9zdmc+)*/
const Palette2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="palette2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a3 3 0 0 1-2.121-.879A3 3 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 15v-4H9.258l-4.015 4zM0 .5v12.495zm0 12.495V13z"/>
</svg>
      )}
    />
  );

export default Palette2;
