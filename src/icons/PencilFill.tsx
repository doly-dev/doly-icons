import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pencil-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuODU0LjE0NmEuNS41IDAgMCAwLS43MDcgMEwxMC41IDEuNzkzIDE0LjIwNyA1LjVsMS42NDctMS42NDZhLjUuNSAwIDAgMCAwLS43MDh6bS42NDYgNi4wNjFMOS43OTMgMi41IDMuMjkzIDlIMy41YS41LjUgMCAwIDEgLjUuNXYuNWguNWEuNS41IDAgMCAxIC41LjV2LjVoLjVhLjUuNSAwIDAgMSAuNS41di41aC41YS41LjUgMCAwIDEgLjUuNXYuMjA3em0tNy40NjggNy40NjhBLjUuNSAwIDAgMSA2IDEzLjVWMTNoLS41YS41LjUgMCAwIDEtLjUtLjVWMTJoLS41YS41LjUgMCAwIDEtLjUtLjVWMTFoLS41YS41LjUgMCAwIDEtLjUtLjVWMTBoLS41YS41LjUgMCAwIDEtLjE3NS0uMDMybC0uMTc5LjE3OGEuNS41IDAgMCAwLS4xMS4xNjhsLTIgNWEuNS41IDAgMCAwIC42NS42NWw1LTJhLjUuNSAwIDAgMCAuMTY4LS4xMXoiLz4KPC9zdmc+)*/
const PencilFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pencil-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
      )}
    />
  );

export default PencilFill;
