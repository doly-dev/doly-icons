import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pci-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBLjUuNSAwIDAgMSAuNSAxaDFhLjUuNSAwIDAgMSAuNS41VjRoMTMuNWEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLS41LjVIMnYyLjVhLjUuNSAwIDAgMS0xIDBWMkguNWEuNS41IDAgMCAxLS41LS41Ii8+CiAgPHBhdGggZD0iTTMgMTIuNWgzLjV2MWEuNS41IDAgMCAxLS41LjVIMy41YS41LjUgMCAwIDEtLjUtLjV6bTQgMGg0djFhLjUuNSAwIDAgMS0uNS41aC0zYS41LjUgMCAwIDEtLjUtLjV6Ii8+Cjwvc3ZnPg==)*/
const PciCard: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pci-card"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5"/>
  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 0h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default PciCard;
