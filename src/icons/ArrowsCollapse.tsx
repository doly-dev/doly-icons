import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows-collapse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDhhLjUuNSAwIDAgMSAuNS0uNWgxM2EuNS41IDAgMCAxIDAgMWgtMTNBLjUuNSAwIDAgMSAxIDhtNy04YS41LjUgMCAwIDEgLjUuNXYzLjc5M2wxLjE0Ni0xLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC0yIDJhLjUuNSAwIDAgMS0uNzA4IDBsLTItMmEuNS41IDAgMSAxIC43MDgtLjcwOEw3LjUgNC4yOTNWLjVBLjUuNSAwIDAgMSA4IDBtLS41IDExLjcwNy0xLjE0NiAxLjE0N2EuNS41IDAgMCAxLS43MDgtLjcwOGwyLTJhLjUuNSAwIDAgMSAuNzA4IDBsMiAyYS41LjUgMCAwIDEtLjcwOC43MDhMOC41IDExLjcwN1YxNS41YS41LjUgMCAwIDEtMSAweiIvPgo8L3N2Zz4=)*/
const ArrowsCollapse: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows-collapse"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8m7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0m-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0z"/>
</svg>
      )}
    />
  );

export default ArrowsCollapse;
