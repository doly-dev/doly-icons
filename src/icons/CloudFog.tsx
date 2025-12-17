import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-fog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAxMy41YS41LjUgMCAwIDEgLjUtLjVoOWEuNS41IDAgMCAxIDAgMWgtOWEuNS41IDAgMCAxLS41LS41bTAgMmEuNS41IDAgMCAxIC41LS41aDlhLjUuNSAwIDAgMSAwIDFoLTlhLjUuNSAwIDAgMS0uNS0uNW0xMC40MDUtOS40NzNhNS4wMDEgNS4wMDEgMCAwIDAtOS40OTktMS4wMDRBMy41IDMuNSAwIDEgMCAzLjUgMTJIMTNhMyAzIDAgMCAwIC40MDUtNS45NzNNOC41IDNhNCA0IDAgMCAxIDMuOTc2IDMuNTU1LjUuNSAwIDAgMCAuNS40NDVIMTNhMiAyIDAgMCAxIDAgNEgzLjVhMi41IDIuNSAwIDEgMSAuNjA1LTQuOTI2LjUuNSAwIDAgMCAuNTk2LS4zMjlBNCA0IDAgMCAxIDguNSAzIi8+Cjwvc3ZnPg==)*/
const CloudFog: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-fog"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973M8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 3"/>
</svg>
      )}
    />
  );

export default CloudFog;
