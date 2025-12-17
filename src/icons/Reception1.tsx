import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![reception-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxMS41YS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIC41LjV2MmEuNS41IDAgMCAxLS41LjVoLTJhLjUuNSAwIDAgMS0uNS0uNXptNCAyYS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxLS41LS41bTQgMGEuNS41IDAgMCAxIC41LS41aDJhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMS0uNS0uNW00IDBhLjUuNSAwIDAgMSAuNS0uNWgyYS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const Reception1: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="reception-1"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default Reception1;
