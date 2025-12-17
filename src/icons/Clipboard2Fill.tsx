import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41IDBhLjUuNSAwIDAgMSAuNS41LjUuNSAwIDAgMCAuNS41LjUuNSAwIDAgMSAuNS41VjJhLjUuNSAwIDAgMS0uNS41aC01QS41LjUgMCAwIDEgNSAydi0uNWEuNS41IDAgMCAxIC41LS41LjUuNSAwIDAgMCAuNS0uNS41LjUgMCAwIDEgLjUtLjV6Ii8+CiAgPHBhdGggZD0iTTMuNSAxaC41ODVBMS41IDEuNSAwIDAgMCA0IDEuNVYyYTEuNSAxLjUgMCAwIDAgMS41IDEuNWg1QTEuNSAxLjUgMCAwIDAgMTIgMnYtLjVxLS4wMDEtLjI2NC0uMDg1LS41aC41ODVBMS41IDEuNSAwIDAgMSAxNCAyLjV2MTJhMS41IDEuNSAwIDAgMS0xLjUgMS41aC05QTEuNSAxLjUgMCAwIDEgMiAxNC41di0xMkExLjUgMS41IDAgMCAxIDMuNSAxIi8+Cjwvc3ZnPg==)*/
const Clipboard2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
  <path d="M3.5 1h.585A1.5 1.5 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5q-.001-.264-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1"/>
</svg>
      )}
    />
  );

export default Clipboard2Fill;
