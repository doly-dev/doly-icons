import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-lightning-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4wNTMgMTEuMjc2QS41LjUgMCAwIDEgNy41IDExaDFhLjUuNSAwIDAgMSAuNDc0LjY1OGwtLjI4Ljg0Mkg5LjVhLjUuNSAwIDAgMSAuMzkuODEybC0yIDIuNWEuNS41IDAgMCAxLS44NzUtLjQzM0w3LjM2IDE0SDYuNWEuNS41IDAgMCAxLS40NDctLjcyNHptNi4zNTItNy4yNDlhNS4wMDEgNS4wMDEgMCAwIDAtOS40OTktMS4wMDRBMy41IDMuNSAwIDEgMCAzLjUgMTBIMTNhMyAzIDAgMCAwIC40MDUtNS45NzMiLz4KPC9zdmc+)*/
const CloudLightningFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-lightning-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>
</svg>
      )}
    />
  );

export default CloudLightningFill;
