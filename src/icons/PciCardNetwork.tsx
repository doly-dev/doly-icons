import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pci-card-network](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDkuNXYtMmguMjE0YS41LjUgMCAwIDAgLjUtLjV2LS41aDIuNTcyVjdhLjUuNSAwIDAgMCAuNS41aC4yMTR2MnoiLz4KICA8cGF0aCBkPSJNMCAxLjVBLjUuNSAwIDAgMSAuNSAxaDFhLjUuNSAwIDAgMSAuNS41VjRoMTMuNWEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLS41LjVIMnYyLjVhLjUuNSAwIDAgMS0xIDBWMkguNWEuNS41IDAgMCAxLS41LS41bTYuNzE0IDRhLjUuNSAwIDAgMC0uNS41di41SDZhLjUuNSAwIDAgMC0uNS41djNhLjUuNSAwIDAgMCAuNS41aDVhLjUuNSAwIDAgMCAuNS0uNVY3YS41LjUgMCAwIDAtLjUtLjVoLS4yMTRWNmEuNS41IDAgMCAwLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0zIDEyLjVoMy41djFhLjUuNSAwIDAgMS0uNS41SDMuNWEuNS41IDAgMCAxLS41LS41em04IDBIN3YxYS41LjUgMCAwIDAgLjUuNWgzYS41LjUgMCAwIDAgLjUtLjV6Ii8+Cjwvc3ZnPg==)*/
const PciCardNetwork: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pci-card-network"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 9.5v-2h.214a.5.5 0 0 0 .5-.5v-.5h2.572V7a.5.5 0 0 0 .5.5h.214v2z"/>
  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m6.714 4a.5.5 0 0 0-.5.5v.5H6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5h-.214V6a.5.5 0 0 0-.5-.5z"/>
  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm8 0H7v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"/>
</svg>
      )}
    />
  );

export default PciCardNetwork;
