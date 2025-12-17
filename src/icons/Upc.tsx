import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![upc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyA0LjVhLjUuNSAwIDAgMSAxIDB2N2EuNS41IDAgMCAxLTEgMHptMiAwYS41LjUgMCAwIDEgMSAwdjdhLjUuNSAwIDAgMS0xIDB6bTIgMGEuNS41IDAgMCAxIDEgMHY3YS41LjUgMCAwIDEtMSAwem0yIDBhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgLjUuNXY3YS41LjUgMCAwIDEtLjUuNWgtMWEuNS41IDAgMCAxLS41LS41em0zIDBhLjUuNSAwIDAgMSAxIDB2N2EuNS41IDAgMCAxLTEgMHoiLz4KPC9zdmc+)*/
const Upc: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="upc"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"/>
</svg>
      )}
    />
  );

export default Upc;
