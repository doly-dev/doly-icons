import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![nvme-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiA3SDV2Mmgxem02IDBIOXYyaDN6Ii8+CiAgPHBhdGggZD0iTTIgNGEuNS41IDAgMCAwLS41LjVoLTFBLjUuNSAwIDAgMCAwIDV2MWEuNS41IDAgMCAwIC41LjVoMWEuMjUuMjUgMCAwIDEgMCAuNWgtMWEuNS41IDAgMCAwLS41LjVWMTFhLjUuNSAwIDAgMCAuNS41aDFhLjUuNSAwIDAgMCAuNS41aDEzLjVhLjUuNSAwIDAgMCAuNS0uNVY5YS41LjUgMCAwIDAtLjUtLjUuNS41IDAgMCAxIDAtMUEuNS41IDAgMCAwIDE2IDdWNC41YS41LjUgMCAwIDAtLjUtLjV6bTIgMi41YS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIC41LjV2M2EuNS41IDAgMCAxLS41LjVoLTJhLjUuNSAwIDAgMS0uNS0uNXptNCAwYS41LjUgMCAwIDEgLjUtLjVoNGEuNS41IDAgMCAxIC41LjV2M2EuNS41IDAgMCAxLS41LjVoLTRhLjUuNSAwIDAgMS0uNS0uNXoiLz4KPC9zdmc+)*/
const NvmeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="nvme-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 7H5v2h1zm6 0H9v2h3z"/>
  <path d="M2 4a.5.5 0 0 0-.5.5h-1A.5.5 0 0 0 0 5v1a.5.5 0 0 0 .5.5h1a.25.25 0 0 1 0 .5h-1a.5.5 0 0 0-.5.5V11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5.5h13.5a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1A.5.5 0 0 0 16 7V4.5a.5.5 0 0 0-.5-.5zm2 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default NvmeFill;
