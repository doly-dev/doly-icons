import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![basket-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4wNzEgMS4yNDNhLjUuNSAwIDAgMSAuODU4LjUxNEwzLjM4MyA2aDkuMjM0TDEwLjA3IDEuNzU3YS41LjUgMCAxIDEgLjg1OC0uNTE0TDEzLjc4MyA2SDE1LjVhLjUuNSAwIDAgMSAuNS41djJhLjUuNSAwIDAgMS0uNS41SDE1djVhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWOUguNWEuNS41IDAgMCAxLS41LS41di0yQS41LjUgMCAwIDEgLjUgNmgxLjcxN3pNMy41IDEwLjVhLjUuNSAwIDEgMC0xIDB2M2EuNS41IDAgMCAwIDEgMHptMi41IDBhLjUuNSAwIDEgMC0xIDB2M2EuNS41IDAgMCAwIDEgMHptMi41IDBhLjUuNSAwIDEgMC0xIDB2M2EuNS41IDAgMCAwIDEgMHptMi41IDBhLjUuNSAwIDEgMC0xIDB2M2EuNS41IDAgMCAwIDEgMHptMi41IDBhLjUuNSAwIDEgMC0xIDB2M2EuNS41IDAgMCAwIDEgMHoiLz4KPC9zdmc+)*/
const BasketFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="basket-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
</svg>
      )}
    />
  );

export default BasketFill;
