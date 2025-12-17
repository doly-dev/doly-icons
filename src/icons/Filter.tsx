import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAxMC41YS41LjUgMCAwIDEgLjUtLjVoM2EuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxLS41LS41bS0yLTNhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgMCAxaC03YS41LjUgMCAwIDEtLjUtLjVtLTItM2EuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgMCAxaC0xMWEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const Filter: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filter"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default Filter;
