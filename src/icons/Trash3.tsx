import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![trash3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDFoM2EuNS41IDAgMCAxIC41LjV2MUg2di0xYS41LjUgMCAwIDEgLjUtLjVNMTEgMi41di0xQTEuNSAxLjUgMCAwIDAgOS41IDBoLTNBMS41IDEuNSAwIDAgMCA1IDEuNXYxSDEuNWEuNS41IDAgMCAwIDAgMWguNTM4bC44NTMgMTAuNjZBMiAyIDAgMCAwIDQuODg1IDE2aDYuMjNhMiAyIDAgMCAwIDEuOTk0LTEuODRsLjg1My0xMC42NmguNTM4YS41LjUgMCAwIDAgMC0xem0xLjk1OCAxLS44NDYgMTAuNThhMSAxIDAgMCAxLS45OTcuOTJoLTYuMjNhMSAxIDAgMCAxLS45OTctLjkyTDMuMDQyIDMuNXptLTcuNDg3IDFhLjUuNSAwIDAgMSAuNTI4LjQ3bC41IDguNWEuNS41IDAgMCAxLS45OTguMDZMNSA1LjAzYS41LjUgMCAwIDEgLjQ3LS41M1ptNS4wNTggMGEuNS41IDAgMCAxIC40Ny41M2wtLjUgOC41YS41LjUgMCAxIDEtLjk5OC0uMDZsLjUtOC41YS41LjUgMCAwIDEgLjUyOC0uNDdNOCA0LjVhLjUuNSAwIDAgMSAuNS41djguNWEuNS41IDAgMCAxLTEgMFY1YS41LjUgMCAwIDEgLjUtLjUiLz4KPC9zdmc+)*/
const Trash3: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="trash3"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default Trash3;
