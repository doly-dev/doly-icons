import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sd-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4yNSAzLjVhLjc1Ljc1IDAgMCAwLTEuNSAwdjJhLjc1Ljc1IDAgMCAwIDEuNSAwem0yIDBhLjc1Ljc1IDAgMCAwLTEuNSAwdjJhLjc1Ljc1IDAgMCAwIDEuNSAwem0yIDBhLjc1Ljc1IDAgMCAwLTEuNSAwdjJhLjc1Ljc1IDAgMCAwIDEuNSAwem0yIDBhLjc1Ljc1IDAgMCAwLTEuNSAwdjJhLjc1Ljc1IDAgMCAwIDEuNSAweiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuOTE0IDBIMTIuNUExLjUgMS41IDAgMCAxIDE0IDEuNXYxM2ExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTlBMS41IDEuNSAwIDAgMSAyIDE0LjVWMy45MTRjMC0uMzk4LjE1OC0uNzguNDQtMS4wNkw0Ljg1My40MzlBMS41IDEuNSAwIDAgMSA1LjkxNCAwTTEzIDEuNWEuNS41IDAgMCAwLS41LS41SDUuOTE0YS41LjUgMCAwIDAtLjM1My4xNDZMMy4xNDYgMy41NjFBLjUuNSAwIDAgMCAzIDMuOTE0VjE0LjVhLjUuNSAwIDAgMCAuNS41aDlhLjUuNSAwIDAgMCAuNS0uNXoiLz4KPC9zdmc+)*/
const SdCard: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sd-card"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.25 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"/>
  <path fillRule="evenodd" d="M5.914 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 0 1 5.914 0M13 1.5a.5.5 0 0 0-.5-.5H5.914a.5.5 0 0 0-.353.146L3.146 3.561A.5.5 0 0 0 3 3.914V14.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5z"/>
</svg>
      )}
    />
  );

export default SdCard;
