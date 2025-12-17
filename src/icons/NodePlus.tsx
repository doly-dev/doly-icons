import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![node-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMSA0YTQgNCAwIDEgMCAwIDggNCA0IDAgMCAwIDAtOE02LjAyNSA3LjVhNSA1IDAgMSAxIDAgMUg0QTEuNSAxLjUgMCAwIDEgMi41IDEwaC0xQTEuNSAxLjUgMCAwIDEgMCA4LjV2LTFBMS41IDEuNSAwIDAgMSAxLjUgNmgxQTEuNSAxLjUgMCAwIDEgNCA3LjV6TTExIDVhLjUuNSAwIDAgMSAuNS41djJoMmEuNS41IDAgMCAxIDAgMWgtMnYyYS41LjUgMCAwIDEtMSAwdi0yaC0yYS41LjUgMCAwIDEgMC0xaDJ2LTJBLjUuNSAwIDAgMSAxMSA1TTEuNSA3YS41LjUgMCAwIDAtLjUuNXYxYS41LjUgMCAwIDAgLjUuNWgxYS41LjUgMCAwIDAgLjUtLjV2LTFhLjUuNSAwIDAgMC0uNS0uNXoiLz4KPC9zdmc+)*/
const NodePlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="node-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5M1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg>
      )}
    />
  );

export default NodePlus;
