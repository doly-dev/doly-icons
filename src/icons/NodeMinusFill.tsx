import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![node-minus-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA4YTUgNSAwIDAgMS05Ljk3NS41SDRBMS41IDEuNSAwIDAgMSAyLjUgMTBoLTFBMS41IDEuNSAwIDAgMSAwIDguNXYtMUExLjUgMS41IDAgMCAxIDEuNSA2aDFBMS41IDEuNSAwIDAgMSA0IDcuNWgyLjAyNUE1IDUgMCAwIDEgMTYgOG0tMiAwYS41LjUgMCAwIDAtLjUtLjVoLTVhLjUuNSAwIDAgMCAwIDFoNUEuNS41IDAgMCAwIDE0IDgiLz4KPC9zdmc+)*/
const NodeMinusFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="node-minus-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M16 8a5 5 0 0 1-9.975.5H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025A5 5 0 0 1 16 8m-2 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 14 8"/>
</svg>
      )}
    />
  );

export default NodeMinusFill;
