import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![soundwave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgMmEuNS41IDAgMCAxIC41LjV2MTFhLjUuNSAwIDAgMS0xIDB2LTExYS41LjUgMCAwIDEgLjUtLjVtLTIgMmEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLTEgMHYtN2EuNS41IDAgMCAxIC41LS41bTQgMGEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLTEgMHYtN2EuNS41IDAgMCAxIC41LS41bS02IDEuNUEuNS41IDAgMCAxIDUgNnY0YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNW04IDBhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41bS0xMCAxQS41LjUgMCAwIDEgMyA3djJhLjUuNSAwIDAgMS0xIDBWN2EuNS41IDAgMCAxIC41LS41bTEyIDBhLjUuNSAwIDAgMSAuNS41djJhLjUuNSAwIDAgMS0xIDBWN2EuNS41IDAgMCAxIC41LS41Ii8+Cjwvc3ZnPg==)*/
const Soundwave: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="soundwave"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default Soundwave;
