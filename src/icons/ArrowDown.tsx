import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFhLjUuNSAwIDAgMSAuNS41djExLjc5M2wzLjE0Ni0zLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMCAxIDggMSIvPgo8L3N2Zz4=)*/
const ArrowDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
</svg>
      )}
    />
  );

export default ArrowDown;
