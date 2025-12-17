import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-lightning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuNDA1IDQuMDI3YTUuMDAxIDUuMDAxIDAgMCAwLTkuNDk5LTEuMDA0QTMuNSAzLjUgMCAxIDAgMy41IDEwSDEzYTMgMyAwIDAgMCAuNDA1LTUuOTczTTguNSAxYTQgNCAwIDAgMSAzLjk3NiAzLjU1NS41LjUgMCAwIDAgLjUuNDQ1SDEzYTIgMiAwIDAgMSAwIDRIMy41YTIuNSAyLjUgMCAxIDEgLjYwNS00LjkyNi41LjUgMCAwIDAgLjU5Ni0uMzI5QTQgNCAwIDAgMSA4LjUgMU03LjA1MyAxMS4yNzZBLjUuNSAwIDAgMSA3LjUgMTFoMWEuNS41IDAgMCAxIC40NzQuNjU4bC0uMjguODQySDkuNWEuNS41IDAgMCAxIC4zOS44MTJsLTIgMi41YS41LjUgMCAwIDEtLjg3NS0uNDMzTDcuMzYgMTRINi41YS41LjUgMCAwIDEtLjQ0Ny0uNzI0eiIvPgo8L3N2Zz4=)*/
const CloudLightning: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-lightning"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973M8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724z"/>
</svg>
      )}
    />
  );

export default CloudLightning;
